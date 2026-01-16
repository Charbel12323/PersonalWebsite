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
      className="min-h-screen flex items-center justify-center relative px-6 py-20 bg-[#0a1628] text-white"
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
                Software Engineer
              </h2>
              <p className={`text-gray-400 text-base font-sans transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                SWE @ Pason | Prev @ HXI & GenRep AI | SE @ UofC
              </p>
            </div>

            <p className={`text-gray-300 text-lg font-sans italic transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              &ldquo;Talk is cheap. Show me the code.&rdquo; — Linus Torvalds
            </p>

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
              <Button className="gap-2 hover:scale-105 transition-transform bg-[#b8860b] text-white hover:bg-[#9a7309] text-lg px-8 py-6 uppercase tracking-wider">
                <Download className="h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Right side - Profile Image */}
          <div className={`flex items-center justify-center transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="w-[28rem] h-[36rem] rounded-[50%] border-4 border-[#b8860b] overflow-hidden bg-slate-800 flex items-center justify-center">
              <Image
                src="/logos/CEO.png"
                alt="Charbel Maroun"
                width={448}
                height={576}
                className="object-contain w-full h-full scale-110"
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
