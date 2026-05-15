// Centralized office hours — single source of truth for the entire site.
// Update here to change hours sitewide.

export type DayHours = {
  key: "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";
  open: string | null; // "HH:MM" 24h
  close: string | null;
  display: string; // "9AM–6PM" or "Closed"
};

export const OFFICE_HOURS: DayHours[] = [
  { key: "mon", open: "09:00", close: "18:00", display: "9AM–6PM" },
  { key: "tue", open: "09:00", close: "18:00", display: "9AM–6PM" },
  { key: "wed", open: "09:00", close: "17:00", display: "9AM–5PM" },
  { key: "thu", open: "09:00", close: "17:00", display: "9AM–5PM" },
  { key: "fri", open: "09:00", close: "18:00", display: "9AM–6PM" },
  { key: "sat", open: "09:00", close: "17:00", display: "9AM–5PM" },
  { key: "sun", open: null, close: null, display: "Closed" },
];

// Schema.org openingHours format
export const OPENING_HOURS_SPEC = [
  { dayOfWeek: "Monday", opens: "09:00", closes: "18:00" },
  { dayOfWeek: "Tuesday", opens: "09:00", closes: "18:00" },
  { dayOfWeek: "Wednesday", opens: "09:00", closes: "17:00" },
  { dayOfWeek: "Thursday", opens: "09:00", closes: "17:00" },
  { dayOfWeek: "Friday", opens: "09:00", closes: "18:00" },
  { dayOfWeek: "Saturday", opens: "09:00", closes: "17:00" },
];

export const HOLIDAY_NOTE = "Holiday hours may vary.";

// Returns true if the clinic is currently open (local time, America/Vancouver assumed = browser local).
export function isOpenNow(now: Date = new Date()): boolean {
  const day = now.getDay(); // 0 Sun .. 6 Sat
  const idx = day === 0 ? 6 : day - 1; // map to OFFICE_HOURS index (Mon=0..Sun=6)
  const d = OFFICE_HOURS[idx];
  if (!d.open || !d.close) return false;
  const mins = now.getHours() * 60 + now.getMinutes();
  const [oh, om] = d.open.split(":").map(Number);
  const [ch, cm] = d.close.split(":").map(Number);
  return mins >= oh * 60 + om && mins < ch * 60 + cm;
}
