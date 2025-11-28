// src/components/ui/button.jsx

const baseClasses =
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-200 " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 " +
  "disabled:opacity-50 disabled:pointer-events-none ring-offset-background";

const variants = {
  default:
    "bg-gradient-to-r from-primary to-primary/85 text-primary-foreground shadow-md " +
    "hover:from-primary/95 hover:to-primary/80 hover:shadow-lg",
  outline:
    "border border-border/80 bg-background/60 text-foreground " +
    "hover:bg-muted hover:text-foreground/90",
};

const sizes = {
  default: "h-10 px-4 py-2",
  lg: "h-11 px-8",
  sm: "h-9 px-3",
};

export function Button({
  className = "",
  variant = "default",
  size = "default",
  ...props
}) {
  const variantClasses = variants[variant] ?? variants.default;
  const sizeClasses = sizes[size] ?? sizes.default;

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
      {...props}
    />
  );
}
