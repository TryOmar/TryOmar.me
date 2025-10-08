import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    category: "Programming Languages",
    skills: [
      { name: "C/C++", proficiency: "Intermediate" },
      { name: "Java", proficiency: "Beginner" },
      { name: "Kotlin", proficiency: "Beginner" },
      { name: "C#", proficiency: "Beginner" },
      { name: "Python", proficiency: "Intermediate" },
      { name: "JavaScript", proficiency: "Intermediate" },
      { name: "TypeScript", proficiency: "Beginner" },
      { name: "AutoHotkey", proficiency: "Intermediate" },
      { name: "MATLAB", proficiency: "Beginner" },
    ],
  },
  {
    category: "Web Technologies",
    skills: [
      { name: "React", proficiency: "Beginner" },
      { name: "Next.js", proficiency: "Beginner" },
      { name: "ASP.NET MVC", proficiency: "Beginner" },
      { name: "jQuery", proficiency: "Beginner" },
      { name: "Node.js", proficiency: "Beginner" },
    ],
  },
  {
    category: "Markup and Data Languages",
    skills: [
      { name: "HTML", proficiency: "Intermediate" },
      { name: "CSS", proficiency: "Intermediate" },
      { name: "Markdown", proficiency: "Intermediate" },
      { name: "JSON", proficiency: "Intermediate" },
      { name: "XML", proficiency: "Beginner" },
    ],
  },
  {
    category: "Database Technologies",
    skills: [
      { name: "MongoDB", proficiency: "Beginner" },
      { name: "PostgreSQL", proficiency: "Beginner" },
      { name: "SQL", proficiency: "Intermediate" },
      { name: "SQLite", proficiency: "Intermediate" },
    ],
  },
  {
    category: "Deployment Platforms",
    skills: [
      { name: "MongoDB Atlas", proficiency: "Beginner" },
      { name: "Supabase", proficiency: "Beginner" },
      { name: "Vercel", proficiency: "Intermediate" },
      { name: "GitHub Pages", proficiency: "Intermediate" },
      { name: "Google Play", proficiency: "Beginner" },
      { name: "Railway", proficiency: "Beginner" },
      { name: "Netlify", proficiency: "Beginner" },
    ],
  },
  {
    category: "Documentation Stack",
    skills: [
      { name: "GitBook", proficiency: "Beginner" },
      { name: "Overleaf", proficiency: "Intermediate" },
      { name: "Obsidian", proficiency: "Beginner" },
      { name: "Notion", proficiency: "Beginner" },
      { name: "Microsoft Office", proficiency: "Intermediate" },
      { name: "Google Docs", proficiency: "Intermediate" },
      { name: "LaTeX", proficiency: "Beginner" },
    ],
  },
  {
    category: "Integrated Development Environments",
    skills: [
      { name: "Vim", proficiency: "Beginner" },
      { name: "VS Code", proficiency: "Intermediate" },
      { name: "Visual Studio", proficiency: "Beginner" },
      { name: "IntelliJ IDEA", proficiency: "Beginner" },
      { name: "Android Studio", proficiency: "Beginner" },
      { name: "PyCharm", proficiency: "Beginner" },
      { name: "CLion", proficiency: "Beginner" },
    ],
  },
  {
    category: "Blogs & Learning Platforms",
    skills: [
      { name: "Dev.to", proficiency: "Beginner" },
      { name: "Medium", proficiency: "Beginner" },
      { name: "LeetCode", proficiency: "Intermediate" },
      { name: "Codeforces", proficiency: "Intermediate" },
    ],
  },
]

const getProficiencyVariant = (proficiency: string) => {
  switch (proficiency) {
    case "Expert":
      return "default"
    case "Advanced":
      return "secondary"
    case "Intermediate":
      return "outline"
    case "Beginner":
      return "outline"
    default:
      return "outline"
  }
}

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
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="flex flex-col items-center gap-2">
                      <Badge 
                        variant={getProficiencyVariant(skill.proficiency)}
                        className="text-sm px-3 py-1"
                      >
                        {skill.name}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {skill.proficiency}
                      </span>
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
