'use client'

import Link from 'next/link'
import { Moon , Star } from 'lucide-react'
import { Link as ScrollLink } from 'react-scroll'

export default function Header() {
  return (
    <header className="py-6 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold flex items-center space-x-2">
          {/* <Star className="w-8 h-8" /> */}
          <span>Soul Buddy</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><ScrollLink to="features" smooth={true} duration={500} className=" font-semibold cursor-pointer hover:text-purple-300 transition-colors">Features</ScrollLink></li>
            <li><ScrollLink to="about" smooth={true} duration={500} className="  font-semibold cursor-pointer hover:text-purple-300 transition-colors">About</ScrollLink></li>
            <li><ScrollLink to="cta" smooth={true} duration={500} className="   font-semibold cursor-pointer hover:text-purple-300 transition-colors">Contact</ScrollLink></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

