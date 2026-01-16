"use client"

import { useEffect, useRef, useState } from "react"

const awards = [
  {
    title: "IEEE ICAC 2025 Workshop",
    description: "Presented research in South Korea to 200+ international researchers",
  },
  {
    title: "3× Hackathon Winner",
    description: "Hack The Change YYC ($4,700) 2025, Code the Change ($2,000) 2024, BioHacks 2025",
  },
  {
    title: "Platform Calgary Early Incubator",
    description: "GenRep AI accepted into competitive startup accelerator program",
  },
  {
    title: "President, Space Rover Club",
    description: "Led multi-division engineering team to third place at 2024 Rover Competition",
  },
]

export function AwardsSection() {
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
    <section ref={sectionRef} id="awards" className="py-16 px-6 bg-[#0a1628] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className={`text-4xl md:text-5xl mb-3 font-(family-name:--font-cormorant) transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Awards & Honors
          </h2>
          <div className="w-16 h-1 bg-[#b8860b]"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {awards.map((award, index) => (
            <div
              key={index}
              className={`bg-[#0f2744]/50 rounded-xl p-6 border border-blue-900/20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100 + 100}ms` }}
            >
              <h3 className="text-lg text-white font-(family-name:--font-cormorant) mb-2 font-semibold">{award.title}</h3>
              <p className="text-gray-400 text-sm font-sans leading-relaxed">{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
