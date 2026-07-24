const variants = {
  primary:
    "bg-[var(--color-accent)] text-[#0a0d12] hover:bg-[#ffb84d] border border-transparent",
  outline:
    "border border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]",
  ghost:
    "text-[var(--color-text-muted)] hover:text-[var(--color-accent)]",
};

export default function Button({
  as: Component = "a",
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  return (
    <Component
      className={`inline-flex items-center gap-2 rounded-md px-5 py-2.5 font-mono text-sm font-medium transition-colors duration-200 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
