import { ExternalLink, Laptop } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const techStack = ["TypeScript", "Next.js", "Node.js", "Express", "PostgreSQL", "Redis", "AWS S3"]

export function ProjectSection() {
  return (
    <section id="projects" className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-12">Featured Project</h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="h-64 md:h-80 rounded-2xl border border-border bg-background flex items-center justify-center">
            <Laptop className="h-32 w-32 text-muted-foreground" />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-foreground mb-2">EduManager</h3>
            <p className="text-primary mb-4">Student Management System</p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              A full-stack web application that empowers schools to manage student records, track grades, generate
              automated report cards, handle tuition and finances, and provide a dedicated parent portal.
            </p>

            <ul className="space-y-2 mb-6">
              <li className="text-sm text-muted-foreground flex gap-2">
                <span className="text-primary">•</span>
                Adopted by 4 schools, serving 1,300+ students and 150+ teachers
              </li>
              <li className="text-sm text-muted-foreground flex gap-2">
                <span className="text-primary">•</span>
                Reduced administrative workload by 2,000+ hours annually
              </li>
              <li className="text-sm text-muted-foreground flex gap-2">
                <span className="text-primary">•</span>
                Built with Next.js, TypeScript, Node.js, Express, PostgreSQL, Redis, and AWS S3
              </li>
            </ul>

            <div className="flex flex-wrap gap-2 mb-6">
              {techStack.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>

            <Button className="gap-2">
              <ExternalLink className="h-4 w-4" />
              View Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
