"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Mail, Linkedin, Github, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    const form = new FormData()
    form.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "")
    form.append("name", formData.name)
    form.append("email", formData.email)
    form.append("message", formData.message)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      })

      const data = await response.json()

      if (data.success) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section ref={sectionRef} id="contact" className="py-24 px-6 bg-[#0a1628] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-4">
          <h2 className={`text-4xl md:text-5xl mb-3 font-(family-name:--font-cormorant) transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-[#b8860b]"></div>
        </div>
        <p className={`text-gray-300 mb-12 max-w-2xl text-lg font-sans transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat. Feel free
          to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center">
                <Mail className="h-5 w-5 text-[#b8860b]" />
              </div>
              <div>
                <p className="text-sm text-gray-400 font-sans">Email</p>
                <a href="mailto:charbel.maroun@ucalgary.ca" className="text-white hover:text-gray-200 transition-colors font-sans">
                  charbel.maroun@ucalgary.ca
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center">
                <Linkedin className="h-5 w-5 text-[#b8860b]" />
              </div>
              <div>
                <p className="text-sm text-gray-400 font-sans">LinkedIn</p>
                <a
                  href="https://linkedin.com/in/charbel-maroun-uofc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-200 transition-colors font-sans"
                >
                  linkedin.com/in/charbel-maroun-uofc
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center">
                <Github className="h-5 w-5 text-[#b8860b]" />
              </div>
              <div>
                <p className="text-sm text-gray-400 font-sans">GitHub</p>
                <a
                  href="https://github.com/Charbel12323"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-200 transition-colors font-sans"
                >
                  github.com/Charbel12323
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center">
                <Phone className="h-5 w-5 text-[#b8860b]" />
              </div>
              <div>
                <p className="text-sm text-gray-400 font-sans">Phone</p>
                <a href="tel:+18254880972" className="text-white hover:text-gray-200 transition-colors font-sans">
                  +1 (825) 488-0972
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className={`space-y-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-200">Name</Label>
              <Input
                id="name"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-slate-900 border-[#b8860b] text-white placeholder:text-gray-400"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-200">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-slate-900 border-[#b8860b] text-white placeholder:text-gray-400"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-gray-200">Message</Label>
              <Textarea
                id="message"
                placeholder="Your message..."
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="bg-slate-900 border-[#b8860b] text-white placeholder:text-gray-400"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-[#b8860b] text-white hover:bg-[#9a7309]"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>

            {submitStatus === "success" && (
              <p className="text-[#b8860b] text-center font-sans">I&apos;ll get back to you as soon as I can!</p>
            )}
            {submitStatus === "error" && (
              <p className="text-red-400 text-center font-sans">Something went wrong. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
