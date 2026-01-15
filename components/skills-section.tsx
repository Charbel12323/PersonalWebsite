import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "HTML/CSS", "C/C++", "SQL", "Rust", "Bash"],
  },
  {
    title: "Frameworks",
    skills: [
      "Spring Boot",
      "React",
      "Next.js",
      "Angular",
      "Node.js",
      "Express",
      "Flask",
      "Django",
      "GraphQL",
      "Flutter",
    ],
  },
  {
    title: "Developer Tools",
    skills: ["Git", "Docker", "AWS", "Jenkins", "Kafka", "Redis", "Kubernetes", "Linux/UNIX"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-12">Skills</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-card rounded-2xl p-6 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
