import { GraduationCap } from "lucide-react"

export function EducationSection() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-12">Education</h2>

        <div className="flex items-start gap-6">
          <div className="w-16 h-16 rounded-full bg-card border-2 border-border flex items-center justify-center flex-shrink-0">
            <GraduationCap className="h-8 w-8 text-muted-foreground" />
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground">State University</h3>
            <p className="text-primary">Bachelor of Science in Computer Science, Co-op</p>
            <p className="text-sm text-muted-foreground mb-4">September 2022 – April 2027</p>
            <p className="text-muted-foreground text-sm">
              <span className="font-medium text-foreground">GPA: 3.85</span>
              <span className="mx-2">·</span>
              Dean&apos;s List: 2022 – Present
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
