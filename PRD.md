# Planning Guide

Aegon Studios is a premium media production portfolio that showcases their expertise in photography, videography, studio sessions, event coverage, and podcast production, presenting their work with award-worthy design and captivating animations.

**Experience Qualities**:
1. **Cinematic** - The experience should feel like watching a high-end production reel, with smooth transitions and dramatic reveals that mirror the studio's film expertise.
2. **Bold** - Confident typography, striking imagery, and unapologetic use of space that demands attention and communicates creative excellence.
3. **Immersive** - Deep engagement through scroll-triggered animations, parallax effects, and interactive elements that pull visitors into the studio's creative world.

**Complexity Level**: Light Application (multiple features with basic state)
This is a content showcase with interactive filtering, smooth animations, and multiple sections, but no complex state management or data persistence requirements beyond basic UI interactions.

## Essential Features

### Hero Section with Cinematic Introduction
- **Functionality**: Large-format hero with studio name, tagline, animated text reveals, and scroll indicator
- **Purpose**: Immediately establish creative authority and set the tone for the premium experience
- **Trigger**: Page load
- **Progression**: Fade in background → Stagger in title letters → Reveal tagline → Show scroll indicator → Respond to scroll
- **Success criteria**: Text animations complete smoothly, scroll behavior feels responsive, hero captures attention

### Video Showreel Section with Autoplay Background and Playlist Switcher
- **Functionality**: Full-screen video background with overlay text, statistics, video controls (play/pause, mute/unmute), and playlist switcher allowing users to view different types of content (Film Production, Studio Sessions, Event Coverage, Podcast Production)
- **Purpose**: Demonstrate the studio's diverse production capabilities through multiple video showcases, building credibility with impressive stats while allowing visitors to explore specific service areas
- **Trigger**: User scrolls past hero section
- **Progression**: Section enters viewport → Video autoplays → Overlay content fades in with stagger → Stats animate in → User can control playback → User clicks playlist button → Video transitions smoothly to new content with animated title/category change
- **Success criteria**: Videos load and autoplay smoothly, controls are intuitive, playlist switching is seamless with smooth transitions, overlay content is readable, stats create impact, category badges clearly identify content type

### Portfolio Grid with Category Filtering
- **Functionality**: Masonry-style grid displaying work samples with hover effects and category filters (Photography, Video, Events, Podcasts, Brand Work)
- **Purpose**: Showcase range of work while allowing visitors to explore specific service areas
- **Trigger**: User scrolls to portfolio section or clicks category filter
- **Progression**: Grid loads with stagger animation → User hovers over item (scale + overlay reveal) → User clicks filter → Grid animates out → Filtered items animate in
- **Success criteria**: Smooth filtering transitions, hover states feel responsive, images load properly

### About Section with Team Showcase
- **Functionality**: Studio story, capabilities list, team philosophy with animated text reveals on scroll
- **Purpose**: Build credibility and humanize the brand
- **Trigger**: Scroll into view
- **Progression**: Section enters viewport → Heading fades in → Body text reveals line by line → Stats/capabilities animate in
- **Success criteria**: Text reveals feel organic, timing creates rhythm, content is readable

### Services Showcase
- **Functionality**: Visual cards for each service (Photo/Video/Studio/Events/Podcast) with icons and descriptions
- **Purpose**: Clearly communicate service offerings with visual distinction
- **Trigger**: Scroll into viewport
- **Progression**: Section visible → Cards stagger in from bottom → Hover reveals additional details → Click expands card (optional)
- **Success criteria**: Cards feel substantial, hover states add depth, information hierarchy is clear

### Collaboration/Clients Section
- **Functionality**: Horizontal scrolling marquee of brand logos with infinite loop animation
- **Purpose**: Demonstrate credibility through recognizable partnerships
- **Trigger**: Section in view
- **Progression**: Logos continuously scroll horizontally → Hover pauses scroll (optional) → Seamless loop
- **Success criteria**: Animation is buttery smooth, no janky transitions, looks polished

### Contact Section
- **Functionality**: Large call-to-action with contact details, email/social links with subtle hover animations
- **Purpose**: Convert interest into inquiries
- **Trigger**: User scrolls to bottom
- **Progression**: Section appears → CTA animates in → Social icons reveal → Hover states engage user
- **Success criteria**: CTA is unmissable, contact info is clear, animations feel inviting

## Edge Case Handling
- **Slow Network**: Skeleton loaders for images, progressive image loading with blur-up effect
- **No Portfolio Items**: Graceful empty state with "Coming Soon" messaging
- **Long Text Content**: Truncation with "Read More" expansion to maintain layout
- **Mobile Touch**: Disable hover effects on touch devices, replace with tap interactions
- **Rapid Filter Switching**: Debounce filter transitions to prevent animation stacking

## Design Direction
The design should evoke prestige, creativity, and technical mastery—like walking into a high-end production studio. Think award-winning agency websites with cinematic storytelling, bold typography that commands space, and interactions that surprise and delight. The aesthetic should feel contemporary and editorial, with generous white space punctuated by dramatic imagery.

## Color Selection
A bold monochromatic black and white palette that matches the studio's logo aesthetic, with stark contrast and clean, modern appeal.

