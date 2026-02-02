import { useNavigate } from 'react-router-dom';
import { ArrowRight } from "lucide-react";

export default function Footer() {
    const navigate = useNavigate();
    return (
        <footer className="bg-[#4A3835] text-[#FFF5F0] pt-40 pb-12 px-6 lg:px-20 font-['Poppins']">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-32 mb-40">
                    <div>
                        <h2 className="text-6xl lg:text-[7rem] font-black uppercase leading-[0.85] tracking-tighter mb-12">
                            Built for <br /><span className="text-[#C97A63]">Excellence.</span>
                        </h2>
                        <button
                            onClick={() => navigate('/book-call')}
                            className="text-[11px] font-bold tracking-[0.4em] uppercase border-b-2 border-[#C97A63] pb-2 hover:opacity-70 transition-opacity"
                        >
                            Schedule a Consultation
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40">Navigation</h4>
                            {['Work', 'Services', 'About', 'Contact'].map(link => (
                                <a key={link} href="#" className="block text-sm font-bold uppercase tracking-widest hover:text-[#C97A63] transition-colors">{link}</a>
                            ))}
                        </div>
                        <div className="space-y-6">
                            <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40">Socials</h4>
                            {['Instagram', 'LinkedIn', 'Behance'].map(link => (
                                <a key={link} href="#" className="block text-sm font-bold uppercase tracking-widest hover:text-[#C97A63] transition-colors">{link}</a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 opacity-30 text-[9px] font-bold tracking-[0.5em] uppercase">
                    <span>© {new Date().getFullYear()} Techies Studio</span>
                    <span className="mt-4 md:mt-0 italic">Refining the Digital Edge</span>
                </div>
            </div>
        </footer>
    );
}