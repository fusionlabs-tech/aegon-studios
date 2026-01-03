import { motion } from 'framer-motion'

interface LoadingBarProps {
  delay?: number
}

export function LoadingBar({ delay = 0 }: LoadingBarProps) {
  return (
    <div className="w-full h-1 bg-muted/30 rounded-full overflow-hidden">
      <motion.div
        initial={{ x: '-100%' }}
        whileInView={{ x: '0%' }}
        viewport={{ once: true }}
        transition={{ 
          duration: 1.2, 
          delay,
          ease: [0.45, 0, 0.55, 1]
        }}
        className="h-full bg-gradient-to-r from-primary via-primary/80 to-accent rounded-full"
      />
    </div>
  )
}
