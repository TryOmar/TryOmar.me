import { Mail } from "lucide-react"
import { FaChrome, FaGithub, FaLinkedin, FaMedium, FaBehance, FaGooglePlay, FaCoffee } from "react-icons/fa"
import { SiLeetcode, SiCodeforces, SiMonkeytype } from "react-icons/si"

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Omar Abdelrahman. All rights reserved.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://tryomar.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Portfolio"
              >
                <FaChrome className="h-5 w-5" />
              </a>
              <a
                href="mailto:TryOmarAbbas@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/TryOmar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/omar-abdelrahman"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a
                href="https://leetcode.com/TryOmar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LeetCode"
              >
                <SiLeetcode className="h-5 w-5" />
              </a>
              <a
                href="https://codeforces.com/profile/TryOmar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Codeforces"
              >
                <SiCodeforces className="h-5 w-5" />
              </a>
              <a
                href="https://medium.com/@TryOmarAbbas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Medium"
              >
                <FaMedium className="h-5 w-5" />
              </a>
              <a
                href="https://behance.net/TryOmar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Behance"
              >
                <FaBehance className="h-5 w-5" />
              </a>
              <a
                href="https://monkeytype.com/profile/TryOmar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Monkeytype"
              >
                <SiMonkeytype className="h-5 w-5" />
              </a>
              <a
                href="https://play.google.com/store/apps/developer?id=TryOmar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Google Play"
              >
                <FaGooglePlay className="h-5 w-5" />
              </a>
              <a
                href="https://buymeacoffee.com/TryOmar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Buy Me a Coffee"
              >
                <FaCoffee className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
