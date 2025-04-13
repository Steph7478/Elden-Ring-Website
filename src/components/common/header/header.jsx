/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

const navLinks = [
  { to: '/guias', label: 'Guias' },
  { to: '/personajes', label: 'Personajes' },
  { to: '/objetos', label: 'Objetos' },
  { to: '/noticias', label: 'Noticias' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const blockNavbar = windowWidth > 1024
  window.onresize = () => setWindowWidth(window.innerWidth)

  return (
    <header className="border-2 border-light-yellow bg-musgo font-della text-xl text-light-yellow">
      <div
        className={
          isOpen ? 'fixed inset-0 z-10 h-full w-full bg-black opacity-70' : ''
        }
        onClick={() => setIsOpen(!isOpen)}
      ></div>
      <div className="relative flex items-center justify-between px-4 lg:justify-start lg:px-16">
        <NavLink to="/">
          <img
            src="/public/images/Decorations/eldenring.webp"
            alt="home"
            className="ml-20 mr-20 w-32 scale-125 lg:w-40"
          />
        </NavLink>

        <nav className={blockNavbar ? '' : 'hidden'}>
          <ul className="flex">
            {navLinks.map((link, index) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `block border-l-2 ${index === navLinks.length - 1 ? 'border-r-2' : ''} border-light-yellow px-10 py-3 ${
                      isActive ? 'bg-emerald-950' : 'bg-musgo'
                    } hover:text-yellow-200`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="z-20 lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className={`${isOpen ? 'border-2 border-light-yellow hover:bg-musgo' : 'border-0 bg-transparent hover:bg-transparent'}`}
          >
            <FaBars />
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="absolute right-4 z-20 border-2 border-light-yellow bg-musgo lg:hidden">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block w-52 border-b-2 border-light-yellow py-6 text-center ${
                      isActive ? 'bg-emerald-950' : 'bg-musgo font-bold'
                    } hover:text-yellow-200`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
