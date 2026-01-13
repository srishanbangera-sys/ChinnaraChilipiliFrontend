"use client"

import { useState } from "react"
import { ChevronDown, Calendar, Trophy, MapPin, Sparkles } from "lucide-react"

export default function CampWebsite() {
  const [expandedYear, setExpandedYear] = useState<number | null>(null)

  const timelineEvents = [
    {
      year: 2000,
      title: "Camp Begins",
      description: "The first summer camp brings together 25 children from the community.",
      image: "/children-playing-outdoors-in-camp.jpg",
    },
    {
      year: 2005,
      title: "Growing Community",
      description: "Expansion to 100+ kids annually with new sports and yoga programs.",
      image: "/kids-doing-yoga-and-stretching-together.jpg",
    },
    {
      year: 2010,
      title: "Art & Creativity",
      description: "Introduction of drawing and artistic expression workshops.",
      image: "/children-drawing-and-painting-art.jpg",
    },
    {
      year: 2015,
      title: "Teamwork Focus",
      description: "Launch of team-building activities and outdoor adventures.",
      image: "/kids-playing-team-sports-and-bonding.jpg",
    },
    {
      year: 2020,
      title: "Adapting & Growing",
      description: "Innovation in camp activities during challenging times.",
      image: "/children-participating-in-activities.jpg",
    },
    {
      year: 2024,
      title: "25 Years of Memories",
      description: "Celebrating 25 years of growth, learning, and unforgettable memories.",
      image: "/happy-children-celebrating-camp-anniversary.jpg",
    },
  ]

  const memoryPhotos = [
    "/kids-laughing-at-camp.jpg",
    "/children-playing-sports-together.jpg",
    "/kids-doing-yoga-stretching.jpg",
    "/children-drawing-and-creating-art.jpg",
    "/kids-eating-together-at-camp-meal.jpg",
    "/children-in-group-photo-camp.jpg",
    "/kids-playing-field-game-outdoors.jpg",
    "/children-bonding-and-having-fun-camp.jpg",
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border animate-slideInDown">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg animate-bounce-gentle">
              🏕️
            </div>
            <h1 className="text-2xl font-bold text-primary hidden sm:block">Chinnara Chilipili 26</h1>
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
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-secondary/20 to-background relative overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-accent/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-float delay-300"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-pretty animate-slideInUp">
            25 Years of Adventure, Learning & Fun
          </h2>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto text-pretty animate-slideInUp delay-100">
            Celebrating a quarter century of unforgettable summer camp memories, teamwork, and personal growth for kids
            in our community.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              { value: "25", label: "Years of Camp", delay: "delay-100" },
              { value: "2000+", label: "Happy Campers", delay: "delay-200" },
              { value: "100%", label: "Fun & Learning", delay: "delay-300" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-lg p-6 border border-border flex-1 min-w-[200px] max-w-[220px] animate-slideInUp shadow-sm hover:shadow-md transition ${stat.delay}`}
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
          <h3 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4 animate-slideInUp">
            Photo Gallery
          </h3>
          <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto animate-slideInUp delay-100">
            Cherished moments from our camp over the years
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {memoryPhotos.map((photo, idx) => (
              <div
                key={idx}
                className="aspect-square rounded-lg overflow-hidden border border-border hover:shadow-xl transition transform hover:scale-105 animate-scaleIn cursor-pointer"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <img
                  src={photo || "/placeholder.svg"}
                  alt={`Camp memory ${idx + 1}`}
                  className="w-full h-full object-cover hover:brightness-110 transition"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-foreground/70 mb-4 animate-slideInUp">
              Have photos from previous years? Help us preserve memories!
            </p>
            <button className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition transform hover:scale-105 animate-slideInUp delay-100 flex items-center gap-2 mx-auto">
              <Sparkles size={18} />
              Submit Photos
            </button>
          </div>
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
              title: "Adventure",
              desc: "Field trips and outdoor explorations included",
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
            Only ₹100 to give your child an unforgettable week of adventure, learning, and friendship!
          </p>
          <p className="text-foreground/70 mb-8 animate-slideInUp delay-200">
            Fill the form to register for this year's Chinnara Chilipili.
          </p>

          {/* Google Form Embed */}
          <div className="bg-muted/30 rounded-lg p-8 border border-border mb-8 animate-slideInUp delay-300 shadow-sm">
            <p className="text-foreground/80 mb-4 font-medium">📝 Registration Form</p>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfakeid/viewform?embedded=true"
              width="100%"
              height="800"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="rounded-lg"
            >
              Loading…
            </iframe>
            <p className="text-sm text-foreground/60 mt-6">
              💡 Tip: Replace the form URL with your actual Google Form link
            </p>
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
                <span className="text-accent text-lg">✓</span> Weekly field trips and adventure activities
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center animate-slideInUp">
          <h3 className="text-2xl font-bold mb-4">Summer Camp 25</h3>
          <p className="text-white/80 mb-6">Celebrating 25 years of childhood adventure and growth</p>
          <p className="text-white/60 text-sm">
            © 2025 Summer Camp. Creating memories and building character since 2000.
          </p>
        </div>
      </footer>
    </div>
  )
}
