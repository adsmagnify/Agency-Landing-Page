export type CaseBlock =
  | { type: "kicker"; text: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "arrow" }
  | { type: "equals" }
  | { type: "funnel"; steps: string[] }
  | { type: "stats"; items: { value: string; label: string }[] }
  | { type: "table"; headers: string[]; rows: string[][] };

const SMALL_WORDS = new Set([
  "a",
  "an",
  "the",
  "of",
  "vs",
  "and",
  "to",
  "in",
  "for",
  "from",
  "per",
  "on",
  "or",
  "at",
  "by",
  "into",
  "with",
  "as",
]);

const KICKERS = new Set([
  "CASE STUDY",
  "THE RESULTS",
  "THE REAL WIN",
  "IN CONCLUSION",
  "EXECUTIVE SUMMARY",
  "THE FINAL RESULT",
  "THE BIGGER STORY",
  "THE BIGGEST LESSON",
  "THE BEFORE AND AFTER",
  "THE NUMBERS THAT MATTER",
  "THE NUMBERS AT A GLANCE",
  "THE PERFORMANCE DASHBOARD",
]);

const TABLE_HEADERS: string[][] = [
  ["Campaign Type", "Result", "Investment"],
  ["Campaign", "Leads", "Spend", "Cost Per Lead"],
  ["Metric", "July", "August", "September*", "Overall"],
  ["Year", "Registrations", "Course Value", "Annual Tuition Value"],
  ["Business Metric", "Result"],
  ["Metric", "Result"],
];

function normalize(text: string) {
  return text.replace(/:$/, "").replace(/\s+/g, " ").trim();
}

function isAllCaps(text: string) {
  const letters = text.replace(/[^A-Za-z]/g, "");
  return letters.length >= 3 && letters === letters.toUpperCase();
}

function wordCount(text: string) {
  return normalize(text).split(/\s+/).filter(Boolean).length;
}

function isTitleCase(text: string) {
  const words = normalize(text).split(/\s+/);
  return words.every((word, index) => {
    const clean = word.replace(/[^A-Za-z]/g, "");
    if (!clean) return true;
    if (SMALL_WORDS.has(clean.toLowerCase()) && index > 0) return true;
    return clean[0] === clean[0].toUpperCase();
  });
}

function isStatValue(text: string) {
  const t = normalize(text);
  if (!t || t.length > 42) return false;
  if (t === "=" || t === "↓" || t === "→") return false;
  return (
    /^[₹$0-9]/.test(t) &&
    /^[₹$CA0-9,.\-–—X%x+/() ]+$/i.test(t) &&
    /[0-9]/.test(t)
  );
}

function isProse(text: string) {
  const t = normalize(text);
  if (t.length > 92) return true;
  if (/[.!?]/.test(t) && t.length > 42) return true;
  return /^(We |The |This |Our |Now |For a |For every |In simple|In other|In practical|So the |So instead|During |And that|And the |Rather |Instead |When |How a |How do |How many|Adsmagnify |Jeevan |Mirage |Whistling |People |They |Don't |Many |Cheap |More |Better |That |Generating |A traditional|A campaign|A student|A course|A high|A major|It was|It is|These |Those |Over the|Before the|After the|At a |At 70|At 80|At 40|At 45|At 50)/i.test(
    t
  );
}

function isHeading(text: string) {
  const t = normalize(text);
  if (t.length < 3 || t.length > 78) return false;
  if (/[.!?]$/.test(text.trim()) && !text.trim().endsWith(":")) return false;
  if (/,$/.test(t) || /[÷=]/.test(t) || t.includes("→")) return false;
  if (/^\d/.test(t) && !/^\d{2}\.\s/.test(t)) return false;
  if (/\d{4}/.test(t) && !/^\d{2}\.\s/.test(t)) return false;
  if (/^\d{2}\.\s/.test(t)) return true;
  if (t === "↓" || t === "→" || t === "=") return false;
  const words = t.split(/\s+/);
  if (words.length > 12) return false;
  if (isStatValue(t)) return false;
  if (isAllCaps(t)) return true;
  if (words.length === 1) {
    return ["Important", "Therefore", "Result", "Platform", "Before", "After"].includes(t);
  }
  return isTitleCase(t) && t.length <= 68;
}

