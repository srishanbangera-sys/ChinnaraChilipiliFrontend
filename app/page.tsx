"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronDown, Calendar, Trophy, MapPin, Sparkles, Menu, X } from "lucide-react"
import Reveal from "@/components/Reveal"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Sheet, SheetContent } from "@/components/ui/sheet"

export default function CampWebsite() {
  const [expandedYear, setExpandedYear] = useState<number | null>(null)

  // mobile/menu/gallery/registration UI state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [galleryOpen, setGalleryOpen] = useState(false)
  const [galleryIndex, setGalleryIndex] = useState(0)
  const galleryApiRef = useRef<any | null>(null)

  useEffect(() => {
    if (galleryOpen && galleryApiRef.current) {
      try {
        galleryApiRef.current.scrollTo(galleryIndex)
      } catch (err) {
        /* ignore */
      }
    }
  }, [galleryOpen, galleryIndex])

  const openGalleryAt = (idx: number) => {
    setGalleryIndex(idx)
    setGalleryOpen(true)
  }

  const timelineEvents = [
    {
      year: 2000,
      title: "The Beginning",
      description: "The first summer camp brings together 25 children from the community.",
      image: "/Beginning.jpeg",
    },
    {
      year: 2005,
      title: "Growing Community",
      description: "Expansion to 100+ kids annually with new sports and yoga programs.",
      image: "/Growing community.jpeg",
    },
    {
      year: 2010,
      title: "Art & Creativity",
      description: "Introduction of drawing and artistic expression workshops.",
      image: "/art and craft.jpeg",
    },
    {
      year: 2015,
      title: "Teamwork Focus",
      description: "Launch of team-building activities and outdoor adventures.",
      image: "/Teamwork.jpeg",
    },
    {
      year: 2020,
      title: "Adapting & Growing",
      description: "Innovation in camp activities during challenging times.",
      image: "/Recent.jpeg",
    },
    {
      year: 2024,
      title: "25 Years of Memories",
      description: "Celebrating 25 years of growth, learning, and unforgettable memories.",
      image: "/Last photo.jpeg",
    },
  ]

  const memoryPhotos = [
    "/WhatsApp Image 2026-01-25 at 10.55.07 AM.jpeg",
    "/WhatsApp Image 2026-01-25 at 10.50.35 AM.jpeg",
    "/2018 group2.jpeg",
    "/Dinning hall 1.jpeg",
    "/2018 group.jpeg",
    "/old volunteers group.jpeg",
    "/2018 group3.jpeg",
    "/2018 group4.jpeg",
    "/Dinning hall 2.jpeg",
    "/Dinning hall 3.jpeg",
    "/kids group.jpeg",
    "/HUL protest 2.jpeg",
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border animate-slideInDown">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">

          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center animate-bounce-gentle overflow-hidden">
              <img
                src="/Picsart_26-02-05_17-06-19-138.png"   // put your logo path here
                alt="Chinnara Chilipili Logo"
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className="text-2xl font-bold text-primary hidden sm:block">
              Chinnara Chilipili
            </h1>
          </div>

          <nav className="hidden md:flex gap-8">
            <a href="#timeline" className="text-foreground hover:text-primary transition">
              Our Journey
            </a>
            <a href="#memories" className="text-foreground hover:text-primary transition">
              Memories
            </a>
            <a href="#register" className="text-foreground hover:text-primary transition">
              Register
            </a>
          </nav>

        </div>
      </header>


      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-4 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/WhatsApp Image 2026-01-25 at 10.50.13 AM.jpeg')",
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/70 to-background/50"></div>

        {/* Floating Decorations (keep these above overlay) */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-accent/10 rounded-full blur-2xl animate-float z-10"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-float delay-300 z-10"></div>

        {/* Content */}
        <div className="max-w-6xl mx-auto text-center relative z-20">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              25 Years of Adventure, Learning & Fun
            </h2>
          </Reveal>

          <Reveal delay={150}>
            <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
              Celebrating a quarter century of unforgettable summer camp memories…
            </p>
          </Reveal>


          <div className="flex flex-wrap gap-4 justify-center">
            {[
              { value: "25", label: "Years of Camp", delay: "delay-100" },
              { value: "2000+", label: "Happy Campers", delay: "delay-200" },
              { value: "100%", label: "Fun & Learning", delay: "delay-300" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className={`bg-white/90 backdrop-blur rounded-lg p-6 border border-border flex-1 min-w-[200px] max-w-[220px] animate-slideInUp shadow-sm hover:shadow-md transition ${stat.delay}`}
              >
                <div className="text-3xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-sm text-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Timeline Section */}
      <section id="timeline" className="py-16 md:py-24 px-4 bg-white relative">
        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary/0 via-primary/20 to-primary/0"></div>

        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-primary mb-16 animate-slideInUp">
            Our Journey Through 25 Years
          </h3>
          <div className="space-y-4">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`border border-border rounded-lg overflow-hidden hover:shadow-md transition animate-slideInUp ${index % 2 === 0 ? "delay-100" : "delay-200"
                  }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  onClick={() => setExpandedYear(expandedYear === event.year ? null : event.year)}
                  aria-expanded={expandedYear === event.year}
                  className="w-full p-6 bg-white hover:bg-muted/30 transition flex items-center justify-between"
                >
                  <div className="flex items-center gap-4 text-left">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center hover:scale-110 transition">
                        <span className="text-2xl font-bold text-primary">{event.year % 100}</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-foreground">{event.title}</h4>
                      <p className="text-sm text-foreground/70 mt-1">{event.description}</p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`flex-shrink-0 text-primary transition transform ${expandedYear === event.year ? "rotate-180" : ""
                      }`}
                    size={24}
                  />
                </button>
                {expandedYear === event.year && (
                  <div className="px-6 pb-6 bg-muted/50 border-t border-border animate-slideInUp">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-64 object-cover rounded-lg shadow-md"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Camp Activities Section */}
      <section className="py-16 md:py-24 px-4 bg-secondary/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl -mr-24"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl -ml-20"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12 animate-slideInUp">
            What Kids Learn at Chinnara Chilipili
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Teamwork", icon: "🤝", desc: "Work together, support each other, build lasting friendships" },
              { title: "Yoga & Wellness", icon: "🧘", desc: "Learn mindfulness, flexibility, and inner peace" },
              { title: "Sports", icon: "⚽", desc: "Play various sports, develop athletic skills and confidence" },
              { title: "Drawing & Art", icon: "🎨", desc: "Express creativity through drawing, painting, and crafts" },
              { title: "Hidden Skills", icon: "✨", desc: "Discover new talents and hidden abilities within" },
              { title: "Adventures", icon: "🏕️", desc: "Field trips and outdoor exploration" },
            ].map((activity, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-lg p-8 border border-border hover:shadow-lg transition transform hover:-translate-y-1 text-center animate-slideInUp`}
                style={{ animationDelay: `${idx * 0.08}s` }}
              >
                <div className="text-6xl mb-4 inline-block animate-bounce-gentle">{activity.icon}</div>
                <h4 className="text-xl font-bold text-foreground mb-3">{activity.title}</h4>
                <p className="text-foreground/70 text-sm">{activity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Memories Photo Gallery */}
      <section id="memories" className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h3 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4 animate-slideInUp">
              Photo Gallery
            </h3>
            <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto animate-slideInUp delay-100">
              Cherished moments from our camp over the years
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {memoryPhotos.map((photo, idx) => (
              <div
                key={idx}
                role="button"
                tabIndex={0}
                onClick={() => openGalleryAt(idx)}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openGalleryAt(idx)}
                className="aspect-square rounded-lg overflow-hidden border border-border hover:shadow-xl transition transform hover:scale-105 animate-scaleIn cursor-pointer relative"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <img
                  src={photo || "/placeholder.svg"}
                  alt={`Camp memory ${idx + 1}`}
                  className="w-full h-full object-cover hover:brightness-110 transition"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 flex items-end justify-end p-2 pointer-events-none">
                  <div className="bg-black/40 text-white text-xs rounded-md px-2 py-1 backdrop-blur">View</div>
                </div>
              </div>
            ))}
          </div>

          {/* Gallery lightbox (Dialog + Carousel) */}
          <Dialog open={galleryOpen} onOpenChange={setGalleryOpen}>
            <DialogContent className="sm:max-w-4xl w-full max-w-screen-md p-0 bg-black/90">
              <div className="w-full h-[70vh] sm:h-[80vh]">
                <Carousel
                  opts={{ containScroll: 'trimSnaps', align: 'center' }}
                  setApi={(api) => (galleryApiRef.current = api)}
                >
                  <CarouselContent className="h-full">
                    {memoryPhotos.map((photo, i) => (
                      <CarouselItem key={i} className="h-full flex items-center justify-center bg-black">
                        <img src={photo} alt={`Camp memory ${i + 1}`} className="max-h-[78vh] w-auto object-contain" loading="lazy" decoding="async" />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* Camp Info Section */}
      <section className="py-16 md:py-24 px-4 bg-primary/5 border-t border-b border-border">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Calendar,
              title: "Duration",
              desc: "10 Days of activities, learning, and fun every summer",
              delay: "delay-100",
            },
            {
              icon: Trophy,
              title: "Full Package",
              desc: "Breakfast, lunch, and evening tea included. Plus daily activities!",
              delay: "delay-200",
            },
            {
              icon: MapPin,
              title: "Camp Location",
              desc: "Bockapatna Government High School, Bockapatna, Mangalore – 575006",
              delay: "delay-300",
            },

          ].map((item, idx) => {
            const Icon = item.icon
            return (
              <div key={idx} className={`text-center animate-slideInUp ${item.delay}`}>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group hover:bg-primary/20 transition">
                  <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition" />
                </div>
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-foreground/70">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </section>


      {/* Registration Section */}
      <section id="register" className="py-16 md:py-24 px-4 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -mr-32 -mt-32 animate-float"></div>

        <div className="max-w-2xl mx-auto text-center relative z-10">
          <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6 animate-slideInUp">
            Register Your Child Today
          </h3>
          <p className="text-lg text-foreground/80 mb-4 animate-slideInUp delay-100">
            Only ₹50 to give your child an unforgettable week of adventure, learning, and friendship!
          </p>
          <p className="text-foreground/70 mb-8 animate-slideInUp delay-200">
            Fill the form to register for this year's Chinnara Chilipili.
          </p>

          {/* Registration Status */}
          <div className="bg-muted/30 rounded-lg p-8 border border-border mb-8 animate-slideInUp delay-300 shadow-sm text-center">
            <p className="text-foreground/80 mb-6 font-medium">
              📝 Registration Form
            </p>

            <div className="flex flex-col items-center gap-3">
              <div className="text-4xl">📅</div>

              <h3 className="text-xl font-semibold text-foreground">
                Registrations Open
              </h3>

              <p className="text-foreground/70 max-w-md">
                Registrations for this year’s <strong>Chinnara Chilipili</strong> are now open.
                Secure your child’s spot for an unforgettable camp experience.
              </p>

              {/* Camp Start Date */}
              <div className="mt-3 flex items-center justify-center gap-2 bg-white/70 border border-border rounded-md px-4 py-2">
                <span className="text-lg">🏕️</span>
                <p className="text-foreground/80 text-sm font-medium">
                  Camp begins on <strong>17 April 2026</strong>
                </p>
              </div>

              {/* Register Button */}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdY_TfGQVbtb8ZgZKHkk6lh-QjF47o1Oq7rq_AWqt8Vjjpp7A/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 px-6 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition font-medium"
              >
                Register Now
              </a>

              <p className="text-xs text-foreground/60">
                Registration form opens in a new tab
              </p>
            </div>
          </div>


          <div className="bg-secondary/20 rounded-lg p-6 border border-border animate-slideInUp delay-400 shadow-sm">
            <h4 className="font-bold text-primary mb-3 flex items-center gap-2 justify-center">
              <Sparkles size={20} />
              Why Choose Our Camp?
            </h4>
            <ul className="text-left text-foreground/80 space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-accent text-lg">✓</span> 25 years of experience in children's development
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent text-lg">✓</span> Expert instructors in yoga, sports, and arts
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent text-lg">✓</span> Safe, nurturing, and inclusive environment
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent text-lg">✓</span> All meals included in the registration fee
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent text-lg">✓</span> Field trips and adventure activities included
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer
        className="
    relative
    bg-[url('/HUL-march-1.jpeg')]
    bg-cover
    bg-center
    text-white
    py-16
    px-4
  "
      >
        {/* Simple dark overlay */}
        <div className="absolute inset-0 bg-black/65"></div>

        <div className="relative max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-3">
            Chinnara Chilipili
          </h3>

          <p className="text-white/85 mb-6">
            Celebrating 25 years of childhood adventure and growth
          </p>

          <p className="text-white/60 text-sm">
            © 2026 Chinnara Chilipili. Creating memories since 1999.
          </p>
        </div>
      </footer>
    </div >
  )
}
