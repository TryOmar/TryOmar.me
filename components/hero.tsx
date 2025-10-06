'use client'

import { useState, useEffect } from 'react'
import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useTheme } from "next-themes"
import { 
  FaChrome, 
  FaGithub, 
  FaLinkedin, 
  FaMedium, 
  FaBehance, 
  FaGooglePlay,
  FaCoffee
} from "react-icons/fa"
import { SiCodeforces, SiMonkeytype, SiLeetcode } from "react-icons/si"

export function Hero() {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  
  // Prevent hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true)
  }, [])
  
  // Select photo based on theme
  const getPhotoSrc = () => {
    if (!mounted) {
      return '/Omar_nobg.png' // Default during SSR
    }
    
    const currentTheme = resolvedTheme || theme
    if (currentTheme === 'dark') {
      return '/Omar_b.png' // Black background for dark theme
    } else if (currentTheme === 'light') {
      return '/Omar_w.jpg' // White background for light theme
    } else {
      return '/Omar_nobg.png' // No background for system/default theme
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Photo Section */}
            <div className="flex-shrink-0">
              <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                <Image
                  src={getPhotoSrc()}
                  alt="Omar Abdelrahman"
                  fill
                  className="rounded-full object-cover shadow-2xl border-4 border-primary/20"
                  priority
                />
              </div>
            </div>
            
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance">Omar Abdelrahman</h1>
              <p className="text-xl sm:text-2xl text-muted-foreground mb-4">
                Software Engineer | 2x Ejada Intern | ITI 9M | Codeforces Specialist
              </p>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Software Engineering graduate from Assiut University (GPA 3.78, Rank #2). Completed two internships at Ejada: first as a Software Integration Engineer (APIs, Oracle SQL, automation) and second as a Business Analyst Intern. ICPC mentor & EOI coach with strong foundations in algorithms, OOP, and databases, plus proven teamwork, problem-solving, and leadership skills.
              </p>

              {/* Social Media Icons */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://tryomar.me/" target="_blank" rel="noopener noreferrer" aria-label="Portfolio">
                    <FaChrome className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="mailto:TryOmarAbbas@gmail.com" aria-label="Email">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://github.com/TryOmar" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FaGithub className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://www.linkedin.com/in/TryOmar" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FaLinkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://leetcode.com/u/TryOmar/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
                    <SiLeetcode className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://codeforces.com/profile/TryOmar" target="_blank" rel="noopener noreferrer" aria-label="Codeforces">
                    <SiCodeforces className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://medium.com/@TryOmar" target="_blank" rel="noopener noreferrer" aria-label="Medium">
                    <FaMedium className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://behance.net/TryOmar" target="_blank" rel="noopener noreferrer" aria-label="Behance">
                    <FaBehance className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://monkeytype.com/profile/TryOmar" target="_blank" rel="noopener noreferrer" aria-label="MonkeyType">
                    <SiMonkeytype className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://play.google.com/store/apps/dev?id=4995882925966510970" target="_blank" rel="noopener noreferrer" aria-label="Google Play">
                    <FaGooglePlay className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://buymeacoffee.com/tryomar" target="_blank" rel="noopener noreferrer" aria-label="Buy Me a Coffee">
                    <FaCoffee className="h-5 w-5" />
                  </a>
                </Button>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
                <Button asChild size="lg">
                  <a href="#contact">
                    Contact Me
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#projects">
                    View Projects
                  </a>
                </Button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
