import React from "react"
import { twMerge } from "tailwind-merge"

export interface ButtonProps {
  label: string
  className?: string
  onClick?: () => void
  intent?: "primary" | "secondary" | "tertiary"
}

const intentClasses: Record<
  NonNullable<ButtonProps["intent"]>,
  string
> = {
  primary: "bg-[#FF6D4C] text-black ",
  secondary: "bg-black text-white hover:bg-transparent hover:text-black hover:border hover:border-black",
  tertiary: "bg-[#BEFD71] text-black font-semibold",
}

const Button: React.FC<ButtonProps> = ({
  label,
  className,
  onClick,
  intent = "primary",
}) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        "px-6 py-3 rounded-lg text-xl min-w-52",
        intentClasses[intent],
        className
      )}
    >
      {label}
    </button>
  )
}

export default Button
