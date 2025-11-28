import { Sparkles, Wand2, CheckCircle2, ArrowRight } from "lucide-react"
import ScrollFade from "@/components/animations/ScrollFade"
import { Parallax } from "@/components/animations/Parallax"

export default function Features() {
  const features = [
    {
      title: "Smart Suggestions",
      description:
        "Get AI-powered recommendations that adapt to your writing style and context in real-time.",
      icon: Sparkles,
      badgeClasses:
        "bg-gradient-to-br from-primary/18 via-primary/8 to-primary/18 text-primary",
    },
    {
      title: "Instant Rewriting",
      description:
        "Transform any sentence with one click. Switch tone from casual to professional in seconds.",
      icon: Wand2,
      badgeClasses:
        "bg-gradient-to-br from-accent/20 via-accent/10 to-accent/20 text-accent-foreground",
    },
    {
      title: "Grammar Perfection",
      description:
        "Catch subtle mistakes with advanced grammar intelligence that goes far beyond basic spell-check.",
      icon: CheckCircle2,
      badgeClasses:
        "bg-gradient-to-br from-secondary/18 via-secondary/8 to-secondary/18 text-secondary-foreground",
    },
  ]

  return (
    <ScrollFade delay={0.05}>
      <section
        className="section relative overflow-hidden"
        aria-labelledby="features-heading"
      >
        {/* Soft background glow / pattern to match hero */}
        <Parallax offset={22}>
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.16)_0,_transparent_60%)]" />
          </div>
        </Parallax>

        <div className="container-default">
          {/* Section divider */}
          <div className="mx-auto mb-10 h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-border/60 to-transparent" />

          {/* Header */}
          <Parallax offset={12}>
            <div className="mx-auto mb-12 max-w-3xl text-center animate-fadeIn">
              <h2
                id="features-heading"
                className="heading-lg mb-3 text-balance"
                style={{ animationDelay: "0.05s" }}
              >
                Powerful Features
              </h2>
              <p
                className="subtext"
                style={{ animationDelay: "0.1s" }}
              >
                Everything you need to write faster, smarter, and with complete
                confidence.
              </p>
            </div>
          </Parallax>

          {/* Features Grid */}
          <Parallax offset={20}>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => {
                const Icon = feature.icon
                const baseDelay = 0.15 + index * 0.12

                return (
                  <article
                    key={feature.title}
                    className="group rounded-2xl border border-border/70 bg-card/90 p-6 md:p-7 shadow-sm transform-gpu transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl hover:border-primary/50 hover:bg-card hover-lift animate-fadeIn"
                    style={{ animationDelay: `${baseDelay}s` }}
                  >
                    {/* Icon */}
                    <div
                      className="mb-5 animate-fadeIn"
                      style={{ animationDelay: `${baseDelay + 0.05}s` }}
                    >
                      <div
                        className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${feature.badgeClasses} shadow-sm backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-lg group-hover:ring-2 group-hover:ring-primary/35`}
                      >
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3
                      className="mb-2 text-lg md:text-xl font-semibold text-foreground transition-colors duration-200 animate-fadeIn group-hover:text-primary"
                      style={{ animationDelay: `${baseDelay + 0.1}s` }}
                    >
                      {feature.title}
                    </h3>

                    <p
                      className="text-sm md:text-base leading-relaxed text-muted-foreground transition-colors duration-200 animate-fadeIn group-hover:text-muted-foreground/90"
                      style={{ animationDelay: `${baseDelay + 0.16}s` }}
                    >
                      {feature.description}
                    </p>

                    {/* Optional Learn more link */}
                    <button
                      type="button"
                      className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-transform duration-200 group-hover:translate-x-0.5 animate-fadeIn"
                      style={{ animationDelay: `${baseDelay + 0.22}s` }}
                      aria-label={`Learn more about ${feature.title}`}
                    >
                      <span>Learn more</span>
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>
                  </article>
                )
              })}
            </div>
          </Parallax>
        </div>
      </section>
    </ScrollFade>
  )
}
