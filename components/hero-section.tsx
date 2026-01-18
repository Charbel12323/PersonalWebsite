"use client"

import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react"
import Image from "next/image"
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
      className="min-h-screen flex items-center justify-center relative px-6 pt-20 pb-8 bg-[#0a1628] text-white"
    >
      <div className="max-w-6xl w-full mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-4">
              <p className="text-[#b8860b] text-lg font-medium font-sans tracking-wider uppercase">Hello, I&apos;m</p>
              <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold text-white font-(family-name:--font-cormorant) transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Charbel Maroun
              </h1>
              <h2 className={`text-xl md:text-2xl text-gray-300 font-sans transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                4th Year Software Engineer @ UofC
              </h2>
              <p className={`text-gray-400 text-base font-sans transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                SWE @ Pason Systems | Prev @ HXI Lab & GenRep AI
              </p>
              <a
                href="https://ieeexplore.ieee.org/document/11236194"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 text-base font-sans hover:text-[#b8860b] transition-all duration-700 delay-350 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                IEEE Publication: Digital Twin for Pipeline Leak Simulation
              </a>
            </div>

            <div className={`flex items-center gap-4 pt-4 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-transform hover:bg-blue-900 h-14 w-14 rounded-full">
                <a href="https://github.com/Charbel12323" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-7 w-7 text-white" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-transform hover:bg-blue-900 h-14 w-14 rounded-full">
                <a href="https://linkedin.com/in/charbel-maroun-uofc" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-7 w-7 text-white" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-transform hover:bg-blue-900 h-14 w-14 rounded-full">
                <a href="mailto:charbel.maroun@ucalgary.ca" aria-label="Email">
                  <Mail className="h-7 w-7 text-white" />
                </a>
              </Button>
            </div>

            <div className={`pt-4 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Button asChild className="gap-2 hover:scale-105 transition-transform bg-[#b8860b] text-white hover:bg-[#9a7309] text-lg px-8 py-6 uppercase tracking-wider">
                <a href="/CharbelOfficialResume.pdf" download>
                  <Download className="h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Right side - Profile Image */}
          <div className={`flex items-center justify-center transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="w-[20rem] h-[28rem] rounded-3xl border-4 border-[#b8860b] overflow-hidden bg-gray-300">
              <Image
                src="/logos/CEO.png"
                alt="Charbel Maroun"
                width={600}
                height={600}
                className="object-contain w-full h-full scale-105"
              />
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
