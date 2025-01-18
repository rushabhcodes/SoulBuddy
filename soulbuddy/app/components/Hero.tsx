'use client'

import { Button } from "@/components/ui/button"
import { Star } from 'lucide-react'

export default function Hero() {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    featuresSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
      <div className="container mx-auto">
        <h1 className="text-5xl sm:text-6xl font-bold mb-6 animate-fade-in">
          Discover Your Spiritual Path with <span className="text-purple-400">Soul Buddy</span>
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Your AI-powered spiritual guide for personalized insights, horoscopes, and enlightenment.
        </p>
        <Button 
          size="lg" 
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
          onClick={scrollToFeatures}
        >
          Start Your Journey
        </Button>
        {/* <div className="mt-12 flex justify-center space-x-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" />
          ))}
        </div>
        <p className="mt-2 text-purple-300">Trusted by 10,000+ seekers</p> */}
      </div>
    </section>
  )
}

