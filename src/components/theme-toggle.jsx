"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Avoid mismatch between server/client
  if (!mounted) return null

  const currentTheme = theme === "system" ? systemTheme : theme
  const isDark = currentTheme === "dark"

  return (
    <Button
      variant="outline"
      size="icon"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="rounded-full border-border/80 bg-background/80 hover:bg-muted/80 hover-lift"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  )
}
