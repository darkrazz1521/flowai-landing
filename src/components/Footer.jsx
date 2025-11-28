import Link from "next/link"
import { Twitter, Linkedin, Github } from "lucide-react"
import ScrollFade from "@/components/animations/ScrollFade"
import { Parallax } from "@/components/animations/Parallax"

export default function Footer() {
  return (
    <ScrollFade delay={0.05}>
      <footer className="w-full border-t border-border bg-background relative overflow-hidden">
        {/* Subtle glow / pattern at top with parallax */}
        <Parallax offset={25}>
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.18)_0,_transparent_60%)]" />
          </div>
        </Parallax>

        <div className="container-default py-10 md:py-12">
          {/* Top divider for visual separation with parallax */}
          <Parallax offset={12}>
            <div className="mx-auto mb-8 h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-border/60 to-transparent" />
          </Parallax>

          {/* Footer grid with parallax */}
          <Parallax offset={18}>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Brand Section */}
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2">
                  <span className="h-6 w-6 rounded-lg bg-gradient-to-br from-primary/80 via-primary/60 to-primary/90" />
                  <h3 className="text-lg font-semibold text-foreground tracking-tight">
                    FlowAI
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground max-w-xs">
                  AI writing assistant that helps you create better content, faster.
                </p>
              </div>

              {/* Navigation Links */}
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-foreground">Navigation</h4>
                <nav className="flex flex-col space-y-2 text-sm">
                  {[
                    { href: "/", label: "Home" },
                    { href: "/features", label: "Features" },
                    { href: "/pricing", label: "Pricing" },
                    { href: "/contact", label: "Contact" },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <span>{item.label}</span>
                      <span className="inline-block translate-x-0 opacity-0 text-xs group-hover:translate-x-0.5 group-hover:opacity-100 transition-all">
                        →
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Social Icons */}
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-foreground">Connect</h4>
                <div className="flex gap-3">
                  <a
                    href="https://twitter.com"
                    aria-label="Visit FlowAI on Twitter"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-card/80 via-card/70 to-card/90 text-muted-foreground shadow-sm ring-1 ring-border/70 transition-all duration-200 hover-lift hover:scale-105 hover:shadow-lg hover:text-primary-foreground hover:ring-primary/60"
                  >
                    <Twitter className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    aria-label="Visit FlowAI on LinkedIn"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-card/80 via-card/70 to-card/90 text-muted-foreground shadow-sm ring-1 ring-border/70 transition-all duration-200 hover-lift hover:scale-105 hover:shadow-lg hover:text-primary-foreground hover:ring-primary/60"
                  >
                    <Linkedin className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <a
                    href="https://github.com"
                    aria-label="Visit FlowAI on GitHub"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-card/80 via-card/70 to-card/90 text-muted-foreground shadow-sm ring-1 ring-border/70 transition-all duration-200 hover-lift hover:scale-105 hover:shadow-lg hover:text-primary-foreground hover:ring-primary/60"
                  >
                    <Github className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </Parallax>

          {/* Copyright with parallax */}
          <div className="mt-10 border-t border-border/60 pt-6">
            <Parallax offset={6}>
              <p className="text-center text-xs md:text-sm text-muted-foreground">
                © 2025 FlowAI. All rights reserved. No hidden fees. Cancel anytime.
              </p>
            </Parallax>
          </div>
        </div>
      </footer>
    </ScrollFade>
  )
}
