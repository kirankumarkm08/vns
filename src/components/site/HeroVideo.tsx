"use client";

import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

import { cn } from "@/lib/utils";

type HeroVideoProps = {
  poster: string;
};

export function HeroVideo({ poster }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleAudio = async () => {
    const video = videoRef.current;
    if (!video) return;

    const nextMuted = !muted;
    video.muted = nextMuted;
    video.volume = nextMuted ? 0 : 1;
    setMuted(nextMuted);

    if (!nextMuted) {
      try {
        await video.play();
      } catch {
        video.muted = true;
        video.volume = 0;
        setMuted(true);
      }
    }
  };

  const Icon = muted ? VolumeX : Volume2;

  return (
    <section
      id="home"
      className="relative aspect-video min-h-[240px] w-full overflow-hidden bg-ink sm:min-h-[360px] lg:aspect-auto lg:min-h-screen"
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        className="absolute inset-0 h-full w-full object-contain lg:object-cover"
        src="/video/venus-f.mp4"
      />
      <button
        type="button"
        onClick={toggleAudio}
        aria-label={muted ? "Turn audio on" : "Turn audio off"}
        aria-pressed={!muted}
        className={cn(
          "absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full border border-ivory/35 bg-ink/70 text-ivory shadow-[var(--shadow-soft)] backdrop-blur-md transition-all duration-300 hover:border-gold hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink",
          "sm:right-6 sm:top-6 sm:h-12 sm:w-12",
        )}
      >
        <Icon className="h-5 w-5" strokeWidth={1.8} />
      </button>
    </section>
  );
}
