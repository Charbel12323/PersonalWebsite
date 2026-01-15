"use client"

import { ExternalLink, Laptop, Brain, Activity } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useEffect, useRef, useState } from "react"

const projects = [
  {
    icon: Brain,
    title: "Jira Automation Engine",
    subtitle: "Agentic AI System for Workflow Automation",
    description:
      "Built an agentic AI system that automated Jira workflows and was pitched to and adopted by Pason Systems. Integrated retrieval-augmented search across 10K+ documents, improving accuracy from 65% to 80%. Orchestrated a multi-step pipeline with tool orchestration and self-verification, reducing hallucination from 20% to 5%.",
    techStack: ["Python", "Next.js", "LangChain", "LangGraph", "Pinecone", "MySQL"],
    highlights: [
      "Pitched to and adopted by Pason Systems",
      "Improved RAG accuracy from 65% to 80% across 10K+ documents",
      "Reduced AI hallucination from 20% to 5% with self-verification",
    ],
  },
  {
    icon: Activity,
    title: "Virtual Quake",
    subtitle: "Physics-Based Earthquake Simulation Engine",
    description:
      "Built a physics-based earthquake simulation engine supporting 80+ structural scenarios, enabling large-scale stress testing. Parallelized simulation workloads across a cloud cluster, reducing per-scenario runtime from 20 minutes to 6 minutes.",
    techStack: ["JavaScript", "Python", "Next.js", "AWS", "PyTorch", "XGBoost"],
    highlights: [
      "Supports 80+ structural scenarios for comprehensive testing",
      "Reduced runtime from 20 minutes to 6 minutes via cloud parallelization",
      "Machine learning-powered predictive modeling",
    ],
  },
]

export function ProjectSection() {
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
    <section ref={sectionRef} id="projects" className="py-24 px-6 bg-[#f5f3f0]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className={`text-4xl md:text-5xl text-slate-900 mb-3 font-(family-name:--font-cormorant) transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-[#b8860b]"></div>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => {
            const Icon = project.icon
            const isEven = index % 2 === 0

            return (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-8 items-center ${!isEven ? "md:flex-row-reverse" : ""}`}
              >
                {isEven ? (
                  <>
                    <div className={`h-64 md:h-80 rounded-2xl border-2 border-amber-300 bg-white flex items-center justify-center transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: `${index * 100 + 100}ms` }}>
                      <Icon className="h-32 w-32 text-amber-600" />
                    </div>

                    <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: `${index * 100 + 200}ms` }}>
                      <h3 className="text-3xl text-slate-900 mb-2 font-(family-name:--font-cormorant)">{project.title}</h3>
                      <p className="text-amber-900 mb-4 font-semibold text-lg font-sans">{project.subtitle}</p>
                      <p className="text-stone-800 mb-6 leading-relaxed text-base font-sans">
                        {project.description}
                      </p>

                      <ul className="space-y-2 mb-6">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="text-base text-stone-800 flex gap-2 font-sans">
                            <span className="text-amber-700 font-bold">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.techStack.map((tech) => (
                          <Badge key={tech} className="text-sm bg-amber-200 text-slate-900 hover:bg-amber-300 border-amber-300 font-sans">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <Button className="gap-2 bg-slate-900 text-white hover:bg-slate-800">
                        <ExternalLink className="h-4 w-4" />
                        View Project
                      </Button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: `${index * 100 + 200}ms` }}>
                      <h3 className="text-3xl text-slate-900 mb-2 font-(family-name:--font-cormorant)">{project.title}</h3>
                      <p className="text-amber-900 mb-4 font-semibold text-lg font-sans">{project.subtitle}</p>
                      <p className="text-stone-800 mb-6 leading-relaxed text-base font-sans">
                        {project.description}
                      </p>

                      <ul className="space-y-2 mb-6">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="text-base text-stone-800 flex gap-2 font-sans">
                            <span className="text-amber-700 font-bold">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.techStack.map((tech) => (
                          <Badge key={tech} className="text-sm bg-amber-200 text-slate-900 hover:bg-amber-300 border-amber-300 font-sans">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <Button className="gap-2 bg-slate-900 text-white hover:bg-slate-800">
                        <ExternalLink className="h-4 w-4" />
                        View Project
                      </Button>
                    </div>

                    <div className={`h-64 md:h-80 rounded-2xl border-2 border-amber-300 bg-white flex items-center justify-center transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: `${index * 100 + 100}ms` }}>
                      <Icon className="h-32 w-32 text-amber-600" />
                    </div>
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
