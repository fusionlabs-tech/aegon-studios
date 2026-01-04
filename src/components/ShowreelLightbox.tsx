import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Dialog, 
  DialogContent, 
  DialogTrigger 
} from '@/components/ui/dialog'
import { Play, X, SpeakerHigh, SpeakerSlash, Pause } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { getCurrentYear } from '@/utils/date'

const SHOWREEL_URL = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'

export function ShowreelLightbox({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [isPlaying, setIsPlaying] = useState(true)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-[95vw] w-full aspect-video p-0 overflow-hidden bg-black border-none sm:max-w-[90vw] md:max-w-7xl">
        <div className="relative w-full h-full flex items-center justify-center group">
          <video
            src={SHOWREEL_URL}
            className="w-full h-full object-contain"
            autoPlay
            loop
            muted={isMuted}
            playsInline
          />
          
          {/* Controls Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-white hover:bg-white/20 rounded-full h-12 w-12"
                  onClick={(e) => {
                    e.preventDefault()
                    const video = e.currentTarget.closest('.dialog-content')?.querySelector('video')
                    if (video) {
                      if (isPlaying) video.pause()
                      else video.play()
                      setIsPlaying(!isPlaying)
                    }
                  }}
                >
                  {isPlaying ? <Pause weight="fill" size={24} /> : <Play weight="fill" size={24} />}
                </Button>
                
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-white hover:bg-white/20 rounded-full h-12 w-12"
                  onClick={() => setIsMuted(!isMuted)}
                >
                  {isMuted ? <SpeakerSlash weight="fill" size={24} /> : <SpeakerHigh weight="fill" size={24} />}
                </Button>
              </div>

              <div className="text-white font-display text-xl tracking-widest hidden sm:block">
                AEGON STUDIOS SHOWREEL {getCurrentYear()}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
