import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Play, Pause, SpeakerHigh, SpeakerSlash, Camera, VideoCamera, Microphone, Calendar } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

gsap.registerPlugin(ScrollTrigger)

type VideoItem = {
  id: string
  title: string
  category: string
  description: string
  url: string
  icon: typeof Camera
}

const videoPlaylist: VideoItem[] = [
  {
    id: 'production',
    title: 'Film Production',
    category: 'Video Production',
    description: 'Behind the scenes of our cinematic productions',
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    icon: VideoCamera
  },
  {
    id: 'studio',
    title: 'Studio Sessions',
    category: 'Photography',
    description: 'Professional studio photography and lighting setups',
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    icon: Camera
  },
  {
    id: 'events',
    title: 'Event Coverage',
    category: 'Events',
    description: 'Capturing memorable moments at live events',
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    icon: Calendar
  },
  {
    id: 'podcast',
    title: 'Podcast Production',
    category: 'Audio/Video',
    description: 'High-quality podcast recording and production',
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    icon: Microphone
  }
]

export function Showreel() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    if (!sectionRef.current || !overlayRef.current) return

    gsap.fromTo(
      overlayRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      }
    )

    const video = videoRef.current
    if (video) {
      video.play().catch(() => {
        setIsPlaying(false)
      })
    }
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video || isTransitioning) return

    const handleCanPlay = () => {
      if (isPlaying) {
        video.play().catch(() => {
          setIsPlaying(false)
        })
      }
      setIsTransitioning(false)
    }

    video.addEventListener('canplay', handleCanPlay)
    
    return () => {
      video.removeEventListener('canplay', handleCanPlay)
    }
  }, [currentVideoIndex, isPlaying, isTransitioning])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const switchVideo = (index: number) => {
    if (index === currentVideoIndex || isTransitioning) return
    
    setIsTransitioning(true)
    const video = videoRef.current
    
    if (video) {
      video.style.opacity = '0.4'
      
      setTimeout(() => {
        setCurrentVideoIndex(index)
        video.load()
        video.style.opacity = '1'
      }, 300)
    }
  }

  const currentVideo = videoPlaylist[currentVideoIndex]

  return (
    <motion.section
      id="showreel"
      ref={sectionRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary"
    >
      <motion.div 
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover transition-opacity duration-300"
          autoPlay
          loop
          muted
          playsInline
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Crect fill='%23000' width='1920' height='1080'/%3E%3C/svg%3E"
        >
          <source
            src={currentVideo.url}
            type="video/mp4"
          />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-transparent to-primary/50" />
      </motion.div>

      <div ref={overlayRef} className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/40 backdrop-blur-md">
            <div className="relative flex items-center justify-center">
              <span className="absolute h-3 w-3 rounded-full bg-white animate-ping" />
              <span className="relative h-2 w-2 rounded-full bg-white" />
            </div>
            <span className="text-sm font-bold tracking-widest text-white uppercase">
              Showreel 2024
            </span>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentVideoIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-[clamp(3rem,10vw,8rem)] leading-[0.9] font-bold tracking-tight mb-4 font-display text-white drop-shadow-2xl">
              {currentVideo.title.toUpperCase()}
            </h2>
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white backdrop-blur-md border border-white/30 hover:bg-white/30 text-sm px-4 py-1">
              {currentVideo.category}
            </Badge>
          </motion.div>
        </AnimatePresence>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed drop-shadow-lg"
        >
          From intimate studio sessions to large-scale productions, we bring your vision to life with precision and artistry
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <Button
            onClick={togglePlay}
            size="lg"
            className="group gap-3 px-8 py-6 bg-white/10 text-white border-2 border-white/30 backdrop-blur-md hover:bg-white hover:text-primary hover:border-white font-bold tracking-wider text-base rounded-full transition-all duration-300 hover:shadow-2xl"
          >
            {isPlaying ? (
              <>
                <Pause weight="fill" className="h-5 w-5" />
                PAUSE
              </>
            ) : (
              <>
                <Play weight="fill" className="h-5 w-5" />
                PLAY
              </>
            )}
          </Button>

          <Button
            onClick={toggleMute}
            size="lg"
            variant="outline"
            className="gap-3 px-8 py-6 bg-white/10 text-white border-2 border-white/30 backdrop-blur-md hover:bg-white hover:text-primary hover:border-white font-bold tracking-wider text-base rounded-full transition-all duration-300"
          >
            {isMuted ? (
              <>
                <SpeakerSlash weight="fill" className="h-5 w-5" />
                UNMUTE
              </>
            ) : (
              <>
                <SpeakerHigh weight="fill" className="h-5 w-5" />
                MUTE
              </>
            )}
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-sm font-bold tracking-widest text-white/70 uppercase mb-4">
            Switch Showreel
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {videoPlaylist.map((video, index) => {
              const Icon = video.icon
              const isActive = index === currentVideoIndex
              return (
                <Button
                  key={video.id}
                  onClick={() => switchVideo(index)}
                  disabled={isTransitioning}
                  variant={isActive ? "default" : "outline"}
                  className={`
                    group gap-2 px-6 py-3 font-bold tracking-wide text-sm rounded-full transition-all duration-300
                    ${isActive 
                      ? 'bg-white text-primary border-2 border-white shadow-lg shadow-white/30 hover:bg-white/90' 
                      : 'bg-white/10 text-white border-2 border-white/30 backdrop-blur-md hover:bg-white/20 hover:border-white/50'
                    }
                    disabled:opacity-50 disabled:cursor-not-allowed
                  `}
                >
                  <Icon weight={isActive ? "fill" : "regular"} className="h-4 w-4" />
                  <span className="hidden sm:inline">{video.title}</span>
                  <span className="sm:hidden">{video.category.split(' ')[0]}</span>
                </Button>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { number: '500+', label: 'Projects Delivered' },
            { number: '150+', label: 'Happy Clients' },
            { number: '50+', label: 'Industry Awards' },
            { number: '8+', label: 'Years Experience' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold font-display text-white mb-2 drop-shadow-lg">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-white/80 font-medium tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </motion.section>
  )
}
