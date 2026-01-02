import { useNavigate } from 'react-router-dom';

import { ArrowRight } from "lucide-react";
export default function Footer() {
    const navigate = useNavigate();
    return (
        <footer className="py-12 border-t border-white/10 text-center">
            <section className="py-32 px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl lg:text-7xl font-black mb-8">
                        Ready to Build
                        <br />
                        Something <span className="text-[#FF6B35]">Great?</span>
                    </h2>
                    <p className="text-xl text-gray-400 mb-12">
                        Let's discuss your project and create something exceptional together.
                    </p>
                    <button
                        onClick={() => navigate('/book-call')}
                        className="bg-white text-black px-12 py-6 text-sm font-bold tracking-wide hover:bg-gray-200 transition-all group">
                        <span className="flex items-center justify-center gap-3">
                            GET STARTED
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </button>
                </div>
           
            <div className="text-sm tracking-wide pt-4">
                © {new Date().getFullYear()} TECHIES AIE. ALL RIGHTS RESERVED.
            </div>
            </section>
        </footer>
        
    );
}