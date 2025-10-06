import { Card } from "@/components/ui/card"

const skillCategories = [
  {
    category: "Programming Languages",
    skills: [
      { name: "C++", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Python", level: 85 },
      { name: "Java", level: 80 },
      { name: "C#", level: 80 },
      { name: "Kotlin", level: 75 },
      { name: "AutoHotkey", level: 85 },
    ],
  },
  {
    category: "Web Development",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Node.js", level: 80 },
      { name: "Streamlit", level: 85 },
      { name: "ASP.NET MVC", level: 80 },
    ],
  },
  {
    category: "Databases & APIs",
    skills: [
      { name: "Oracle SQL", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "SQLite", level: 85 },
      { name: "REST API", level: 90 },
      { name: "WSO2 Integration", level: 80 },
      { name: "Postman", level: 90 },
      { name: "Swagger", level: 75 },
    ],
  },
  {
    category: "Tools & Technologies",
    skills: [
      { name: "Git", level: 95 },
      { name: "LaTeX", level: 90 },
      { name: "Business Analysis", level: 85 },
      { name: "Agile Methodologies", level: 80 },
      { name: "Competitive Programming", level: 95 },
      { name: "Data Structures & Algorithms", level: 95 },
      { name: "OOP", level: 90 },
      { name: "Android Development", level: 75 },
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">Skills & Technologies</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {skillCategories.map((category, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-semibold mb-6">{category.category}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
