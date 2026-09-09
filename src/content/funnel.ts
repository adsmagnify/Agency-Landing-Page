export const educationClients = [
  { name: "Akbar Study Abroad", logo: "/clients/akbar-study-abroad.png" },
  { name: "Arun Sharma Academy", logo: "/clients/arunsharmaacademy.png" },
  { name: "Career Excellence League", logo: "/clients/careerexcellenceleague.png", onDark: true },
  { name: "ITM Institute of Design & Media", logo: "/clients/itm-idm.png" },
  { name: "ITM Institute", logo: "/clients/itm-institute.png" },
  { name: "Mirage Education", logo: "/clients/mirage-education.png" },
  { name: "Onboard Immigration", logo: "/clients/onboard-immigration.png" },
  { name: "SNDT Women's University", logo: "/clients/sndt.png" },
  { name: "Whistling Woods", logo: "/clients/whistling-woods.png" },
  { name: "Utkarsh Consultancy", logo: "/clients/utkarsh-consultancy.png" },
] as const;

export const stats = [
  { value: "₹50Cr+", label: "Ad spend managed" },
  { value: "300+", label: "Brands served" },
  { value: "15+", label: "Education institutes" },
  { value: "12–17x", label: "Avg return on ad spend*" },
] as const;

export const problems = [
  {
    num: "1",
    title: "Leads come in, admissions don't",
    body: "Your agency reports a low cost per lead and calls it a win. But a hundred leads that never enroll don't fill a batch. You're optimizing the wrong number.",
  },
  {
    num: "2",
    title: "Half the leads never answer",
    body: "Your counselors call, the phone rings out, the number's dead or the student's already gone cold. Most of what your team calls \"junk\" is really slow, mistimed outreach.",
  },
  {
    num: "3",
    title: "No system, just spend",
    body: "Boosting posts and paying a retainer isn't a system. When the algorithm shifts or the season ends, your enrollments fall off a cliff. That's a fragile pipeline, not a business.",
  },
  {
    num: "4",
    title: "Wrong targeting, wrong students",
    body: "Chasing anyone who might enroll puts you against every free YouTube channel and ₹999 course. Specific outcomes (a visa, a rank, a band score) attract students ready to pay.",
  },
  {
    num: "5",
    title: "Missing the deadline window",
    body: "Admissions run on intake and exam dates. Flat, untimed spend means your budget peaks after students have already decided, and the batch closes short.",
  },
] as const;

export const solutionSteps = [
  {
    title: "Deadline-timed campaigns, run on the One Campaign Method",
    body: "Built backward from your intake and exam dates so budget peaks exactly when students decide, using our proven Meta and Google framework.",
  },
  {
    title: "Creative that filters for serious students",
    body: "Ads built to sell the outcome (the admit, the rank, the score) and screen out free-content browsers, so you pay for students ready to invest.",
  },
  {
    title: "Instant response + counselor-accepted lead filtering",
    body: "Leads are reached in minutes, not days, and only count when your counselor marks them real. That single rule ends the junk-lead fight.",
  },
  {
    title: "Follow-up automation + Nirikshan reporting",
    body: "Automated nurture between \"interested\" and \"enrolled\", plus one dashboard that tracks admissions, not just form fills, so you see cost per enrollment.",
  },
] as const;

export const niches = [
  { key: "abroad", label: "Study Abroad Consultants" },
  { key: "language", label: "IELTS / PTE / TEF Institutes" },
  { key: "upsc", label: "UPSC / Civil Services" },
  { key: "jee", label: "JEE / NEET Coaching" },
  { key: "cat", label: "CAT / MBA Prep" },
  { key: "skill", label: "Skill & Upskilling" },
] as const;

export const qualifications = [
  {
    title: "Institutes stuck at a revenue ceiling",
    body: "You have real student outcomes but enrollments have plateaued. The ceiling isn't your teaching, it's the lack of a predictable acquisition system.",
  },
  {
    title: "New institutes with strong results, no system",
    body: "Students get admits and ranks, but you rely on referrals and word of mouth. You need a pipeline that doesn't depend on luck.",
  },
  {
    title: "Reach that doesn't convert",
    body: "Followers and views, but no reliable enrollments. Audience and paying students are two different things, and a funnel bridges the gap.",
  },
  {
    title: "Ready to scale ad spend",
    body: "You're prepared to invest in ads but won't pour money into leads that leak. You want every rupee tied to an admission.",
  },
] as const;

