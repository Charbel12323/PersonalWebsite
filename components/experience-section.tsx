"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const experiences = [
  {
    company: "Intelligent Navigation and Mapping Lab",
    role: "ML Intern",
    duration: "May 2026 – Aug 2026",
    location: "Calgary, AB",
    logo: null,
    description: [
      "Incoming ML intern working on autonomous driving and navigation in partnership with Hexagon Technologies.",
    ],
  },
  {
    company: "Pason Systems",
    role: "Software Engineering Intern",
    duration: "May 2025 – May 2026",
    location: "Calgary, AB",
    logo: "/logos/Pason.png",
    description: [
      "Built Python and Java automation tools to reduce downtime by 45% across 1,000+ Linux systems",
      "Engineered Splunk logging scripts, eliminating field tech visits and saving $100K/month",
      "Migrated legacy CI/CD to AWS EC2 containers, cutting deployment time by 90%",
      "Implemented integration/regression testing in CI pipelines, reducing post-deployment incidents by 98%",
    ],
  },
  {
    company: "HXI Research Lab",
    role: "Backend Engineering Intern",
    duration: "Jan 2025 – May 2025",
    location: "Calgary, AB",
    logo: "/logos/HXI.png",
    description: [
      "Designed a scalable AWS backend for real-time telemetry ingestion, handling 7,000+ req/sec",
      "Migrated to Kafka to buffer bursty telemetry, stabilizing peak-load latency by 70%",
      "Optimized DynamoDB partitioning, reducing request latency from 500ms to 100ms",
      "Introduced Redis caching, reducing database read traffic by 40%",
    ],
  },
  {
    company: "GenRep AI",
    role: "Full Stack Developer",
    duration: "May 2024 – Aug 2025",
    location: "Calgary, AB",
    logo: "/logos/GenRepLogo.png",
    description: [
      "Led a team of five engineers to build a full-stack meeting automation platform",
      "Enhanced REST APIs with pagination, retry mechanisms, caching, and JWT auth, boosting performance by 65%",
      "Architected SQL/NoSQL schemas with AWS RDS/DynamoDB, reducing write latency by 60%",
    ],
  },
]

export function ExperienceSection() {
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
      { threshold: 0.1 }
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
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
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
    <section ref={sectionRef} id="experience" className="py-24 px-6 bg-[#fcfcfb]">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className={`text-4xl md:text-5xl text-slate-900 mb-3 font-(family-name:--font-cormorant) transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Experience
          </h2>
          <div className="w-16 h-1 bg-[#b8860b]"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-[#b8860b]/20 md:-translate-x-px"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                ref={(el) => { cardRefs.current[index] = el }}
                className={`relative transition-all duration-700 ${visibleCards.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-8 w-3 h-3 -translate-x-1/2 rounded-full bg-[#b8860b] border-4 border-[#fcfcfb] z-10"></div>

                {/* Card - alternating sides on desktop */}
                <div className={`ml-8 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="bg-white rounded-xl p-6 border border-gray-100 hover:border-[#b8860b]/30 hover:shadow-lg transition-all duration-300">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-start justify-between gap-4 mb-1">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-slate-900 font-(family-name:--font-cormorant)">
                            {exp.role}
                          </h3>
                          <p className="text-[#b8860b] font-medium font-sans">{exp.company}</p>
                          <div className="flex items-center gap-2 mt-2 text-sm text-gray-500 font-sans">
                            <span>{exp.duration}</span>
                            <span className="text-gray-300">•</span>
                            <span>{exp.location}</span>
                          </div>
                        </div>
                        {exp.logo && (
                          <div className="shrink-0">
                            <Image
                              src={exp.logo}
                              alt={`${exp.company} logo`}
                              width={48}
                              height={48}
                              className="rounded-lg object-contain"
                            />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-600 text-sm leading-relaxed flex gap-2 font-sans">
                          <span className="text-[#b8860b] mt-1.5 shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
