"use client"

import { useEffect, useRef, useState } from "react"

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "Java", "C/C++", "TypeScript", "JavaScript", "SQL", "Bash"],
  },
  {
    title: "Frameworks",
    skills: [
      "Next.js",
      "React",
      "Node.js",
      "Express",
      "Spring Boot",
      "Flask",
      "FastAPI",
      "LangGraph",
    ],
  },
  {
    title: "Developer Tools & Infrastructure",
    skills: ["Git", "AWS", "Docker", "Jenkins", "Kafka", "Redis", "WebSockets", "Linux/Unix", "DynamoDB", "PostgreSQL"],
  },
]

export function SkillsSection() {
  const [visibleCategories, setVisibleCategories] = useState<Set<number>>(new Set())
  const [headerVisible, setHeaderVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const categoryRefs = useRef<(HTMLDivElement | null)[]>([])

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

  // Observer for individual categories
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = categoryRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1) {
              setVisibleCategories((prev) => new Set([...prev, index]))
            }
          }
        })
      },
      { threshold: 0.3, rootMargin: "0px 0px -30px 0px" }
    )

    categoryRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      categoryRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  return (
    <section ref={sectionRef} id="skills" className="py-24 px-6 bg-[#fcfcfb]">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className={`text-4xl md:text-5xl text-slate-900 mb-3 font-(family-name:--font-cormorant) transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Skills
          </h2>
          <div className="w-16 h-1 bg-[#b8860b]"></div>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              ref={(el) => { categoryRefs.current[categoryIndex] = el }}
              className={`transition-all duration-700 ${visibleCategories.has(categoryIndex) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              {/* Category header */}
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-sm font-semibold text-[#b8860b] uppercase tracking-widest font-sans">
                  {category.title}
                </h3>
                <div className="flex-1 h-px bg-[#b8860b]/20"></div>
              </div>

              {/* Skills grid */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-gray-200 rounded-lg hover:border-[#b8860b]/50 hover:text-[#b8860b] transition-all duration-300 font-sans"
                    style={{
                      transitionDelay: visibleCategories.has(categoryIndex) ? `${skillIndex * 30}ms` : '0ms'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
