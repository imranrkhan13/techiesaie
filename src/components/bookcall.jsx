import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, Mail, Phone, Sparkles, Send } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="pt-24 min-h-screen bg-[#FFF5F0] text-[#4A3835] font-['Poppins'] selection:bg-[#C97A63] selection:text-white overflow-hidden">

            <div className="max-w-7xl mx-auto px-6 lg:px-20">
                {/* 1. SHORT & PUNCHY HEADER */}
                <header className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-3 mb-4"
                    >
                        <span className="w-8 h-[1px] bg-[#C97A63]"></span>
                        <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#C97A63]">Ready to Start?</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9]"
                    >
                        Build Your <br />
                        <span className="text-[#C97A63] italic font-light">Digital Edge.</span>
                    </motion.h1>
                </header>

                <div className="grid lg:grid-cols-12 gap-12 items-start">

                    {/* 2. THE FORM - MOVED UP & PROMINENT */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="lg:col-span-7 bg-white rounded-[2.5rem] p-10 lg:p-16 shadow-[0_50px_100px_rgba(74,56,53,0.05)] border border-[#4A3835]/5"
                    >
                        <form className="space-y-10">
                            <div className="grid md:grid-cols-2 gap-10">
                                <div className="group relative border-b border-[#4A3835]/10 py-2 focus-within:border-[#C97A63] transition-all">
                                    <p className="text-[9px] font-black uppercase tracking-widest text-[#C97A63] mb-1">Full Name</p>
                                    <input type="text" placeholder="John Doe" className="w-full bg-transparent outline-none font-bold text-lg placeholder:opacity-20" />
                                </div>
                                <div className="group relative border-b border-[#4A3835]/10 py-2 focus-within:border-[#C97A63] transition-all">
                                    <p className="text-[9px] font-black uppercase tracking-widest text-[#C97A63] mb-1">Email Address</p>
                                    <input type="email" placeholder="john@agency.com" className="w-full bg-transparent outline-none font-bold text-lg placeholder:opacity-20" />
                                </div>
                            </div>

                            <div className="group relative border-b border-[#4A3835]/10 py-2 focus-within:border-[#C97A63] transition-all">
                                <p className="text-[9px] font-black uppercase tracking-widest text-[#C97A63] mb-1">Your Vision</p>
                                <textarea rows="3" placeholder="Briefly describe your project..." className="w-full bg-transparent outline-none font-bold text-lg placeholder:opacity-20 resize-none" />
                            </div>

                            <button className="group relative w-full overflow-hidden bg-[#4A3835] py-6 rounded-2xl transition-all duration-500">
                                <span className="relative z-10 font-bold uppercase tracking-[0.4em] text-xs text-white flex items-center justify-center gap-4 group-hover:gap-6 transition-all">
                                    Send Message <Send size={16} />
                                </span>
                                <div className="absolute inset-0 bg-[#C97A63] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                            </button>
                        </form>
                    </motion.div>

                    {/* 3. SIDE INFO - COMPACT & CLEAN */}
                    <div className="lg:col-span-5 lg:pl-10 space-y-10">
                        <div className="space-y-8">
                            <motion.div whileHover={{ x: 10 }} className="cursor-pointer group">
                                <p className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40 mb-2">Inquiries</p>
                                <p className="text-xl font-bold group-hover:text-[#C97A63] transition-colors">muhammadimrank034@gmail.com</p>
                            </motion.div>

                            <motion.div whileHover={{ x: 10 }} className="cursor-pointer group">
                                <p className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40 mb-2">Direct Line</p>
                                <p className="text-xl font-bold group-hover:text-[#C97A63] transition-colors">+91 7506190224</p>
                            </motion.div>
                        </div>

                        {/* HIGH-CONTRAST CALENDAR CTA */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="bg-[#C97A63] rounded-[2rem] p-10 text-white shadow-xl shadow-[#C97A63]/20"
                        >
                            <h3 className="text-2xl font-black uppercase leading-tight mb-4">Prefer a <br />Strategy Call?</h3>
                            <p className="text-sm opacity-90 mb-8 font-medium">Book 15 mins to discuss architecture and pricing directly.</p>
                            <button className="w-full bg-white text-[#C97A63] py-4 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-[#4A3835] hover:text-white transition-all flex items-center justify-center gap-3">
                                <Calendar size={16} /> Schedule Now
                            </button>
                        </motion.div>

                        <div className="pt-4 flex items-center gap-4 opacity-20">
                            <Sparkles size={20} />
                            <p className="text-[10px] font-bold tracking-[0.2em] uppercase">Average response: 4 Hours</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}