export const systemSteps = [
  {
    step: "01",
    title: "Enrollment funnel build",
    description:
      "We map your institute to one clear positioning (which exam, which outcome, which student) and build a funnel and landing page designed to convert parents and students, not just collect clicks.",
  },
  {
    step: "02",
    title: "Deadline-timed campaigns",
    description:
      "Meta and Google campaigns on our One Campaign Method, sequenced to your intake calendar so spend peaks when students decide and stays warm off-season.",
  },
  {
    step: "03",
    title: "Response & follow-up automation",
    description:
      "Instant lead response plus automated nurture so no serious student goes cold and your counselors only work leads that are ready to enroll.",
  },
  {
    step: "04",
    title: "Tracking to paid admission",
    description:
      "Nirikshan reporting ties every campaign to cost per enrollment, so you finally see which spend produced paying students and can scale what works.",
  },
] as const;

export const results = [
  {
    value: "14.2x",
    cap: "Return on ad spend",
    ctx: "₹4.2L spend · 60 days · Meta + Google",
    sub: "Study-abroad institute, Mumbai",
  },
  {
    value: "96%",
    cap: "Batch filled",
    ctx: "Fall intake · 45 days",
    sub: "Competitive-exam institute",
  },
  {
    value: "112",
    cap: "Paid admissions in 60 days",
    ctx: "₹3.8L spend · Meta + Google",
    sub: "Coaching institute",
  },
  {
    value: "38%",
    cap: "Lower cost per enrollment",
    ctx: "vs previous agency · 90 days",
    sub: "Language / skill institute",
  },
  {
    value: "3 min",
    cap: "Lead response time",
    ctx: "With instant-response automation",
    sub: "Down from 2–3 days",
  },
  {
    value: "1,400+",
    cap: "Students enrolled via our systems",
    ctx: "Last 12 months",
    sub: "Across 15+ institutes",
  },
] as const;

export const proofPlatforms = [
  "Meta Ads",
  "Google Ads",
  "GA4",
  "Nirikshan",
  "Shopify",
] as const;

export const founder = {
  name: "Vinay",
  photo: "/team/vinay.jpg",
  eyebrow: "Meet the founder",
  title: "Hey, I'm Vinay.",
  paragraphs: [
    "I run Adsmagnify, a performance marketing agency in Mumbai. Here's what makes us different from every agency you've dealt with: we're an agency first, and an academy second.",
    "We don't just run ads for education institutes. We run our own academy on the exact same system. So we know what it actually takes to fill a batch, because we do it every intake, for ourselves and for 15+ institutes across coaching and study-abroad.",
  ],
  points: [
    "₹50Cr+ in ad spend managed across 300+ brands",
    "Built on our own frameworks: One Campaign Method & Nirikshan reporting",
    "Education-only focus: study-abroad, coaching & exam-prep institutes",
  ],
} as const;

export const offerStack = [
  "Deadline-timed Meta + Google campaigns on our One Campaign Method",
  "Enrollment-focused ad creative that filters for serious students",
  "Landing page & funnel built to convert parents and students",
  "Instant lead-response so no student ever goes cold",
  "Counselor-accepted lead filtering (leads count only when real)",
  "Follow-up + off-season nurture automation",
  "Nirikshan dashboard: track admissions, not just form fills",
  "Weekly performance reviews with our team",
] as const;

export const programs = [
  {
    name: "Ad Management",
    for: "For institutes with an in-house team",
    desc: "We run your Meta + Google ads on our enrollment-first framework. You handle follow-up and closing.",
    featured: false,
    cta: "Book a Call",
    href: "#apply",
    items: [
      "Deadline-timed campaigns",
      "Enrollment-focused creative",
      "Nirikshan reporting",
    ],
  },
  {
    name: "Student Acquisition Funnel",
    for: "Done-for-you enrollment system",
    desc: "The full funnel: ads, instant response, follow-up automation, and dashboard. Backed by the Full-Batch Guarantee.",
    featured: true,
    cta: "Claim My Spot",
    href: "#apply",
    items: [
      "Everything in Ad Management",
      "Instant lead-response automation",
      "Follow-up + off-season nurture",
      "Full-Batch Guarantee",
    ],
  },
  {
    name: "Full DFY Growth",
    for: "For multi-branch institutes scaling fast",
    desc: "End-to-end managed growth across every intake and location, with dedicated strategy and priority support.",
    featured: false,
    cta: "Book a Call",
    href: "#apply",
    items: [
      "Everything in the Funnel",
      "Multi-branch / multi-intake scaling",
      "Dedicated strategist",
    ],
  },
] as const;