- **Primary Color**: Pure Black (oklch(0.15 0 0)) - Strong, bold, professional anchor communicating authority and sophistication
- **Secondary Colors**: 
  - Pure White (oklch(1 0 0)) for maximum contrast and breathing room
  - Soft Gray (oklch(0.96 0 0)) for subtle backgrounds that don't compete
  - Medium Gray (oklch(0.50 0 0)) for supporting text
- **Accent Color**: Black (oklch(0.15 0 0)) - Keeping the monochrome theme consistent with white text for CTAs creating high contrast
- **Foreground/Background Pairings**: 
  - Background White (oklch(1 0 0)): Black text (oklch(0.15 0 0)) - Ratio 15.1:1 ✓
  - Background Black (oklch(0.15 0 0)): White text (oklch(1 0 0)) - Ratio 15.1:1 ✓
  - Background Soft Gray (oklch(0.96 0 0)): Black text (oklch(0.15 0 0)) - Ratio 13.2:1 ✓

## Font Selection
Typography should feel editorial and commanding—like title cards in a prestige production.

- **Primary Font**: "Bebas Neue" - Bold, condensed display font for hero titles and section headers; creates vertical drama and cinematic impact
- **Secondary Font**: "Inter" - Clean, professional sans-serif for body copy and UI elements; ensures readability while staying modern

- **Typographic Hierarchy**:
  - Hero Title: Bebas Neue Bold / 120px (desktop) 56px (mobile) / Tight tracking (-0.02em) / Line height 0.9
  - Section Headers: Bebas Neue Bold / 72px (desktop) 40px (mobile) / Tight tracking / Line height 1
  - Subheadings: Inter SemiBold / 24px / Normal tracking / Line height 1.3
  - Body Text: Inter Regular / 16px / Normal tracking / Line height 1.6
  - Captions: Inter Regular / 14px / Slightly wide tracking (0.01em) / Line height 1.5
  - CTA Buttons: Inter Bold / 16px / Wide tracking (0.05em) / Uppercase

## Animations
Animations should feel cinematic and purposeful—inspired by film title sequences and high-end agency work. Every animation reinforces the studio's storytelling expertise.

- **Scroll-Triggered Reveals**: Elements fade in with subtle upward movement as they enter viewport (GSAP ScrollTrigger)
- **Text Stagger**: Letter-by-letter or word-by-word reveals for hero and section titles using split text animations
- **Parallax Effects**: Background elements move at different speeds than foreground for depth (subtle, not overdone)
- **Hover Transformations**: Images scale slightly (1.05x) with smooth easing, overlay fades in with additional info
- **Smooth Scrolling**: Locomotive Scroll or smooth scroll behavior for premium feel
- **Page Transitions**: Elements exit and enter with coordinated timing (framer-motion page transitions)
- **Magnetic Buttons**: CTAs subtly follow cursor on hover before click (framer-motion)
- **Logo Marquee**: Seamless infinite horizontal scroll using GSAP or framer-motion

## Component Selection

- **Components**:
  - **Card**: Portfolio items with image, overlay, and category tag
  - **Button**: Primary CTAs with hover states and magnetic effect
  - **Badge**: Category filters and tags
  - **Separator**: Section dividers with subtle styling
  - **Scroll Area**: For any contained scrolling content
  - **Tabs**: Could be used for filtering portfolio categories (alternative to buttons)
  
- **Customizations**:
  - **Hero Component**: Custom full-viewport hero with split-text animation
  - **Portfolio Grid**: Custom masonry/grid layout with GSAP stagger animations
  - **Marquee Component**: Infinite scroll for client logos
  - **Hover Card**: Custom overlay effect for portfolio items
  - **Magnetic Button**: Custom cursor-following CTA using framer-motion
  - **Scroll Progress**: Custom thin progress bar at top showing scroll depth
  
- **States**:
  - **Buttons**: Default (black with white text) / Hover (scale 1.05, subtle shadow) / Active (scale 0.98) / Focus (ring with black)
  - **Portfolio Items**: Default (normal) / Hover (scale 1.05, overlay visible) / Loading (skeleton with pulse)
  - **Filter Badges**: Default (ghost) / Active (solid black) / Hover (subtle scale)
  
- **Icon Selection**:
  - Camera (Photography)
  - VideoCamera (Videography)
  - Microphone (Podcast)
  - Calendar (Events)
  - Buildings (Studio Sessions)
  - Sparkle (Brand Work)
  - ArrowRight (CTAs and navigation)
  - LinkedinLogo, InstagramLogo, EnvelopeSimple (Social/Contact)
  
- **Spacing**:
  - Section padding: py-24 (desktop) py-16 (mobile)
  - Container max-width: max-w-7xl
  - Grid gaps: gap-6 (mobile) gap-8 (desktop)
  - Element spacing: space-y-6 for vertical stacks
  - Button padding: px-8 py-4
  
- **Mobile**:
  - Hero text scales down significantly (120px → 56px)
  - Grid switches from 3 columns → 1 column
  - Portfolio filtering becomes dropdown instead of horizontal buttons
  - Parallax effects disabled for performance
  - Reduced animation complexity (fewer stagger effects)
  - Touch-optimized buttons (larger hit areas)
  - Sticky header collapses on scroll
