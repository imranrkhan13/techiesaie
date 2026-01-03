import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation(); 

  const navItems = [
    { name: 'Work', path: '/templates' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <Link
            to="/"
            className="text-2xl font-black tracking-tight text-white">
            TECHIES
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium tracking-wide transition-colors ${location.pathname === item.path
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                  }`}
              >
                {item.name.toUpperCase()}
              </Link>
            ))}

            <Link
              to="/book-call"
              className="bg-white text-black px-6 py-3 text-sm font-bold tracking-wide hover:bg-gray-200 transition-all">
              LET'S TALK
            </Link>
          </div>

          {/* Mobile */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-white/10">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-left py-4 text-sm font-medium tracking-wide text-gray-400 hover:text-white transition-colors"
              >
                {item.name.toUpperCase()}
              </Link>
            ))}

            <Link
              to="/book-call"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full mt-4 bg-white text-black px-6 py-4 text-sm font-bold tracking-wide block text-center"
            >
              LET'S TALK
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
