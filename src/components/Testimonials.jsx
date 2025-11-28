import { Quote, ArrowRight } from "lucide-react"
import ScrollFade from "@/components/animations/ScrollFade"
import { Parallax } from "@/components/animations/Parallax"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Content Creator",
      avatar: "SM",
      testimonial:
        "FlowAI has completely transformed my writing process. What used to take hours now takes minutes, and the quality is consistently excellent. It's like having a professional editor by my side 24/7.",
    },
    {
      name: "Marcus Chen",
      role: "Marketing Manager",
      avatar: "MC",
      testimonial:
        "Our team's productivity has skyrocketed since adopting FlowAI. The AI suggestions are spot-on, and we can now produce high-quality content at scale without sacrificing our brand voice.",
    },
    {
      name: "Elena Rodriguez",
      role: "Freelance Blogger",
      avatar: "ER",
      testimonial:
        "As a freelancer, time is money. FlowAI helps me deliver polished content to my clients faster than ever. The AI understands context beautifully and saves me countless revision cycles.",
    },
  ]

  return (
    <ScrollFade delay={0.05}>
      <section
        className="section relative overflow-hidden"
        aria-labelledby="testimonials-heading"
      >
        {/* Background glow / pattern with parallax */}
        <Parallax offset={25}>
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="h-full w-full bg-[radial-gradient(circle_at_center,_rgba(148,163,184,0.16)_0,_transparent_60%)]" />
          </div>
        </Parallax>

        <div className="container-default">
          {/* Top divider for smooth section separation */}
          <div className="mx-auto mb-10 h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-border/60 to-transparent" />

          {/* Section Header with parallax */}
          <Parallax offset={12}>
            <div className="mx-auto mb-12 max-w-3xl text-center animate-fadeIn">
              <h2
                id="testimonials-heading"
                className="heading-lg mb-3 text-balance"
                style={{ animationDelay: "0.05s" }}
              >
                Loved by creators worldwide
              </h2>
              <p
                className="subtext text-pretty"
                style={{ animationDelay: "0.1s" }}
              >
                See why writers and businesses trust FlowAI to improve their
                content.
              </p>
            </div>
          </Parallax>

          {/* Testimonials Grid with parallax */}
          <Parallax offset={20}>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((t, index) => {
                const baseDelay = 0.15 + index * 0.12

                return (
                  <article
                    key={t.name}
                    className="group relative rounded-2xl border border-border/70 bg-card/90 p-6 md:p-7 shadow-sm transform-gpu transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:shadow-xl hover:border-primary/40 hover:bg-card hover-lift animate-fadeIn"
                    style={{ animationDelay: `${baseDelay}s` }}
                    aria-label={`Testimonial from ${t.name}, ${t.role}`}
                  >
                    {/* Decorative quote icon */}
                    <div className="pointer-events-none absolute right-5 top-5 text-muted-foreground/20">
                      <Quote className="h-6 w-6" aria-hidden="true" />
                    </div>

                    {/* Avatar + name + role */}
                    <div
                      className="mb-4 flex items-center gap-4 animate-fadeIn"
                      style={{ animationDelay: `${baseDelay + 0.05}s` }}
                    >
                      <div className="relative">
                        <div className="h-14 w-14 rounded-full bg-gradient-to-br from-primary/25 via-primary/10 to-primary/30 flex items-center justify-center text-sm font-semibold text-primary-foreground shadow-sm ring-2 ring-primary/25 group-hover:ring-primary/50 group-hover:shadow-md transition-all duration-300">
                          <span>{t.avatar}</span>
                        </div>
                        <span className="absolute -bottom-1 -right-1 h-2.5 w-2.5 rounded-full bg-emerald-400/80 shadow-md" />
                      </div>

                      <div className="space-y-0.5">
                        <h3 className="font-semibold text-foreground transition-colors duration-200 group-hover:text-primary">
                          {t.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {t.role}
                        </p>
                      </div>
                    </div>

                    {/* Testimonial Text */}
                    <p
                      className="text-sm md:text-base leading-relaxed text-muted-foreground text-pretty max-w-prose animate-fadeIn"
                      style={{ animationDelay: `${baseDelay + 0.12}s` }}
                    >
                      {t.testimonial}
                    </p>

                    {/* Optional subtle CTA under each testimonial */}
                    <button
                      type="button"
                      className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-transform duration-200 group-hover:translate-x-0.5 animate-fadeIn"
                      style={{ animationDelay: `${baseDelay + 0.18}s` }}
                      aria-label={`Learn more about how ${t.name} uses FlowAI`}
                    >
                      <span>Read success story</span>
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
