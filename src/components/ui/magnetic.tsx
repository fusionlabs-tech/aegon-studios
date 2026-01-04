import { useRef, useState } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'

interface MagneticProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode
}

export default function Magnetic({ children, ...props }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e
    const { height, width, left, top } = ref.current!.getBoundingClientRect()
    const middleX = clientX - (left + width / 2)
    const middleY = clientY - (top + height / 2)
    setPosition({ x: middleX, y: middleY })
    props.onMouseMove?.(e)
  }

  const reset = (e: React.MouseEvent<HTMLDivElement>) => {
    setPosition({ x: 0, y: 0 })
    props.onMouseLeave?.(e)
  }

  const { x, y } = position

  return (
    <motion.div
      style={{ position: 'relative' }}
      ref={ref}
      animate={{ x, y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      {...props}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
    >
      {children}
    </motion.div>
  )
}
