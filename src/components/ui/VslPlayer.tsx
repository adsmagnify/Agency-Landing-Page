"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export function VslPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  function play() {
    void videoRef.current?.play();
  }

  return (
    <figure className="relative w-full">
      <div className="relative overflow-hidden rounded-2xl border border-cyan-500/35 bg-black shadow-[0_24px_80px_rgba(0,74,173,.45),0_0_0_1px_rgba(255,198,25,.1)]">
        <video
          ref={videoRef}
          className="aspect-[1600/844] h-auto w-full bg-black object-cover"
          src={`${encodeURI(siteConfig.vsl.src)}?v=2`}
          poster={`${encodeURI(siteConfig.vsl.poster)}?v=2`}
          playsInline
          preload="metadata"
          controls={playing}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
        >
          Your browser does not support this video.
        </video>

        {!playing ? (
          <button
            type="button"
            onClick={play}
            className="absolute inset-0 z-[1] flex items-center justify-center bg-[linear-gradient(180deg,rgba(7,9,17,.12),rgba(7,9,17,.45))]"
            aria-label="Play Student Acquisition System video"
          >
            <span className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-cyan-500 text-[#111] shadow-[0_12px_40px_rgba(255,198,25,.5)] transition-transform duration-200 hover:scale-105">
              <Play size={30} fill="currentColor" className="ml-0.5" aria-hidden />
            </span>
          </button>
        ) : null}
      </div>
    </figure>
  );
}
