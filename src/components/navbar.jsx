import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFF5F0]/90 backdrop-blur-md border-b border-[#4A3835]/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="text-xl font-black tracking-tighter text-[#4A3835]">
            TECHIESAIE<span className="text-[#C97A63]">.</span>
          </Link>

          <div className="hidden md:flex items-center gap-12">
            {['templates', 'Services', 'About'].map((item) => (
              <Link key={item} to={`/${item.toLowerCase()}`}
                className="relative text-[11px] font-bold tracking-[0.2em] uppercase text-[#4A3835] group overflow-hidden h-4">
                <span className="block transition-transform duration-500 group-hover:-translate-y-full">{item}</span>
                <span className="block transition-transform duration-500 group-hover:-translate-y-full text-[#C97A63]">{item}</span>
              </Link>
            ))}

            <Link to="/book-call" className="bg-[#4A3835] text-white px-6 py-3 text-[10px] font-bold tracking-widest uppercase hover:bg-[#C97A63] transition-all">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}