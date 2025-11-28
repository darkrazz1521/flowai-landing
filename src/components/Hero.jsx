"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, PlayCircle, ChevronDown } from "lucide-react"
import ScrollFade from "@/components/animations/ScrollFade"
import { Parallax } from "@/components/animations/Parallax"

export default function Hero() {
  const mockupRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = mockupRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(el) // run only once
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <ScrollFade delay={0.05}>
      <section
        className="section relative overflow-hidden"
        aria-labelledby="hero-heading"
        aria-roledescription="hero"
        role="banner"
      >
        {/* Very subtle pattern behind hero with parallax */}
        <Parallax offset={20}>
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-60">
            <div className="h-full w-full bg-[radial-gradient(circle_at_center,rgba(148,163,184,0.18)_1px,transparent_0)] [background-size:18px_18px]" />
          </div>
        </Parallax>

        <div className="container-default">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 lg:gap-16 xl:gap-20">
            {/* Left Content */}
            <div className="flex-1 space-y-6 max-w-2xl lg:max-w-3xl">
              <Parallax offset={10}>
                <h1
                  id="hero-heading"
                  className="heading-xl lg:text-6xl xl:text-7xl text-balance leading-tight md:leading-tight animate-fadeIn"
                  style={{ animationDelay: "0.05s" }}
                >
                  <span className="block">Supercharge your</span>
                  <span className="block">
                    writing with{" "}
                    <span className="bg-gradient-to-r from-primary/95 via-primary to-foreground bg-clip-text text-transparent drop-shadow-md">
                      FlowAI
                    </span>
                  </span>
                </h1>
              </Parallax>

              <p
                className="subtext max-w-xl md:max-w-2xl leading-relaxed md:leading-loose animate-fadeIn"
                style={{ animationDelay: "0.15s" }}
              >
                FlowAI is your AI writing assistant for blogs, emails, and
                product copy. Draft, rewrite, and refine content in seconds while
                staying on-brand and error-free.
              </p>

              <Parallax offset={6}>
                <div
                  className="flex flex-col sm:flex-row gap-4 pt-2 animate-fadeIn"
                  style={{ animationDelay: "0.25s" }}
                >
                  <Button
                    size="lg"
                    type="button"
                    aria-label="Get started with FlowAI"
                    className="relative inline-flex items-center gap-2 text-base font-semibold hover-lift"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>

                  <Button
                    size="lg"
                    type="button"
                    variant="outline"
                    aria-label="Watch demo of FlowAI"
                    className="inline-flex items-center gap-2 text-base font-medium hover-lift"
                  >
                    <PlayCircle className="h-5 w-5" />
                    <span>Watch Demo</span>
                  </Button>
                </div>
              </Parallax>

              {/* Micro-conversion text */}
              <p
                className="text-sm text-muted-foreground animate-fadeIn"
                style={{ animationDelay: "0.35s" }}
              >
                No credit card required. Try FlowAI free.
              </p>
            </div>

            {/* Right Mockup Illustration */}
            <div className="flex-1 w-full max-w-lg md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
              <Parallax offset={40}>
                <div
                  ref={mockupRef}
                  className={
                    "relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 shadow-2xl backdrop-blur-md border border-border/60 overflow-hidden hover-lift " +
                    (isVisible
                      ? "animate-slide-in-left animate-pulse-subtle"
                      : "opacity-0 -translate-x-10")
                  }
                  style={isVisible ? { animationDelay: "0.2s" } : {}}
                  role="img"
                  aria-label="Preview of FlowAI writing assistant interface"
                  aria-description="A minimal FlowAI editor window showing AI-powered tools like Smart rewrite and Tone adjust."
                >
                  {/* Faint radial glow */}
                  <div className="pointer-events-none absolute -top-10 left-1/2 h-40 w-72 -translate-x-1/2 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.22),transparent_65%)] opacity-70" />

                  {/* Mock editor window */}
                  <div className="relative z-10 h-full w-full p-5 md:p-6 flex flex-col gap-4">
                    {/* Window header */}
                    <div
                      className={
                        "flex items-center justify-between pb-2 border-b border-border/60 " +
                        (isVisible ? "animate-fadeIn" : "")
                      }
                      style={isVisible ? { animationDelay: "0.3s" } : {}}
                    >
                      <div className="flex gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-destructive/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                      </div>
                      <span className="text-xs text-muted-foreground/80">
                        FlowAI draft · v2
                      </span>
                    </div>

                    {/* Content area */}
                    <div
                      className={
                        "mt-2 flex-1 rounded-xl bg-background/80 border border-border/60 shadow-inner p-4 flex flex-col gap-3 " +
                        (isVisible ? "animate-fadeIn" : "")
                      }
                      style={isVisible ? { animationDelay: "0.35s" } : {}}
                    >
                      <div className="h-3 w-24 rounded-full bg-primary/40" />
                      <div className="space-y-2">
                        <div className="h-2.5 w-full rounded-full bg-muted" />
                        <div className="h-2.5 w-10/12 rounded-full bg-muted" />
                        <div className="h-2.5 w-7/12 rounded-full bg-muted" />
                      </div>

                      {/* Floating badges / feature chips */}
                      <div
                        className={
                          "mt-3 flex flex-wrap gap-2 " +
                          (isVisible ? "animate-fadeIn" : "")
                        }
                        style={isVisible ? { animationDelay: "0.45s" } : {}}
                      >
                        <span className="inline-flex items-center rounded-full px-3 py-1 text-xs bg-secondary/80 text-secondary-foreground/90">
                          ✨ Smart rewrite
                        </span>
                        <span className="inline-flex items-center rounded-full px-3 py-1 text-xs bg-secondary/60 text-secondary-foreground/90">
                          🎯 Tone adjust
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Parallax>
            </div>
          </div>

          {/* Scroll hint */}
          <div className="mt-10 flex justify-center">
            <div
              className={
                "flex items-center gap-2 text-sm text-muted-foreground " +
                (isVisible ? "animate-fadeIn" : "")
              }
              style={isVisible ? { animationDelay: "0.4s" } : {}}
            >
              <span>Scroll to see features</span>
              <ChevronDown className="h-4 w-4 animate-pulse-subtle" />
            </div>
          </div>
        </div>
      </section>
    </ScrollFade>
  )
}