function isMetricLabel(text: string) {
  if (/:$/.test(text.trim())) return false;
  const t = normalize(text);
  if (!t) return false;
  if (["Therefore", "Important", "Against", "Result", "Before", "After", "Platform"].includes(t)) {
    return false;
  }
  if (isProse(t)) return false;
  if (t.length > 58) return false;
  if (/[.!?]/.test(t)) return false;
  if (wordCount(t) > 8) return false;
  return isTitleCase(t) || isAllCaps(t);
}

function cleanupPdf(raw: string) {
  return raw
    .replace(/\u200b/g, "")
    .replace(/\u00a0/g, " ")
    .replace(/6Ad Spend/g, "Ad Spend")
    .replace(/Investmen\s*\n\s*t\b/g, "Investment")
    .replace(/\bLead\s*\n\s*s\b/g, "Leads")
    .replace(/Registration\s*\n\s*s\b/g, "Registrations")
    .replace(/Dedicated Academy\s*\n\s*Leads/g, "Dedicated Academy Leads")
    .replace(/Academy Remarketing \/\s*\n\s*Messaging/g, "Academy Remarketing / Messaging")
    .replace(/Lead Form\s*\n\s*Submissions/g, "Lead Form Submissions")
    .replace(/Advertising Cost Per\s*\n\s*Student/g, "Advertising Cost Per Student")
    .replace(/Cost Per\s*\n\s*Lead/g, "Cost Per Lead")
    .replace(/(\d\.)\s*\n\s*(\d)\b/g, "$1$2")
    .replace(/●\s*/g, "• ");
}

