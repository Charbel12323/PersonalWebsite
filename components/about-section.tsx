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
      { threshold: 0.2 }
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
    <section ref={sectionRef} id="about" className="py-24 px-6 bg-[#f5f3f0]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className={`text-4xl md:text-5xl text-slate-900 mb-3 font-(family-name:--font-cormorant) transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            About Me
          </h2>
          <div className="w-16 h-1 bg-[#b8860b]"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="mb-12">
              <p className="text-stone-800 mb-6 leading-relaxed text-lg font-sans">
                I&apos;m a third-year Software Engineering student at the University of Calgary on the co-op program. I&apos;m passionate about full-stack web development and building scalable systems that solve real problems.
              </p>
              <p className="text-stone-800 mb-8 leading-relaxed text-lg font-sans">
                Currently, I&apos;m working as a Software Engineering Intern at Pason Systems and I&apos;m very excited to start a new position at the Intelligent Navigation and Mapping Lab as a ML Engineering Intern, working on autonomous vehicle navigation systems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-amber-900/20">
              <div>
                <p className="text-xs font-semibold text-stone-700 mb-2 uppercase tracking-wider font-(family-name:--font-cormorant)">Email</p>
                <a href="mailto:charbel.maroun@ucalgary.ca" className="text-slate-900 hover:text-amber-900 transition-colors text-sm font-sans whitespace-nowrap">
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

          <div className={`relative h-80 md:h-96 rounded-2xl bg-white border-2 border-amber-200 flex items-center justify-center overflow-visible transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="w-full h-full overflow-hidden rounded-2xl">
              <Image src="/logos/GenRepAI.jpg" alt="About Me" width={400} height={400} className="object-cover w-full h-full" />
            </div>

            {/* Hand-drawn annotation */}
            <div className={`absolute right-1/3 bottom-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              {/* Animated circle */}
              <svg
                className="w-14 h-14"
                viewBox="0 0 60 60"
                style={{ transform: 'rotate(-10deg)' }}
              >
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
                  strokeDashoffset={isVisible ? "0" : "120"}
                  style={{
                    transition: 'stroke-dashoffset 1.5s ease-out 0.8s',
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

              {/* Animated curved arrow pointing up */}
              <svg
                className="absolute top-14 left-2 w-12 h-10"
                viewBox="0 0 50 40"
              >
                <path
                  d="M 20 35 Q 22 25, 25 15 Q 28 8, 25 5"
                  fill="none"
                  stroke="#b8860b"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="50"
                  strokeDashoffset={isVisible ? "0" : "50"}
                  style={{
                    transition: 'stroke-dashoffset 1s ease-out 1.2s',
                    filter: 'url(#sketch)'
                  }}
                />
                {/* Arrow head */}
                <path
                  d="M 20 10 L 25 3 L 30 10"
                  fill="none"
                  stroke="#b8860b"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity={isVisible ? 1 : 0}
                  style={{
                    transition: 'opacity 0.3s ease-out 2s'
                  }}
                />
              </svg>

              {/* "me" label */}
              <span
                className="absolute top-24 left-0 text-[#b8860b] text-xl font-semibold italic"
                style={{ fontFamily: 'cursive' }}
              >
                Guess who it is!
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
