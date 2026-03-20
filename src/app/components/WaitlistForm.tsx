"use client";

import { useState, useEffect, useTransition, type FormEvent } from "react";
import { joinWaitlist } from "../actions";
import { useWaitlist } from "./WaitlistProvider";

export default function WaitlistForm({ id }: { id: string }) {
  const { submitted, setSubmitted } = useWaitlist();
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();
  const [referralSource, setReferralSource] = useState("");

  useEffect(() => {
    const ref = new URLSearchParams(window.location.search).get("ref") ?? "";
    setReferralSource(ref);
  }, []);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      const result = await joinWaitlist(formData);
      if (result.error) {
        setError(result.error);
      } else {
        setSubmitted(true);
      }
    });
  }

  if (submitted) {
    return (
      <div className="form-success show" id={`${id}-success`}>
        <strong>You&apos;re in.</strong> We&apos;ll text you when Usury
        launches. In the meantime — check your credit card&apos;s APR. The
        number might surprise you.
      </div>
    );
  }

  return (
    <div>
      <form className="hero-form" id={id} onSubmit={handleSubmit}>
        <div className="form-pill">
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
            disabled={isPending}
          />
          <button type="submit" disabled={isPending}>
            {isPending ? "Joining..." : "Fight back"}
          </button>
        </div>
        <input type="hidden" name="referral_source" value={referralSource} />
      </form>
      <p className="tcpa-consent">
        By entering your phone number, you agree to receive text messages from
        Usury about product updates and launch notifications. Message &amp; data
        rates may apply. Message frequency varies. Reply STOP to unsubscribe.{" "}
        <a href="#">Privacy Policy</a> &amp; <a href="#">Terms</a>.
      </p>
      {error && (
        <p
          style={{
            color: "var(--red)",
            fontSize: 14,
            marginTop: 12,
          }}
        >
          {error}
        </p>
      )}
    </div>
  );
}