function unwrapPages(pages: string[]) {
  const raw = cleanupPdf(pages.join("\n\n"));
  const lines = raw.split("\n").map((line) => line.replace(/[ \t]+$/g, ""));
  const out: string[] = [];
  let buffer = "";

  const flush = () => {
    if (buffer) {
      out.push(buffer.trim().replace(/\s+/g, " "));
      buffer = "";
    }
  };

  const endsHard = (text: string) =>
    /[.!?:]$/.test(text) ||
    text === "↓" ||
    text === "→" ||
    text === "=" ||
    text.startsWith("• ") ||
    /^\d{2}\.\s/.test(text);

  for (const line of lines) {
    const text = line.trim().replace(/\s+/g, " ");
    if (!text) {
      flush();
      continue;
    }
    if (!buffer) {
      buffer = text;
      continue;
    }

    if (
      text.length === 1 &&
      /[a-z]/i.test(text) &&
      /[a-z]$/i.test(buffer) &&
      buffer.length >= 4 &&
      !endsHard(buffer)
    ) {
      buffer += text;
      continue;
    }
    if (/\.\d+$/.test(buffer) && /^\d{1,2}$/.test(text)) {
      buffer += text;
      continue;
    }
    if (normalize(buffer) === "Lead Form" && /^Submissions$/i.test(text)) {
      buffer = `${buffer} ${text}`;
      continue;
    }
    if (buffer.endsWith(",") && !["↓", "→", "="].includes(text)) {
      buffer = `${buffer} ${text}`;
      continue;
    }
    if (
      isStatValue(buffer) &&
      !/[₹$]/.test(buffer) &&
      /^(Engagements|Conversations)$/i.test(text)
    ) {
      buffer = `${buffer} ${text}`;
      continue;
    }
    if (/\b(January|February|March|April|May|June|July|August|September|October|November|December)\b/i.test(buffer) && /^\d{4}$/.test(text)) {
      buffer = `${buffer} ${text}`;
      continue;
    }
    if (
      isAllCaps(buffer) &&
      isAllCaps(text) &&
      !endsHard(buffer) &&
      wordCount(text) <= 3 &&
      `${buffer} ${text}`.length < 56 &&
      !isStatValue(buffer) &&
      !isStatValue(text)
    ) {
      buffer = `${buffer} ${text}`;
      continue;
    }

    const joinBrokenHeading =
      !endsHard(buffer) &&
      !["↓", "→", "="].includes(text) &&
      buffer.endsWith("/");

    const join =
      joinBrokenHeading ||
      (!endsHard(buffer) &&
        !["↓", "→", "="].includes(text) &&
        !text.startsWith("• ") &&
        !/^\d{2}\.\s/.test(text) &&
        (buffer.endsWith("-") ||
          buffer.endsWith("/") ||
          (/^[a-z(]/.test(text) && !isStatValue(buffer) && !buffer.includes("→") && !buffer.includes("↓")) ||
          /^(and|or|to|of|the|in|from|with|that|which|was|were|for|a|an|into|on|at|as|by)\b/.test(
            text
          ) ||
          /\b(by|and|of|the|to|for|with)$/i.test(buffer) ||
          (!isHeading(buffer) &&
            !isHeading(text) &&
            !isAllCaps(buffer) &&
            !isAllCaps(text) &&
            buffer.length > 42 &&
            !isStatValue(buffer) &&
            !isStatValue(text) &&
            !isProse(text))));

    if (join) {
      buffer = buffer.endsWith("-") ? buffer.slice(0, -1) + text : `${buffer} ${text}`;
    } else {
      flush();
      buffer = text;
    }
  }
  flush();
  return out;
}

function headersMatch(lines: string[], index: number, headers: string[]) {
  return headers.every((header, offset) => normalize(lines[index + offset] ?? "") === header);
}

function parseTable(
  lines: string[],
  index: number
): { block: Extract<CaseBlock, { type: "table" }>; next: number } | null {
  const headers = TABLE_HEADERS.find((item) => headersMatch(lines, index, item));
  if (!headers) return null;

  const cols = headers.length;
  const rows: string[][] = [];
  let cursor = index + cols;

  while (cursor < lines.length) {
    const first = lines[cursor];
    if (!first || first === "↓" || first === "→" || first.startsWith("• ")) break;
    if (isProse(first)) break;
    if (KICKERS.has(normalize(first))) break;
    if (/^\d{2}\.\s/.test(first)) break;

    if (cols === 5 && !["Spend", "Leads", "CPL", "Impressions"].includes(first)) break;
    if (normalize(first) === "Important" || first.startsWith("*")) break;

    if (cols === 3 && /total/i.test(first) && isStatValue(lines[cursor + 1] ?? "") && !isStatValue(lines[cursor + 2] ?? "")) {
      const row = ["", "", ""];
      row[0] = first;
      row[2] = lines[cursor + 1];
      rows.push(row);
      cursor += 2;
      break;
    }

    if (cols === 2) {
      const value = lines[cursor + 1];
      if (!value || (isProse(value) && value.length > 70)) break;
      if (isStatValue(first) && !isStatValue(value) && rows.length > 2) break;
      if (isHeading(first) && isProse(value)) break;
      if (isAllCaps(first) && wordCount(first) >= 3 && isProse(value)) break;
      rows.push([first, value]);
      cursor += 2;
      continue;
    }

    const slice = lines.slice(cursor, cursor + cols);
    if (slice.length < cols) {
      if (slice.length === 2 && isStatValue(slice[1])) {
        const row = Array.from({ length: cols }, () => "");
        row[0] = slice[0];
        row[cols - 1] = slice[1];
        rows.push(row);
        cursor += 2;
      }
      break;
    }
    if (slice.some((cell) => isProse(cell) && cell.length > 70)) break;
    rows.push(slice);
    cursor += cols;
  }

  if (!rows.length) return null;
  return { block: { type: "table", headers, rows }, next: cursor };
}

function isArrowLine(text: string | undefined) {
  if (!text) return false;
  return text === "→" || text === "↓" || text.startsWith("→") || text.startsWith("↓");
}

function collectFunnel(lines: string[], index: number) {
  if (lines[index] === "↓" || lines[index] === "→") return null;

  const steps: string[] = [];
  let cursor = index;
  let sawArrow = false;

  while (cursor < lines.length) {
    const line = lines[cursor];
    if (line === "→" || line === "↓") {
      sawArrow = true;
      cursor += 1;
      continue;
    }
    if (line.includes("→") && !isProse(line) && line.length <= 90) {
      sawArrow = true;
      steps.push(
        ...line
          .split("→")
          .map((part) => part.trim())
          .filter(Boolean)
      );
      cursor += 1;
      continue;
    }
    const next = lines[cursor + 1];
    const shortLabel =
      !isProse(line) &&
      !/[.!?]$/.test(line) &&
      !/^\d{2}\.\s/.test(line) &&
      !line.startsWith("• ") &&
      wordCount(line) <= 8 &&
      line.length < 52 &&
      !isStatValue(line);
    if (shortLabel && isArrowLine(next)) {
      steps.push(line);
      cursor += 1;
      continue;
    }
    if (shortLabel && sawArrow && steps.length && !/:$/.test(line)) {
      steps.push(line);
      cursor += 1;
      break;
    }
    break;
  }

  if (sawArrow && steps.length >= 2) {
    return { steps, next: cursor };
  }
  return null;
}

export function parseCaseStudy(pages: string[]): CaseBlock[] {
  const lines = unwrapPages(pages);
  const blocks: CaseBlock[] = [];
  let list: string[] = [];
  let stats: { value: string; label: string }[] = [];

  const flushList = () => {
    if (list.length) {
      blocks.push({ type: "list", items: list });
      list = [];
    }
  };
  const flushStats = () => {
    if (stats.length) {
      blocks.push({ type: "stats", items: stats });
      stats = [];
    }
  };

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    const next = lines[i + 1];

    const table = parseTable(lines, i);
    if (table) {
      flushList();
      flushStats();
      blocks.push(table.block);
      i = table.next - 1;
      continue;
    }

    const funnel = collectFunnel(lines, i);
    if (funnel) {
      flushList();
      flushStats();
      blocks.push({ type: "funnel", steps: funnel.steps });
      i = funnel.next - 1;
      continue;
    }

    if (line === "↓") {
      flushList();
      flushStats();
      blocks.push({ type: "arrow" });
      continue;
    }

    if (line === "=") {
      flushList();
      flushStats();
      blocks.push({ type: "equals" });
      continue;
    }

    if (line.startsWith("• ")) {
      flushStats();
      list.push(line.slice(2));
      continue;
    }
    flushList();

    if (isStatValue(line) && next && isMetricLabel(next) && !isStatValue(lines[i + 2] ?? "")) {
      stats.push({ value: line, label: next });
      i += 1;
      continue;
    }
    if (
      isMetricLabel(line) &&
      next &&
      isStatValue(next) &&
      !isProse(line) &&
      !isStatValue(lines[i + 2] ?? "")
    ) {
      stats.push({ value: next, label: line });
      i += 1;
      continue;
    }
    flushStats();

    if (/^\d{2}\.\s/.test(line)) {
      blocks.push({ type: "heading", level: 3, text: line });
      continue;
    }

    if (isHeading(line)) {
      const key = normalize(line).toUpperCase();
      if (KICKERS.has(key)) {
        blocks.push({ type: "kicker", text: line });
      } else {
        blocks.push({ type: "heading", level: 2, text: normalize(line) });
      }
      continue;
    }

    blocks.push({ type: "paragraph", text: line });
  }

  flushList();
  flushStats();
  return blocks;
}
