"use client"

import { Badge } from "@/components/ui/badge"
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
      "Flask",
      "PyTorch",
      "LangChain",
      "Kafka",
      "Tailwind CSS",
    ],
  },
  {
    title: "Developer Tools",
    skills: ["AWS", "Azure", "Docker", "Kubernetes", "Git", "GitHub Actions", "PostgreSQL", "MongoDB", "Redis", "Splunk", "Linux"],
  },
]

export function SkillsSection() {
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
    <section ref={sectionRef} id="skills" className="py-24 px-6 bg-[#fcfcfb]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className={`text-4xl md:text-5xl text-slate-900 mb-3 font-(family-name:--font-cormorant) transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Skills
          </h2>
          <div className="w-16 h-1 bg-[#b8860b]"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={category.title} className={`bg-white rounded-3xl p-8 border border-amber-900/20 shadow-sm hover:shadow-md transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100 + 100}ms` }}>
              <h3 className="text-sm font-semibold text-stone-700 mb-6 uppercase tracking-wider font-(family-name:--font-cormorant)">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <Badge key={skill} className="text-sm bg-[#b8860b] text-white hover:bg-[#a0750a] border border-amber-900/10 rounded-full px-4 py-2 font-sans">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