export const faqs = [
  {
    question: "How is this different from my current agency?",
    answer:
      "They report leads. We're accountable for enrollments, and we run our own academy on the same system. We only work with education institutes.",
  },
  {
    question: "I currently get leads from referrals and organic. Do I need paid ads?",
    answer:
      "Referrals are fragile, they dry up the moment a source goes quiet. Paid, deadline-timed ads give you a predictable pipeline you control, on top of your organic flow.",
  },
  {
    question: "My counselors say the leads are junk. How do you fix that?",
    answer:
      "Two ways: instant response so leads are reached before they cool, and counselor-accepted filtering so a lead only counts when your team marks it real. That aligns us to enrollments, not form fills.",
  },
  {
    question: "What if it doesn't work?",
    answer:
      "The Full-Batch Guarantee means you don't keep paying until we deliver 80–120+ enrollments. The risk is ours.",
  },
  {
    question: "Do you work with my type of institute?",
    answer:
      "If you're in study-abroad, competitive-exam, coaching, language, or skill training, yes. That's all we do.",
  },
  {
    question: "How much does it cost?",
    answer:
      "We'll walk through pricing on the call once we understand your intake size and goals. No obligation.",
  },
] as const;

export const instituteTestimonials = [
  {
    name: "Rohini Kamble",
    rating: 5,
    initials: "RK",
    avatarColor: "#6366f1",
    tag: "Growth & Lead Generation",
    description:
      "AdsMagnify revamped our entire marketing strategy. Their SEO expertise improved our search rankings, their graphic design team created eye-catching visuals, and their video editing enhanced our content. The combined efforts resulted in a noticeable increase in leads and sales.",
  },
  {
    name: "Sanika Shinde",
    rating: 5,
    initials: "S",
    avatarColor: "#ea580c",
    tag: "Lead Generation",
    description:
      "Working with AdsMagnify has been a game-changer for our lead generation efforts. In just three months, our sales team saw a 40% increase in qualified opportunities. Highly recommended for B2B businesses looking to scale!",
  },
  {
    name: "Joshua Mendonza",
    rating: 5,
    initials: "JM",
    avatarColor: "#0284c7",
    tag: "PPC Advertising",
    description:
      "Adsmagnify.com helped us with PPC advertising, and the results speak for themselves. Our ad spend is now better optimized, and we've seen a tangible return on investment.",
  },
  {
    name: "Kartik Maghade",
    rating: 5,
    initials: "K",
    avatarColor: "#7c3aed",
    tag: "Google Ads",
    description:
      "AdsMagnify delivered stellar results for our real estate projects. Their Google Ads campaigns brought high-quality leads at a competitive cost per lead. We've seen a 35% increase in property inquiries since partnering with them!",
  },
  {
    name: "Rahul Divekar",
    rating: 5,
    initials: "RD",
    avatarColor: "#004aad",
    tag: "Full-Funnel",
    description:
      "AdsMagnify handled everything for us—performance marketing, SEO, graphic design, and video editing. The results were incredible! We saw increased leads, higher search rankings, and a more engaging online presence.",
  },
  {
    name: "Poonam Jadhav",
    rating: 5,
    initials: "P",
    avatarColor: "#16a34a",
    tag: "Campaign Growth",
    description:
      "We partnered with AdsMagnify to revamp our marketing campaigns, and the results have been phenomenal. We've seen an increase in leads and overall brand recognition. They're a true asset!",
  },
] as const;

export const REVIEWS_PER_SCREEN = 3;
export const REVIEW_SCREEN_MS = 4000;

export function chunkTestimonials<T>(items: T[], size: number): T[][] {
  const screens: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    screens.push(items.slice(i, i + size));
  }
  return screens;
}
