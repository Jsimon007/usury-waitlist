"use client";

import { useState, useTransition, type FormEvent } from "react";
import { joinWaitlist } from "../actions";

export default function WaitlistForm({ id }: { id: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();

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
        <strong>You&apos;re in.</strong> We&apos;ll notify you when Usury
        launches. Check your email — and check your credit card&apos;s APR. The
        number might surprise you.
      </div>
    );
  }

  return (
    <div>
      <form className="hero-form" id={id} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          disabled={isPending}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          disabled={isPending}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone (optional)"
          disabled={isPending}
          style={{ maxWidth: 180 }}
        />
        <input type="hidden" name="referral_source" value={typeof window !== "undefined" ? new URLSearchParams(window.location.search).get("ref") ?? "" : ""} />
        <button type="submit" disabled={isPending}>
          {isPending ? "Joining..." : "Join the fight"}
        </button>
      </form>
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
