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
  primary: "bg-[#FF6D4C] text-black transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 active:shadow-none active:translate-x-1 active:translate-y-1",
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
