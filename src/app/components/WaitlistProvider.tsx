"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type WaitlistState = {
  submitted: boolean;
  setSubmitted: (v: boolean) => void;
};

const WaitlistContext = createContext<WaitlistState>({
  submitted: false,
  setSubmitted: () => {},
});

export function useWaitlist() {
  return useContext(WaitlistContext);
}

export default function WaitlistProvider({ children }: { children: ReactNode }) {
  const [submitted, setSubmitted] = useState(false);
  return (
    <WaitlistContext.Provider value={{ submitted, setSubmitted }}>
      {children}
    </WaitlistContext.Provider>
  );
}
