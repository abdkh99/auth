"use client";

import { forwardRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      label,
      error,
      type,
      value,
      defaultValue,
      onFocus,
      onBlur,
      onChange,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState(value ?? defaultValue ?? "");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
      if (onChange) onChange(e);
    };

    const hasValue =
      (typeof value === "string" && value.length > 0) ||
      (typeof inputValue === "string" && inputValue.length > 0);
    const showFloating = isFocused || hasValue;

    return (
      <div className="relative pt-4">
        <div className="relative">
          <input
            type={type}
            className={cn(
              "w-full px-4 py-3 rounded-lg border",
              "border-purple-400 dark:border-purple-500",
              "bg-white dark:bg-gray-800",
              "text-gray-900 dark:text-white",
              "placeholder-transparent",
              "focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-purple-400",
              "focus:border-blue-500 dark:focus:border-purple-400",
              "transition-all duration-200",
              "hover:border-blue-400 dark:hover:border-purple-300",
              error && "border-red-500 dark:border-red-500",
              className
            )}
            ref={ref}
            value={value}
            defaultValue={defaultValue}
            onFocus={(e) => {
              setIsFocused(true);
              if (onFocus) onFocus(e);
            }}
            onBlur={(e) => {
              setIsFocused(false);
              if (onBlur) onBlur(e);
            }}
            onChange={handleChange}
            {...props}
          />
          {label && (
            <label
              className={cn(
                "absolute left-4 px-1 pointer-events-none transition-all duration-200",
                showFloating
                  ? "-top-3 bg-white dark:bg-gray-800 text-xs text-blue-600 dark:text-purple-300"
                  : "top-1/2 -translate-y-1/2 text-base text-gray-500 dark:text-gray-400 bg-transparent"
              )}
              style={{
                zIndex: 2,
                paddingLeft: "0.25rem",
                paddingRight: "0.25rem",
              }}
            >
              {label}
            </label>
          )}
          {type === "password" && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <svg
                className="h-5 w-5 text-gray-400 dark:text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
          )}
        </div>
        {error && (
          <p className="text-sm text-red-500 dark:text-red-400 mt-1">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
