"use client"

import { ExternalLink, Laptop, Brain, Activity, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState, useCallback, useMemo } from "react"
import Image from "next/image"

const projects = [
  {
    icon: Brain,
    image: "/logos/JiraAutomationEnginee.png",
    title: "Jira Automation Engine",
    subtitle: "Agentic AI System for Workflow Automation",
    description:
      "Built an agentic AI system that automated Jira workflows and was pitched to and adopted by Pason Systems. Integrated retrieval-augmented search across 10K+ documents, improving accuracy from 65% to 80%. Orchestrated a multi-step pipeline with tool orchestration and self-verification, reducing hallucination from 20% to 5%.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "DynamoDB", "Pinecone", "Python", "LangGraph", "Docker", "Redis"],
    highlights: [
      "Pitched to and adopted by Pason Systems",
      "Improved RAG accuracy from 65% to 80% across 10K+ documents",
      "Reduced AI hallucination from 20% to 5% with self-verification",
    ],
  },
  {
    icon: Activity,
    image: "/logos/Vqq.png",
    title: "Virtual Quake",
    subtitle: "Physics-Based Earthquake Simulation Engine",
    description:
      "Built a physics-based earthquake simulation engine supporting 80+ structural scenarios, enabling large-scale stress testing. Parallelized simulation workloads across a cloud cluster, reducing per-scenario runtime from 20 minutes to 6 minutes.",
    techStack: ["Python", "JavaScript", "Next.js", "AWS", "FastAPI", "Redis", "MongoDB", "AWS Lambda"],
    highlights: [
      "Supports 80+ structural scenarios for comprehensive testing",
      "Reduced runtime from 20 minutes to 6 minutes via cloud parallelization",
      "Machine learning-powered predictive modeling",
    ],
  },
]

export function ProjectSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentProject, setCurrentProject] = useState(0)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

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

  // Auto-play carousel every 30 seconds (disabled if user prefers reduced motion)
  useEffect(() => {
    if (prefersReducedMotion) return

    const timer = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length)
    }, 30000)

    return () => clearInterval(timer)
  }, [prefersReducedMotion])

  const nextProject = useCallback(() => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }, [])

  const prevProject = useCallback(() => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }, [])

  const project = useMemo(() => projects[currentProject], [currentProject])
  const Icon = project.icon

  return (
    <section ref={sectionRef} id="projects" className="py-24 px-6 bg-[#f5f3f0]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className={`text-4xl md:text-5xl text-slate-900 mb-3 font-(family-name:--font-cormorant) transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-[#b8860b]"></div>
        </div>

        <div className="relative overflow-hidden">
          {/* Carousel Content */}
          <div className="grid md:grid-cols-2 gap-8 items-start h-[600px] md:h-[420px]">
            <div
              key={`icon-${currentProject}`}
              className="h-64 md:h-80 rounded-2xl border-2 border-amber-300 bg-white flex items-center justify-center animate-in fade-in slide-in-from-left duration-500"
            >
              {project.image ? (
                <div className="relative w-full h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    quality={85}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover rounded-2xl"
                  />
                </div>
              ) : (
                <Icon className="h-32 w-32 text-amber-600" />
              )}
            </div>

            <div
              key={`content-${currentProject}`}
              className="h-[320px] md:h-[420px] overflow-hidden animate-in fade-in slide-in-from-right duration-500"
            >
              <h3 className="text-3xl text-slate-900 mb-2 font-(family-name:--font-cormorant)">{project.title}</h3>
              <p className="text-amber-900 mb-4 font-semibold text-lg font-sans">{project.subtitle}</p>
              <p className="text-stone-800 mb-6 leading-relaxed text-base font-sans line-clamp-4">
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

              <div className="flex flex-wrap gap-3 mb-6">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 text-sm font-medium bg-linear-to-r from-[#b8860b] to-[#d4a017] text-white rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 font-sans"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevProject}
              className="h-12 w-12 rounded-full bg-[#b8860b] hover:bg-[#9a7309] transition-colors duration-300 flex items-center justify-center"
              aria-label="Previous project"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentProject ? "w-8 bg-[#b8860b]" : "w-2 bg-[#b8860b]/30"
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextProject}
              className="h-12 w-12 rounded-full bg-[#b8860b] hover:bg-[#9a7309] transition-colors duration-300 flex items-center justify-center"
              aria-label="Next project"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
