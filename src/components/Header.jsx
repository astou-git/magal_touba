import React, { useState, useEffect } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}
      style={{ backdropFilter: scrolled ? 'none' : 'blur(0px)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <a href="/" className={`text-2xl font-bold ${scrolled ? 'text-blue-700' : 'text-white'} hover:text-blue-800 transition-colors`}>
            MagalTouba
          </a>

          {/* Menu Desktop */}
          <nav className={`hidden md:flex space-x-6 font-medium ${scrolled ? 'text-gray-700' : 'text-white'}`}>
            <a href="/" className="hover:text-blue-700 transition transform hover:scale-110">Accueil</a>
            <a href="inscription" className="hover:text-blue-700 transition transform hover:scale-110">Inscription</a>
            <a href="#horaires" className="hover:text-blue-700 transition transform hover:scale-110">Horaires</a>
            <a href="#contact" className="hover:text-blue-700 transition transform hover:scale-110">Contact</a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={scrolled ? 'text-gray-700' : 'text-white'}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`md:hidden ${scrolled ? 'bg-white' : 'bg-black bg-opacity-80'} shadow-lg`}>
          <nav className="px-2 pt-2 pb-4 space-y-1">
            <a href="#hero" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition">Accueil</a>
            <a href="#inscription" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition">Inscription</a>
            <a href="#horaires" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition">Horaires</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
