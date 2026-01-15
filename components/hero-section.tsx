"use client"

import { Github, Linkedin, Mail, Download, ChevronDown, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState, useRef } from "react"

export function HeroSection() {
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

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="min-h-screen flex items-center justify-center relative px-6 py-20 bg-[#0a1628] text-white"
    >
      <div className="max-w-6xl w-full mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-4">
              <p className="text-[#b8860b] text-lg font-medium font-sans tracking-wider uppercase">Hello, I&apos;m</p>
              <h1 className={`text-6xl md:text-7xl lg:text-8xl font-bold text-white font-(family-name:--font-cormorant) transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Charbel Maroun
              </h1>
              <h2 className={`text-xl md:text-2xl text-gray-300 font-sans transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Software Engineer
              </h2>
              <p className={`text-gray-400 text-base font-sans transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                SWE Intern @ Pason Systems | Founding Engineer @ GenRep AI | Software Engineering @ UofC
              </p>
            </div>

            <p className={`text-gray-400 text-lg max-w-lg font-sans leading-relaxed transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Building scalable systems and automation that solve real-world problems. Passionate about backend engineering, distributed systems, and AI-driven solutions.
            </p>

            <div className={`flex items-center gap-4 pt-4 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-transform hover:bg-blue-900 h-14 w-14">
                <a href="https://github.com/Charbel12323" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-7 w-7 text-white" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-transform hover:bg-blue-900 h-14 w-14">
                <a href="https://linkedin.com/in/charbel-maroun-uofc" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-7 w-7 text-white" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-transform hover:bg-blue-900 h-14 w-14">
                <a href="mailto:charbel.maroun@ucalgary.ca" aria-label="Email">
                  <Mail className="h-7 w-7 text-white" />
                </a>
              </Button>
            </div>

            <div className={`pt-4 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Button className="gap-2 hover:scale-105 transition-transform bg-[#b8860b] text-white hover:bg-[#9a7309] text-lg px-8 py-6">
                <Download className="h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Right side - Profile image */}
          <div className={`flex justify-center md:justify-end transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 to-blue-500/10 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-slate-900/50 border-4 border-blue-800 flex items-center justify-center overflow-hidden hover:border-blue-600 transition-all duration-300">
                {/* Replace this User icon with an actual image */}
                <User className="h-32 w-32 md:h-40 md:w-40 text-blue-300" />
                {/* To use your own image, replace the above with: */}
                {/* <img src="/path-to-your-image.jpg" alt="Your Name" className="w-full h-full object-cover" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <span className="text-sm block mb-2">Scroll</span>
        <ChevronDown className="h-5 w-5 mx-auto" />
      </button>
    </section>
  )
}
