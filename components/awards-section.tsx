"use client"

import { useEffect, useRef, useState } from "react"

const awards = [
  {
    title: "IEEE ICAC 2025 Workshop",
    description: "Presented research in South Korea to 200+ international researchers",
    category: "Research",
  },
  {
    title: "3× Hackathon Winner",
    description: "Hack The Change YYC ($4,700) 2025, Code the Change ($2,000) 2024, BioHacks 2025",
    category: "Competition",
  },
  {
    title: "Platform Calgary Early Incubator",
    description: "GenRep AI accepted into competitive startup accelerator program",
    category: "Entrepreneurship",
  },
  {
    title: "3× Hackathon Winner",
    description: "Won multiple competitive hackathons: Hack The Change YYC, Code the Change, and BioHacks",
    category: "Competition",
  },
]

export function AwardsSection() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
  const [headerVisible, setHeaderVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  // Observer for header
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHeaderVisible(true)
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

  // Observer for individual cards
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1) {
              setVisibleCards((prev) => new Set([...prev, index]))
            }
          }
        })
      },
      { threshold: 0.3, rootMargin: "0px 0px -30px 0px" }
    )

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  return (
    <section ref={sectionRef} id="awards" className="py-20 px-6 bg-[#0a1628] text-white">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className={`text-4xl md:text-5xl mb-3 font-(family-name:--font-cormorant) transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Awards & Honors
          </h2>
          <div className="w-16 h-1 bg-[#b8860b]"></div>
        </div>

        <div className="space-y-4">
          {awards.map((award, index) => (
            <div
              key={index}
              ref={(el) => { cardRefs.current[index] = el }}
              className={`group transition-all duration-700 ${visibleCards.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
              <div className="flex items-start gap-6 py-5 border-b border-white/10 hover:border-[#b8860b]/40 transition-colors duration-300">
                {/* Category label */}
                <span className="shrink-0 w-36 text-xs font-medium uppercase tracking-wider text-[#b8860b] pt-1 font-sans">
                  {award.category}
                </span>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg text-white font-(family-name:--font-cormorant) font-semibold mb-1 group-hover:text-[#d4a017] transition-colors duration-300">
                    {award.title}
                  </h3>
                  <p className="text-gray-400 text-sm font-sans leading-relaxed">
                    {award.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
