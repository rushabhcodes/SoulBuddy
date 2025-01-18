'use client'

import { motion } from "framer-motion"
import { 
  Sparkles, 
  Moon, 
  Sun, 
  Heart, 
  Compass, 
  MessageCircle, 
  Gem 
} from 'lucide-react'
import { useRouter } from 'next/navigation'

const features = [
  {
    icon: <Gem className="w-8 h-8" />,
    title: "AI-Powered Readings",
    description: "Get personalized spiritual insights using advanced artificial intelligence technology.",
    path: "/features/ai-recommendations"
  },
  {
    icon: <Moon className="w-8 h-8" />,
    title: "Daily Horoscopes",
    description: "Receive detailed daily horoscope readings tailored to your zodiac sign.",
    path: "/features/kundali-horoscope"
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Charts",
    description: "Navigate your emotional landscape with compassionate AI-driven support.",
    path: "/features/kundali-horoscope"
  },
  {
    icon: <Compass className="w-8 h-8" />,
    title: "Spiritual Direction",
    description: "Find your path with personalized spiritual practice recommendations.",
    path: "/features/ai-recommendations"
  },
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: "24/7 Companion",
    description: "Access spiritual guidance whenever you need it, day or night.",
    path: "/features/spiritual-chatbot"
  },
  {
    icon: <Sun className="w-8 h-8" />,
    title: "Meditation Guide",
    description: "Learn and practice meditation with guided sessions and tracking.",
    path: "/features/spiritual-content"
  }
]

export default function Features() {
  const router = useRouter();

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-purple-900/20 to-purple-900/40">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Enlighten Your Path</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => router.push(feature.path)}
              className="group relative p-8 rounded-2xl bg-purple-900/20 backdrop-blur-sm border border-purple-700/20 
                hover:bg-purple-800/30 transition-all duration-300 cursor-pointer hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-2xl 
                group-hover:from-purple-500/10 transition-all duration-300" />
              <div className="relative">
                <div className="w-12 h-12 mb-4 rounded-xl bg-purple-500/20 flex items-center justify-center 
                  text-purple-300 group-hover:scale-110 group-hover:text-purple-200 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-purple-100">
                  {feature.title}
                </h3>
                <p className="text-purple-200/70 font-semibold">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

