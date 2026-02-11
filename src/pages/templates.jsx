import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Zap, Target, MousePointer2 } from "lucide-react";
import { Link } from 'react-router-dom';


/**
 * ARCHITECTURAL STACKING SECTION
 * This creates the "Card Stacking" effect where websites slide over each other.
 */
export default function StackingPortfolio() {
    const deployments = [
        {
            name: 'Manucrafts',
            title: 'Storefront',
            url: 'https://manucrafts.netlify.app/',
            goal: 'Sell products while you sleep.',
            description: 'A beautiful, automated shop designed to make buying effortless for your customers.',
            color: '#D9836C', // Coral
            features: ['Secure Payments', 'Inventory Tracking', 'Mobile Shopping']
        },
        {
            name: 'Career Garden',
            title: 'The Professional Office',
            url: 'https://career-garden.netlify.app/',
            goal: 'Build instant trust with clients.',
            description: 'A clean, organized space that presents your services as the high-end choice in your industry.',
            color: '#4A3835', // Cocoa
            features: ['Booking System', 'Professional Design', 'Easy Navigation']
        },
        {
            name: 'WikiReels',
            title: 'The Engagement Hub',
            url: 'https://wikireels.netlify.app/',
            goal: 'Keep people watching & learning.',
            description: 'A modern video library built for creators who want to host their content without distractions.',
            color: '#C97A63', // Soft Pink
            features: ['Video Streaming', 'Member Areas', 'Fast Loading']
        }
    ];

    return (
        <div className="bg-[#FFF5F0] min-h-screen pt-20">

            {/* --- INTRO SECTION --- */}
            <section className="h-[60vh] flex flex-col justify-center items-center text-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="max-w-3xl"
                >
                    <span className="text-[10px] font-black tracking-[0.5em] uppercase text-[#D9836C] mb-6 block">Our Production Archive</span>
                    <h1 className="text-6xl lg:text-9xl font-black uppercase tracking-tighter text-[#2D2422] leading-none mb-8">
                        Real Results. <br />
                        <span className="italic font-light text-[#D9836C]">Live Now.</span>
                    </h1>
                    <p className="text-xl text-[#2D2422]/60 max-w-xl mx-auto">
                        Scroll down to explore the digital storefronts we've built for businesses just like yours.
                        Fully interactive, right here.
                    </p>
                </motion.div>
            </section>

            {/* --- STACKING CARDS CONTAINER --- */}
            <section className="px-4 lg:px-10 pb-40">
                <div className="max-w-7xl mx-auto space-y-[20vh]">
                    {deployments.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false, margin: "-50px" }}
                            className="sticky top-20 w-full"
                            style={{ zIndex: i }}
                        >
                            <div className="bg-[#2D2422] rounded-[3rem] lg:rounded-[5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] border border-white/5">
                                <div className="flex flex-col lg:flex-row items-stretch w-full min-h-[600px] lg:h-[750px]">

                                    {/* 1. TEXT CONTENT (35% Width) */}
                                    <div className="w-full lg:w-[35%] p-10 lg:p-16 xl:p-20 flex flex-col justify-between text-white border-r border-white/5 bg-[#2D2422] relative z-10">
                                        <div>
                                            <div className="flex items-center gap-4 mb-10">
                                                <div className="w-10 h-px bg-[#D9836C]" />
                                                <span className="text-[10px] font-black tracking-[0.5em] text-[#D9836C] uppercase whitespace-nowrap">
                                                    {item.name}
                                                </span>
                                            </div>

                                            <h2 className="text-4xl lg:text-5xl xl:text-4xl font-black uppercase tracking-tighter leading-[0.85] mb-10">
                                                {item.title}
                                            </h2>

                                            <p className="text-lg lg:text-xl opacity-60 mb-12 leading-relaxed font-medium max-w-[90%]">
                                                {item.description}
                                            </p>

                                            <div className="space-y-6 mb-16">
                                                {item.features.map((f, idx) => (
                                                    <div key={idx} className="flex items-start gap-4">
                                                        <CheckCircle2 size={18} className="text-[#D9836C] shrink-0 mt-0.5" />
                                                        <span className="text-[11px] lg:text-xs font-bold uppercase tracking-widest opacity-90 leading-snug">
                                                            {f}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="pt-10 border-t border-white/5">
                                            <a
                                                href={item.url}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="group inline-flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.4em] text-[#D9836C]"
                                            >
                                                Launch Experience
                                                <div className="w-14 h-14 rounded-full border border-[#D9836C]/30 flex items-center justify-center group-hover:bg-[#D9836C] group-hover:text-white transition-all duration-500 group-hover:rotate-45 shadow-lg">
                                                    <ArrowUpRight size={20} />
                                                </div>
                                            </a>
                                        </div>
                                    </div>

                                    {/* 2. INTERACTIVE PREVIEW (65% Width) */}
                                    <div className="w-full lg:w-[65%] bg-white relative overflow-hidden h-[500px] lg:h-auto">
                                        <iframe
                                            src={item.url}
                                            title={item.name}
                                            className="w-full h-full border-none shadow-inner"
                                            loading="lazy"
                                        />

                                        {/* Minimal "Live" Indicator */}
                                        <div className="absolute top-8 right-8 flex items-center gap-3 bg-[#2D2422]/80 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10 pointer-events-none shadow-xl">
                                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
                                            <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Live Preview Active</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* --- RESULTS SECTION (SEO for Common People) --- */}
            <section className="py-40 bg-white text-[#2D2422] px-6">
                <div className="max-w-7xl mx-auto flex flex-col items-center">
                    <h3 className="text-5xl lg:text-8xl font-black uppercase tracking-tighter text-center mb-20 leading-none">
                        Simple Steps to <br />
                        <span className="text-[#D9836C]">Digital Success.</span>
                    </h3>

                    <div className="grid lg:grid-cols-3 gap-12 w-full">
                        {[
                            { icon: <Target />, title: "Strategy First", desc: "We don't just build a site; we plan a route to get you more customers." },
                            { icon: <Zap />, title: "Instant Speed", desc: "Your customers won't wait. Our sites load faster than a blink of an eye." },
                            { icon: <MousePointer2 />, title: "User Ease", desc: "If they can't use it, they won't buy it. We make your site easy for everyone." }
                        ].map((card, i) => (
                            <div
                                key={i}
                                className="p-12 bg-[#2D2422] rounded-[3rem] border border-[#2D2422]/5 hover:bg-[#FFF5F0] transition-all duration-500 group cursor-pointer shadow-xl hover:shadow-2xl hover:-translate-y-2"
                            >
                                {/* Icon starts as Coral, stays Coral on hover */}
                                <div className="text-[#D9836C] mb-8 transition-transform duration-500 group-hover:scale-110 origin-left">
                                    {React.cloneElement(card.icon, { size: 32 })}
                                </div>

                                {/* Title: White to Cocoa */}
                                <h4 className="text-2xl font-black uppercase mb-4 tracking-tight text-white group-hover:text-[#2D2422] transition-colors duration-500">
                                    {card.title}
                                </h4>

                                {/* Description: Light opacity white to Cocoa opacity */}
                                <p className="text-white/60 group-hover:text-[#2D2422]/70 leading-relaxed font-medium transition-colors duration-500">
                                    {card.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    <Link
                        to="/book-call"
                        className="mt-24 px-16 py-8 bg-[#D9836C] rounded-full text-white font-black uppercase tracking-[0.3em] text-[10px] hover:scale-105 transition-transform shadow-2xl hover:bg-[#2D2422] inline-block"
                    >
                        Start your Project
                    </Link>

                </div>
            </section>
        </div>
    );
}