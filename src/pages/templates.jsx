import React, { useState } from "react";
import { ExternalLink, ArrowRight, ShieldCheck, Globe, Activity, Code2 } from "lucide-react";
import { motion } from "framer-motion";

export default function TemplatesSection() {
    const deployments = [
        {
            name: 'Manucrafts',
            category: 'E-Commerce Infrastructure',
            url: 'https://manucrafts.netlify.app/',
            desc: 'A full-stack commerce engine featuring real-time state management and automated inventory pipelines.',
            tech: ['React', 'Node.js', 'Stripe'],
            stats: { ping: '42ms', status: '200 OK', port: '443' }
        },
        {
            name: 'Career Garden',
            category: 'Data Ecosystem',
            url: 'https://career-garden.netlify.app/',
            desc: 'A systematic career management platform utilizing relational databases and complex user-permission logic.',
            tech: ['Next.js', 'PostgreSQL', 'Tailwind'],
            stats: { ping: '38ms', status: '200 OK', port: '3000' }
        },
        {
            name: 'WikiReels',
            category: 'Media Distribution',
            url: 'https://wikireels.netlify.app/',
            desc: 'High-bandwidth video delivery system optimized for low-latency educational content streams.',
            tech: ['Three.js', 'Firebase', 'AWS'],
            stats: { ping: '55ms', status: '200 OK', port: '8080' }
        }
    ];

    return (
        <div className="pt-20 min-h-screen px-6 lg:px-20 py-32 bg-[#FFF5F0] text-[#4A3835] font-['Poppins']">
            <div className="max-w-7xl mx-auto">
                <header className="mb-32 border-b border-[#4A3835]/10 pb-12">
                    <div className="flex justify-between items-end">
                        <div>
                            <span className="text-[10px] font-bold tracking-[0.4em] uppercase opacity-60 mb-6 block underline decoration-[#C97A63] underline-offset-8">Production Archive</span>
                            <h1 className="text-6xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tighter">
                                Live <br />
                                <span className="text-[#C97A63]">Deployments.</span>
                            </h1>
                        </div>
                        <div className="hidden lg:block text-right font-mono text-[10px] opacity-40 leading-loose">
                            PROTOCOL: HTTPS // SSL_ENABLED: TRUE<br />
                            SERVER_LOC: GLOBAL_EDGE<br />
                            ENCRYPTION: AES_256
                        </div>
                    </div>
                </header>

                <div className="space-y-64">
                    {deployments.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="group"
                        >
                            <div className="grid lg:grid-cols-12 gap-12 items-start">

                                {/* 1. INTERACTIVE BROWSER WINDOW */}
                                <div className="lg:col-span-8 order-2 lg:order-1">
                                    <div className="relative group/browser">
                                        {/* Browser Toolbar */}
                                        <div className="bg-[#4A3835] rounded-t-xl p-4 flex items-center justify-between shadow-2xl">
                                            <div className="flex gap-2">
                                                <div className="w-3 h-3 rounded-full bg-[#C97A63]" />
                                                <div className="w-3 h-3 rounded-full bg-[#C97A63]/40" />
                                                <div className="w-3 h-3 rounded-full bg-[#C97A63]/20" />
                                            </div>
                                            <div className="bg-white/10 rounded-md px-4 py-1 flex items-center gap-3 w-1/2">
                                                <ShieldCheck size={12} className="text-[#C97A63]" />
                                                <span className="text-[10px] font-mono text-white/60 truncate">{item.url}</span>
                                            </div>
                                            <div className="flex gap-4">
                                                <Activity size={14} className="text-white/40" />
                                            </div>
                                        </div>

                                        {/* Live Iframe Container */}
                                        <div className="relative aspect-[16/10] bg-white border-x-2 border-b-2 border-[#4A3835]/5 shadow-2xl overflow-hidden">
                                            <iframe
                                                src={item.url}
                                                title={item.name}
                                                className="w-full h-full border-none pointer-events-none group-hover/browser:pointer-events-auto transition-all"
                                                loading="lazy"
                                            />

                                            {/* "Click to Interact" Overlay */}
                                            <div className="absolute inset-0 bg-[#4A3835]/40 backdrop-blur-[2px] flex items-center justify-center opacity-100 group-hover/browser:opacity-0 pointer-events-none transition-opacity duration-500">
                                                <div className="px-6 py-3 bg-white text-[#4A3835] text-[10px] font-bold tracking-[0.2em] uppercase rounded-full shadow-xl flex items-center gap-3">
                                                    <Globe size={14} className="animate-spin-slow" />
                                                    Hover to explore live app
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 2. SYSTEM SPECIFICATIONS */}
                                <div className="lg:col-span-4 order-1 lg:order-2 space-y-8">
                                    <div>
                                        <h3 className="text-4xl font-black uppercase tracking-tighter mb-2 group-hover:text-[#C97A63] transition-colors">
                                            {item.name}
                                        </h3>
                                        <span className="text-[10px] font-bold tracking-widest uppercase text-[#C97A63]">{item.category}</span>
                                    </div>

                                    <p className="text-sm opacity-70 leading-relaxed font-medium">
                                        {item.desc}
                                    </p>

                                    {/* Tech Stack Grid */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="border border-[#4A3835]/10 p-4 rounded-lg bg-white">
                                            <Code2 size={16} className="mb-2 text-[#C97A63]" />
                                            <div className="flex flex-wrap gap-1">
                                                {item.tech.map(t => <span key={t} className="text-[9px] font-bold uppercase opacity-60">{t} •</span>)}
                                            </div>
                                        </div>
                                        <div className="border border-[#4A3835]/10 p-4 rounded-lg bg-white">
                                            <Activity size={16} className="mb-2 text-[#C97A63]" />
                                            <span className="text-[9px] font-bold uppercase block opacity-60">Status: {item.stats.status}</span>
                                            <span className="text-[9px] font-bold uppercase block opacity-60">Ping: {item.stats.ping}</span>
                                        </div>
                                    </div>

                                    <a
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group/link inline-flex items-center gap-4 text-[11px] font-bold tracking-[0.3em] uppercase"
                                    >
                                        Launch in Fullscreen
                                        <div className="w-10 h-10 rounded-full border border-[#4A3835]/20 flex items-center justify-center group-hover/link:bg-[#4A3835] group-hover/link:text-white transition-all">
                                            <ExternalLink size={14} />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}