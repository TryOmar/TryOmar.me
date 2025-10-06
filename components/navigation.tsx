"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useTheme } from "next-themes"
import { Eye } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Writings", href: "#writings" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("")
  const [mounted, setMounted] = useState(false)
  const [viewCount, setViewCount] = useState<number | null>(null)
  const { theme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 },
    )

    navItems.forEach(({ href }) => {
      const element = document.querySelector(href)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [mounted])

  useEffect(() => {
    const fetchViewCount = async () => {
      try {
        const response = await fetch('/api/view')
        if (response.ok) {
          const data = await response.json()
          if (data && data.status === 'success' && typeof data.views === 'number') {
            setViewCount(data.views)
          }
        }
      } catch (error) {
        console.error('Failed to fetch view count:', error)
      }
    }

    fetchViewCount()
  }, [])

  const getIconStyle = () => {
    if (!mounted) return ""
    const currentTheme = resolvedTheme || theme
    return currentTheme === 'light' ? 'invert' : ''
  }

  if (!mounted) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#hero" className="flex items-center gap-2 text-lg font-semibold">
              <Image 
                src="/knight.jpg" 
                alt="Knight" 
                width={24} 
                height={24} 
                className="rounded"
              />
              Omar Abdelrahman
            </a>
            <div className="hidden md:flex items-center gap-1">
              {navItems.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className="px-3 py-2 text-sm font-medium rounded-md transition-colors text-muted-foreground hover:text-foreground hover:bg-muted"
                >
                  {label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-2">
              {viewCount !== null && (
                <div className="flex items-center gap-1 px-2 py-1 text-sm text-muted-foreground">
                  <Eye className="h-4 w-4" />
                  <span>{viewCount.toLocaleString()}</span>
                </div>
              )}
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>
    )
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#hero" className="flex items-center gap-2 text-lg font-semibold">
            <Image 
              src="/knight.jpg" 
              alt="Knight" 
              width={24} 
              height={24} 
              className={`rounded transition-all duration-300 ${getIconStyle()}`}
            />
            Omar Abdelrahman
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeSection === href.slice(1)
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {viewCount !== null && (
              <div className="flex items-center gap-1 px-2 py-1 text-sm text-muted-foreground">
                <Eye className="h-4 w-4" />
                <span>{viewCount.toLocaleString()}</span>
              </div>
            )}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}
