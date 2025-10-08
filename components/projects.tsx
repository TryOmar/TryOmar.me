'use client'

import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

const projects = [
  // Web Applications
  {
    title: "Chess Speed Test",
    description: "Master chess speed with our free online trainer. Practice bullet chess, blitz chess, and speed training. Test your moves per minute, improve reaction time, and climb leaderboards.",
    period: "Dec 2024 – Present",
    techStack: ["React", "TypeScript", "Chess Training", "Speed Testing"],
    demo: "https://www.chessspeed.app/",
    blog: "https://www.chessspeed.app/blog",
    playStore: "https://play.google.com/store/apps/details?id=bullet.chess.trainer",
    categories: ["Web Applications", "Mobile Applications"],
    featured: true,
  },
  {
    title: "Listenify",
    description: "Modern web application for real-time speech transcription with AI-powered features. Built with React and TypeScript.",
    period: "Jan 2025 – Aug 2025",
    techStack: ["React", "TypeScript", "Web Speech API", "AI Integration"],
    github: "https://github.com/TryOmar/Listenify",
    demo: "https://listenify-live.vercel.app",
    categories: ["Web Applications"],
    featured: true,
  },
  {
    title: "Dalal - Qiasat Aradi",
    description: "Comprehensive land measurement tool for Egyptian farmers. Convert, calculate, and manage land areas with traditional units.",
    period: "Jul 2023 – May 2025",
    techStack: ["HTML", "Agriculture Tools", "Land Measurement", "Mobile App"],
    github: "https://github.com/TryOmar/qiasat-aradi",
    demo: "https://tryomar.github.io/qiasat-aradi/",
    playStore: "https://play.google.com/store/apps/details?id=aplic3397443.dei",
    categories: ["Web Applications", "Mobile Applications"],
    featured: false,
  },
  {
    title: "QuizatAI",
    description: "AI-powered quiz generator that transforms any topic into interactive questions with customizable settings and smart review.",
    period: "Jan 2025 – Aug 2025",
    techStack: ["JavaScript", "AI", "HTML5", "CSS3"],
    github: "https://github.com/TryOmar/QuizatAI",
    demo: "https://tryomar.github.io/QuizatAI/",
    categories: ["Web Applications"],
    featured: true,
  },
  {
    title: "ShadowSpeak",
    description: "Reading practice tool with text-to-speech functionality and word highlighting for Arabic and English text.",
    period: "Sep 2025 – Oct 2025",
    techStack: ["JavaScript", "Web Speech API", "Arabic Support", "TTS"],
    github: "https://github.com/TryOmar/ShadowSpeak",
    demo: "https://tryomar.github.io/ShadowSpeak/",
    categories: ["Web Applications"],
    featured: false,
  },
  {
    title: "RepoRadar",
    description: "Web app to explore GitHub repositories by username, showing key details and offering theme toggling.",
    period: "Jan 2025 – Oct 2025",
    techStack: ["JavaScript", "GitHub API", "CSS", "Website"],
    github: "https://github.com/TryOmar/RepoRadar",
    demo: "https://tryomar.github.io/RepoRadar/",
    categories: ["Web Applications"],
    featured: false,
  },
  {
    title: "GPA Calculator",
    description: "Modern, responsive web application for calculating and planning your Grade Point Average (GPA).",
    period: "Jun 2024 – May 2025",
    techStack: ["HTML", "CSS", "JavaScript", "Python"],
    github: "https://github.com/TryOmar/gpa-calc",
    demo: "https://tryomar.github.io/gpa-calc/",
    categories: ["Web Applications"],
    featured: false,
  },
  {
    title: "Task Maker",
    description: "Task description generator with AI improvements for creating detailed project descriptions.",
    period: "Feb 2025 – Jun 2025",
    techStack: ["JavaScript", "AI", "Task Generation"],
    github: "https://github.com/TryOmar/task-maker",
    demo: "https://tryomar.github.io/task-maker/",
    categories: ["Web Applications"],
    featured: false,
  },
  {
    title: "OmarShop",
    description: "ASP.NET MVC-based e-commerce platform with role-based authentication, product management, and order processing.",
    period: "Apr 2025 – May 2025",
    techStack: ["ASP.NET MVC", "C#", "SQL Server", "Authentication"],
    github: "https://github.com/TryOmar/OmarShop",
    categories: ["Web Applications"],
    featured: false,
  },
  {
    title: "MathXGame",
    description: "ASP.NET MVC app for improving math skills with interactive challenges and real-time feedback.",
    period: "May 2024 – Dec 2024",
    techStack: ["ASP.NET MVC", "C#", "SQLite", "Game Development"],
    github: "https://github.com/TryOmar/MathXGame",
    categories: ["Web Applications"],
    featured: false,
  },
  {
    title: "CashGuard",
    description: "Money tracking application for managing income and expenses with comprehensive financial management features.",
    period: "Mar 2024 – Dec 2024",
    techStack: ["ASP.NET MVC", "C#", "SQLite", "Money Tracker"],
    github: "https://github.com/TryOmar/cash-guard",
    categories: ["Web Applications"],
    featured: false,
  },

  // Desktop Applications
  {
    title: "ShellX",
    description: "Comprehensive shell interface that supports execution of commands. Built with C# and OOP principles.",
    period: "Feb 2024 – Sep 2025",
    techStack: ["C#", "OOP", "File Management", "BFS/DFS"],
    github: "https://github.com/TryOmar/ShellX",
    categories: ["Desktop Applications"],
    featured: true,
  },
  {
    title: "StopWatchMe",
    description: "Lightweight time-tracking tool with hotkey support for starting, stopping, and logging tasks easily.",
    period: "Jan 2023 – Oct 2025",
    techStack: ["AutoHotkey", "Windows App", "Productivity", "Time Tracking"],
    github: "https://github.com/TryOmar/StopWatchMe",
    categories: ["Desktop Applications"],
    featured: true,
  },
  {
    title: "Vehicle Parking Project",
    description: "Java-based parking management system with automated space allocation, fee calculation, and GUI interface.",
    period: "Dec 2022 – Jan 2025",
    techStack: ["Java", "GUI", "OOP", "Parking Management"],
    github: "https://github.com/TryOmar/Vehicle-Parking-Project",
    categories: ["Desktop Applications"],
    featured: false,
  },
  {
    title: "CompilerXArabic",
    description: "Compiler implementation for Arabic-based programming language with lexical analysis, syntax parsing, and GUI.",
    period: "May 2024 – Jan 2025",
    techStack: ["Python", "Compiler", "Parser", "Arabic Programming"],
    github: "https://github.com/TryOmar/CompilerXArabic",
    categories: ["Desktop Applications"],
    featured: false,
  },
  {
    title: "First Calculator",
    description: "First GUI application built with C# demonstrating basic calculator functionality and Windows Forms.",
    period: "Dec 2022 – Dec 2022",
    techStack: ["C#", "Windows Forms", "GUI", "Calculator"],
    github: "https://github.com/TryOmar/firstCalculator",
    categories: ["Desktop Applications"],
    featured: false,
  },

  // Mobile Applications
  {
    title: "CryptoX",
    description: "Modern Android app combining classical cryptography, steganography, and random generators for data protection.",
    period: "Dec 2024 – Mar 2025",
    techStack: ["Kotlin", "Android", "Cryptography", "Steganography"],
    github: "https://github.com/TryOmar/CryptoX",
    playStore: "https://play.google.com/store/apps/details?id=com.omar.cryptox",
    categories: ["Mobile Applications"],
    featured: true,
  },
  {
    title: "Todo Abbas",
    description: "Native Android todo list application built with Java demonstrating core Android development concepts and SQLite integration.",
    period: "Oct 2024 – Dec 2024",
    techStack: ["Java", "Android", "SQLite", "Todo App"],
    github: "https://github.com/TryOmar/todo-abbas",
    categories: ["Mobile Applications"],
    featured: false,
  },


  // Bots & Automation
  {
    title: "Insults",
    description: "Discord bot that tracks, analyzes, and manages insults in servers, offering leaderboards and analytics for healthier communication.",
    period: "Sep 2025 – Sep 2025",
    techStack: ["TypeScript", "Discord Bot", "Analytics", "Moderation"],
    github: "https://github.com/TryOmar/Insults",
    categories: ["Bots & Automation"],
    featured: true,
  },
  {
    title: "LeetBot",
    description: "Discord bot for LeetCode integration providing coding challenges and progress tracking.",
    period: "Sep 2025 – Sep 2025",
    techStack: ["C#", "Discord Bot", "LeetCode"],
    github: "https://github.com/TryOmar/LeetBot",
    categories: ["Bots & Automation"],
    featured: false,
  },


  // Games
  {
    title: "HandWave Game",
    description: "Interactive browser-based game featuring dual control options (keyboard or webcam hand tracking via MediaPipe).",
    period: "Feb 2025 – May 2025",
    techStack: ["Next.js", "TypeScript", "MediaPipe", "Canvas API"],
    github: "https://github.com/TryOmar/handwave-game",
    demo: "https://hand-wave.vercel.app/",
    categories: ["Games"],
    featured: true,
  },
  {
    title: "Jumping Game",
    description: "Simple yet challenging platformer game. Jump automatically and survive as long as you can!",
    period: "May 2025 – May 2025",
    techStack: ["Python", "Pygame", "Game Development", "Platformer"],
    github: "https://github.com/TryOmar/jumping-game",
    demo: "https://tryomar.github.io/jumping-game/",
    categories: ["Games"],
    featured: false,
  },
  {
    title: "Sudoku Game",
    description: "Classic Sudoku puzzle game built with Python featuring interactive gameplay and puzzle generation.",
    period: "May 2024 – May 2024",
    techStack: ["Python", "Sudoku", "Puzzle Game"],
    github: "https://github.com/TryOmar/SodukuXGame",
    categories: ["Games"],
    featured: false,
  },


  // Minecraft Mods
  {
    title: "Falcon Mod",
    description: "Minecraft mod that enhances Box PvP gameplay by automating shop operations, trading, and inventory management.",
    period: "Aug 2024 – Dec 2024",
    techStack: ["Java", "Minecraft Mod", "Automation", "Inventory Management"],
    github: "https://github.com/TryOmar/falcon-mod",
    categories: ["Minecraft Mods"],
    featured: true,
  },
  {
    title: "Falcon Farm",
    description: "Minecraft farming mod for automated resource collection and management in survival gameplay.",
    period: "Aug 2024 – Aug 2024",
    techStack: ["Java", "Minecraft Mod", "Farming", "Automation"],
    github: "https://github.com/TryOmar/Falcon-Farm-1.21.X",
    categories: ["Minecraft Mods"],
    featured: false,
  },
  {
    title: "SpammerMod",
    description: "Minecraft mod that automates chat messaging with customizable configurations for testing, debugging, or auto-responses.",
    period: "Oct 2024 – Oct 2025",
    techStack: ["Java", "Minecraft Mod", "Chat Automation", "Testing Tool"],
    github: "https://github.com/TryOmar/SpammerMod",
    categories: ["Minecraft Mods"],
    featured: false,
  },

  // Documentation
  {
    title: "Vacation Management System",
    description: "Practical Business Analysis learning resource with real-world deliverables using comprehensive SRS documentation.",
    period: "Aug 2025 – Sep 2025",
    techStack: ["Business Analysis", "LaTeX", "SRS Documentation", "Agile"],
    github: "https://github.com/TryOmar/Vacation-System",
    demo: "https://tryomar.github.io/Vacation-System/",
    categories: ["Documentation"],
    featured: true,
  },
  {
    title: "Listenify Cost Metrics",
    description: "Comprehensive cost estimation and metrics analysis tool for the Listenify application with automated report generation.",
    period: "Apr 2025 – Sep 2025",
    techStack: ["Cost Estimation", "Data Visualization", "Project Management", "Python"],
    github: "https://github.com/TryOmar/Listenify-Cost-Metrics-and-Estimation",
    demo: "https://tryomar.github.io/Listenify-Cost-Metrics-and-Estimation/",
    categories: ["Documentation"],
    featured: false,
  },
  {
    title: "CP Reference",
    description: "Collection of competitive programming algorithms, data structures, and templates for competitive coders.",
    period: "May 2025 – Aug 2025",
    techStack: ["LaTeX", "Algorithms", "Data Structures", "Competitive Programming"],
    github: "https://github.com/TryOmar/TryOmar-CP-Reference",
    categories: ["Documentation"],
    featured: false,
  },

  // Scripts & Tools
  {
    title: "Folder Scraper",
    description: "Python script that recursively scrapes directory information and writes file contents to an output file.",
    period: "Oct 2024 – Jun 2025",
    techStack: ["Python", "File Scraping", "Directory Processing"],
    github: "https://github.com/TryOmar/FolderScraper",
    categories: ["Scripts & Tools"],
    featured: true,
  },
  {
    title: "Anki Uploader",
    description: "AutoHotkey script that simplifies the process of creating flashcards in Anki with automated data loading.",
    period: "Jan 2023 – Jun 2023",
    techStack: ["AutoHotkey", "Flashcards", "Anki", "Automation"],
    github: "https://github.com/TryOmar/AnkiUploader",
    categories: ["Scripts & Tools"],
    featured: false,
  },
  {
    title: "Quick Translate",
    description: "AutoHotkey script for quick translation functionality with hotkey support.",
    period: "Apr 2023 – Apr 2023",
    techStack: ["AutoHotkey", "Translation", "Hotkeys"],
    github: "https://github.com/TryOmar/QuickTranslate",
    categories: ["Scripts & Tools"],
    featured: false,
  },

  // Browser Extensions
  {
    title: "Lichess Tools",
    description: "Browser extension providing enhancement tools for Lichess chess platform with additional functionality.",
    period: "May 2023 – May 2023",
    techStack: ["JavaScript", "Browser Extension", "Lichess", "Chess"],
    github: "https://github.com/TryOmar/Lichess-Tools",
    categories: ["Browser Extensions"],
    featured: true,
  },

  {
    title: "AI-Search-Algorithms",
    description: "Comprehensive collection of artificial intelligence and machine learning algorithms including search algorithms, ML implementations, and game AI solutions in Python.",
    period: "Apr 2023 – Apr 2023",
    techStack: ["Python", "AI/ML", "Search Algorithms", "Machine Learning", "Game AI"],
    github: "https://github.com/Omar7001-B/AI-Search-Algorithms",
    categories: ["Documentation", "Games"],
    featured: true,
  },
  {
    title: "Embedded Arduino Projects",
    description: "Arduino-based motor control systems featuring timer-controlled and temperature-responsive systems with interactive interfaces, H-Bridge drivers, and complete documentation.",
    period: "Aug 2024 – Aug 2024",
    techStack: ["Arduino", "C++", "Embedded Systems", "Motor Control", "Temperature Sensors", "LCD Display"],
    github: "https://github.com/TryOmar/embedded-arduino-projects",
    demo: "https://tryomar.github.io/embedded-arduino-projects/",
    categories: ["Desktop Applications"],
    featured: true,
  },
  {
    title: "Data Mining Formulas",
    description: "A comprehensive LaTeX reference document for data mining formulas and mathematical concepts, featuring a clean dark-themed design for better readability.",
    period: "Jun 2024 – Jun 2024",
    techStack: ["LaTeX", "Data Science", "Mathematical Formulas", "Documentation", "PDF Generation"],
    github: "https://github.com/TryOmar/data-mining-formulas",
    categories: ["Documentation"],
    featured: false,
  },
  {
    title: "Pygame vs Arcade Comparison",
    description: "A side-by-side comparison of Pygame and Arcade libraries through identical game implementations. Features multiple simple games including snake, collision demos, and interactive examples.",
    period: "Jun 2024 – Jun 2024",
    techStack: ["Python", "Pygame", "Arcade", "Game Development", "Educational", "2D Games"],
    github: "https://github.com/TryOmar/pygame-vs-arcade",
    categories: ["Games", "Documentation"],
    featured: true,
  },
  // Other
  {
    title: "DataMiner",
    description: "Interactive web application for data mining and machine learning. Helps users upload, clean, transform, and analyze datasets.",
    period: "Apr 2025 – Jun 2025",
    techStack: ["Python", "Streamlit", "Pandas", "Scikit-learn"],
    github: "https://github.com/TryOmar/data-miner",
    demo: "https://data-miner-abbas.streamlit.app/",
    categories: ["Web Applications", "Data Science"],
    featured: true,
  }
]

