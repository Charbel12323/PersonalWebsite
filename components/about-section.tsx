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
                I&apos;m a third-year Software Engineering student at the University of Calgary on the co-op program. I&apos;m passionate about backend development and building scalable systems that solve real problems.
              </p>
              <p className="text-stone-800 mb-8 leading-relaxed text-lg font-sans">
                Currently, I&apos;m working as a Software Engineering Intern at Pason Systems, where I&apos;ve deployed Python/Bash automation to monitor thousands of user requests and migrated legacy CI/CD pipelines to Dockerized AWS environments. I&apos;m excited to start a new position at the Intelligent Navigation and Mapping Lab as a ML Engineer Intern, working on autonomous vehicle navigation systems.
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

          <div className={`h-80 md:h-96 rounded-2xl bg-white border-2 border-amber-200 flex items-center justify-center overflow-hidden transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <Image src="/logos/GenRepAI.jpg" alt="About Me" width={400} height={400} className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
