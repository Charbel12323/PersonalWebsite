"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0, rootMargin: "0px 0px -80px 0px" }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} id="about" className="py-24 px-6 bg-[#f8f3ea]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className={`text-4xl md:text-5xl text-slate-900 mb-3 font-(family-name:--font-cormorant) transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            About Me
          </h2>
          <div className="w-16 h-1 bg-[#b8860b]"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Bio text - shows first on mobile, first on desktop (left column) */}
          <div className={`order-1 md:order-1 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="mb-8 md:mb-12">
              <p className="text-stone-800 mb-6 leading-relaxed text-lg font-sans">
                I&apos;m a fourth-year Software Engineering student at the University of Calgary on the co-op program. I&apos;m passionate about full-stack web development and building scalable systems that solve real problems.
              </p>
              <p className="text-stone-800 leading-relaxed text-lg font-sans">
                Currently, I&apos;m working as a Software Engineering Intern at Pason Systems and I&apos;m very excited to start a new position at the Intelligent Navigation and Mapping Lab as a ML Engineering Intern, working on autonomous vehicle navigation systems.
              </p>
            </div>

            {/* Contact info - hidden on mobile, shown on desktop */}
            <div className="hidden md:grid grid-cols-[1.4fr_1.1fr_1fr] gap-6 pt-8 border-t border-amber-900/20">
              <div className="min-w-0">
                <p className="text-xs font-semibold text-stone-700 mb-2 uppercase tracking-wider font-(family-name:--font-cormorant)">Email</p>
                <a href="mailto:mcharbel439@gmail.com" className="text-slate-900 hover:text-amber-900 transition-colors text-sm font-sans break-all">
                  mcharbel439@gmail.com
                </a>
              </div>

              <div>
                <p className="text-xs font-semibold text-stone-700 mb-2 uppercase tracking-wider font-(family-name:--font-cormorant)">Phone</p>
                <a href="tel:+18254880972" className="text-slate-900 hover:text-amber-900 transition-colors text-base font-sans">
                  +1 (825) 488-0972
                </a>
              </div>

              <div>
                <p className="text-xs font-semibold text-stone-700 mb-2 uppercase tracking-wider font-(family-name:--font-cormorant)">Location</p>
                <p className="text-slate-900 text-base font-sans">Calgary, Alberta</p>
              </div>
            </div>
          </div>

          {/* Image - shows second on mobile, second on desktop (right column) */}
          <div className={`order-2 md:order-2 relative rounded-2xl bg-white border-2 border-amber-200 overflow-visible transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* 16:9 matches the photo's natural ratio so the annotation stays anchored to my head at every screen size */}
            <div className="aspect-video w-full overflow-hidden rounded-2xl">
              <Image src="/logos/GenRepAI.jpg" alt="Presenting GenRep AI's system architecture" width={800} height={450} className="object-cover w-full h-full" />
            </div>

            {/* Hand-drawn annotation */}
            <div className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              {/* Animated circle around my head */}
              <svg
                className="absolute w-10 h-10 md:w-14 md:h-14"
                style={{ left: '60%', top: '78%', transform: 'translate(-50%, -50%) rotate(-10deg)' }}
                viewBox="0 0 60 60"
              >
                <style>
                  {`
                    @keyframes drawCircle {
                      0%, 100% { stroke-dashoffset: 120; }
                      40%, 60% { stroke-dashoffset: 0; }
                    }
                    @keyframes drawArrow {
                      0%, 20% { stroke-dashoffset: 50; }
                      50%, 70% { stroke-dashoffset: 0; }
                      100% { stroke-dashoffset: 50; }
                    }
                    @keyframes fadeArrowHead {
                      0%, 20% { opacity: 0; }
                      50%, 70% { opacity: 1; }
                      100% { opacity: 0; }
                    }
                    .animate-circle {
                      animation: drawCircle 3s ease-in-out infinite;
                    }
                    .animate-arrow {
                      animation: drawArrow 3s ease-in-out infinite;
                    }
                    .animate-arrow-head {
                      animation: fadeArrowHead 3s ease-in-out infinite;
                    }
                  `}
                </style>
                <ellipse
                  cx="30"
                  cy="30"
                  rx="24"
                  ry="20"
                  fill="none"
                  stroke="#b8860b"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="120"
                  className={isVisible ? "animate-circle" : ""}
                  style={{
                    strokeDashoffset: isVisible ? undefined : 120,
                    filter: 'url(#sketch)'
                  }}
                />
                <defs>
                  <filter id="sketch">
                    <feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="2" result="noise"/>
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" />
                  </filter>
                </defs>
              </svg>

              {/* Animated curved arrow pointing down at the circle */}
              <svg
                className="absolute w-10 h-14 md:w-12 md:h-16"
                style={{ left: '60%', top: '48%' }}
                viewBox="0 0 50 70"
              >
                <path
                  d="M 38 10 Q 42 30, 26 52"
                  fill="none"
                  stroke="#b8860b"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="50"
                  className={isVisible ? "animate-arrow" : ""}
                  style={{
                    strokeDashoffset: isVisible ? undefined : 50,
                    filter: 'url(#sketch)'
                  }}
                />
                {/* Arrow head */}
                <path
                  d="M 20 44 L 26 54 L 34 48"
                  fill="none"
                  stroke="#b8860b"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={isVisible ? "animate-arrow-head" : ""}
                  style={{
                    opacity: isVisible ? undefined : 0
                  }}
                />
              </svg>

              {/* "me" label */}
              <span
                className="absolute text-[#b8860b] text-lg md:text-xl font-semibold italic"
                style={{ left: '66%', top: '34%', fontFamily: 'cursive' }}
              >
              Me!
              </span>

            </div>
          </div>

          {/* Contact info - shown on mobile only, third in order */}
          <div className={`order-3 md:hidden grid grid-cols-1 gap-8 pt-8 mt-4 border-t border-amber-900/20 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div>
              <p className="text-xs font-semibold text-stone-700 mb-2 uppercase tracking-wider font-(family-name:--font-cormorant)">Email</p>
              <a href="mailto:mcharbel439@gmail.com" className="text-slate-900 hover:text-amber-900 transition-colors text-sm font-sans break-all">
                mcharbel439@gmail.com
              </a>
            </div>

            <div>
              <p className="text-xs font-semibold text-stone-700 mb-2 uppercase tracking-wider font-(family-name:--font-cormorant)">Phone</p>
              <a href="tel:+18254880972" className="text-slate-900 hover:text-amber-900 transition-colors text-base font-sans">
                +1 (825) 488-0972
              </a>
            </div>

            <div>
              <p className="text-xs font-semibold text-stone-700 mb-2 uppercase tracking-wider font-(family-name:--font-cormorant)">Location</p>
              <p className="text-slate-900 text-base font-sans">Calgary, Alberta</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
