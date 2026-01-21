"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const experiences = [
  {
    company: "Intelligent Navigation and Mapping Lab",
    role: "ML Intern",
    duration: "Jan 2026 – May 2026",
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
      "Developed monitoring automation for over 1,000 Linux workstations and migrated legacy CI/CD pipelines to AWS-based environments.",
      "Improved backend services through API enhancements and automated testing, resulting in increased scalability, stronger security, and a 65% reduction in response times.",
      "Established reliable CI pipelines with integrated unit and integration testing to support consistent, high-quality releases.",
    ],
  },
  {
    company: "HXI Research Lab",
    role: "Backend Engineering Intern",
    duration: "Jan 2025 – May 2025",
    location: "Calgary, AB",
    logo: "/logos/HXI.png",
    description: [
      "Designed and deployed a scalable, load-balanced backend on AWS using distributed microservices to support real-time telemetry ingestion, handling 7,000 req/sec.",
      "Optimized DynamoDB data models and partitioning to improve throughput and reduce latency from ~500 ms to under 100 ms while handling thousands of requests per second.",
      "Introduced caching strategies for high-read access patterns, reducing database load and improving read latency for frequently accessed telemetry data.",
    ],
  },
  {
    company: "GenRep AI",
    role: "Founding Engineer",
    duration: "Jul 2024 – Feb 2025",
    location: "Calgary, AB",
    logo: "/logos/GenRepLogo.png",
    description: [
      "Led a team of five engineers to architect and deliver a scalable full-stack web and cloud platform for real-time meeting automation.",
      "Designed and implemented REST APIs and backend services using Node.js and Express, supporting peak traffic of 10K requests per day; achieved full API test coverage with Chai, reducing production bug reports by 70%.",
      "Built end-to-end features spanning frontend interfaces and backend services, including real-time transcription and a retrieval-augmented generation (RAG) pipeline that improved action-item extraction accuracy from 60% to 90%.",
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
