import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const experiences = [
  {
    company: "Ejada",
    position: "Business Analyst Intern",
    period: "Aug 2025 – Sep 2025",
    location: "Remote",
    description:
      "Learned requirements elicitation and gathering, created an SRS document, detailed use cases and user stories, and designed wireframes for web and mobile. Built master and screen-level data dictionaries and developed state, workflow, context, and ERD diagrams. Used LaTeX with reusable templates and built automation to extract use cases to JSON, convert HTML to PDFs/images, and generate project trees.",
    skills: ["Business Analysis", "Requirements Elicitation", "SRS Documentation", "LaTeX", "Agile", "Wireframing", "ERD", "Automation"],
    type: "internship",
    links: [
      { name: "Business Analysis Deliverables", url: "https://tryomar.github.io/Vacation-System/" },
      { name: "GitHub Repository", url: "https://github.com/TryOmar/Vacation-System" },
      { name: "Completion Certificate", url: "https://drive.google.com/file/d/1t74b4pkQBxFHD2J5BzhYXWkQ3nyobdeK/view" }
    ],
    isConnected: true,
    isFirst: true
  },
  {
    company: "Ejada",
    position: "Integration Engineer Intern",
    period: "Jul 2024 – Aug 2024",
    location: "Asyut, Egypt · Hybrid",
    description:
      "Learned REST API, SOAP, JSON, XML, Xpath, and WSDL. Experienced with WSO2 Integration Studio and Micro Integrator, using mediators like Log, Call, Filter, and PayloadFactory. Hands-on with API creation, testing, publishing, and lifecycle management. Familiar with Postman and Swagger. Learned Oracle SQL for querying, table design, sequences, and PL/SQL.",
    skills: ["REST API", "SOAP", "WSO2", "Oracle SQL", "Postman", "Swagger", "PL/SQL", "XML"],
    type: "internship",
    links: [
      { name: "Recommendation", url: "https://drive.google.com/file/d/1cvWCc507jDiSaFacrafQxvbLmPnofw0R/view?usp=sharing" },
      { name: "Completion Certificate", url: "https://drive.google.com/file/d/1Rkg5XZ-S4pd5_xiY7539CLegKhDX2zPG/view?usp=sharing" }
    ],
    isConnected: true,
    isLast: true
  },
  {
    company: "IOI - International Olympiad in Informatics",
    position: "Problem Solving Coach at Egyptian Olympiad in Informatics (EOI)",
    period: "Jul 2022 – Sep 2023",
    location: "Egypt",
    description:
      "Mentored junior students on algorithms and problem-solving techniques. Prepared trainees for competitive programming contests and international competitions.",
    skills: ["Teaching", "Problem Solving", "Algorithms", "Competitive Programming"],
    type: "coaching",
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Vertical line for connected cards */}
                {exp.isConnected && !exp.isLast && (
                  <div className="absolute left-6 top-16 w-0.5 h-6 bg-primary/20 z-0"></div>
                )}
                
                <Card className="p-4 hover:shadow-lg transition-shadow relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{exp.position}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="text-sm text-muted-foreground mt-1 sm:mt-0 sm:text-right">
                      <p>{exp.period}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-3 text-sm leading-relaxed">{exp.description}</p>
                  
                  {/* Links section */}
                  {exp.links && (
                    <div className="mb-3">
                      <div className="flex flex-wrap gap-2">
                        {exp.links.map((link, linkIndex) => (
                          <Button key={linkIndex} variant="outline" size="sm" asChild>
                            <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                              {link.name}
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-1">
                    {exp.skills.map((skill) => (
                      <span key={skill} className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>
          
          {/* Education Section */}
          <div className="mt-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12">Education</h2>
            <div className="space-y-6">
              <Card className="p-4 hover:shadow-lg transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">ITI 9-month Professional Development & BI infused CRM</h3>
                    <p className="text-primary font-medium">Information Technology Institute (ITI)</p>
                  </div>
                  <div className="text-sm text-muted-foreground mt-1 sm:mt-0 sm:text-right">
                    <p>Oct 2025 – Jun 2026</p>
                    <p>Currently Enrolled</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                  Professional Development program focusing on Business Intelligence and Customer Relationship Management systems. Comprehensive training in modern enterprise solutions and data-driven business processes.
                </p>
                <div className="flex flex-wrap gap-1">
                  {["Business Intelligence", "CRM", "Professional Development", "Enterprise Solutions", "Data Analytics"].map((skill) => (
                    <span key={skill} className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
              
              <Card className="p-4 hover:shadow-lg transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Bachelor's degree, Software Engineering</h3>
                    <p className="text-primary font-medium">Assiut University</p>
                  </div>
                  <div className="text-sm text-muted-foreground mt-1 sm:mt-0 sm:text-right">
                    <p>Oct 2021 – Jul 2025</p>
                    <p>Grade: Excellent with Honors – GPA: 3.78 / 4.00, Ranked #2</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                  Core courses: Programming Fundamentals, Data Structures & Algorithms, OOP, Operating Systems, Databases, Software Engineering, AI, Data Mining, and Embedded Systems.
                </p>
                <div className="flex flex-wrap gap-1">
                  {["Software Engineering", "Data Structures", "Algorithms", "OOP", "Databases", "AI", "Data Mining"].map((skill) => (
                    <span key={skill} className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
