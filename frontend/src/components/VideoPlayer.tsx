import React, { useState, useRef, useEffect } from "react"
import { twMerge } from "tailwind-merge"

interface VideoPlayerProps {
  src: string
  poster?: string
  className?: string
  videoClassName?: string
  loop?: boolean
  muted?: boolean
  autoPlay?: boolean
  autoPlayDuration?: number 
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  poster,
  className = "",
  videoClassName = "",
  loop = true,
  muted = true,
  autoPlay = false,
  autoPlayDuration = 10,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  const [hasStarted, setHasStarted] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showControls, setShowControls] = useState(false)

  useEffect(() => {
    if (!autoPlay || !videoRef.current) return

    const video = videoRef.current
    video.muted = true

    const playPromise = video.play()
    if (playPromise !== undefined) {
      playPromise.catch(() => {})
    }
  }, [autoPlay])

  useEffect(() => {
    if (!autoPlay || !videoRef.current) return

    const video = videoRef.current

    const handleTimeUpdate = () => {
      if (!hasStarted && video.currentTime >= autoPlayDuration) {
        video.pause()
        video.currentTime = 0 // Reset to beginning
        setIsPlaying(false)
      }
    }

    video.addEventListener("timeupdate", handleTimeUpdate)

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate)
    }
  }, [autoPlay, hasStarted, autoPlayDuration])

  const handlePlayClick = () => {
    if (!videoRef.current) return

    const video = videoRef.current

    video.currentTime = 0 
    video.muted = false
    console.log("muted",muted);
    
    video.play()

    setHasStarted(true)
    setIsPlaying(true)
  }

  const togglePlay = () => {
    if (!videoRef.current) return

    const video = videoRef.current

    video.muted = false
    console.log(muted,"muted");
    

    if (video.paused) {
      video.play()
      setIsPlaying(true)
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }

  return (
    <div
      className={twMerge(
        "relative overflow-hidden shadow-2xl bg-black my-16",
        className
      )}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        ref={videoRef}
        className={twMerge("w-full h-full object-cover", videoClassName)}
        poster={poster}
        loop={loop}
        playsInline
        preload="metadata"
        autoPlay={autoPlay}
        muted={muted}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onClick={hasStarted ? togglePlay : undefined}
      >
        <source src={src} type="video/mp4" />
      </video>

      {!hasStarted && (
        <div
          className="absolute inset-0 flex items-center justify-center cursor-pointer"
          onClick={handlePlayClick}
        >
          <div className="text-white px-6 py-3 rounded-full text-base font-medium">
            Play video
          </div>
        </div>
      )}

      {hasStarted && (!isPlaying || showControls) && (
        <div
          className="absolute inset-0 flex items-center justify-center cursor-pointer"
          onClick={togglePlay}
        >
          <button
            className="flex items-center justify-center w-16 h-16 bg-white/90 rounded-full shadow-lg"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <svg
                className="w-8 h-8 text-gray-900"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            ) : (
              <svg
                className="w-8 h-8 text-gray-900 ml-1"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
        </div>
      )}
    </div>
  )
}

export default VideoPlayer