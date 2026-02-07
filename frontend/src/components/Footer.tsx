import React from "react"

export interface FooterLink {
  label: string
  href?: string
}

export interface FooterColumn {
  title: string
  links: FooterLink[]
}

export interface FooterProps {
  brand: React.ReactNode
  socialIcons: React.ReactNode[]
  columns: FooterColumn[]
  bottomLeftLinks: FooterLink[]
  copyrightText: string
  backToTopLabel: string
  onBackToTop?: () => void
}

const Footer: React.FC<FooterProps> = ({
  brand,
  socialIcons,
  columns,
  bottomLeftLinks,
  copyrightText,
  backToTopLabel,
  onBackToTop,
}) => {
  return (
    <footer className="w-full bg-white rounded-2xl sm:rounded-3xl border p-6 sm:p-8 lg:p-10">
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 sm:gap-10 lg:gap-12">
        <div>
          <div className="mb-4 sm:mb-6">{brand}</div>

          <div className="flex gap-3 sm:gap-4">
            {socialIcons.map((icon, i) => (
              <span key={i} className="cursor-pointer hover:opacity-70 transition-opacity">{icon}</span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {columns.map((col, index) => (
            <div key={index}>
              <p className="text-xs sm:text-sm font-semibold tracking-wide mb-3 sm:mb-4 uppercase">
                {col.title}
              </p>

              <ul className="space-y-2 sm:space-y-3">
                {col.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-black text-xs sm:text-sm transition-colors block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="my-6 sm:my-8 lg:my-10 h-px bg-gray-200" />

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
        <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-600 w-full sm:w-auto">
          <span className="whitespace-nowrap">{copyrightText}</span>

          <div className="flex flex-wrap items-center gap-3 sm:gap-6">
            {bottomLeftLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="hover:text-black transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <button
          onClick={onBackToTop}
          className="px-4 sm:px-5 py-2 rounded-full bg-gray-100 text-xs sm:text-sm hover:bg-gray-200 transition-colors whitespace-nowrap shrink-0 w-full sm:w-auto text-center"
        >
          {backToTopLabel}
        </button>
      </div>
    </footer>
  )
}

export default Footer