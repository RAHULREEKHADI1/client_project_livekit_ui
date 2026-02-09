import Navbar from "../components/Navbar"
import React, { useRef, useEffect } from "react"
import Footer from "../components/Footer"
import { Linkedin, Instagram } from "lucide-react"
import Banner from "../components/Banner"
import VideoPlayer from "../components/VideoPlayer"
import JobCard from "../components/JobCard"
import jobsData from '../data/jobdata.json'
import { useNavigate } from "react-router-dom"

interface JobFeature {
  icon: "money" | "check"
  text: string
}

interface Job {
  id: string
  title: string
  compensation: string
  features: JobFeature[]
}

function HomePage() {
  const nexaRef = useRef<HTMLDivElement>(null)
  const novaRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLDivElement>(null)

  const navigateTo = useNavigate();


  const handleApply = (jobTitle: string) => {
    console.log(`Applied to: ${jobTitle}`)
  }

  const jobs = jobsData.jobs as Job[]

  const [isHiring, setIsHiring] = React.useState(false)
  const [navHeight, setNavHeight] = React.useState(0)

  useEffect(() => {
    const updateNavHeight = () => {
      if (navRef.current) {
        setNavHeight(navRef.current.offsetHeight)
      }
    }

    updateNavHeight()

    window.addEventListener('resize', updateNavHeight)

    return () => {
      window.removeEventListener('resize', updateNavHeight)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!novaRef.current || !nexaRef.current) return

      const nexaRect = nexaRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      
      if (nexaRect.top < viewportHeight / 2) {
        setIsHiring(true)
      } else {
        setIsHiring(false)
      }
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleModeToggle = (value: boolean) => {
    setIsHiring(value)

    if (value) {
      nexaRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }
  }

  return (
    <div className="min-h-screen bg-[#FCFCF7]">
      <header
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 bg-transparent px-4 sm:px-6 pt-4 sm:pt-6 pb-2 sm:pb-3"
      >

        <Navbar
          imageLogo={{
            src: "/HireTal_Logo.avif",
            alt: "Logo",
            onClick: () => console.log("logo clicked"),
            className: "h-10 w-22.5"
          }}
          navLinkItems={[
            { label: "Referral", href: "/referral",onClick:()=>navigateTo("/referral")},
            { label: "Pricing", href: "/pricing" },
            { label: "Sign-in", href: "/sign-in",onClick:()=>navigateTo("/sign-in")},
          ]}
          modeToggle={{
            leftLabel: "Find Jobs",
            rightLabel: "Hiring",
            value: isHiring,
            onChange: handleModeToggle,
          }}
          actionButtons={[
            {
              label: "Sign up as Candidate",
              onClick: () => console.log("candidate signup"),
              variant: "primary",
            },
            {
              label: "Sign up as Company",
              onClick: () => console.log("company signup"),
              variant: "secondary",
            },
          ]}
        />
      </header>
      <div style={{ height: navHeight }} />

      <Banner nexaRef={nexaRef} novaRef={novaRef} />

      <div className="py-6 sm:py-8 md:py-12 px-4 sm:px-6 md:px-12 lg:px-24 bg-[#e8eef8]">
        <div className="border border-gray-300 bg-white rounded-xl sm:rounded-2xl my-4 sm:my-6">
          <div className="my-6 sm:my-8 flex flex-col gap-4 sm:gap-6 md:gap-8 items-center justify-center px-4">
            <h4 className="text-2xl sm:text-3xl md:text-4xl text-center font-bold">Help build us</h4>
            <p className="bg-[#2B2B2B] px-4 sm:px-8 md:px-12 py-2 rounded-3xl text-white text-sm sm:text-base md:text-lg lg:text-xl text-center">
              We've raised $20M to help you land your dream job.
            </p>
          </div>

          <div className="mx-4 sm:mx-6 md:mx-8 mb-6 sm:mb-8">
            <VideoPlayer
              src="https://player.vimeo.com/progressive_redirect/playback/1132146617/rendition/720p/file.mp4?loc=external&signature=902e47152deef273aab32778c738450c3a21e5001d65e8544add85e4de1d2b2a"
              className="w-full h-auto rounded-lg"
              autoPlay={true}
              loop={true}
              muted={true}
            />
          </div>

          <div className="px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-4 sm:mb-6 lg:mb-8">
            {jobs.slice(0, 3).map((job) => (
              <JobCard
                key={job.id}
                title={job.title}
                compensation={job.compensation}
                features={job.features}
                onApply={() => handleApply(job.title)}
              />
            ))}
          </div>

          <div className="flex justify-center pb-6 sm:pb-8 px-4 sm:px-6 md:px-8">
            <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
              <JobCard
                key={jobs[3].id}
                title={jobs[3].title}
                compensation={jobs[3].compensation}
                features={jobs[3].features}
                onApply={() => handleApply(jobs[3].title)}
              />
            </div>
          </div>
        </div>

        <Footer
          brand={<h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Nova & Nexa</h2>}
          socialIcons={[
            <Linkedin key="li" size={18} />,
            <span key="x">X</span>,
            <Instagram key="ig" size={18} />,
            <span key="tt">TikTok</span>,
          ]}
          columns={[
            {
              title: "JACK",
              links: [
                { label: "Salary Negotiation Coaching" },
                { label: "Mock Interview Practice" },
                { label: "Career Clarity Coaching" },
              ],
            },
            {
              title: "AI CAREER TOOLS",
              links: [{ label: "Salary Benchmarking" }],
            },
            {
              title: "JILL",
              links: [{ label: "AI Recruiting Platform" }],
            },
            {
              title: "COMPANY",
              links: [
                { label: "Pricing" },
                { label: "Referral Program" },
                { label: "Careers" },
                { label: "FAQs" },
                { label: "Contact us" },
              ],
            },
          ]}
          bottomLeftLinks={[
            { label: "Terms" },
            { label: "Privacy" },
            { label: "Assured by Warden AI" },
          ]}
          copyrightText="© 2026 Jack & Jill AI. All rights reserved."
          backToTopLabel="Back to top"
          onBackToTop={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          } />
      </div>
    </div>
  )
}

export default HomePage