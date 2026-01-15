"use client"

import { Award, Trophy, Users, Presentation } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const awards = [
  {
    icon: Presentation,
    title: "IEEE ICAC 2025 Workshop",
    description: "Presented research in South Korea to 200+ international researchers",
    color: "blue",
  },
  {
    icon: Trophy,
    title: "3× Hackathon Winner",
    description: "Hack The Change YYC ($4,700) 2025, Code the Change ($2,000) 2024, BioHacks 2025",
    color: "amber",
  },
  {
    icon: Award,
    title: "Platform Calgary Early Incubator",
    description: "GenRep AI accepted into competitive startup accelerator program",
    color: "green",
  },
  {
    icon: Users,
    title: "President, Space Rover Club",
    description: "Led multi-division engineering team to third place at 2024 Rover Competition",
    color: "purple",
  },
]

const colorClasses = {
  blue: {
    bg: "bg-blue-900/30",
    border: "border-blue-800/50",
    icon: "text-blue-400",
    gradient: "from-blue-600 to-blue-700",
  },
  amber: {
    bg: "bg-amber-900/30",
    border: "border-amber-800/50",
    icon: "text-amber-400",
    gradient: "from-amber-600 to-amber-700",
  },
  green: {
    bg: "bg-green-900/30",
    border: "border-green-800/50",
    icon: "text-green-400",
    gradient: "from-green-600 to-green-700",
  },
  purple: {
    bg: "bg-purple-900/30",
    border: "border-purple-800/50",
    icon: "text-purple-400",
    gradient: "from-purple-600 to-purple-700",
  },
}

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
    <section ref={sectionRef} id="awards" className="py-24 px-6 bg-[#0a1628] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className={`text-4xl md:text-5xl mb-3 font-(family-name:--font-cormorant) transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Awards & Honors
          </h2>
          <div className="w-16 h-1 bg-[#b8860b]"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {awards.map((award, index) => {
            const colors = colorClasses[award.color as keyof typeof colorClasses]
            const Icon = award.icon

            return (
              <div
                key={index}
                className={`bg-[#0f2744] rounded-2xl p-8 border border-blue-900/30 transition-all duration-700 hover:shadow-xl hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100 + 100}ms` }}
              >
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 rounded-xl ${colors.bg} ${colors.border} border flex items-center justify-center shrink-0`}>
                    <Icon className={`h-8 w-8 ${colors.icon}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl text-white font-(family-name:--font-cormorant) mb-2">{award.title}</h3>
                    <p className="text-gray-300 text-base font-sans leading-relaxed">{award.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
