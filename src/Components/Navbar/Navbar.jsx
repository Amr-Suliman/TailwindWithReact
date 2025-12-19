import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const linkStyle = ({ isActive }) =>
        `block px-4 py-2  rounded font-bold tracking-wide !no-underline transition duration-200
    ${isActive ? 'bg-[#1abc9c] text-white' : 'text-white hover:bg-white/10'}`

    return (
        <nav className={`fixed w-full z-50  transition-all duration-500 ${scrolled ? 'bg-[#2c3e50] py-7 shadow-lg' : 'bg-transparent py-4'}`}>
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4">

                {/* Logo */}
                <p className="text-2xl sm:text-3xl md:text-4xl font-black font-sans text-white">
                    START FRAMEWORK
                </p>

                {/* Desktop Links */}
                <ul className="hidden md:flex gap-2 ">
                    <li><NavLink to="/about" className={linkStyle}>ABOUT</NavLink></li>
                    <li><NavLink to="/portfolio" className={linkStyle}>PORTFOLIO</NavLink></li>
                    <li><NavLink to="/contacts" className={linkStyle}>CONTACT</NavLink></li>
                </ul>

                {/* Hamburger Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden relative w-8 h-8 flex flex-col justify-between items-center"
                >
                    <span className={`block h-0.5 w-8 bg-white rounded transform transition duration-300 ${open ? 'rotate-45 translate-y-3.5' : ''}`}></span>
                    <span className={`block h-0.5 w-8 bg-white rounded transition duration-300 ${open ? 'opacity-0' : ''}`}></span>
                    <span className={`block h-0.5 w-8 bg-white rounded transform transition duration-300 ${open ? '-rotate-45 -translate-y-3.5' : ''}`}></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <ul className={`md:hidden bg-[#2c3e50] px-4 overflow-hidden transition-all duration-500 ${open ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0'}`}>
                <li onClick={() => setOpen(false)}><NavLink to="/about" className={linkStyle}>ABOUT</NavLink></li>
                <li onClick={() => setOpen(false)}><NavLink to="/portfolio" className={linkStyle}>PORTFOLIO</NavLink></li>
                <li onClick={() => setOpen(false)}><NavLink to="/contacts" className={linkStyle}>CONTACT</NavLink></li>
            </ul>
        </nav>
    )
}
