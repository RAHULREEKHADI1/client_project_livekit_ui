import { useState, useRef, useEffect } from 'react';

type AudioPlayerExactWaveformProps = {
    patternFill?: string
    patternOpacity?: number
}

export default function AudioPlayerExactWaveform({ patternFill = "#6b7280", patternOpacity = 0.6 }: AudioPlayerExactWaveformProps) {
    const [playing, setPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const audioRef = useRef<HTMLAudioElement>(null);
    const waveformRef = useRef<SVGSVGElement>(null);

    const svgWidth = 478;
    const svgHeight = 47;

    const basePattern = [
        { x: 7.81689, yStart: 3.29297, yEnd: 43.6484 },
        { x: 12.3481, yStart: 6.8125, yEnd: 40.1289 },
        { x: 16.8716, yStart: 19.4844, yEnd: 27.457 },
        { x: 21.3989, yStart: 10.332, yEnd: 36.6094 },
        { x: 25.9263, yStart: 18.0742, yEnd: 28.8633 },
        { x: 30.4575, yStart: 22.3008, yEnd: 24.6406 },
        { x: 34.9771, yStart: 22.3008, yEnd: 24.6406 },
        { x: 39.5083, yStart: 22.3008, yEnd: 24.6406 },
        { x: 44.0356, yStart: 13.8516, yEnd: 33.0859 },
        { x: 48.5586, yStart: 10.332, yEnd: 36.6094 },
        { x: 53.082, yStart: 22.3008, yEnd: 24.6406 },
        { x: 57.6094, yStart: 22.3008, yEnd: 24.6406 },
        { x: 62.1406, yStart: 22.3008, yEnd: 24.6406 },
        { x: 66.668, yStart: 22.3008, yEnd: 24.6406 },
        { x: 71.1914, yStart: 22.3008, yEnd: 24.6406 },
        { x: 75.7188, yStart: 19.4844, yEnd: 27.457 },
        { x: 80.2461, yStart: 10.332, yEnd: 36.6094 },
        { x: 84.7734, yStart: 18.0742, yEnd: 28.8633 },
        { x: 89.2969, yStart: 13.8516, yEnd: 33.0859 },
        { x: 93.8242, yStart: 10.332, yEnd: 36.6094 },
    ];

    const waveformBars: Array<{ x: number; yStart: number; yEnd: number }> = [];
    const patternWidth = 95;
    const totalPatterns = Math.ceil(svgWidth / patternWidth);

    for (let i = 0; i < totalPatterns; i++) {
        basePattern.forEach(bar => {
            waveformBars.push({
                x: bar.x + (i * patternWidth),
                yStart: bar.yStart,
                yEnd: bar.yEnd
            });
        });
    }

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const updateProgress = () => {
            const currentProgress = (audio.currentTime / audio.duration) * 100;
            setProgress(currentProgress);
        };

        const handleEnded = () => {
            setPlaying(false);
            setProgress(0);
        };

        audio.addEventListener('timeupdate', updateProgress);
        audio.addEventListener('ended', handleEnded);

        return () => {
            audio.removeEventListener('timeupdate', updateProgress);
            audio.removeEventListener('ended', handleEnded);
        };
    }, []);

    const togglePlay = () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (playing) {
            audio.pause();
        } else {
            audio.play();
        }
        setPlaying(!playing);
    };

    const handleWaveformClick = (e: React.MouseEvent<SVGSVGElement>) => {
        const audio = audioRef.current;
        const waveform = waveformRef.current;
        if (!audio || !waveform) return;

        const rect = waveform.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const percentage = Math.max(0, Math.min(1, clickX / rect.width));

        audio.currentTime = audio.duration * percentage;

        if (!playing) {
            audio.play();
            setPlaying(true);
        }
    };

    return (
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full max-w-5xl px-2 sm:px-4 py-4 mx-auto">
            <div
                onClick={togglePlay}
                className="w-14 h-14 sm:w-16 sm:h-16 md:w-[70px] md:h-[70px] shrink-0 rounded-full bg-gradient-to-br from-[#4a4a4a] to-[#2d2d2d] flex items-center justify-center cursor-pointer hover:from-[#5a5a5a] hover:to-[#3d3d3d] transition-all shadow-xl border-2 border-gray-700 active:scale-95"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 68 68"
                    className={`w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 ml-0.5 sm:ml-1 ${playing ? 'hidden' : 'block'}`}
                    fill="none"
                >
                    <path
                        d="M48.2598 36.0582L24.1411 49.7622C23.2938 50.2436 22.2422 49.6316 22.2422 48.6571V21.2494C22.2422 20.2749 23.2938 19.6629 24.1411 20.1443L48.2598 33.848C49.1173 34.3352 49.1173 35.5709 48.2598 36.0582Z"
                        fill="white"
                    />
                </svg>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 68 68"
                    className={`w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 ${playing ? 'block' : 'hidden'}`}
                    fill="none"
                >
                    <path
                        d="M22 22C22 20.3431 23.3431 19 25 19C26.6569 19 28 20.3431 28 22V46C28 47.6569 26.6569 49 25 49C23.3431 49 22 47.6569 22 46V22Z"
                        fill="white"
                    />
                    <path
                        d="M39 22C39 20.3431 40.3431 19 42 19C43.6569 19 45 20.3431 45 22V46C45 47.6569 43.6569 49 42 49C40.3431 49 39 47.6569 39 46V22Z"
                        fill="white"
                    />
                </svg>
            </div>

            <div className="flex-1 w-full min-w-0">
                <svg
                    ref={waveformRef}
                    width="100%"
                    height="47"
                    viewBox={`0 0 ${svgWidth} ${svgHeight}`}
                    onClick={handleWaveformClick}
                    className="cursor-pointer touch-manipulation w-full h-auto max-h-12 sm:max-h-none"
                    preserveAspectRatio="none"
                >
                    <defs>
                        <clipPath id="progressClip">
                            <rect x="0" y="0" width={`${progress}%`} height={svgHeight} />
                        </clipPath>

                        <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#fb923c" />
                            <stop offset="50%" stopColor="#f97316" />
                            <stop offset="100%" stopColor="#ea580c" />
                        </linearGradient>
                    </defs>

                    {waveformBars.map((bar, i) => {
                        const barHeight = bar.yEnd - bar.yStart;

                        return (
                            <rect
                                key={`bg-${i}`}
                                x={bar.x - 1.3}
                                y={bar.yStart}
                                width="2.6"
                                height={barHeight}
                                rx="1.3"
                                fill={patternFill}
                                opacity={patternOpacity}
                            />
                        );
                    })}

                    <g clipPath="url(#progressClip)">
                        {waveformBars.map((bar, i) => {
                            const barHeight = bar.yEnd - bar.yStart;

                            return (
                                <rect
                                    key={`played-${i}`}
                                    x={bar.x - 1.3}
                                    y={bar.yStart}
                                    width="2.6"
                                    height={barHeight}
                                    rx="1.3"
                                    fill="url(#orangeGradient)"
                                />
                            );
                        })}
                    </g>

                    {playing && (
                        <g>
                            <line
                                x1={`${progress}%`}
                                y1="0"
                                x2={`${progress}%`}
                                y2={svgHeight}
                                stroke="#f97316"
                                strokeWidth="2"
                            />
                            <circle
                                cx={`${progress}%`}
                                cy={svgHeight / 2}
                                r="4"
                                fill="#f97316"
                            />
                        </g>
                    )}
                </svg>
            </div>

            <audio
                ref={audioRef}
                preload="metadata"
                src="https://jack-jill.vercel.app/audio/jack_audio.mp3"
                className="hidden"
            />
        </div>
    );
}