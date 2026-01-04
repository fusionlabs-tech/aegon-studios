export interface ArchiveItem {
  id: number
  title: string
  category: string
  image: string
  client: string
  year: string
  description: string
  longDescription: string
  services: string[]
  credits: { [key: string]: string }
  gallery?: string[]
}

import { getCurrentYear } from '@/utils/date'

export const archiveData: ArchiveItem[] = [
  {
    id: 1,
    title: 'Urban Nights Campaign',
    category: 'Photography',
    image: '/images/urban_nights.png',
    description: 'A striking fashion photography campaign that captured the essence of luxury streetwear in urban landscapes.',
    longDescription: 'Urban Nights was a high-concept fashion photography campaign designed for Luxe Street Apparel. The objective was to blend the gritty textures of downtown Los Angeles with the high-fidelity finish of luxury streetwear. We spent three nights shooting in the Arts District, utilizing available street lighting as our primary atmosphere and augmenting with portable cinema lights to create a hyper-real aesthetic.',
    client: 'Luxe Street Apparel',
    year: getCurrentYear(),
    services: ['Art Direction', 'Fashion Photography', 'Post-Production', 'Color Grading'],
    credits: {
      'Director': 'Aegon V',
      'Photography': 'Marcus Chen',
      'Styling': 'Sarah Rose',
      'Location': 'Arts District, LA'
    },
    gallery: ['/images/urban_nights.png', '/images/studio_session.png', '/images/tech_launch.png']
  },
  {
    id: 2,
    title: 'Tech Product Launch',
    category: 'Video',
    image: '/images/tech_launch.png',
    description: 'Cinematic commercial video production showcasing next-generation technology with stunning visual storytelling.',
    longDescription: 'For the launch of InnovateTech’s new flagship product, we were tasked with creating a launch film that felt more like a short cinema piece than an advertisement. We focused on the tactile nature of the device—the way light hits the matte surfaces and the precision of the mechanical interfaces. The resulting film was used globally across web, broadcast, and flagship retail displays.',
    client: 'InnovateTech',
    year: getCurrentYear(),
    services: ['Commercial Video', 'Motion Graphics', 'Sound Design', 'CGI Integration'],
    credits: {
      'Director': 'Elena Vance',
      'Cinematography': 'David Park',
      'Editor': 'James Low',
      'Sound': 'Sonic Labs'
    }
  },
  {
    id: 3,
    title: `Corporate Summit ${getCurrentYear()}`,
    category: 'Events',
    image: '/images/event_summit.png',
    description: 'Comprehensive event coverage capturing the energy and insights of industry leaders.',
    longDescription: 'The Global Business Forum required 360-degree visual documentation for their annual flagship summit. We deployed a team of seven specialists to cover keynotes, intimate breakout sessions, and high-stakes networking events. The project included a "daily highlight" series produced on-site in real-time, as well as a comprehensive archive of all technical presentations.',
    client: 'Global Business Forum',
    year: getCurrentYear(),
    services: ['Multi-cam Coverage', 'Real-time Editing', 'Keynote Recording', 'Aerial Videography'],
    credits: {
      'Lead Producer': 'Michael Stone',
      'Head Editor': 'Chris Miller',
      'Event Manager': 'Lisa Wong'
    }
  },
  {
    id: 4,
    title: 'Founders Talk Podcast',
    category: 'Podcast',
    image: '/images/podcast_setup.png',
    description: 'Professional multi-camera podcast production bringing intimate conversations to life.',
    longDescription: 'Startup Stories Media wanted to elevate their flagship podcast, Founders Talk, into a visual-first medium. We designed a custom studio environment that balanced professional lighting with an intimate "living room" feel. Using a four-camera setup with cinema-grade sensors, we provide a visual fidelity that matches the high quality of the entrepreneurs interviewed.',
    client: 'Startup Stories Media',
    year: getCurrentYear(),
    services: ['Studio Design', 'Technical Direction', 'Post-Production', 'Social Clips'],
    credits: {
      'Executive Producer': 'Jane Doe',
      'Technical Director': 'Sam Smith',
      'Audio Engineer': 'Alex Rivera'
    }
  },
  {
    id: 5,
    title: 'Luxury Auto Campaign',
    category: 'Brand',
    image: '/images/luxury_car.png',
    description: 'Complete brand visual identity development showcasing automotive excellence.',
    longDescription: 'Prestige Motors approached us to redefine the visual language for their upcoming collection. We moved away from traditional "car porn" and towards a more lifestyle-oriented, cinematic approach. We shot in the Swiss Alps, focusing on the interplay between the organic curves of the mountains and the sharp, geometric lines of the vehicle.',
    client: 'Prestige Motors',
    year: '2023',
    services: ['Brand Strategy', 'Cinematic Film', 'Still Photography', 'Global Asset Library'],
    credits: {
      'Creative Director': 'Aegon V',
      'DP': 'Lucas Thorne',
      'VFX': 'Visionary Studios'
    }
  },
  {
    id: 6,
    title: 'Studio Creative Session',
    category: 'Photography',
    image: '/images/studio_session.png',
    description: 'A deep dive into experimental studio lighting and minimalist composition.',
    longDescription: 'This was an internal "Aegon Labs" project focused on pushing the boundaries of studio lighting techniques. We experimented with polarization, ultraviolet spectrums, and long-exposure light painting to create a series of abstract yet intentional portraits. These sessions serve as our creative "gym," where we refine the techniques eventually use in client work.',
    client: 'Vanguard Collective',
    year: '2023',
    services: ['Experimental Lighting', 'Portraiture', 'Retouching', 'Print Design'],
    credits: {
      'Photographer': 'Aegon V',
      'Gaffer': 'Tom H.',
      'Model': 'Xavier J.'
    }
  },
  {
    id: 7,
    title: 'Neon Pulse Music Video',
    category: 'Video',
    image: '/images/urban_nights.png',
    description: 'A neon-drenched visual journey through the electronic music scene.',
    longDescription: 'Commissioned by Synthetix Records, Neon Pulse is a music video that explores the surreal side of nightlife. Using anamorphic lenses and heavy filtration, we created a dream-like atmosphere that synchronized perfectly with the driving electronic beats. The project pushed our color grading pipeline to its limits to maintain detail within vibrant, saturated environments.',
    client: 'Synthetix Records',
    year: '2023',
    services: ['Music Video', 'Anamorphic Cinematography', 'Color Grading', 'Lyric Design'],
    credits: {
      'Director': 'Marcus Chen',
      'Artist': 'LUMEN',
      'Label': 'Synthetix'
    }
  },
  {
    id: 8,
    title: 'Minimalist Architecture',
    category: 'Photography',
    image: '/images/studio_session.png',
    description: 'Exploration of form and light in modern architectural spaces.',
    longDescription: 'A collaboration with Mono Struct architects to document their latest residential project. Our approach was one of extreme reduction. We focused on the passing of shadows across concrete surfaces over a 48-hour period, capturing the raw, brutalist beauty of the space without the distraction of occupants or furniture.',
    client: 'Mono Struct',
    year: '2022',
    services: ['Architectural Photography', 'Documentary', 'Post-Production'],
    credits: {
      'Photography': 'Aegon V',
      'Architect': 'Lars Jensen'
    }
  },
  // Extra data for pagination
  {
    id: 9,
    title: 'Cyberpunk Editorial',
    category: 'Photography',
    image: '/images/urban_nights.png',
    description: 'Futuristic fashion storytelling in the heart of Tokyo.',
    longDescription: 'A high-energy editorial shoot exploring the intersection of traditional Japanese aesthetics and futuristic cyber-culture.',
    client: 'Moda Future',
    year: '2022',
    services: ['Concept Art', 'Photography'],
    credits: { 'Director': 'Asahi T.' }
  },
  {
    id: 10,
    title: 'Digital Horizon Doc',
    category: 'Video',
    image: '/images/tech_launch.png',
    description: 'A short documentary on the future of virtual environments.',
    longDescription: 'Exploring how VR and AR are reshaping our understanding of physical space and social interaction.',
    client: 'Meta Labs',
    year: '2022',
    services: ['Documentary Production', 'Interviews'],
    credits: { 'Director': 'Sarah Vance' }
  },
  {
    id: 11,
    title: 'Luxe Interiors',
    category: 'Photography',
    image: '/images/studio_session.png',
    description: 'Interior design photography for ultra-luxury penthouses.',
    longDescription: 'Capturing the intricate details of custom marble, hand-woven textiles, and bespoke lighting in luxury living spaces.',
    client: 'High End Living',
    year: '2021',
    services: ['Interior Photography', 'Retouching'],
    credits: { 'Photography': 'David Park' }
  },
  {
    id: 12,
    title: 'Global Summit 2021',
    category: 'Events',
    image: '/images/event_summit.png',
    description: 'Documentation of the international climate summit.',
    longDescription: 'A monumental task involving over 50 hours of live-streamed content and a massive archive of visual assets.',
    client: 'World Change Org',
    year: '2021',
    services: ['Live Streaming', 'Archive Management'],
    credits: { 'Producer': 'Ellen Ripley' }
  },
  {
    id: 13,
    title: 'Rhythm & Blue',
    category: 'Video',
    image: '/images/podcast_setup.png',
    description: 'A series of intimate live performances recorded in-studio.',
    longDescription: 'Capturing the raw energy of live musical performance in a controlled studio environment.',
    client: 'Blue Note Media',
    year: '2021',
    services: ['Live Session Recording', 'Mixing'],
    credits: { 'Director': 'Miles Davis Jr.' }
  },
  {
    id: 14,
    title: 'Brand Aura',
    category: 'Brand',
    image: '/images/luxury_car.png',
    description: 'A total visual rebranding for a classic heritage watchmaker.',
    longDescription: 'Modernizing a 100-year-old brand while preserving its mechanical soul and historical authority.',
    client: 'Horology Co.',
    year: '2020',
    services: ['Rebranding', 'Visual Strategy'],
    credits: { 'CD': 'Aegon V' }
  }
]
