"use client"

import { useEffect, useRef, useState } from "react"

export default function ScrollFade({ children, delay = 0, y = 24 }) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0px)" : `translateY(${y}px)`,
        transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
        transitionDelay: `${delay}s`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  )
}
