import React from "react"

export interface TestimonialCardProps {
  quote: string
  name: string
  role: string
  avatar: string
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  role,
  avatar,
}) => {
  return (
    <div
      className="
        bg-white
        rounded-xl
        p-8
        shadow-[0_0_0_1px_rgba(0,0,0,0.05)]
        flex
        flex-col
        justify-between
        min-h-[220px]
      "
    >
      {/* Quote */}
      <p className="text-gray-800 text-lg leading-relaxed">
        “{quote}”
      </p>

      {/* Footer */}
      <div className="flex items-center gap-4 mt-8">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />

        <div>
          <p className="font-semibold text-gray-900">{name}</p>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
