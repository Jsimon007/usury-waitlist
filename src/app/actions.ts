"use server";

import { supabase } from "@/lib/supabase";

export async function joinWaitlist(formData: FormData) {
  const phone = formData.get("phone") as string;
  const referral_source = (formData.get("referral_source") as string) || null;

  if (!phone) {
    return { error: "Phone number is required." };
  }

  const { error: dbError } = await supabase
    .from("waitlist")
    .insert({ phone, referral_source });

  if (dbError) {
    if (dbError.code === "23505") {
      return { error: "You're already on the waitlist." };
    }
    console.error("Supabase error:", dbError);
    return { error: "Something went wrong. Try again." };
  }

  return { success: true };
}
