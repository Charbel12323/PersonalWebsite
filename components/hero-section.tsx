"use client"

import { Github, Linkedin, Mail, Download, ChevronDown, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 w-32 h-32 mx-auto rounded-full bg-card border-2 border-border flex items-center justify-center">
          <User className="h-16 w-16 text-muted-foreground" />
        </div>

        <p className="text-muted-foreground mb-2">Hello, I&apos;m</p>
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4">John Doe</h1>
        <h2 className="text-xl md:text-2xl text-primary mb-4">Software Engineer</h2>
        <p className="text-muted-foreground mb-2">SWE @ TechCorp | Prev @ StartupXYZ | CS @ University</p>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
          Passionate about building software that makes an impact.
        </p>

        <div className="flex items-center justify-center gap-4 mb-8">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:hello@example.com" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>

        <Button className="gap-2">
          <Download className="h-4 w-4" />
          Download Resume
        </Button>
      </div>

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
