import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
    ArrowUpRight, Users, Award,
    Headphones, Briefcase, Zap,
    ShieldCheck, Sparkles, Globe
} from "lucide-react";

export default function AboutSection() {
    const navigate = useNavigate();

    const colors = {
        bg: '#FFF5F0',
        text: '#4A3835',
        accent: '#C97A63',
        bgLight: '#FFF7F2',
        bgalt: '#fff',
    };

    const process = [
        {
            step: '01',
            title: 'Discovery',
            desc: 'We dive deep into your brand DNA and market positioning to find your unique digital edge.',
            icon: <Globe size={20} />
        },
        {
            step: '02',
            title: 'Strategy',
            desc: 'Crafting a roadmap that balances aesthetic elegance with high-performance technical architecture.',
            icon: <Sparkles size={20} />
        },
        {
            step: '03',
            title: 'Execution',
            desc: 'Our engineers and designers build with precision, using bespoke color theory and motion.',
            icon: <Zap size={20} />
        },
        {
            step: '04',
            title: 'Evolution',
            desc: 'Launch is just the beginning. We provide the support needed to scale and refine your presence.',
            icon: <ShieldCheck size={20} />
        }
    ];

    return (
        <div className="pt-20 min-h-screen selection:bg-[#C97A63] selection:text-white" style={{ color: colors.text }}>

            {/* 1. HERO NARRATIVE WITH STAGGERED TEXT */}
            <section className="px-6 lg:px-20 py-32 mx-auto" style={{ backgroundColor: colors.bgalt}}>
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <span className="h-[1px] w-12 bg-[#C97A63]"></span>
                            <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#C97A63]">Our Philosophy</span>
                        </div>
                        <h2 className="text-6xl lg:text-8xl font-black uppercase leading-[0.85] tracking-tighter mb-12">
                            Redefining <br />
                            <span className="italic font-light text-[#C97A63]">Digital</span> Luxury.
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 1 }}
                        className="lg:pt-20"
                    >
                        <p className="text-xl lg:text-2xl leading-relaxed opacity-90 font-medium mb-8 border-l-2 border-[#C97A63]/20 pl-8">
                            We are a boutique collective of digital artisans. We don’t just build "sites"—we architect immersive environments that resonate with authority.
                        </p>
                        <p className="text-sm leading-relaxed opacity-60 max-w-md pl-8">
                            By blending high-end design principles with cutting-edge React and WordPress engineering, we help visionary brands establish a permanent footprint.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. INTERACTIVE METHODOLOGY */}
            <section className="px-6 lg:px-20 py-32 bg-[#4A3835]/[0.02] border-y border-[#4A3835]/5" style={{ backgroundColor: colors.bg }}>
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div>
                            <h3 className="text-4xl font-black uppercase tracking-tighter mb-2">Our Methodology</h3>
                            <div className="h-1 w-20 bg-[#C97A63]"></div>
                        </div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40">The Engineering of Elegance</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {process.map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="group relative bg-white border border-[#4A3835]/5 p-10 transition-all duration-500 hover:shadow-2xl hover:shadow-[#C97A63]/10"
                            >
                                <div className="flex justify-between items-start mb-12">
                                    <span className="text-4xl font-black opacity-10 group-hover:text-[#C97A63] group-hover:opacity-100 transition-all duration-500">
                                        {item.step}
                                    </span>
                                    <div className="p-3 bg-[#FFF5F0] text-[#C97A63] rounded-lg group-hover:bg-[#C97A63] group-hover:text-white transition-colors duration-500">
                                        {item.icon}
                                    </div>
                                </div>
                                <h4 className="text-lg font-bold uppercase mb-4 tracking-tight">{item.title}</h4>
                                <p className="text-xs leading-relaxed opacity-60 font-medium group-hover:opacity-100 transition-opacity">
                                    {item.desc}
                                </p>
                                {/* Bottom Accent Line */}
                                <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#C97A63] group-hover:w-full transition-all duration-700" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. PORTFOLIO NARRATIVE */}
            <section className="px-6 lg:px-20 py-40  mx-auto" style={{ backgroundColor: colors.bgalt }}>
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    <div className="grid grid-cols-2 gap-6 relative">
                        {/* Decorative floating element */}
                        <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#C97A63]/5 rounded-full blur-3xl" />

                        <motion.div
                            whileHover={{ scale: 0.98 }}
                            className="aspect-[4/5] bg-white border border-[#4A3835]/5 p-8 flex flex-col justify-end shadow-sm group cursor-pointer"
                        >
                            <span className="text-[10px] uppercase font-bold tracking-widest text-[#C97A63] mb-2">E-Commerce</span>
                            <div className="text-xl font-bold italic">Manucrafts</div>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 0.98 }}
                            className="aspect-[4/5] bg-[#4A3835] p-8 flex flex-col justify-end shadow-xl mt-12 group cursor-pointer"
                        >
                            <span className="text-[10px] uppercase font-bold tracking-widest text-[#C97A63] mb-2">Platform</span>
                            <div className="text-xl font-bold italic text-white">Career Garden</div>
                        </motion.div>
                    </div>

                    <div className="space-y-8">
                        <span className="text-[10px] font-bold tracking-[0.4em] uppercase opacity-40">Portfolio Preview</span>
                        <h3 className="text-5xl font-black uppercase tracking-tighter leading-tight">
                            Proven <br />Track Record.
                        </h3>
                        <p className="text-lg opacity-70 font-medium leading-relaxed">
                            From high-fashion e-commerce platforms to complex career ecosystems, our work spans industries but never compromises on quality.
                        </p>

                        {/* Interactive Button */}
                        <button
                            onClick={() => navigate('/templates')}
                            className="group relative w-fit overflow-hidden border border-[#4A3835] px-10 py-5 transition-colors duration-500"
                        >
                            <span className="relative z-10 font-bold uppercase tracking-widest text-[11px] flex items-center gap-3 group-hover:text-white transition-colors duration-500">
                                Explore Full Catalog <ArrowUpRight size={18} />
                            </span>
                            <div className="absolute inset-0 bg-[#4A3835] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
                        </button>
                    </div>
                </div>
            </section>

            {/* 4. STATISTICS - THE "NUMBERS" BENTO BOX */}
            <section className="px-6 lg:px-20 pb-32 pt-20 mx-auto" style={{ backgroundColor: colors.bg }}>
                <div className="bg-[#4A3835] rounded-3xl p-12 lg:p-20 overflow-hidden relative">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#C97A63]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                        {[
                            { num: '100+', label: 'Delivered', icon: <Briefcase size={20} /> },
                            { num: '50+', label: 'Global Clients', icon: <Users size={20} /> },
                            { num: '5+', label: 'Years Exp', icon: <Award size={20} /> },
                            { num: '24/7', label: 'Support', icon: <Headphones size={20} /> },
                        ].map((stat, i) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                key={i}
                                className="text-center group"
                            >
                                <div className="inline-flex p-3 rounded-full bg-white/5 text-[#C97A63] mb-6 group-hover:bg-[#C97A63] group-hover:text-white transition-colors duration-500">
                                    {stat.icon}
                                </div>
                                <div className="text-4xl lg:text-6xl font-black mb-2 text-[#FFF5F0]">{stat.num}</div>
                                <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}