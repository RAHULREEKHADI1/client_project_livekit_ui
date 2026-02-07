import React from "react"
import { twMerge } from "tailwind-merge"

export interface JobCardProps {
  title: string
  compensation: string
  features: {
    icon: "money" | "check"
    text: string
  }[]
  onApply: () => void
  className?: string
}

const JobCard: React.FC<JobCardProps> = ({
  title,
  compensation,
  features,
  onApply,
  className,
}) => {
  const renderIcon = (iconType: "money" | "check") => {
    if (iconType === "money") {
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="flex-shrink-0"
        >
          <circle cx="12" cy="12" r="10" fill="#C4E538" />
          <path
            d="M12 6C9.79 6 8 7.79 8 10h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4zm-1 13h2v-2h-2v2z"
            fill="#000"
          />
        </svg>
      )
    }

    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="flex-shrink-0"
      >
        <circle cx="12" cy="12" r="10" fill="#C4E538" />
        <path
          d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
          fill="#000"
        />
      </svg>
    )
  }

  return (
    <div
      className={twMerge(
        "bg-white border border-gray-300 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow",
        className
      )}
    >
      <h3 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
        {title}
      </h3>

      <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            {renderIcon(feature.icon)}
            <span className="text-base sm:text-lg leading-relaxed">
              {feature.text}
            </span>
          </div>
        ))}
      </div>

      <button
        onClick={onApply}
        className="w-full bg-black text-white font-semibold text-lg py-3.5 sm:py-4 rounded-xl hover:bg-gray-800 transition-colors active:scale-98"
      >
        Apply
      </button>
    </div>
  )
}

export default JobCard