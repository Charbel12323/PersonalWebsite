"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function EducationSection() {
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
    <section ref={sectionRef} id="education" className="py-16 px-6 bg-[#102a43] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className={`text-4xl md:text-5xl mb-3 font-(family-name:--font-cormorant) transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Education
          </h2>
          <div className="w-16 h-1 bg-[#d4a017]"></div>
        </div>

        <div className={`relative overflow-hidden bg-[#16324f]/60 rounded-2xl p-8 border border-[#d4a017]/15 hover:border-[#d4a017]/35 hover:-translate-y-1 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Ghost graduation year, echoing the experience timeline */}
          <span
            aria-hidden
            className={`hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 select-none leading-none text-8xl font-semibold text-[#d4a017]/10 font-(family-name:--font-cormorant) transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`}
          >
            2027
          </span>
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 rounded-lg bg-white border border-white/20 flex items-center justify-center shrink-0 overflow-hidden">
              <Image src="/logos/uofc.jpg" alt="University of Calgary" width={64} height={64} className="object-contain p-1" />
            </div>

            <div className="flex-1">
              <h3 className="text-2xl text-white font-(family-name:--font-cormorant) mb-2">University of Calgary</h3>
              <p className="text-gray-300 text-base font-sans mb-2">Bachelor of Software Engineering, Co-op</p>
              <p className="text-gray-400 text-sm font-sans mb-4">September 2022 – April 2027 (Expected)</p>

              <div className="flex flex-wrap gap-2">
                <div className="px-4 py-1.5 bg-slate-900/40 border border-[#d4a017]/25 rounded-lg">
                  <p className="text-[#d4a017] text-xs font-sans">GPA: 3.8/4.0</p>
                </div>
                <div className="px-4 py-1.5 bg-slate-900/40 border border-[#d4a017]/25 rounded-lg">
                  <p className="text-[#d4a017] text-xs font-sans">Dean&apos;s List</p>
                </div>
                <div className="px-4 py-1.5 bg-slate-900/40 border border-[#d4a017]/25 rounded-lg">
                  <p className="text-[#d4a017] text-xs font-sans">AWS Data Engineer</p>
                </div>
                <div className="px-4 py-1.5 bg-slate-900/40 border border-[#d4a017]/25 rounded-lg">
                  <p className="text-[#d4a017] text-xs font-sans">AWS Cloud Practitioner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
