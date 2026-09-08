"use client";

import { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { niches } from "@/content/funnel";

type Status = "idle" | "submitting" | "success" | "error";

const budgetOptions = [
  "Under ₹50k/mo",
  "₹50k – ₹1.5L/mo",
  "₹1.5L – ₹5L/mo",
  "₹5L+/mo",
];

export function ApplyForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error ?? "Something went wrong. Please try again.");
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 px-2 py-8 text-center sm:py-10">
        <CheckCircle2 size={40} className="text-brand-500" />
        <h3 className="text-xl font-semibold text-ink-950">
          Application received
        </h3>
        <p className="text-sm text-mist-400">
          A member of our team will review your institute and get back within
          one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" required placeholder="Your name" />
        <Field
          label="Work email"
          name="email"
          type="email"
          required
          placeholder="you@institute.com"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Institute name"
          name="company"
          required
          placeholder="Your institute"
        />
        <Field
          label="Phone"
          name="phone"
          type="tel"
          placeholder="+91 9XXXXXXXXX"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-mist-300" htmlFor="instituteType">
            Institute type
          </label>
          <select
            id="instituteType"
            name="instituteType"
            className="field-input cursor-pointer"
            defaultValue=""
          >
            <option value="" disabled>
              Select a type
            </option>
            {niches.map((option) => (
              <option key={option.key} value={option.label}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-mist-300" htmlFor="budget">
            Monthly ad budget
          </label>
          <select
            id="budget"
            name="budget"
            className="field-input cursor-pointer"
            defaultValue=""
          >
            <option value="" disabled>
              Select a range
            </option>
            {budgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-mist-300" htmlFor="message">
          Tell us about your next intake
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Intake dates, batch size, where admissions are leaking..."
          className="field-input min-h-28 resize-none"
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertCircle size={16} />
          {errorMessage}
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        className="w-full justify-center sm:w-fit"
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending...
          </>
        ) : (
          "Book My Free Strategy Call"
        )}
      </Button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-mist-300" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="field-input"
      />
    </div>
  );
}
