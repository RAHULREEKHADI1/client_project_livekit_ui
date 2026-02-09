import { useState } from "react";

interface SignInButton {
    className: string;
    label: string;
    image: string;
}

interface TestimonialProps {
    quote: string;
    authorName: string;
    authorRole: string;
    avatarBg?: string;
}

interface ProfileIconProps {
    bgColor: string;
    iconSrc: string;
}

interface WelcomeHeaderProps {
    title: string;
    subtitle: string;
}

interface StatsProps {
    users: string;
    companies: string;
    successRate: string;
}

interface SignInPageProps {
    userType: "candidate" | "company";
    brandTitle: string;
    brandSubtitle: string;
    testimonial: TestimonialProps;
    stats: StatsProps;
    profileIcon: ProfileIconProps;
    welcomeHeader: WelcomeHeaderProps;
    gradientFrom?: string;
    gradientTo?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, authorName, authorRole, avatarBg = "bg-white/20" }) => {
    return (
        <div className="flex flex-col gap-6">
            <p className="text-white text-2xl leading-9">
                {quote}
            </p>
            <div className="flex gap-3 items-center">
                <div className={`rounded-full h-12 w-12 ${avatarBg}`}></div>
                <div>
                    <p className="text-base font-bold text-white">{authorName}</p>
                    <p className="text-sm text-white/80">{authorRole}</p>
                </div>
            </div>
        </div>
    );
};

const ProfileIcon: React.FC<ProfileIconProps> = ({ bgColor, iconSrc }) => {
    return (
        <div className={`${bgColor} rounded-2xl h-14 w-14 flex items-center justify-center `}>
            <img src={iconSrc} alt="profile_icon" />
        </div>
    );
};

const WelcomeHeader: React.FC<WelcomeHeaderProps> = ({ title, subtitle }) => {
    return (
        <div className="mb-8">
            <h3 className="text-3xl font-bold text-[#1E293B]">{title}</h3>
            <p className="text-[#45556C] text-base mt-1">{subtitle}</p>
        </div>
    );
};

const Stats: React.FC<StatsProps> = ({ users, companies, successRate }) => {
    return (
        <div className="flex gap-16">
            <div>
                <p className="font-bold text-white text-3xl">{users}</p>
                <p className="text-sm text-white/80">Users</p>
            </div>
            <div>
                <p className="font-bold text-white text-3xl">{companies}</p>
                <p className="text-sm text-white/80">Companies</p>
            </div>
            <div>
                <p className="font-bold text-white text-3xl">{successRate}</p>
                <p className="text-sm text-white/80">Success Rate</p>
            </div>
        </div>
    );
};

