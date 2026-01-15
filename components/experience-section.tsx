import { Building2 } from "lucide-react"

const experiences = [
  {
    company: "TechCorp",
    role: "Software Engineer: Full Stack Intern",
    duration: "Jan 2026 – Apr 2026",
    location: "San Francisco, CA (Remote)",
    description: [
      "Incoming Full Stack Software Engineer Intern on the Product team at TechCorp, a high-growth fintech startup backed by over $100 million in Series B funding.",
    ],
  },
  {
    company: "University",
    role: "Teaching Assistant",
    duration: "Aug 2025 – Present",
    location: "San Francisco, CA (Hybrid)",
    description: [
      "Provided one-on-one coaching to students on programming fundamentals, data structures, and algorithm design.",
      "Facilitated interactive lab sessions on software development topics including debugging, testing, and code review practices.",
      "Supported students in completing course projects by offering guidance on requirements, design patterns, and best practices.",
    ],
  },
  {
    company: "StartupXYZ",
    role: "Software Engineer: Backend Intern",
    duration: "May 2024 – Aug 2025",
    location: "New York, NY (Hybrid)",
    description: [
      "Developed and tested software for the company's core platform using a Microservices Architecture with Java, Spring Boot, Kafka, Redis, and PostgreSQL.",
      "Designed, developed, and deployed a monitoring microservice using Kubernetes on AWS and Docker, enabling real-time tracking of millions of events across 6+ microservices.",
      "Implemented REST APIs with advanced features: cursor/offset-based pagination, retry mechanisms, JWT authentication, and caching strategies—resulting in a 65% reduction in response times.",
      "Created integration and unit tests using JUnit, Mockito and automated pipelines in GitHub Actions.",
    ],
  },
  {
    company: "FreelanceProject",
    role: "Software Engineer: Full Stack",
    duration: "Jan 2024 – Apr 2024",
    location: "Remote",
    description: [
      "Full Stack developer on an e-commerce platform for local businesses; utilized Next.js, Tailwind, TypeScript for frontend and Node.js, Express, AWS RDS for backend.",
      "Engineered scalable REST APIs handling peaks of 18k requests/day with 100% endpoint test coverage, cutting production bug reports by 70%.",
      "Implemented authentication with MFA for 400+ users, reducing failed logins by 60% and boosting monthly active user retention by 25%.",
      "Architected Node.js email microservice using Nodemailer and AWS SES delivering 5,000+ monthly notifications.",
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-12">Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-8 border-l-2 border-border last:pb-0">
              <div className="absolute -left-6 top-0 w-12 h-12 rounded-full bg-background border-2 border-border flex items-center justify-center">
                <Building2 className="h-6 w-6 text-muted-foreground" />
              </div>

              <div className="ml-8">
                <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                <p className="text-primary font-medium">{exp.company}</p>
                <p className="text-sm text-muted-foreground mb-4">
                  {exp.duration} · {exp.location}
                </p>

                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-muted-foreground text-sm leading-relaxed flex gap-2">
                      <span className="text-primary mt-1.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
