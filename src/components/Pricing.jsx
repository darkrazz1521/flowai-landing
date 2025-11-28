import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import ScrollFade from "@/components/animations/ScrollFade"
import { Parallax } from "@/components/animations/Parallax"

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "/mo",
    description: "Perfect for trying out FlowAI",
    features: [
      { text: "5,000 words per month" },
      { text: "Basic writing templates" },
      { text: "Email support" },
      { text: "Chrome extension" },
      { text: "Export to PDF" },
    ],
    buttonText: "Get Started",
  },
  {
    name: "Pro",
    price: "$15",
    period: "/mo",
    description: "For professional writers and content creators",
    features: [
      { text: "100,000 words per month" },
      { text: "Advanced AI templates" },
      { text: "Priority support" },
      { text: "Team collaboration" },
      { text: "Custom brand voice" },
    ],
    buttonText: "Choose Plan",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "$29",
    period: "/mo",
    description: "For teams and large organizations",
    features: [
      { text: "Unlimited words" },
      { text: "Custom AI training" },
      { text: "Dedicated account manager" },
      { text: "API access" },
      { text: "SSO & advanced security" },
    ],
    buttonText: "Contact sales",
  },
]

export default function Pricing() {
  return (
    <ScrollFade delay={0.05}>
      <section
        className="section relative overflow-hidden"
        aria-labelledby="pricing-heading"
      >
        {/* Background glow / pattern with parallax */}
        <Parallax offset={28}>
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.16)_0,_transparent_60%)]" />
          </div>
        </Parallax>

        <div className="container-default">
          {/* Divider for smooth separation */}
          <div className="mx-auto mb-10 h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-border/60 to-transparent" />

          {/* Header with parallax */}
          <Parallax offset={12}>
            <div className="mb-12 text-center animate-fadeIn">
              <h2
                id="pricing-heading"
                className="heading-lg mb-3 text-balance"
                style={{ animationDelay: "0.05s" }}
              >
                Simple, Transparent Pricing
              </h2>
              <p
                className="subtext mx-auto max-w-2xl text-pretty"
                style={{ animationDelay: "0.1s" }}
              >
                Choose the perfect plan for your writing needs.
              </p>
            </div>
          </Parallax>

          {/* Plans with parallax */}
          <Parallax offset={18}>
            <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
              {plans.map((plan, index) => {
                const baseDelay = 0.15 + index * 0.12
                const isPro = plan.highlighted

                const card = (
                  <article
                    className={
                      "group relative flex flex-col rounded-2xl border bg-card/90 p-8 shadow-sm transform-gpu transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl hover:border-primary/50 hover:bg-card hover-lift animate-fadeIn " +
                      (isPro
                        ? "border-primary/60 ring-2 ring-primary/35 shadow-md"
                        : "border-border/70")
                    }
                    style={{ animationDelay: `${baseDelay}s` }}
                    aria-label={`${plan.name} plan`}
                  >
                    {/* Gradient halo for Pro plan */}
                    {isPro && (
                      <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.32)_0,transparent_55%)]" />
                    )}

                    {/* Badge */}
                    {plan.badge && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <span className="rounded-full bg-primary px-4 py-1.5 text-xs font-medium text-primary-foreground shadow-md">
                          {plan.badge}
                        </span>
                      </div>
                    )}

                    {/* Plan header */}
                    <div
                      className="mb-6 animate-fadeIn"
                      style={{ animationDelay: `${baseDelay + 0.05}s` }}
                    >
                      <h3 className="mb-2 text-xl md:text-2xl font-semibold text-card-foreground">
                        {plan.name}
                      </h3>
                      <div className="mb-3 flex items-baseline gap-1">
                        <span className="text-4xl md:text-5xl font-bold tracking-tight text-card-foreground">
                          {plan.price}
                        </span>
                        <span className="text-muted-foreground">
                          {plan.period}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {plan.description}
                      </p>
                    </div>

                    {/* Features */}
                    <ul
                      className="mb-8 flex-grow space-y-4 animate-fadeIn"
                      style={{ animationDelay: `${baseDelay + 0.12}s` }}
                    >
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                            <Check className="h-3 w-3 text-primary/80" />
                          </div>
                          <span className="text-sm leading-relaxed text-card-foreground">
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Button */}
                    <Button
                      size="lg"
                      className={
                        "w-full hover-lift " +
                        (isPro
                          ? "ring-2 ring-primary/40 shadow-lg"
                          : "bg-background/80 text-foreground border border-border/70 hover:bg-muted")
                      }
                      variant={isPro ? "default" : "outline"}
                      aria-label={plan.buttonText + " for " + plan.name + " plan"}
                    >
                      {plan.buttonText}
                    </Button>
                  </article>
                )

                // Special parallax for Pro plan card
                if (isPro) {
                  return (
                    <Parallax key={plan.name} offset={25}>
                      {card}
                    </Parallax>
                  )
                }

                return (
                  <div key={plan.name}>
                    {card}
                  </div>
                )
              })}
            </div>
          </Parallax>

          {/* Footnote with parallax */}
          <Parallax offset={8}>
            <p className="mt-8 text-center text-sm text-muted-foreground">
              No hidden fees. Cancel anytime.
            </p>
          </Parallax>
        </div>
      </section>
    </ScrollFade>
  )
}
