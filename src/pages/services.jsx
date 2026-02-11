import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowUpRight, Smartphone, Cpu, Activity, Terminal, Layout, Briefcase, Globe2, HardDrive
} from 'lucide-react';

/**
 * 1. SUB-COMPONENT: FAQ ITEM
 */
const FAQItem = ({ faq, colors }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            layout
            className="border border-[#4A3835]/10 rounded-[2rem] overflow-hidden bg-white/40 backdrop-blur-md"
        >
            <motion.button
                layout
                onClick={() => setIsOpen(!isOpen)}
                className="w-full p-8 flex justify-between items-center text-left transition-colors hover:bg-[#4A3835]/5"
            >
                <span className="font-bold uppercase tracking-tight text-xs md:text-sm pr-8">{faq.q}</span>
                <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center flex-shrink-0 transition-colors"
                    style={{ backgroundColor: isOpen ? colors.accent : 'transparent' }}
                >
                    <ArrowUpRight size={18} className={isOpen ? 'text-white' : ''} />
                </motion.div>
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="px-8 pb-10 text-[13px] leading-loose opacity-70 border-t border-[#4A3835]/5 pt-6">
                            {faq.a}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

/**
 * 2. MAIN COMPONENT: SERVICES PAGE
 */
export default function ServicesPage() {
    const navigate = useNavigate();
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const colors = {
        bg: '#FFF5F0',
        text: '#2D2422', // Cocoa
        accent: '#D9836C', // Coral/Pink
        white: '#FFFFFF',
    };

    const services = [
        {
            id: 'custom-dev',
            icon: <Cpu />,
            title: 'Custom Site Development',
            description: 'Bespoke web applications built from the ground up. We focus on scalability, clean architecture, and complex logic.',
            tech: ['React', 'Next.js', 'Node.js', 'PostgreSQL'],
            price: 'From $5,000',
            metrics: { speed: 98, security: 99, load: 95 },
            status: "OPTIMIZED"
        },
        {
            id: 'small-scale',
            icon: <Smartphone />,
            title: 'Small Scale Website',
            description: 'Lightweight, high-impact websites designed for startups. Fast, mobile-first, and engineered to convert visitors.',
            tech: ['Tailwind CSS', 'Framer Motion', 'Vite', 'SEO Engine'],
            price: 'From $1,500',
            metrics: { speed: 100, security: 85, load: 99 },
            status: "STABLE"
        },
        {
            id: 'templates',
            icon: <Layout />,
            title: 'Ready Templates',
            description: 'Pre-engineered high-quality design systems. Perfect for launching quickly with a professional look.',
            tech: ['React Components', 'Modular CSS', 'Style-Sync'],
            price: 'From $800',
            metrics: { speed: 94, security: 80, load: 88 },
            status: "READY"
        },
        {
            id: 'wordpress',
            icon: <Briefcase />,
            title: 'WordPress Sites',
            description: 'Professional, secure WordPress deployments. We give you CMS power without speed trade-offs.',
            tech: ['PHP', 'WP-Engine', 'ACF Pro'],
            price: 'From $2,500',
            metrics: { speed: 88, security: 95, load: 90 },
            status: "MANAGED"
        }
    ];

    const processSteps = [
        { title: "Discovery & Architecture", desc: "We map out your business logic and define the technical stack for maximum efficiency." },
        { title: "Engineering & Sprinting", desc: "Rapid development cycles with continuous integration and real-time staging access." },
        { title: "QA & Stress Testing", desc: "Simulating high-load scenarios to ensure your platform never fails under pressure." },
        { title: "Deployment & Scaling", desc: "Launch with zero-downtime protocols and automated cloud scaling." }
    ];

    const faqs = [
        { q: "Which service is right for my project?", a: "If you need unique logic, Custom Dev is best. If you need a fast professional landing, Small Scale or Templates are the way to go." },
        { q: "Do you provide ongoing technical support?", a: "Yes, we offer monthly maintenance packages covering security, updates, and performance tuning." },
        { q: "Can I upgrade from a template to custom later?", a: "Absolutely. We build with modularity in mind, making future migrations and upgrades seamless." }
    ];

    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    };

    return (
        <div className="relative pt-20 min-h-screen font-sans selection:bg-[#D9836C] selection:text-white bg-white">

            {/* BLUEPRINT GRID */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0"
                style={{ backgroundImage: `linear-gradient(${colors.text} 1px, transparent 1px), linear-gradient(90deg, ${colors.text} 1px, transparent 1px)`, backgroundSize: '100px 100px' }} />

            {/* 1. HERO SECTION */}
            <section className="relative py-32 px-6 lg:px-20 border-b border-[#2D2422]/10 bg-white">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="h-[2px] w-12 bg-[#D9836C]"></span>
                            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-[#D9836C]">Technical Capabilities</span>
                        </div>
                        <h1 className="text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8 text-[#2D2422]">
                            High-Load <br />
                            <span className="text-[#D9836C] italic font-light">Engineering.</span>
                        </h1>
                        <p className="text-lg max-w-md leading-relaxed opacity-80 mb-10 text-[#2D2422]">
                            We don't just "make websites." We engineer high-performance digital infrastructure designed to scale.
                        </p>
                        <button className="group relative w-fit overflow-hidden border border-[#2D2422] px-10 py-5 transition-colors duration-500">
                            <Link
                                to="/templates"
                                className="relative z-10 font-bold uppercase tracking-widest text-xs flex items-center gap-3 
                                text-[#2D2422] group-hover:text-white transition-colors duration-500"
                            >
                                View our Architecture <ArrowUpRight size={18} />
                            </Link>


                            <div className="absolute inset-0 bg-[#2D2422] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                        </button>
                    </motion.div>

                    <div className="relative hidden lg:block">
                        <div className="rounded-xl border border-[#2D2422]/10 p-6 shadow-2xl font-mono text-sm overflow-hidden bg-[#FFF7F2]">
                            <div className="flex gap-2 mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-400/30" />
                                <div className="w-3 h-3 rounded-full bg-yellow-400/30" />
                                <div className="w-3 h-3 rounded-full bg-green-400/30" />
                            </div>
                            <div className="space-y-2 text-[#2D2422]">
                                <p className="text-[#D9836C]">$ npm run deploy --production</p>
                                <p className="opacity-50">{">"} Initializing cloud nodes...</p>
                                <p className="text-green-600/70">{">"} Database connected [OK]</p>
                                <p className="text-green-600/70">{">"} Security protocols active [OK]</p>
                                <p className="animate-pulse">_</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. INFRASTRUCTURE DEPLOYMENT (COCOA CARDS) */}
            <section className="relative py-40 px-6 lg:px-20 z-10 bg-[#FFF5F0]">
                <div className="max-w-7xl mx-auto mb-32">
                    <div className="flex items-center gap-6 mb-4">
                        <div className="h-[1px] w-20 bg-[#D9836C]" />
                        <span className="font-mono text-[10px] font-black tracking-[0.5em] uppercase text-[#D9836C]">Capabilities / Index_04</span>
                    </div>
                    <h2 className="text-6xl lg:text-9xl font-black uppercase tracking-tighter text-[#2D2422]">
                        Infrastructure <br />
                        <span className="text-[#D9836C] italic font-light">Deployment.</span>
                    </h2>
                </div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="max-w-7xl mx-auto space-y-12"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            variants={fadeInUp}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="relative grid lg:grid-cols-12 gap-0 group cursor-default"
                        >
                            {/* Vertical Rail */}
                            <div className="lg:col-span-1 flex flex-col items-center py-10 gap-8">
                                <span className={`font-mono text-4xl font-black transition-all duration-500 ${hoveredIndex === index ? 'text-[#D9836C] scale-125' : 'text-[#2D2422]/10'}`}>
                                    0{index + 1}
                                </span>
                                <div className="relative h-full w-[1px] bg-[#2D2422]/5 overflow-hidden">
                                    <motion.div
                                        initial={{ height: 0 }}
                                        animate={hoveredIndex === index ? { height: '100%' } : { height: 0 }}
                                        className="absolute top-0 w-full bg-[#D9836C]"
                                        transition={{ duration: 0.5 }}
                                    />
                                </div>
                                <Activity size={18} className={`transition-all duration-500 ${hoveredIndex === index ? 'text-[#D9836C] animate-pulse' : 'text-[#2D2422]/10'}`} />
                            </div>

                            {/* Monolith Card (Flip Logic) */}
                            <div className={`lg:col-span-11 rounded-[3rem] p-8 lg:p-16 relative overflow-hidden transition-all duration-700 
                                ${hoveredIndex === index ? 'bg-[#FFF5F0] shadow-2xl' : 'bg-[#2D2422]'}`}>

                                {/* Background Code Stream */}
                                <AnimatePresence>
                                    {hoveredIndex === index && (
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 20 }}
                                            className="absolute top-12 right-12 font-mono text-[9px] text-[#D9836C]/30 select-none pointer-events-none text-right"
                                        >
                                            <div>{`> DEPLOY_STATUS: ACTIVE`}</div>
                                            <div>{`> NODE_LATENCY: 12ms`}</div>
                                            <div>{`> STACK_ID: ${service.id}`}</div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <div className="grid lg:grid-cols-2 gap-16 relative z-10">
                                    <div className="space-y-12">
                                        <div className="space-y-6">
                                            <div className="flex items-center gap-4">
                                                <span className={`font-mono text-[10px] font-black px-3 py-1 rounded-full transition-colors duration-500
                                                    ${hoveredIndex === index ? 'bg-[#D9836C] text-white' : 'bg-white/10 text-[#D9836C]'}`}>
                                                    STATUS: {service.status}
                                                </span>
                                                <div className="h-px flex-grow bg-white/5" />
                                            </div>
                                            <h3 className={`text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-none transition-colors duration-500
                                                ${hoveredIndex === index ? 'text-[#2D2422]' : 'text-white'}`}>
                                                {service.title}
                                            </h3>
                                            <p className={`text-lg leading-relaxed max-w-md transition-colors duration-500
                                                ${hoveredIndex === index ? 'text-[#2D2422]/60' : 'text-white/40'}`}>
                                                {service.description}
                                            </p>
                                        </div>

                                        {/* Metrics */}
                                        <div className="space-y-6 max-w-xs">
                                            {Object.entries(service.metrics).map(([key, value]) => (
                                                <div key={key} className="space-y-2">
                                                    <div className={`flex justify-between font-mono text-[10px] uppercase font-bold
                                                        ${hoveredIndex === index ? 'text-[#2D2422]' : 'text-white/60'}`}>
                                                        <span>{key} index</span>
                                                        <span className="text-[#D9836C]">{value}%</span>
                                                    </div>
                                                    <div className="h-[1px] w-full bg-[#D9836C]/10 overflow-hidden">
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            whileInView={{ width: `${value}%` }}
                                                            transition={{ duration: 1 }}
                                                            className="h-full bg-[#D9836C]"
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex flex-col justify-between">
                                        <div className={`relative aspect-[16/10] rounded-[2.5rem] flex items-center justify-center border transition-all duration-700
                                            ${hoveredIndex === index ? 'bg-white border-[#D9836C]/20' : 'bg-white/5 border-white/5'}`}>
                                            <motion.div
                                                animate={hoveredIndex === index ? { rotate: [0, 5, -5, 0], scale: 1.1 } : {}}
                                                transition={{ duration: 4, repeat: Infinity }}
                                                className={`${hoveredIndex === index ? 'text-[#D9836C]' : 'text-white'}`}
                                            >
                                                {React.cloneElement(service.icon, { size: 90, strokeWidth: 1 })}
                                            </motion.div>
                                        </div>

                                        <div className="mt-12 space-y-8">
                                            <div className="flex flex-wrap gap-2">
                                                {service.tech.map(t => (
                                                    <span key={t} className={`px-4 py-2 font-mono text-[9px] font-black uppercase tracking-widest rounded-full border transition-all
                                                        ${hoveredIndex === index
                                                            ? 'bg-white text-[#2D2422] border-[#2D2422]/10'
                                                            : 'bg-white/5 text-white/40 border-white/5'}`}>
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="flex items-center justify-between pt-8 border-t border-white/5">
                                                <div>
                                                    <span className={`block font-mono text-[9px] uppercase font-black mb-1
                                                        ${hoveredIndex === index ? 'text-[#2D2422]/40' : 'text-white/20'}`}>Unit Price</span>
                                                    <span className={`text-4xl font-black font-mono tracking-tighter
                                                        ${hoveredIndex === index ? 'text-[#2D2422]' : 'text-white'}`}>{service.price}</span>
                                                </div>
                                                <motion.button
                                                    whileHover={{ scale: 1.1 }}
                                                    className={`p-6 rounded-2xl flex items-center justify-center transition-all shadow-xl
                                                        ${hoveredIndex === index ? 'bg-[#D9836C] text-white' : 'bg-white text-[#2D2422]'}`}
                                                >
                                                    <Terminal size={24} />
                                                </motion.button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* 3. PHILOSOPHY SECTION */}
            <section className="relative py-40 px-6 lg:px-20 border-y border-[#2D2422]/10 overflow-hidden bg-white z-10 text-[#2D2422]">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-start relative">
                    <motion.div initial="hidden" whileInView="visible" variants={staggerContainer} className="space-y-12 sticky top-40">
                        <div className="relative p-10">
                            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#D9836C]" />
                            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#D9836C]" />
                            <motion.div variants={fadeInUp} className="space-y-6">
                                <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
                                    Digital <br />
                                    <span className="text-[#D9836C]">Equity.</span>
                                </h2>
                                <p className="font-mono text-[10px] tracking-[0.3em] uppercase opacity-50">System Specification v2.0.26</p>
                            </motion.div>
                            <motion.div variants={fadeInUp} className="mt-10 space-y-6 text-[15px] leading-loose opacity-80 max-w-md">
                                <p className="relative pl-6 border-l border-[#D9836C]/30">
                                    Our methodology treats software as <span className="font-bold">strategic infrastructure</span>. We deploy high-availability environments.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>

                    <div className="relative">
                        <motion.div initial={{ height: 0 }} whileInView={{ height: '100%' }} transition={{ duration: 1.5 }} className="absolute left-[31px] top-0 w-[1px] bg-gradient-to-b from-[#D9836C] via-[#D9836C]/20 to-transparent z-0" />
                        <motion.div initial="hidden" whileInView="visible" variants={staggerContainer} className="grid gap-8 relative z-10">
                            {processSteps.map((step, i) => (
                                <motion.div key={i} variants={fadeInUp} className="group relative pl-20">
                                    <div className="absolute left-0 top-8 w-16 h-16 flex items-center justify-center">
                                        <div className="w-4 h-4 rounded-full border-2 border-[#D9836C] bg-white group-hover:bg-[#D9836C] transition-all duration-500 z-10" />
                                    </div>
                                    <div className="p-8 border border-[#2D2422]/5 bg-[#FFF7F2]/50 backdrop-blur-sm rounded-2xl group-hover:bg-white group-hover:shadow-2xl transition-all duration-500">
                                        <h3 className="text-lg font-black uppercase tracking-tight mb-3 group-hover:text-[#D9836C] transition-colors">{step.title}</h3>
                                        <p className="text-[14px] leading-relaxed opacity-60">{step.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 4. FAQ SECTION */}
            <section className="py-32 px-6 lg:px-20 z-10 bg-[#FFF5F0]">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-24">
                        <span className="text-[10px] font-black tracking-[0.5em] uppercase text-[#D9836C]">Technical Briefings</span>
                        <h2 className="text-5xl font-black uppercase tracking-tighter mt-6 text-[#2D2422]">Protocols & FAQ</h2>
                    </div>
                    <div className="space-y-4 text-[#2D2422]">
                        {faqs.map((faq, i) => <FAQItem key={i} faq={faq} colors={colors} />)}
                    </div>
                </div>
            </section>

            {/* 5. PERFORMANCE STATS */}
            <section className="py-32 px-6 lg:px-20 z-10 bg-[#FFEBE3]">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-12 text-[#2D2422]">
                    <h2 className="text-5xl font-black uppercase tracking-tighter leading-none">Deployment <br />Efficiency.</h2>
                    <div className="flex gap-12 lg:gap-24 flex-wrap justify-center">
                        {[{ val: '99%', label: 'Uptime SLA' }, { val: '<1.2s', label: 'Load Speed' }, { val: 'A+', label: 'Security' }].map((stat, i) => (
                            <div key={i} className="text-center group">
                                <div className="text-6xl font-black mb-2 group-hover:scale-110 transition-transform duration-500">
                                    {stat.val.split('').map((char, j) => (
                                        <span key={j} className={/[%+<s]/.test(char) ? 'text-[#D9836C]' : ''}>{char}</span>
                                    ))}
                                </div>
                                <div className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}