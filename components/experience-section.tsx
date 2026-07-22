"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

type Experience = {
  company: string
  role: string
  duration: string
  location: string
  logo: string | null
  description: string[]
}

const experiences: Experience[] = [
  {
    company: "Deloitte",
    role: "Forward Deployed Engineer Intern",
    duration: "May 2026 – Dec 2026",
    location: "",
    logo: "/logos/DeloitteNewLogo.jpg",
    description: [],
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
    role: "Founder",
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
  const timelineRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
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

  // Gold progress line that fills as the timeline scrolls past
  useEffect(() => {
    let raf = 0
    const update = () => {
      const track = timelineRef.current
      const fill = progressRef.current
      if (!track || !fill) return
      const rect = track.getBoundingClientRect()
      const anchor = window.innerHeight * 0.7
      const progress = Math.min(1, Math.max(0, (anchor - rect.top) / rect.height))
      fill.style.height = `${progress * 100}%`
    }
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  return (
    <section ref={sectionRef} id="experience" className="py-24 px-6 bg-[#fbf7ef] overflow-x-clip">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <h2 className={`text-4xl md:text-5xl text-slate-900 mb-3 font-(family-name:--font-cormorant) transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Experience
          </h2>
          <div className="w-16 h-1 bg-[#b8860b]"></div>
        </div>

        <div ref={timelineRef} className="relative">
          {/* Timeline track, fading out at both ends */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-[#b8860b]/25 to-transparent md:-translate-x-px"></div>

          {/* Gold fill that follows scroll */}
          <div
            ref={progressRef}
            className="absolute left-0 md:left-1/2 top-0 w-px bg-linear-to-b from-[#b8860b]/40 via-[#b8860b] to-[#d4a017] md:-translate-x-px transition-[height] duration-200 ease-out"
            style={{ height: 0 }}
          >
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#d4a017] blur-[1px]"></div>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isVisible = visibleCards.has(index)
              const isLeft = index % 2 === 0
              const years = exp.duration.match(/\d{4}/g)
              const year = years
                ? years.length > 1 && years[1] !== years[0]
                  ? `${years[0]}–${years[1].slice(2)}`
                  : years[0]
                : undefined
              return (
                <div
                  key={index}
                  ref={(el) => { cardRefs.current[index] = el }}
                  className={`relative group transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 translate-y-6 md:translate-y-0 ${isLeft ? 'md:-translate-x-8' : 'md:translate-x-8'}`}`}
                >
                  {/* Ghost year on the empty side */}
                  {year && (
                    <span
                      aria-hidden
                      className={`hidden md:block absolute top-1 select-none leading-none text-6xl lg:text-7xl font-semibold text-[#b8860b]/15 font-(family-name:--font-cormorant) transition-all duration-1000 delay-300 ${isLeft ? 'left-[calc(50%+4rem)]' : 'right-[calc(50%+4rem)]'} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    >
                      {year}
                    </span>
                  )}

                  {/* Curved connector, drawn in like a pen stroke (desktop) */}
                  <svg
                    aria-hidden
                    className={`hidden md:block absolute top-3 w-16 h-14 overflow-visible ${isLeft ? 'right-1/2' : 'left-1/2'}`}
                    viewBox="0 0 64 56"
                    fill="none"
                  >
                    <path
                      d={isLeft ? "M 64 28 C 44 28, 20 12, 0 12" : "M 0 28 C 20 28, 44 12, 64 12"}
                      stroke="#b8860b"
                      strokeOpacity="0.5"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      pathLength={100}
                      strokeDasharray={100}
                      strokeDashoffset={isVisible ? 0 : 100}
                      className="transition-[stroke-dashoffset] duration-700 delay-200 ease-out"
                    />
                  </svg>

                  {/* Curved connector (mobile) */}
                  <svg
                    aria-hidden
                    className="md:hidden absolute top-3 left-0 w-8 h-14 overflow-visible"
                    viewBox="0 0 32 56"
                    fill="none"
                  >
                    <path
                      d="M 0 28 C 10 28, 20 12, 32 12"
                      stroke="#b8860b"
                      strokeOpacity="0.5"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      pathLength={100}
                      strokeDasharray={100}
                      strokeDashoffset={isVisible ? 0 : 100}
                      className="transition-[stroke-dashoffset] duration-700 delay-200 ease-out"
                    />
                  </svg>

                  {/* Timeline node, lights up as the line reaches it */}
                  <div
                    className={`absolute left-0 md:left-1/2 top-8 w-4 h-4 -translate-x-1/2 rounded-full border-2 z-10 transition-all duration-500 group-hover:scale-125 ${isVisible ? 'border-[#b8860b] bg-[#d4a017] shadow-[0_0_10px_rgba(212,160,23,0.55)] scale-100' : 'border-[#b8860b]/40 bg-[#fbf7ef] scale-75'}`}
                  ></div>

                  {/* Card - alternating sides on desktop */}
                  <div className={`ml-8 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:border-[#b8860b]/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                      {/* Header */}
                      <div className="mb-4">
                        <div className="flex items-start justify-between gap-4 mb-1">
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-slate-900 font-(family-name:--font-cormorant)">
                              {exp.role}
                            </h3>
                            <p className="text-[#8f6a08] font-medium font-sans">{exp.company}</p>
                            {(exp.duration || exp.location) && (
                              <div className="flex flex-wrap items-center gap-2 mt-2 font-sans">
                                {exp.duration && (
                                  <span className="inline-flex px-2.5 py-0.5 rounded-full bg-[#b8860b]/10 text-[#8f6a08] text-xs font-medium">
                                    {exp.duration}
                                  </span>
                                )}
                                {exp.location && <span className="text-sm text-gray-500">{exp.location}</span>}
                              </div>
                            )}
                          </div>
                          {exp.logo && (
                            <div className="shrink-0">
                              <Image
                                src={exp.logo}
                                alt={`${exp.company} logo`}
                                width={160}
                                height={64}
                                className="h-8 w-auto max-w-24 rounded-lg object-contain"
                              />
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Description */}
                      {exp.description.length > 0 && (
                        <ul className="space-y-2">
                          {exp.description.map((item, i) => (
                            <li key={i} className="text-gray-600 text-sm leading-relaxed flex gap-2 font-sans">
                              <span className="text-[#8f6a08] mt-1.5 shrink-0">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