const SignInPage: React.FC<SignInPageProps> = ({
    userType,
    brandTitle,
    brandSubtitle,
    testimonial,
    stats,
    profileIcon,
    welcomeHeader,
    gradientFrom = "from-[#00C950]",
    gradientTo = "to-[#009966]"
}) => {
    const [moreOption, setMoreOption] = useState(false);

    const primaryButtons: SignInButton[] = [
        {
            className: "rounded-[14px] flex justify-center items-center gap-3 border-2 border-[#CAD5E2] py-3.5 bg-white",
            label: "Sign in with Google",
            image: "/chrome_icon.png"
        },
        {
            className: "bg-[#0A66C2] rounded-[14px] flex justify-center items-center gap-3 text-white py-4",
            label: "Sign in with LinkedIn",
            image: "/linkedin_icon.png"
        }
    ];

    const moreButtons: SignInButton[] = [
        {
            className: "rounded-[14px] flex justify-center items-center gap-3 border border-[#CAD5E2] py-2.25 bg-white",
            label: "Sign in with GitHub",
            image: "/github_icon.png"
        },
        {
            className: "rounded-[14px] flex justify-center items-center gap-3 border border-[#CAD5E2] py-2.25 bg-white",
            label: "Sign in with Apple",
            image: "/apple_icon.png"
        },
        {
            className: "rounded-[14px] flex justify-center items-center gap-3 border border-[#CAD5E2] py-2.25 bg-white",
            label: "Sign in with Facebook",
            image: "/facebook_icon.png"
        },
        {
            className: "rounded-[14px] flex justify-center items-center gap-3 border border-[#CAD5E2] py-2.25 bg-white",
            label: "Sign in with Twitter",
            image: "/twitter_icon.png"
        },
        {
            className: "rounded-[14px] flex justify-center items-center gap-3 border border-[#CAD5E2] py-2.25 bg-white",
            label: "Sign in with SSO",
            image: "/sso_icon.png"
        }
    ];

    return (
        <div className="grid grid-cols-2 min-h-screen">
            <div className={`px-12 bg-linear-to-r ${gradientFrom} ${gradientTo} flex flex-col`}>
                <div className="pt-12 flex flex-col gap-2">
                    <h2 className="text-3xl font-bold text-white [text-shadow:0_4px_4px_rgba(0,0,0,0.25)]">{brandTitle}</h2>
                    <p className="text-base text-white/80">{brandSubtitle}</p>
                </div>

                <div className="flex-1"></div>

                <div className="flex flex-col gap-8">
                    <div className="w-6 h-6 flex items-center gap-1">
                        <div className="w-1.5 h-6 bg-white rounded-sm"></div>
                        <div className="w-1.5 h-6 bg-white rounded-sm"></div>
                    </div>

                    <Testimonial
                        quote={testimonial.quote}
                        authorName={testimonial.authorName}
                        authorRole={testimonial.authorRole}
                        avatarBg={testimonial.avatarBg}
                    />

                    <Stats
                        users={stats.users}
                        companies={stats.companies}
                        successRate={stats.successRate}
                    />
                </div>
            </div>

            <div className={` ${moreOption ? "py-12 px-43.5" : "flex flex-col items-center justify-center"}`}>
                <div className="w-full max-w-md">
                    <div className="flex gap-2 items-center mb-7 cursor-pointer">
                        <img src="/back_icon.png" alt="back_icon" className="w-4 h-4" />
                        <p className="text-[#45556C] text-sm">Back</p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <ProfileIcon
                            bgColor={profileIcon.bgColor}
                            iconSrc={profileIcon.iconSrc}
                        />

                        <WelcomeHeader
                            title={welcomeHeader.title}
                            subtitle={welcomeHeader.subtitle}
                        />
                    </div>

                    <div className="flex flex-col gap-3">
                        {primaryButtons.map((button, index) => (
                            <button key={index} className={button.className}>
                                <img src={button.image} alt={button.label} className="w-5 h-5" />
                                <span>{button.label}</span>
                            </button>
                        ))}

                        <div
                            className="flex justify-center items-center gap-2 cursor-pointer py-2"
                            onClick={() => setMoreOption(!moreOption)}
                        >
                            <p className="text-[#45556C] text-sm">More sign-in options</p>
                            <img
                                src="/down_arrow.png"
                                alt="toggle"
                                className={`w-4 h-4 transition-transform ${moreOption ? 'rotate-180' : ''}`}
                            />
                        </div>

                        {moreOption && (
                            <div className="flex flex-col gap-2">
                                {moreButtons.map((button, index) => (
                                    <button key={index} className={button.className}>
                                        <img src={button.image} alt={button.label} />
                                        <span>{button.label}</span>
                                    </button>
                                ))}
                            </div>
                        )}

                        <div className="flex flex-col items-center gap-4 mt-6">
                            <p className="text-sm text-[#45556C]">
                                Don't have an account? <span className="text-base text-[#00A63E] font-medium cursor-pointer">Sign up for free</span>
                            </p>
                            <p className="text-[#90A1B9] text-xs">
                                💡 <span>Demo mode: Click any sign-in button to continue</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignInPage;