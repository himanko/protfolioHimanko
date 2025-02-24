import { useState } from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 bg-white shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <span className="text-2xl font-bold">Himanko Boruah</span>
          <div className="hidden md:flex space-x-8">
            <a href="#projects" className="hover:text-secondary">Projects</a>
            <a href="#certifications" className="hover:text-secondary">Certifications</a>
            <a href="#contact" className="hover:text-secondary">Contact</a>
          </div>
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
    </nav>
  )
}
