import { twMerge } from "tailwind-merge"
import { useState } from "react"

export interface NavbarProps {
    imageLogo?: {
        src: string,
        alt?: string,
        onClick?: () => void,
        className?: string
    }

    navLinkItems?: {
        label: string,
        href?: string,
        onClick?: () => void,
    }[]

    modeToggle?: {
        rightLabel: string,
        leftLabel: string,
        value: boolean,
        onChange: (value: boolean) => void
    }
    actionButtons?: {
        label: string
        onClick: () => void
        variant?: "primary" | "secondary"
    }[]
}

const Navbar: React.FC<NavbarProps> = ({
    imageLogo,
    navLinkItems,
    modeToggle,
    actionButtons,
}) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="bg-[#FCFCF7] rounded-2xl sm:rounded-3xl lg:rounded-4xl border shadow-md">
            {/* Main Navbar */}
            <div className="flex items-center justify-between gap-3 sm:gap-4 px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5">
                {/* Logo */}
                {imageLogo && (
                    <img
                        src={imageLogo.src}
                        alt={imageLogo.alt}
                        onClick={imageLogo.onClick}
                        className={twMerge(`cursor-pointer h-5 sm:h-6 ${imageLogo.className}`)}
                    />
                )}

                {/* Hamburger Menu - Mobile Only */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden flex flex-col gap-1.5 p-1"
                    aria-label="Toggle menu"
                >
                    <span className="w-7 h-0.5 bg-black rounded transition-all"></span>
                    <span className="w-7 h-0.5 bg-black rounded transition-all"></span>
                    <span className="w-7 h-0.5 bg-black rounded transition-all"></span>
                </button>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex items-center gap-3 lg:gap-4">
                    {navLinkItems?.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            onClick={item.onClick}
                            className="text-sm lg:text-base font-semibold hover:text-gray-600 transition-colors"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                {/* Mode Toggle */}
                {modeToggle && (
                    <div
                        role="switch"
                        aria-checked={modeToggle.value}
                        onClick={() => modeToggle.onChange(!modeToggle.value)}
                        className="flex items-center gap-2 sm:gap-3 cursor-pointer select-none"
                    >
                        <span className="text-xs sm:text-sm lg:text-base font-medium" style={{ color: modeToggle.value ? "#999999" : "#000000" }}>
                            {modeToggle.leftLabel}
                        </span>

                        <div
                            className="relative"
                            style={{
                                width: 44,
                                height: 22,
                                borderRadius: 999,
                                background: "#FF7A59",
                            }}
                        >
                            <div
                                style={{
                                    width: 18,
                                    height: 18,
                                    borderRadius: "50%",
                                    background: "#fff",
                                    position: "absolute",
                                    top: 2,
                                    left: modeToggle.value ? 24 : 2,
                                    transition: "left 0.2s ease",
                                }}
                            />
                        </div>

                        <span className="text-xs sm:text-sm lg:text-base font-medium" style={{ color: modeToggle.value ? "#000000" : "#999999" }}>
                            {modeToggle.rightLabel}
                        </span>
                    </div>
                )}

                {/* Desktop Action Buttons */}
                <div className="hidden md:flex items-center gap-1.5 sm:gap-2">
                    {actionButtons?.map((btn, index) => (
                        <button
                            key={index}
                            onClick={btn.onClick}
                            className={twMerge(
                                "font-medium text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg text-black transition-all hover:opacity-90 active:scale-95 whitespace-nowrap",
                                btn.variant === "primary"
                                    ? "bg-[#F7694A]"
                                    : "bg-[#DFDFDF]"
                            )}
                        >
                            {btn.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t border-gray-200 px-4 py-3 space-y-3">
                    {/* Mobile Nav Links */}
                    {navLinkItems?.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            onClick={(e) => {
                                item.onClick?.()
                                setMobileMenuOpen(false)
                            }}
                            className="block text-sm font-semibold hover:text-gray-600 transition-colors py-2"
                        >
                            {item.label}
                        </a>
                    ))}

                    {/* Mobile Action Buttons */}
                    <div className="flex flex-col gap-2 pt-2">
                        {actionButtons?.map((btn, index) => (
                            <button
                                key={index}
                                onClick={btn.onClick}
                                className={twMerge(
                                    "font-medium text-sm px-4 py-2.5 rounded-lg text-black transition-all hover:opacity-90 active:scale-95",
                                    btn.variant === "primary"
                                        ? "bg-[#F7694A]"
                                        : "bg-[#DFDFDF]"
                                )}
                            >
                                {btn.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar