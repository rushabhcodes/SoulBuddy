'use client'

import { Button } from "@/components/ui/button"
import { Sparkles } from 'lucide-react'

export default function CTA() {
  return (
    <section id="cta" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-purple-900/40">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
      </div>

      {/* Animated orbs in background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>

      <div className="relative container mx-auto text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-100 to-pink-200">
            Begin Your Spiritual Journey Today
          </h2>
          <p className="text-xl mb-10 text-purple-100/70 leading-relaxed">
            Unlock the secrets of your soul and navigate life's challenges with Soul Buddy's AI-powered guidance.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              size="lg" 
              className="group bg-purple-500/20 hover:bg-purple-500/30 text-purple-100 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg border border-purple-400/20"
            >
              <Sparkles className="w-5 h-5 mr-2 inline-block group-hover:animate-pulse" />
              Contact Us
            </Button>
          </div>
          
          {/* Social proof */}
          <div className="mt-12 pt-8 border-t border-purple-700/10">
            <p className="text-purple-200/70 font-medium">
              Trusted by thousands of spiritual seekers worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

