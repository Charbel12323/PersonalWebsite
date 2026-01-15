"use client"

import { GraduationCap } from "lucide-react"
import { useEffect, useRef, useState } from "react"

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
      { threshold: 0.3 }
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
    <section ref={sectionRef} id="education" className="py-24 px-6 bg-[#0a1628] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className={`text-4xl md:text-5xl mb-3 font-(family-name:--font-cormorant) transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Education
          </h2>
          <div className="w-16 h-1 bg-[#b8860b]"></div>
        </div>

        <div className={`bg-[#0f2744] rounded-3xl p-12 border border-blue-900/30 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-start gap-8">
            <div className="w-20 h-20 rounded-lg bg-blue-900/30 border border-blue-800/50 flex items-center justify-center flex-shrink-0">
              <GraduationCap className="h-10 w-10 text-blue-400" />
            </div>

            <div className="flex-1">
              <h3 className="text-3xl text-white font-(family-name:--font-cormorant) mb-3">University of Calgary</h3>
              <p className="text-gray-300 text-lg font-sans mb-4">Bachelor of Software Engineering, Co-op</p>
              <p className="text-gray-400 text-base font-sans mb-6">September 2023 – April 2027 (Expected)</p>

              <div className="flex flex-wrap gap-3">
                <div className="px-5 py-2 bg-slate-900/50 border border-[#b8860b]/30 rounded-lg">
                  <p className="text-[#b8860b] text-sm font-sans">GPA: 3.8/4.0</p>
                </div>
                <div className="px-5 py-2 bg-slate-900/50 border border-[#b8860b]/30 rounded-lg">
                  <p className="text-[#b8860b] text-sm font-sans">Dean&apos;s List</p>
                </div>
                <div className="px-5 py-2 bg-slate-900/50 border border-[#b8860b]/30 rounded-lg">
                  <p className="text-[#b8860b] text-sm font-sans">AWS Data Engineer (Aug 2025)</p>
                </div>
                <div className="px-5 py-2 bg-slate-900/50 border border-[#b8860b]/30 rounded-lg">
                  <p className="text-[#b8860b] text-sm font-sans">AWS Cloud Practitioner (Jul 2024)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
