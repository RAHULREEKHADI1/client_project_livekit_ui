import { Route, Routes } from "react-router-dom"
import HomePage from "./components/HomePage"
import PricingPage from "./components/PricingPage"
import SignInPage from "./components/SignInPage"
import AIOnboarding from "./components/CompanyOnBoarding"
import CandidateDashboard from "./components/CandidateDashboard"

function App() {

  const candidateProps = {
    userType: "candidate" as const,
    brandTitle: "HireTal.ai",
    brandSubtitle: "AI-powered hiring platform",
    testimonial: {
        quote: "I found my dream job in just 2 weeks. The\nAI matching was incredibly accurate!",
        authorName: "Sarah Chen",
        authorRole: "Software Engineer",
        avatarBg: "bg-white/20"
    },
    stats: {
        users: "10K+",
        companies: "500+",
        successRate: "95%"
    },
    profileIcon: {
        bgColor: "bg-[#DCFCE7]",
        iconSrc: "/user_profile.png"
    },
    welcomeHeader: {
        title: "Welcome, Job Seeker!",
        subtitle: "Sign in to start your journey to your dream job"
    },
    gradientFrom: "from-[#00C950]",
    gradientTo: "to-[#009966]"
};

const companyProps = {
    userType: "company" as const,
    brandTitle: "HireTal.ai",
    brandSubtitle: "AI-powered hiring platform",
    testimonial: {
        quote: "We filled 5 positions in record time. The\nquality of candidates is outstanding.",
        authorName: "Michael Rodriguez",
        authorRole: "Head of HR, TechCorp",
        avatarBg: "bg-white/20"
    },
    stats: {
        users: "10K+",
        companies: "500+",
        successRate: "95%"
    },
    profileIcon: {
        bgColor: "bg-[#E0E7FF]",
        iconSrc: "/recruiter_profile.png"
    },
    welcomeHeader: {
        title: "Welcome, Recruiter!",
        subtitle: "Sign in to discover top talent for your team"
    },
    gradientFrom: "from-[#A855F7]",
    gradientTo: "to-[#9333EA]"
};

  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/pricing' element={<PricingPage/>}/>
      <Route path='/sign-in' element={<SignInPage {...candidateProps}/>}/>
      <Route path='/sign-out' element={<SignInPage {...companyProps}/>}/>
      <Route path='/company-profile' element={<AIOnboarding userType="company"/>}/>
      <Route path='/candidate-profile' element={<AIOnboarding userType="candidate"/>}/>
      <Route path="/candidate-dashboard" element={<CandidateDashboard/>}/>
    </Routes>
  )
}

export default App