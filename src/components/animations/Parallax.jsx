"use client"

import { motion, useScroll, useTransform } from "framer-motion"

export function Parallax({ children, offset = 50, className = "" }) {
  const { scrollYProgress } = useScroll()

  // Scroll transforms
  const y = useTransform(scrollYProgress, [0, 1], [0, -offset])

  return (
    <motion.div style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}
