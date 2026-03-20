"use server";

import { supabase } from "@/lib/supabase";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function joinWaitlist(formData: FormData) {
  const name = (formData.get("name") as string) || null;
  const email = formData.get("email") as string;
  const phone = (formData.get("phone") as string) || null;
  const referral_source = (formData.get("referral_source") as string) || null;

  if (!email) {
    return { error: "Email is required." };
  }

  // Save to Supabase
  const { error: dbError } = await supabase
    .from("waitlist")
    .insert({ name, email, phone, referral_source });

  if (dbError) {
    if (dbError.code === "23505") {
      return { error: "You're already on the waitlist." };
    }
    console.error("Supabase error:", dbError);
    return { error: "Something went wrong. Try again." };
  }

  // Send welcome email via Resend
  try {
    await resend.emails.send({
      from: "Usury <onboarding@resend.dev>",
      to: email,
      subject: "You're on the Usury waitlist",
      html: `
        <div style="font-family: -apple-system, sans-serif; max-width: 500px; margin: 0 auto; color: #F2F0ED; background: #0A0A0A; padding: 48px 32px; border-radius: 8px;">
          <h1 style="color: #C0392B; font-size: 28px; margin-bottom: 24px;">You're in.</h1>
          <p style="color: #888; font-size: 16px; line-height: 1.7;">
            We'll notify you when Usury launches. Until then — go check your credit card's APR. The number might surprise you.
          </p>
          <p style="color: #888; font-size: 16px; line-height: 1.7; margin-top: 24px;">
            Your credit card's APR was legal in <strong style="color: #F2F0ED;">zero countries</strong> before 1978. That's about to matter.
          </p>
          <hr style="border: none; border-top: 1px solid #222; margin: 32px 0;" />
          <p style="color: #444; font-size: 12px;">
            Usury — Exposing predatory lending since 2026.
          </p>
        </div>
      `,
    });
  } catch (emailError) {
    console.error("Resend error:", emailError);
    // Don't fail the signup if email fails — they're already in the DB
  }

  return { success: true };
}
