export default function RevealOnScroll({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`reveal ${className}`}>
      {children}
    </div>
  );
}
