import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { EducationSection } from "@/components/education-section"
import { AwardsSection } from "@/components/awards-section"
import { ProjectSection } from "@/components/project-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <AwardsSection />
      <ProjectSection />
      <SkillsSection />
      <ContactSection />
      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border">
        <p>© {new Date().getFullYear()} Charbel Maroun. All rights reserved.</p>
      </footer>
    </main>
  )
}
