'use client'

import { motion } from "framer-motion"
import { Star, Heart, Sparkles, Users } from 'lucide-react'

const stats = [
  { 
    icon: <Sparkles className="w-6 h-6" />,
    value: "24/7", 
    label: "AI Availability" 
  },
  { 
    icon: <Star className="w-6 h-6" />,
    value: "100+", 
    label: "Spiritual Insights" 
  },
  { 
    icon: <Heart className="w-6 h-6" />,
    value: "12", 
    label: "Zodiac Signs" 
  }
]

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-purple-900/30" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-6 h-6 text-purple-400 mr-2" />
            <span className="text-purple-400 font-medium">About Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-pink-200">
            Empowering Your Spiritual Journey
          </h2>
          <p className="text-xl text-purple-100/80 max-w-3xl mx-auto leading-relaxed font-semibold">
            Soul Buddy combines ancient wisdom with cutting-edge AI technology to provide personalized spiritual guidance for modern seekers.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl bg-purple-900/20 backdrop-blur-sm border border-purple-700/20 
                hover:bg-purple-800/30 transition-all duration-300 group"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center 
                  text-purple-300 group-hover:scale-110 transition-all duration-300">
                  {stat.icon}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-200 mb-2">{stat.value}</div>
                <div className="text-purple-300 font-semibold">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <h3 className="text-2xl font-semibold text-purple-100 text-center">Our Mission</h3>
          <p className="text-purple-200/70 leading-relaxed text-center font-semibold">
            We believe that everyone deserves access to spiritual guidance and support. 
            Our AI-powered platform makes this possible by providing personalized insights 
            and guidance 24/7, helping you navigate life's challenges with clarity and purpose.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Personalized spiritual guidance",
              "Integration of ancient wisdom",
              "Modern AI technology",
              "Continuous learning and growth"
            ].map((item, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-3 bg-purple-900/20 p-4 rounded-lg
                  hover:bg-purple-800/30 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="w-2 h-2 rounded-full bg-purple-400" />
                <span className="text-purple-200/70 font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