// Dynamically extract unique categories from projects and sort by count (descending)
const projectCategories = Array.from(
  new Set(projects.flatMap(project => project.categories))
).sort((a, b) => {
  const countA = projects.filter(p => p.categories.includes(a)).length
  const countB = projects.filter(p => p.categories.includes(b)).length
  return countB - countA // Descending order (most projects first)
})

const ITEMS_PER_PAGE = 6

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [currentPage, setCurrentPage] = useState(1)

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.categories.includes(selectedCategory))

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentProjects = filteredProjects.slice(startIndex, endIndex)

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setCurrentPage(1)
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">Projects</h2>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Button
              variant={selectedCategory === "All" ? "default" : "outline"}
              size="sm"
              onClick={() => handleCategoryChange("All")}
              className="text-sm"
            >
              All ({projects.length})
            </Button>
            {projectCategories.map((category) => {
              const count = projects.filter(p => p.categories.includes(category)).length
              return (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleCategoryChange(category)}
                  className="text-sm"
                >
                  {category} ({count})
                </Button>
              )
            })}
          </div>

          {/* Projects Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
            {currentProjects.map((project, index) => (
              <Card key={index} className="p-6 flex flex-col hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <div className="flex items-center gap-2">
                    {project.featured && (
                      <Badge variant="secondary" className="text-xs">Featured</Badge>
                    )}
                    <span className="text-xs text-muted-foreground">{project.period}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed flex-grow text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs px-2 py-1">
                      {tech}
                    </Badge>
                  ))}
                  {project.techStack.length > 4 && (
                    <Badge variant="outline" className="text-xs px-2 py-1">
                      +{project.techStack.length - 4}
                    </Badge>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.github && (
                    <Button variant="outline" size="sm" asChild className="flex-1 min-w-0">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button variant="outline" size="sm" asChild className="flex-1 min-w-0">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  )}
                  {project.playStore && (
                    <Button variant="outline" size="sm" asChild className="flex-1 min-w-0">
                      <a href={project.playStore} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Play Store
                      </a>
                    </Button>
                  )}
                  {project.blog && (
                    <Button variant="outline" size="sm" asChild className="flex-1 min-w-0">
                      <a href={project.blog} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Blog
                      </a>
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <div className="flex gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => handlePageChange(page)}
                    className="w-8 h-8 p-0"
                  >
                    {page}
                  </Button>
                ))}
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}

          {/* Project Count */}
          <div className="text-center mt-8 text-sm text-muted-foreground">
            Showing {startIndex + 1}-{Math.min(endIndex, filteredProjects.length)} of {filteredProjects.length} projects
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
          </div>
        </div>
      </div>
    </section>
  )
}
