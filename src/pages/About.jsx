import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowRight, Globe2, ShieldCheck,
    Code2, BarChart3, Maximize2,
    Fingerprint, Activity, Sparkles
} from "lucide-react";

/**
 * 2026 ELASTIC PHYSICS
 */
const sectionTransition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] };

export default function AboutSection() {
    const navigate = useNavigate();
    const [hoveredPillar, setHoveredPillar] = useState(null);

    const technicalPillars = [
        {
            id: "01",
            title: "Semantic DNA",
            header: "Search Authority",
            desc: "We engineer your site's architecture so Google’s AI treats your brand as a primary source. Better structure equals higher organic rankings.",
            benefit: "Rank higher, faster.",
            icon: <Fingerprint className="w-8 h-8" />
        },
        {
            id: "02",
            title: "Velocity Engine",
            header: "Sub-Second Load",
            desc: "Latency is a silent killer. Our systems ensure your platform opens instantly, capturing users before they have a chance to bounce.",
            benefit: "Zero-lag experience.",
            icon: <Activity className="w-8 h-8" />
        },
        {
            id: "03",
            title: "Logic Flow",
            header: "Conversion UX",
            desc: "We don't just design; we map human behavior. Every element is placed to guide visitors directly toward your primary business goal.",
            benefit: "Convert more visitors.",
            icon: <Maximize2 className="w-8 h-8" />
        }
    ];

    return (
        <div className="relative min-h-screen font-sans selection:bg-[#D9836C] selection:text-white bg-white">

            {/* --- SECTION 1: HERO (PURE WHITE) --- */}
            <section className="relative h-screen flex items-center justify-center px-6 lg:px-20 bg-white">
                <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-10">
                    <div className="lg:col-span-8">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={sectionTransition}
                            className="flex items-center gap-4 mb-8"
                        >
                            <span className="h-px w-12 bg-[#D9836C]"></span>
                            <span className="text-[11px] font-black uppercase tracking-[0.5em] text-[#D9836C]">Engineering Excellence v4.2</span>
                        </motion.div>

                        <h1 className="text-[12vw] lg:text-[10vw] font-black uppercase leading-[0.75] tracking-tighter text-[#2D2422]">
                            High <br />
                            <span className="text-[#D9836C] italic font-light">Growth</span> <br />
                            Systems.
                        </h1>
                    </div>

                    <div className="lg:col-span-4 flex flex-col justify-end pb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ ...sectionTransition, delay: 0.2 }}
                            className="p-8 border-l-2 border-[#D9836C]"
                        >
                            <p className="text-xl font-medium leading-snug mb-10 text-[#2D2422]/80">
                                We deploy custom-built React ecosystems designed for
                                <strong> search engine dominance</strong> and <strong>global scale.</strong>
                            </p>
                            <button
                                onClick={() => navigate('/portfolio')}
                                className="group flex items-center gap-6 text-[11px] font-black uppercase tracking-[0.3em] text-[#2D2422] hover:text-[#D9836C] transition-colors"
                            >
                                Explore the Stack <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- SECTION 2: THE PILLARS (WHITE BACKGROUND / DARK CARDS) --- */}
            <section className="px-6 lg:px-20 py-40 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row justify-between items-end mb-24 border-b border-[#2D2422]/10 pb-12">
                        <h2 className="text-6xl lg:text-7xl font-black uppercase tracking-tighter text-[#2D2422]">
                            Technical <br /> Authority.
                        </h2>
                        <div className="max-w-xs mb-2">
                            <Sparkles className="text-[#D9836C] mb-4" size={20} />
                            <p className="text-[10px] font-bold uppercase tracking-widest text-[#2D2422]/40">
                                Premium engineering for high-conversion brands.
                            </p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-6">
                        {technicalPillars.map((pillar, i) => (
                            <motion.div
                                key={i}
                                onMouseEnter={() => setHoveredPillar(i)}
                                onMouseLeave={() => setHoveredPillar(null)}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className={`relative p-12 lg:p-16 rounded-[2.5rem] transition-all duration-500 cursor-default overflow-hidden
                                    ${hoveredPillar === i ? 'bg-[#FFF5F0]' : 'bg-[#2D2422]'}`}
                            >
                                <div className="relative z-10 h-full flex flex-col">
                                    <div className={`mb-12 transition-colors duration-500 ${hoveredPillar === i ? 'text-[#D9836C]' : 'text-[#FFF5F0]'}`}>
                                        {pillar.icon}
                                    </div>

                                    <span className="text-[10px] font-black uppercase tracking-widest text-[#D9836C]">
                                        {pillar.title}
                                    </span>

                                    <h4 className={`text-2xl font-black uppercase mt-2 mb-6 transition-colors duration-500 ${hoveredPillar === i ? 'text-[#2D2422]' : 'text-white'}`}>
                                        {pillar.header}
                                    </h4>

                                    <p className={`text-sm leading-relaxed mb-10 transition-colors duration-500 ${hoveredPillar === i ? 'text-[#2D2422]/60' : 'text-white/50'}`}>
                                        {pillar.desc}
                                    </p>

                                    <div className="mt-auto flex items-center gap-3">
                                        <div className={`w-2 h-2 rounded-full animate-pulse ${hoveredPillar === i ? 'bg-[#D9836C]' : 'bg-green-400'}`} />
                                        <span className={`text-[11px] font-bold uppercase tracking-tighter italic transition-colors duration-500 ${hoveredPillar === i ? 'text-[#2D2422]' : 'text-white/80'}`}>
                                            Result: {pillar.benefit}
                                        </span>
                                    </div>
                                </div>

                                {/* Large Ghost ID Number */}
                                <div className={`absolute -bottom-10 -right-6 text-[12rem] font-black transition-opacity duration-500 pointer-events-none select-none
                                    ${hoveredPillar === i ? 'opacity-[0.05] text-[#D9836C]' : 'opacity-[0.02] text-white'}`}>
                                    {pillar.id}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- SECTION 3: PERFORMANCE DATA (SOFT PINK) --- */}
            <section className="px-6 lg:px-20 py-40 bg-[#FFF5F0]">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-[#2D2422] rounded-[3rem] p-10 lg:p-24 text-white relative overflow-hidden">
                        {/* Background subtle grid */}
                        <div className="absolute inset-0 opacity-[0.05]"
                            style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

                        <div className="relative z-10 grid lg:grid-cols-2 gap-20">
                            <div>
                                <h3 className="text-4xl lg:text-6xl font-black uppercase leading-tight mb-8">
                                    Data-Driven <br /> <span className="text-[#D9836C]">Precision.</span>
                                </h3>
                                <p className="text-white/50 text-lg mb-12 leading-relaxed">
                                    Normal websites are built on templates. Ours are built on behavioral data and performance audits, ensuring your business never misses a lead.
                                </p>

                                <div className="space-y-8">
                                    {[
                                        { label: "Search Indexing", val: 100 },
                                        { label: "Lighthouse Performance", val: 98 },
                                        { label: "Mobile Optimization", val: 100 }
                                    ].map((metric, i) => (
                                        <div key={i}>
                                            <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.2em] mb-3">
                                                <span className="opacity-60">{metric.label}</span>
                                                <span className="text-[#D9836C]">{metric.val}%</span>
                                            </div>
                                            <div className="h-px w-full bg-white/10">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${metric.val}%` }}
                                                    transition={{ duration: 1.5, ease: "circOut" }}
                                                    className="h-full bg-[#D9836C]"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { label: "Response", time: "120ms", icon: <Globe2 size={16} /> },
                                    { label: "Uptime", time: "99.9%", icon: <ShieldCheck size={16} /> },
                                    { label: "Code", time: "0 Bloat", icon: <Code2 size={16} /> },
                                    { label: "Growth", time: "+30%", icon: <BarChart3 size={16} /> },
                                ].map((stat, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ y: -5, backgroundColor: "#D9836C" }}
                                        className="bg-white/5 border border-white/10 p-8 flex flex-col justify-between aspect-square transition-all duration-300 group"
                                    >
                                        <div className="text-[#D9836C] group-hover:text-white transition-colors">{stat.icon}</div>
                                        <div>
                                            <div className="text-3xl font-black">{stat.time}</div>
                                            <div className="text-[9px] font-bold uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">{stat.label}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SECTION 4: CTA (PURE WHITE) --- */}
            <section className="px-6 lg:px-20 py-40 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-[11px] font-black uppercase tracking-[0.5em] text-[#D9836C] mb-8 block"
                    >
                        Next Step
                    </motion.span>
                    <h2 className="text-6xl lg:text-9xl font-black uppercase tracking-tighter text-[#2D2422] mb-16 leading-none">
                        Start <br /> <span className="italic font-light text-[#D9836C]">Scaling.</span>
                    </h2>
                    <Link to="/book-call">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#2D2422] text-white px-20 py-8 rounded-full font-black uppercase tracking-[0.4em] text-[10px] shadow-2xl hover:bg-[#D9836C] transition-colors"
                        >
                            Initiate Strategy
                        </motion.button>
                    </Link>
                </div>
            </section>
        </div>
    );
}