"use client";

const items = [
  { red: "$1.28 TRILLION", text: "in US credit card debt" },
  { red: "24.8%", text: "average credit card APR" },
  { red: "$120 BILLION", text: "in interest charged annually" },
  { red: "46%", text: "of cardholders carry revolving balances" },
  { red: "27 YEARS", text: "to pay off $5K at minimums" },
  { red: "$7,800", text: "total cost of a $5,000 balance" },
];

export default function Ticker() {
  return (
    <div className="ticker-wrap">
      <div className="ticker">
        {/* Duplicate for seamless loop */}
        {[...items, ...items].map((item, i) => (
          <div className="ticker-item" key={i}>
            <span className="red">{item.red}</span> {item.text}
          </div>
        ))}
      </div>
    </div>
  );
}
