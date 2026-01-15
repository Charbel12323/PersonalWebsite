"use client"

import { Building2 } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const experiences = [
  {
    company: "Pason Systems",
    role: "Software Engineering Intern",
    duration: "May 2025 – Present",
    location: "Calgary, AB",
    description: [
      "Deployed automation reducing system downtime from ~3 hours to ~30 minutes across 1,000+ production Linux systems",
      "Engineered scripts for Splunk logging and telemetry, eliminating field tech visits and saving ~$100K/month",
      "Migrated CI/CD pipelines to Dockerized AWS EC2 environments using GitHub Actions, eliminating weekly failures",
      "Implemented integration/regression testing within CI pipelines, reducing post-deployment incidents by 98%",
    ],
  },
  {
    company: "HXI Research Lab",
    role: "Backend Engineering Intern",
    duration: "Apr 2025 – Aug 2025",
    location: "Calgary, AB",
    description: [
      "Built a real-time hydrogen-pipeline digital twin that improved leak-detection accuracy from 78% to 84%",
      "Designed a scalable backend for live telemetry processing, sustaining 7,000+ req/sec under production-level load",
      "Re-architected time-series data pipelines handling 15M+ events, cutting latency from ~500 ms to under 100 ms",
    ],
  },
  {
    company: "GenRep AI",
    role: "Founding Engineer",
    duration: "Jul 2024 – Feb 2025",
    location: "Calgary, AB",
    description: [
      "Led a team of 5 engineers to architect and deliver a scalable cloud platform for real-time meeting automation",
      "Designed and load-tested an event-driven backend, sustaining 5,000 req/sec under simulated production traffic",
      "Implemented real-time transcription and RAG pipeline, improving action item extraction accuracy from 60% to 90%",
    ],
  },
]

export function ExperienceSection() {
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

  return (
    <section ref={sectionRef} id="experience" className="py-24 px-6 bg-[#fcfcfb]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className={`text-4xl md:text-5xl text-slate-900 mb-3 font-(family-name:--font-cormorant) transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Experience
          </h2>
          <div className="w-16 h-1 bg-[#b8860b]"></div>
        </div>

        <div className="relative">
          {/* Connected vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-amber-600/30"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: `${index * 100 + 100}ms` }}>
                {/* Timeline dot */}
                <div className="absolute left-[22px] top-6 w-[5px] h-[5px] rounded-full bg-amber-600/30 z-10"></div>

                {/* Card */}
                <div className="ml-16 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-amber-100/50 hover:border-amber-200/70 group">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-600 to-amber-700 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Building2 className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-stone-900 font-(family-name:--font-cormorant)">{exp.role}</h3>
                        <p className="text-amber-800 font-semibold font-sans">{exp.company}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-stone-700 font-sans">{exp.duration}</p>
                      <p className="text-sm text-stone-600 font-sans">{exp.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-3 mt-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-stone-700 text-base leading-relaxed flex gap-3 font-sans">
                        <span className="text-amber-700 font-bold mt-0.5 shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
