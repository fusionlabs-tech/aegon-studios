import { motion } from 'framer-motion'

interface SectionDividerProps {
  variant?: 'line' | 'fade' | 'dots'
}

export function SectionDivider({ variant = 'fade' }: SectionDividerProps) {
  if (variant === 'line') {
    return (
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"
      />
    )
  }

  if (variant === 'dots') {
    return (
      <div className="flex justify-center gap-2 py-8">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 0.3 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="w-2 h-2 rounded-full bg-foreground"
          />
        ))}
      </div>
    )
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="h-24 bg-gradient-to-b from-transparent via-border/10 to-transparent"
    />
  )
}
