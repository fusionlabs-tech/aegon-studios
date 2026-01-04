import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface ZigzagDividerProps {
  color?: string
  animate?: boolean
}

export function ZigzagDivider({ color = 'currentColor', animate = true }: ZigzagDividerProps) {
  const pathRef = useRef<SVGPathElement>(null)

  useEffect(() => {
    if (!animate || !pathRef.current) return

    const path = pathRef.current
    const length = path.getTotalLength()

    path.style.strokeDasharray = `${length}`
    path.style.strokeDashoffset = `${length}`
  }, [animate])

  return (
    <div className="w-full overflow-hidden py-8">
      <motion.svg
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full h-12"
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          ref={pathRef}
          d="M0 30 L60 10 L120 30 L180 10 L240 30 L300 10 L360 30 L420 10 L480 30 L540 10 L600 30 L660 10 L720 30 L780 10 L840 30 L900 10 L960 30 L1020 10 L1080 30 L1140 10 L1200 30"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={animate ? { pathLength: 1, opacity: 1 } : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            pathLength: { duration: 2, ease: "easeInOut" },
            opacity: { duration: 0.5 }
          }}
        />
      </motion.svg>
    </div>
  )
}
