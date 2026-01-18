"use client"

import { useEffect, useRef, useState } from "react"
import { Award, Trophy, Rocket, Users } from "lucide-react"

const awards = [
  {
    icon: Award,
    title: "IEEE ICAC 2025 Workshop",
    description: "Presented research in South Korea to 200+ international researchers",
    highlight: "International",
  },
  {
    icon: Trophy,
    title: "3× Hackathon Winner",
    description: "Hack The Change YYC ($4,700) 2025, Code the Change ($2,000) 2024, BioHacks 2025",
    highlight: "$6,700+ Won",
  },
  {
    icon: Rocket,
    title: "Platform Calgary Early Incubator",
    description: "GenRep AI accepted into competitive startup accelerator program",
    highlight: "Startup",
  },
  {
    icon: Users,
    title: "President, Space Rover Club",
    description: "Led multi-division engineering team to third place at 2024 Rover Competition",
    highlight: "Leadership",
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
    <section ref={sectionRef} id="awards" className="py-20 px-6 bg-[#0a1628] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className={`text-4xl md:text-5xl mb-3 font-(family-name:--font-cormorant) transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Awards & Honors
          </h2>
          <div className="w-16 h-1 bg-[#b8860b]"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {awards.map((award, index) => {
            const Icon = award.icon
            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl transition-all duration-700 hover:scale-[1.02] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100 + 100}ms` }}
              >
                {/* Background with gradient border effect */}
                <div className="absolute inset-0 bg-linear-to-br from-[#b8860b]/30 via-transparent to-[#b8860b]/10 rounded-2xl" />
                <div className="absolute inset-px bg-[#0a1628] rounded-2xl" />

                {/* Content */}
                <div className="relative p-6 flex gap-5">
                  {/* Icon container */}
                  <div className="shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-linear-to-br from-[#b8860b] to-[#d4a017] flex items-center justify-center shadow-lg shadow-[#b8860b]/20 group-hover:shadow-[#b8860b]/40 transition-shadow duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Text content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="text-xl text-white font-(family-name:--font-cormorant) font-semibold leading-tight">
                        {award.title}
                      </h3>
                      <span className="shrink-0 px-3 py-1 text-xs font-medium bg-[#b8860b]/20 text-[#d4a017] rounded-full border border-[#b8860b]/30">
                        {award.highlight}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm font-sans leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-bl from-[#b8860b]/10 to-transparent rounded-bl-full" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
