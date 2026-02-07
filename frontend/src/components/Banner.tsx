import AudioPlayerExactWaveform from "./AudioPlayer";
import BasicToolCard from "./BasicToolCard";
import Button from "./Button";
import CompanyLogos from "./ImageBanner";
import FeatureComparisonTable from "./Table";
import TestimonialMarquee from "./Testimonial";
import VideoPlayer from "./VideoPlayer";
import TestimonialCard from "./TestimonialCard";
import { forwardRef } from "react";

import testimonials from "../data/testimonials.json";
import featureComparisonNovaData from "../data/featureComparisonNova.json";
import logos from "../data/logos.json";
import companyLogos from "../data/companyLogos.json";
import testimonialData from "../data/testimonialData.json";
import featureComparisonNexaData from "../data/featureComparisonNexa.json";

interface BannerProps {
    nexaRef?: React.RefObject<HTMLDivElement | null>;
    novaRef?: React.RefObject<HTMLDivElement | null>;
}

const Banner = forwardRef<HTMLDivElement, BannerProps>(({ nexaRef, novaRef }, ref) => {
    return (
        <div className="w-full overflow-x-hidden">
            <div ref={novaRef} className="flex flex-col gap-6 sm:gap-8 items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center font-bold text-black my-6">
                    <h3>Hi, I'm Nova</h3>
                    <AudioPlayerExactWaveform />
                    <p className="text-[#424649] text-xs sm:text-sm font-normal mt-3 sm:mt-4">Want to hear how I work? Hit play — I'll explain.</p>
                </div>
                <div className="w-full max-w-5xl">
                    <h4 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl px-4">Don't miss the unmissable jobs <span className="block mt-2">at the hottest companies</span></h4>
                </div>
                <div className="w-full max-w-4xl px-4">
                    <p className="text-center text-sm sm:text-base md:text-lg">I'll listen to what you want and then search 10,000 new jobs every hour <span className="block my-0.5">to find job opportunities worth seeing. I'll help with your applications</span> and introduce you to hiring managers working with Jill 🔥</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto px-4">
                    <Button label="Find jobs" intent="primary" />
                    <Button label="Hiring? Talk to Nexa" intent="secondary" />
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 my-4 sm:my-6 px-4 text-center sm:text-left items-center">
                    <p className="text-yellow-500">★★★★★</p>
                    <p className="text-sm sm:text-base">"Nova feels like a secret weapon. I wouldn't tell others if we were competing for the same job."</p>
                </div>
                <div className="flex flex-col md:flex-row gap-4 sm:gap-6 p-4 sm:p-6 md:p-8 border-2 border-gray-200 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl shadow-purple-300 sm:shadow-purple-400 w-full max-w-6xl mx-4">
                    <BasicToolCard
                        serialNumber={1}
                        label="Talk to Jack about"
                        description="your dream job"
                        imageSrc="/nova_tagline1.avif"
                        imageAlt="Talk to Jack"
                    />
                    <BasicToolCard
                        serialNumber={2}
                        label="Get jobs worth seeing"
                        description="in your email inbox"
                        imageSrc="/nova_tagline2.avif"
                        imageAlt="Email inbox"
                    />
                    <BasicToolCard
                        serialNumber={3}
                        label="Get direct intros to people"
                        description="that want to interview you"
                        imageSrc="/nova_tagline3.avif"
                        imageAlt="People introduction"
                    />
                </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-10 px-4 sm:px-6 lg:px-8 my-8 sm:my-12 lg:my-16 w-full">
                <VideoPlayer
                    src="https://player.vimeo.com/progressive_redirect/playback/1153545585/rendition/1080p/file.mp4%20%281080p%29.mp4?loc=external&log_user=0&signature=53c81a3965a48d796329f3a6fa7d26f73de7870e2411f4da03a042970a9a5bda"
                    className="w-full max-w-md lg:max-w-lg"
                    autoPlay={true}
                    loop={true}
                    muted={true} />
                <div className="flex flex-col gap-4 sm:gap-6 w-full lg:flex-1 max-w-2xl">
                    <div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl">Introducing Nova 2.0:</h2>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl mt-1 sm:mt-2">Your all-new AI Career Agent</h2>
                    </div>
                    <div>
                        <p className="text-sm sm:text-base">Jack's now even smarter, and <span className="text-[#FF6D4C]">helps you make smarter career moves.</span>
                            <span className="block">Beyond job search & introductions, Jack now helps you:</span></p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full">
                        <div className="flex items-center gap-3 sm:gap-4 px-3 py-3 sm:py-4 bg-white rounded-xl sm:rounded-2xl border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
                            <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-yellow-100 rounded-lg sm:rounded-xl flex items-center justify-center">
                                <span className="text-xl sm:text-2xl">💰</span>
                            </div>
                            <p className="text-sm sm:text-base md:text-lg font-medium text-gray-900">Benchmark your salary</p>
                        </div>

                        <div className="flex items-center gap-3 sm:gap-4 px-3 py-3 sm:py-4 bg-white rounded-xl sm:rounded-2xl border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
                            <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg sm:rounded-xl flex items-center justify-center">
                                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                                </svg>
                            </div>
                            <p className="text-sm sm:text-base md:text-lg font-medium text-gray-900">Improve your CV & LinkedIn</p>
                        </div>

                        <div className="flex items-center gap-3 sm:gap-4 px-3 py-3 sm:py-4 bg-white rounded-xl sm:rounded-2xl border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
                            <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg sm:rounded-xl flex items-center justify-center">
                                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 2.18l5.5 3.07v6.5L12 17.32l-5.5-3.07v-6.5L12 4.18z" />
                                    <path d="M12 8v8m-4-4h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </div>
                            <p className="text-sm sm:text-base md:text-lg font-medium text-gray-900">Rehearse salary negotiations</p>
                        </div>

                        <div className="flex items-center gap-3 sm:gap-4 px-3 py-3 sm:py-4 bg-white rounded-xl sm:rounded-2xl border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
                            <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg sm:rounded-xl flex items-center justify-center">
                                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
                                    <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
                                </svg>
                            </div>
                            <p className="text-sm sm:text-base md:text-lg font-medium text-gray-900">Practice mock interviews</p>
                        </div>
                    </div>
                    <div>
                        <Button label="Talk to Nova" intent="primary" className="mt-4 sm:mt-6" />
                    </div>
                </div>
            </div>

            <CompanyLogos
                title="Hire people from these companies"
                logos={logos}
                variant="light"
            />

            <div className="flex items-center text-center justify-center px-4">
                <Button label="Talk to Nova" intent="primary" className="my-6 sm:my-8" />
            </div>

            <div className="px-4 sm:px-6 lg:px-8 w-full">
                <p className="text-black text-2xl sm:text-3xl md:text-4xl text-center my-6 sm:my-8">How I work</p>
                <VideoPlayer 
                    src="https://player.vimeo.com/progressive_redirect/playback/1132146440/rendition/720p/file.mp4?loc=external&signature=1d9e1342fdd3ab643ee9f358bb21c277308e65e5b30223f2c7f1cfba91acfa14"
                    className="w-full max-w-4xl mx-auto"
                    autoPlay={true}
                    loop={true}
                    muted={true} 
                />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 my-8 sm:my-12 px-4">
                <p className="text-4xl sm:text-5xl md:text-6xl font-medium text-center sm:text-left">Love Letters</p>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-7 h-7 sm:w-9 sm:h-9 shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <path d="M12.0001 4.63661L13.6001 3.17761C14.2526 2.53567 15.0469 2.05609 15.9188 1.77757C16.7907 1.49905 17.7159 1.42939 18.6197 1.5742C19.5235 1.71901 20.3806 2.07425 21.1219 2.61124C21.8632 3.14823 22.4678 3.85195 22.8871 4.66561C23.431 5.73943 23.6188 6.95855 23.4234 8.14628C23.2279 9.33401 22.6594 10.4287 21.8001 11.2716L12.0001 21.3626L2.20011 11.2716C1.34067 10.4288 0.771933 9.33419 0.576314 8.14645C0.380695 6.95871 0.56836 5.73954 1.11211 4.66561C1.53135 3.85177 2.13604 3.14789 2.87739 2.61077C3.61874 2.07366 4.47599 1.71835 5.37993 1.57353C6.28388 1.42871 7.20922 1.49844 8.08126 1.77708C8.9533 2.05572 9.74762 2.53547 10.4001 3.17761L12.0001 4.63661Z" fill="#FF808C" />
                    <path d="M23.4935 7.49197C23.542 6.51355 23.3352 5.53934 22.8935 4.66497C22.4745 3.85024 21.8696 3.14553 21.1278 2.6078C20.3861 2.07007 19.5282 1.7144 18.6235 1.56955C17.7189 1.4247 16.7928 1.49472 15.9202 1.77396C15.0476 2.05319 14.253 2.53381 13.6005 3.17697L12.0005 4.63597L10.4005 3.17697C9.74798 2.53483 8.95366 2.05508 8.08162 1.77644C7.20958 1.4978 6.28424 1.42808 5.38029 1.5729C4.47635 1.71771 3.61911 2.07302 2.87775 2.61013C2.1364 3.14725 1.53171 3.85113 1.11247 4.66497C0.669001 5.53887 0.460506 6.51311 0.507467 7.49197C3.88434 9.81998 7.89915 11.0455 12.0005 11C16.1018 11.0455 20.1166 9.81998 23.4935 7.49197Z" fill="#FFBFC5" />
                    <path d="M9.50011 18.7926L2.20011 11.2716C1.34067 10.4288 0.771933 9.33421 0.576314 8.14647C0.380695 6.95873 0.56836 5.73955 1.11211 4.66562C1.53135 3.85178 2.13604 3.1479 2.87739 2.61079C3.61874 2.07367 4.47599 1.71837 5.37993 1.57355C6.28388 1.42873 7.20922 1.49846 8.08126 1.77709C8.9533 2.05573 9.74762 2.53548 10.4001 3.17763L12.0001 4.63663L13.6001 3.17763C14.2525 2.53548 15.0467 2.05573 15.9187 1.77708C16.7907 1.49844 17.7159 1.42872 18.6198 1.57354C19.5237 1.71836 20.3809 2.07368 21.1221 2.6108C21.8634 3.14792 22.468 3.8518 22.8871 4.66562C23.4884 5.84944 23.6534 7.20726 23.3531 8.50063" stroke="#191919" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22.5 22.5H12.5C12.2348 22.5 11.9804 22.3946 11.7929 22.2071C11.6054 22.0196 11.5 21.7652 11.5 21.5V11.5C11.5 11.2348 11.6054 10.9804 11.7929 10.7929C11.9804 10.6054 12.2348 10.5 12.5 10.5H22.5C22.7652 10.5 23.0196 10.6054 23.2071 10.7929C23.3946 10.9804 23.5 11.2348 23.5 11.5V21.5C23.5 21.7652 23.3946 22.0196 23.2071 22.2071C23.0196 22.3946 22.7652 22.5 22.5 22.5Z" fill="#E3E3E3" />
                    <path d="M23.208 10.793C23.115 10.7 23.0047 10.6263 22.8832 10.576C22.7617 10.5257 22.6315 10.4999 22.5 10.5H12.5C12.2348 10.5 11.9804 10.6054 11.7929 10.7929C11.6054 10.9804 11.5 11.2348 11.5 11.5V21.5C11.4998 21.7651 11.6048 22.0193 11.792 22.207L23.208 10.793Z" fill="white" />
                    <path d="M22.5 22.5H12.5C12.2348 22.5 11.9804 22.3946 11.7929 22.2071C11.6054 22.0196 11.5 21.7652 11.5 21.5V11.5C11.5 11.2348 11.6054 10.9804 11.7929 10.7929C11.9804 10.6054 12.2348 10.5 12.5 10.5H22.5C22.7652 10.5 23.0196 10.6054 23.2071 10.7929C23.3946 10.9804 23.5 11.2348 23.5 11.5V21.5C23.5 21.7652 23.3946 22.0196 23.2071 22.2071C23.0196 22.3946 22.7652 22.5 22.5 22.5Z" stroke="#191919" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14.501 13.5H20.501" stroke="#191919" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14.501 16.5H20.501" stroke="#191919" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14.501 19.5H16.751" stroke="#191919" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>

            <TestimonialMarquee
                testimonials={testimonialData}
                speed={50}
                className="my-custom-class"
            />

            <div className="flex items-center text-center justify-center px-4">
                <Button label="Talk to Nova" intent="primary" className="my-6 sm:my-8" />
            </div>

            <div className="flex flex-col gap-6 sm:gap-8 px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <p className="text-yellow-500 text-lg sm:text-xl">★★★★★</p>
                    <h6 className="text-sm sm:text-base mt-2">"Felt like the best most attentive, professional and productive conversation I've ever had with a recruiter!"</h6>
                </div>
                <div className="text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl px-4">Why speak to me rather than Agency <span className="block">Recruiters or LinkedIn?</span></h2>
                </div>
            </div>

            <div className="flex flex-col gap-6 sm:gap-8 px-4 sm:px-6 lg:px-8 my-8 w-full">
                <FeatureComparisonTable
                    columns={featureComparisonNovaData.columns}
                    rows={featureComparisonNovaData.rows}
                    cells={featureComparisonNovaData.cells}
                />
                <div className="flex flex-col gap-4 sm:gap-6 items-center justify-center p-6 sm:p-8 rounded-xl mx-auto bg-[#FFFFFF] max-w-4xl w-full">
                    <p className="text-xl sm:text-2xl font-semibold text-center">Not actively looking right now?</p>
                    <p className="text-center text-sm sm:text-base">In Career Coach Mode, I'll benchmark your salary and help to plan your future - like a <span className="block">mentor. I'll only surface jobs if they're truly unmissable.</span></p>
                </div>
                <div className="flex items-center justify-center p-4 sm:p-8">
                    <Button label="Get started" intent="primary" />
                </div>
            </div>

            {/* NEXA SECTION - This is where we scroll to when "Hiring" is selected */}
            <div ref={nexaRef} className="w-full bg-linear-to-br from-[#2A243F] via-[#876ACC] to-[#2A243F]">
                <div className="flex flex-col gap-6 sm:gap-8 items-center justify-center px-4 sm:px-6 lg:px-8">
                    <div className="text-center mt-8 sm:mt-12 md:mt-16">
                        <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white [text-shadow:0_0_12px_rgba(255,255,255,0.6),0_0_32px_rgba(135,106,204,0.8),0_0_64px_rgba(135,106,204,0.6)] px-4">Hi, I'm Nexa</h3>
                        <p className="font-bold text-white text-sm sm:text-base md:text-lg [text-shadow:0_0_12px_rgba(255,255,255,0.6),0_0_32px_rgba(135,106,204,0.8),0_0_64px_rgba(135,106,204,0.6)] mt-2 px-4">AI Super Recruiter for the hottest companies</p>
                        <AudioPlayerExactWaveform patternFill="#F1EAFE" patternOpacity={0.8} />
                        <p className="text-white text-xs sm:text-sm font-normal px-4">Want to hear how I work? Hit play — I'll explain.</p>
                    </div>
                    <div className="my-4 sm:my-6 flex flex-col gap-4 sm:gap-6 md:gap-8 w-full">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-white px-4">I find you exceptional talent faster and <span className="block">cheaper than agency recruiters</span></h2>
                        <p className="text-white text-center text-sm sm:text-base md:text-lg leading-tight px-4 max-w-4xl mx-auto">
                            I work just like an amazing agency recruiter but because I'm an AI, I can
                            <span className="block leading-tight">
                                talk to thousands of candidates for each role (and I'm cheaper too!)
                            </span>
                        </p>
                    </div>
                    <div>
                        <Button intent="tertiary" label="Hire top talent" />
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 sm:gap-6 w-full max-w-6xl">
                        <BasicToolCard
                            serialNumber={1}
                            label="Tell me who you want"
                            description="to hire on a quick call"
                            imageSrc="https://cdn.prod.website-files.com/685a7ae49cda5c7458ee0402/68cc0eb44d81294abb5c48a6_J%26J-4.avif"
                            imageAlt="Talk to Jack"
                            className="bg-white"
                        />
                        <BasicToolCard
                            serialNumber={2}
                            label="I'll carefully pick"
                            description="candidates from Nexa's network"
                            imageSrc="https://cdn.prod.website-files.com/685a7ae49cda5c7458ee0402/68cc0eb44d81294abb5c48a4_J%26J_4.avif"
                            imageAlt="Email inbox"
                            className="bg-white"
                        />
                        <BasicToolCard
                            serialNumber={3}
                            label="You'll get excellent"
                            description="candidates, in your inbox, today"
                            imageSrc="https://cdn.prod.website-files.com/685a7ae49cda5c7458ee0402/68cc0eb44d81294abb5c4882_J%26J-2.avif"
                            imageAlt="People introduction"
                            className="bg-white"
                        />
                    </div>
                    <div className="w-full max-w-7xl mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                            {testimonials.map((item, index) => (
                                <TestimonialCard
                                    key={index}
                                    quote={item.quote}
                                    name={item.name}
                                    role={item.role}
                                    avatar={item.avatar}
                                />
                            ))}
                        </div>
                    </div>
                    <div>
                        <Button intent="tertiary" label="Get started" />
                    </div>
                    <div className="my-6 sm:my-8 flex flex-col gap-6 sm:gap-10 items-center justify-center w-full">
                        <p className="text-2xl sm:text-3xl md:text-4xl text-white text-center px-4">How I work</p>
                        <VideoPlayer 
                            src="https://player.vimeo.com/progressive_redirect/playback/1132146276/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&signature=6ae8d22a88185a7b50d168de431d0dbbf7a743d8c99f1e609bac4e095635e353"
                            className="w-full max-w-4xl mx-auto"
                            autoPlay={true}
                            loop={true}
                            muted={true} 
                        />
                    </div>
                    <div>
                        <Button intent="tertiary" label="Get started" />
                    </div>

                    <CompanyLogos
                        title="Hire people from these companies"
                        logos={companyLogos}
                        variant="dark"
                    />
                </div>
                <div className="text-center px-4 sm:px-6 lg:px-8 py-6 sm:py-8 w-full">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-white [text-shadow:0_0_12px_rgba(255,255,255,0.6),0_0_32px_rgba(135,106,204,0.8),0_0_64px_rgba(135,106,204,0.6)]">Why speak to me rather than Agency <span className="block mt-2">Recruiters or LinkedIn?</span></h2>
                </div>
                <div className="flex flex-col gap-6 sm:gap-8 px-4 sm:px-6 lg:px-8 w-full">
                    <FeatureComparisonTable
                        columns={featureComparisonNexaData.columns}
                        rows={featureComparisonNexaData.rows}
                        cells={featureComparisonNexaData.cells}
                    />
                    <div className="flex items-center justify-center p-4 pb-12 sm:pb-16 md:pb-20">
                        <Button label="Get started" intent="tertiary" />
                    </div>
                </div>
            </div>
        </div>
    )
});

Banner.displayName = "Banner";

export default Banner;