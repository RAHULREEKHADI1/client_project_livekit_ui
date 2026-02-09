import { useState } from "react";

interface Step {
    id: number;
    label: string;
    icon: string;
    completed: boolean;
    active: boolean;
    activeIcon?: string;
}

interface Message {
    id: string;
    sender: "may" | "user";
    text: string;
    timestamp: Date;
}

interface StepConfig {
    label: string;
    icon: string;
    activeIcon: string;
}

interface AIOnboardingProps {
    userType: "candidate" | "company";
    headerTitle?: string;
    steps?: StepConfig[];
    initialMessage?: string;
    stepQuestions?: string[];
    completionMessage?: string;
    dashboardButtonText?: string;
    continueButtonText?: string;
    callButtonText?: string;
    hangUpButtonText?: string;
    inputPlaceholder?: string;
    listeningMessage?: string;
    helpText?: string;
    footerHelpText?: string;
    onComplete?: () => void;
}

const AIOnboarding: React.FC<AIOnboardingProps> = ({
    userType,
    headerTitle = "Setting up your job posting with May",
    steps: customSteps,
    initialMessage = "Hi! I'm May, your AI hiring assistant. I'm here to help you find perfect candidates for your team! Let's start - what position are you looking to fill?",
    stepQuestions: customStepQuestions,
    completionMessage = "Great! You've completed the minimum job posting setup.",
    dashboardButtonText = "Go to Dashboard",
    continueButtonText = "Continue later",
    callButtonText = "Call May",
    hangUpButtonText = "Hang Up",
    inputPlaceholder = "Or type your response here...",
    listeningMessage = "Understanding your hiring needs...",
    helpText = "Just talk naturally with May. No forms, no pressure.",
    footerHelpText = "Press Enter to send text • Use voice button above for hands-free conversation",
    onComplete
}) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [isListening, setIsListening] = useState(false);
    const [isCalling, setIsCalling] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [isCompleted, setIsCompleted] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            sender: "may",
            text: initialMessage,
            timestamp: new Date()
        }
    ]);

    const defaultStepsForCompany: StepConfig[] = customSteps || [
        { label: "Position Details", icon: "/position.png", activeIcon: "/position.png" },
        { label: "Requirements &\nSkills", icon: "/skill.png", activeIcon: "/coloredSkill.png" },
        { label: "Team & Culture", icon: "/team&culture.png", activeIcon: "/coloredteam&culture.png" },
        { label: "Budget &\nBenefits", icon: "/budget.png", activeIcon: "/coloredBudget.png" }
    ];

    const defaultStepsForCandidate: StepConfig[] = customSteps || [
        { label: "Role Preferences", icon: "/role_icon.png", activeIcon: "/role_icon.png" },
        { label: "Experience &\nSkills", icon: "/experience.png", activeIcon: "/colored_experience.png" },
        { label: "Location", icon: "/location.png", activeIcon: "/colored_location.png" },
        { label: "Salary &\nBenefits", icon: "/budget.png", activeIcon: "/colored_salary.png" }
    ];

    const defaultSteps = customSteps || (userType === "candidate" ? defaultStepsForCandidate : defaultStepsForCompany);

    const [steps, setSteps] = useState<Step[]>(
        defaultSteps.map((step, index) => ({
            id: index + 1,
            label: step.label,
            icon: step.icon,
            activeIcon: step.activeIcon,
            completed: false,
            active: index === 0
        }))
    );

    const defaultStepQuestions = [
        initialMessage,
        "Great! Now, let's talk about the requirements and skills. What experience level are you looking for, and what are the key skills and qualifications needed for this role?",
        "Perfect! Tell me about your team and company culture. What kind of work environment and values are important for this position?",
        "Almost done! What's your budget range for this position, and what benefits or perks can you offer?"
    ];

    const stepQuestions = customStepQuestions || defaultStepQuestions;

    const handleCallMay = () => {
        setIsCalling(true);
        setIsListening(true);
        setTimeout(() => {
            setIsListening(false);
        }, 3000);
    };

    const handleHangUp = () => {
        setIsCalling(false);
        setIsListening(false);
    };

    const handleSendMessage = () => {
        if (!inputValue.trim()) return;

        const newMessage: Message = {
            id: Date.now().toString(),
            sender: "user",
            text: inputValue,
            timestamp: new Date()
        };

        setMessages([...messages, newMessage]);
        setInputValue("");

        setTimeout(() => {
            if (currentStep < steps.length - 1) {
                const updatedSteps = [...steps];
                updatedSteps[currentStep].completed = true;
                updatedSteps[currentStep].active = false;
                updatedSteps[currentStep + 1].active = true;
                setSteps(updatedSteps);
                setCurrentStep(currentStep + 1);

                const mayResponse: Message = {
                    id: (Date.now() + 1).toString(),
                    sender: "may",
                    text: stepQuestions[currentStep + 1],
                    timestamp: new Date()
                };
                setMessages(prev => [...prev, mayResponse]);
            } else {
                const updatedSteps = [...steps];
                updatedSteps[currentStep].completed = true;
                updatedSteps[currentStep].active = false;
                setSteps(updatedSteps);
                setIsCompleted(true);

                const completionMessageText: Message = {
                    id: (Date.now() + 1).toString(),
                    sender: "may",
                    text: stepQuestions[stepQuestions.length - 1],
                    timestamp: new Date()
                };
                setMessages(prev => [...prev, completionMessageText]);
            }
        }, 1000);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    const handleGoToDashboard = () => {
        if (onComplete) {
            onComplete();
        }
    };

    const completedSteps = steps.filter(s => s.completed).length;

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <div className="py-4 px-71 border-b border-[#F1F5F9]">
                <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center">
                        <img src={`${userType === "candidate" ? "/green_star_icon.png" : "/purple_star_icon.png"}`} alt={`${userType === "candidate" ? "/green_star_icon" : "/purple_star_icon"}`} />
                    </div>
                    <h1 className="text-lg text-[#0F172B]">{headerTitle}</h1>
                </div>
            </div>

            <div className="flex-1 flex flex-col items-center pt-16 pb-8">
                {isListening && (
                    <div className="mb-4">
                        <p className={`rounded-full px-4 py-2 text-sm font-medium flex items-center gap-2 ${userType==="candidate"?"text-[#008236] bg-[#F0FDF4]":"text-[#8200DB] bg-[#FAF5FF]"}`}>
                            <span className={`inline-block w-2 h-2 rounded-full ${userType==="candidate"?"bg-[#00C950]":"bg-[#AD46FF]"}`}></span>
                            {listeningMessage}
                        </p>
                    </div>
                )}

                <div className="relative mb-9">
                    <div className={`w-24 h-24 rounded-full flex items-center justify-center shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] ${userType === "candidate" ? "bg-linear-to-br from-[#05DF72] to-[#009966] " : "bg-linear-to-br from-[#C27AFF] to-[#4F39F6] "}`}>
                        <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                            <img src="/white_star_icon.png" alt="white_star_icon" />
                        </div>
                    </div>
                    {isListening && (
                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-1">
                            <div className={`w-1.5 h-1.5  rounded-full animate-bounce ${userType==="candidate"?"bg-[#00C950]":"bg-[#A855F7]"}`} style={{ animationDelay: '0ms' }}></div>
                            <div className={`w-1.5 h-1.5  rounded-full animate-bounce ${userType==="candidate"?"bg-[#00C950]":"bg-[#A855F7]"}`} style={{ animationDelay: '150ms' }}></div>
                            <div className={`w-1.5 h-1.5  rounded-full animate-bounce ${userType==="candidate"?"bg-[#00C950]":"bg-[#A855F7]"}`} style={{ animationDelay: '300ms' }}></div>
                        </div>
                    )}
                </div>

                <div className="flex items-center justify-center gap-8 mb-6">
                    {steps.map((step) => (
                        <div key={step.id} className="flex flex-col items-center gap-2">
                            <div className={`w-20 h-20 rounded-full flex items-center justify-center transition-all ${step.completed
                                    ? userType === "candidate" ? "bg-[#F0FDF4]" : "bg-[#F3E8FF]"
                                    : step.active
                                        ? userType === "candidate" ? "bg-[#F0FDF4]" : "bg-[#FAF5FF]"
                                        : 'bg-[#F8FAFC]'
                                }`}>
                                {step.completed ? (
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center`}>
                                        {userType === "candidate" ? <img src="/green_tick_icon.png" alt="green_tick_icon" /> : <img src="/purple_tick_icon.png" alt="purple_tick_icon" />}
                                    </div>
                                ) : (
                                    <img src={`${step.active ? `${step.activeIcon}` : `${step.icon}`}`} alt={`${step.icon}`} />
                                )}
                            </div>
                            <p className={`text-xs text-center whitespace-pre-line max-w-20 ${step.active ? userType === "candidate" ? "text-[#00A63E]" : 'text-[#A855F7] font-semibold' : 'text-[#62748E]'
                                }`}>
                                {step.label}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mb-8 flex gap-3">
                    <div className="w-80 bg-[#F1F5F9] rounded-full h-3 overflow-hidden">
                        <div
                            className={`h-full transition-all duration-500 ${userType === "candidate" ? "bg-linear-to-r from-[#05DF72] to-[#009966]" : " bg-linear-to-r from-[#A855F7] to-[#7C3AED]"}`}
                            style={{ width: `${(completedSteps / steps.length) * 100}%` }}
                        ></div>
                    </div>
                    <p className={`text-right text-sm font-semibold  ${userType === "candidate" ? "text-[#00A63E]" : "text-[#9810FA]"}`}>
                        {completedSteps} / {steps.length}
                    </p>
                </div>

                {!isCompleted ? (
                    <>
                        <div className="w-full max-w-2xl px-8 mb-6">
                            <div className="bg-[#F8FAFC] rounded-[14px] shadow-sm border border-[#E2E8F0] p-6">
                                <div className="flex gap-3 items-start">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${userType === "candidate" ? "bg-linear-to-br from-[#05DF72] to-[#009966]" : "bg-linear-to-br from-[#C27AFF] to-[#4F39F6]"}`}>
                                        <img src="/white_star_icon.png" alt="white_star_icon" className="h-4 w-4" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <p className="font-bold text-sm text-[#0F172B]">{userType === "candidate" ? "Max AI" : "May AI"}</p>
                                            {isListening && (
                                                <span className="text-xs text-[#A855F7] font-medium">Listening...</span>
                                            )}
                                        </div>
                                        <p className="text-[#314158] text-sm leading-relaxed">
                                            {messages[messages.length - 1]?.text}
                                        </p>
                                    </div>
                                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                        <img src="/full_screen.png" alt="full_screen_view" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="mb-6">
                            {!isCalling ? (
                                <button
                                    onClick={handleCallMay}
                                    className={`px-10 py-4 text-white font-bold rounded-full flex items-center gap-3 shadow-lg hover:shadow-xl ${userType === "candidate" ? "bg-linear-to-r from-[#00C950] to-[#009966]" : "bg-linear-to-r from-[#AD46FF] to-[#4F39F6]"}`}
                                >
                                    <img src="/mic_icon.png" alt="mic_icon" />
                                    {callButtonText}
                                </button>
                            ) : (
                                <button
                                    onClick={handleHangUp}
                                    className="px-10 py-4 bg-red-600 text-white rounded-full font-semibold flex items-center gap-3 shadow-lg hover:shadow-xl"
                                >
                                    <img src="/hangup_icon.png" alt="hangup" />
                                    {hangUpButtonText}
                                </button>
                            )}
                        </div>

                        <div className="text-center mb-3">
                            <p className="text-sm text-[#62748E] flex items-center justify-center gap-2">
                                <span>💡</span>
                                <span>{helpText}</span>
                            </p>
                        </div>

                        <button className={` text-sm font-medium underline ${userType === "candidate" ? "text-[#00A63E]" : "text-[#9810FA]"}`}>
                            {continueButtonText}
                        </button>
                    </>
                ) : (
                    <>
                        <div className="w-full max-w-2xl px-8 mb-6">
                            <div className="bg-[#F8FAFC] rounded-[14px] shadow-sm border border-[#E2E8F0] p-6">
                                <div className="flex gap-3 items-start">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${userType === "candidate" ? "bg-linear-to-br from-[#05DF72] to-[#009966]" : "bg-linear-to-br from-[#C27AFF] to-[#4F39F6]"}`}>
                                        <img src="/white_star_icon.png" alt="white_star_icon" className="h-4 w-4" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <p className="font-bold text-sm text-[#0F172B]">{userType === "candidate" ? "Max AI" : "May AI"}</p>
                                        </div>
                                        <p className="text-[#314158] text-sm leading-relaxed">
                                            {messages[messages.length - 1]?.text}
                                        </p>
                                    </div>
                                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                        <img src="/full_screen.png" alt="full_screen_view" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="mb-6">
                            <button
                                onClick={handleCallMay}
                                className={`px-10 py-4 text-white font-bold rounded-full flex items-center gap-3 shadow-lg hover:shadow-xl ${userType === "candidate" ? "bg-linear-to-r from-[#00C950] to-[#009966]" : "bg-linear-to-r from-[#AD46FF] to-[#4F39F6]"}`}
                            >
                                <img src="/mic_icon.png" alt="mic_icon" />
                                {callButtonText}
                            </button>
                        </div>

                        <div className="text-center mb-4">
                            <p className="text-base text-[#45556C] flex items-center justify-center">
                                <span>🎉 {completionMessage}</span>
                            </p>
                        </div>

                        <button
                            onClick={handleGoToDashboard}
                            className={`px-8 py-3 text-white font-bold rounded-[10px] ${userType==="candidate"?"bg-[#00A63E]":"bg-[#9810FA]"}`}
                        >
                            {dashboardButtonText}
                        </button>
                    </>
                )}
            </div>

            <div className="border-t-2 border-[#E2E8F0] bg-white px-8 py-6">
                <div className="max-w-4xl mx-auto flex gap-3">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder={inputPlaceholder}
                        className="flex-1 px-6 py-3 placeholder:text-[#90A1B9] text-base border-2 border-[#CAD5E2] rounded-2xl focus:outline-none focus:border-[#A855F7] transition-colors"
                    />
                    <button
                        onClick={handleSendMessage}
                        disabled={!inputValue.trim()}
                        className={`px-8 py-3 mt-1 text-base text-white rounded-2xl font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 ${userType === "candidate" ? "bg-linear-to-r from-[#00C950] to-[#009966]" : "bg-linear-to-r from-[#AD46FF] to-[#4F39F6]"}`}
                    >
                        <img src="/send_icon.png" alt="send_icon" />
                        Send
                    </button>
                </div>
                <p className="text-center text-xs text-[#62748E] mt-2">
                    💬 {footerHelpText}
                </p>
            </div>
        </div>
    );
};

export default AIOnboarding;