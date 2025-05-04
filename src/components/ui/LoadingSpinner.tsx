"use client";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "white";
}

export function LoadingSpinner({
  size = "md",
  variant = "primary",
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "h-4 w-4 border-2",
    md: "h-8 w-8 border-3",
    lg: "h-12 w-12 border-4",
  };

  const variantClasses = {
    primary: "border-indigo-500",
    secondary: "border-gray-500",
    white: "border-white",
  };

  return (
    <div
      className={`animate-spin rounded-full border-t-transparent ${sizeClasses[size]} ${variantClasses[variant]}`}
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}
