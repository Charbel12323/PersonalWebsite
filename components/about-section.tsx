import { Mail, Phone, MapPin, Code2 } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-12">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I&apos;m a third-year Computer Science student at State University on the co-op program. I&apos;m
              passionate about full-stack development and building impactful software that solves real problems.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Currently, I&apos;m working as a Teaching Assistant helping fellow students navigate their academic
              journey, and I&apos;m excited to be joining TechCorp as a Full Stack Software Engineer Intern next
              semester.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:hello@example.com" className="text-foreground hover:text-primary transition-colors">
                    hello@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a href="tel:+15551234567" className="text-foreground hover:text-primary transition-colors">
                    555-123-4567
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground">San Francisco, California</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-80 md:h-96 rounded-2xl bg-card border border-border flex items-center justify-center">
            <Code2 className="h-32 w-32 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  )
}
