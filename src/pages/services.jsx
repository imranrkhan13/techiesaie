import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
    Code, Briefcase, Cog, ArrowUpRight, CheckCircle2
} from 'lucide-react';

export default function ServicesPage() {
    const navigate = useNavigate();

    const colors = {
        bg: '#FFF5F0',
        bgLight: '#FFF7F2',
        text: '#4A3835',
        accent: '#C97A63',
        gradStart: '#FFEBE3',
        gradEnd: '#FFE0D4',
    };

    const services = [
        {
            id: 'custom',
            icon: <Code className="w-12 h-12" />,
            title: 'Full-Stack Ecosystems',
            subtitle: 'Enterprise-Grade Applications',
            description: 'Scalable React & Next.js architectures built for high-concurrency and complex business logic.',
            tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
            features: ['Microservices Architecture', 'Real-time Data Sync', 'Custom API Design'],
            price: 'Starting $5,000',
        },
        {
            id: 'automation',
            icon: <Cog className="w-12 h-12" />,
            title: 'Intelligent Workflows',
            subtitle: 'AI & Process Automation',
            description: 'Custom-built automation engines that replace manual labor with precision-engineered scripts.',
            tech: ['Python', 'OpenAI SDK', 'n8n', 'Zapier'],
            features: ['AI Model Integration', 'Webhooks & ETL', 'CRM Synchronization'],
            price: 'Starting $1,500',
        },
        {
            id: 'wordpress',
            icon: <Briefcase className="w-12 h-12" />,
            title: 'High-Perf CMS',
            subtitle: 'Headless & Classic WP',
            description: 'SEO-optimized WordPress engines stripped of bloat and hardened for maximum security.',
            tech: ['PHP', 'MySQL', 'Elementor', 'REST API'],
            features: ['Custom Theme Hooks', 'Lighthouse Optimization', 'Bulletproof Security'],
            price: 'Starting $2,500',
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="pt-20 min-h-screen font-['Poppins'] overflow-x-hidden selection:bg-[#C97A63] selection:text-white" style={{ backgroundColor: colors.bg, color: colors.text }}>

            {/* 1. HERO SECTION */}
            <section className="relative py-32 px-6 lg:px-20 border-b border-[#4A3835]/10">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="h-[2px] w-12" style={{ backgroundColor: colors.accent }}></span>
                            <span className="text-[10px] font-bold tracking-[0.4em] uppercase" style={{ color: colors.accent }}>Technical Capabilities</span>
                        </div>
                        <h1 className="text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
                            High-Load <br />
                            <span className="opacity-40">Engineering.</span>
                        </h1>
                        <p className="text-lg max-w-md leading-relaxed opacity-80 mb-10">
                            We don't just "make websites." We engineer high-performance digital infrastructure designed to scale.
                        </p>

                        {/* Hero Button using your specific animation style */}
                        <button className="group relative w-fit overflow-hidden border border-[#4A3835] px-10 py-5 transition-colors duration-500">
                            <span className="relative z-10 font-bold uppercase tracking-widest text-xs flex items-center gap-3 group-hover:text-white transition-colors duration-500">
                                View Our Architecture <ArrowUpRight size={18} />
                            </span>
                            <div className="absolute inset-0 bg-[#4A3835] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
                        </button>
                    </motion.div>

                    {/* Visual Terminal */}
                    <div className="relative hidden lg:block">
                        {/* Decorative Code Terminal - Light Version */}
                        <div className="rounded-xl border border-[#4A3835]/10 p-6 shadow-xl font-mono text-sm overflow-hidden" style={{ backgroundColor: colors.bgLight }}>
                            <div className="flex gap-2 mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-400/30" />
                                <div className="w-3 h-3 rounded-full bg-yellow-400/30" />
                                <div className="w-3 h-3 rounded-full bg-green-400/30" />
                            </div>
                            <div className="space-y-2" >
                                <p className="text-[#C97A63]">$ npm run deploy --production</p>
                                <p className="opacity-50">{">"} Initializing cloud nodes...</p>
                                <p className="text-green-600/70">{">"} Database connected [OK]</p>
                                <p className="text-green-600/70">{">"} Security protocols active [OK]</p>
                                <p className="animate-pulse" style={{ color: colors.text }}>_</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. SERVICES LIST */}
            <section className="py-32 px-6 lg:px-20">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="max-w-7xl mx-auto space-y-40"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            variants={itemVariants}
                            className="group relative grid lg:grid-cols-12 gap-16"
                        >
                            {/* Visual Card */}
                            <div className={`lg:col-span-5 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                                <div className="relative aspect-square border border-[#4A3835]/10 rounded-[2.5rem] flex items-center justify-center overflow-hidden transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-[#C97A63]/10"
                                    style={{ backgroundColor: colors.bgLight }}>
                                    <div className="z-10 transform group-hover:scale-110 transition-transform duration-700" style={{ color: colors.accent }}>
                                        {React.cloneElement(service.icon, { size: 64, strokeWidth: 1.5 })}
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-50" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className={`lg:col-span-7 flex flex-col justify-center ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                                <div className="mb-4 font-mono text-xs font-bold tracking-[0.3em] uppercase" style={{ color: colors.accent }}>
                                    {service.subtitle}
                                </div>
                                <h2 className="text-5xl lg:text-6xl font-black uppercase mb-8 tracking-tighter">
                                    {service.title}
                                </h2>

                                <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 mb-10">
                                    {service.features.map((feature) => (
                                        <div key={feature} className="flex items-center gap-3 py-4 border-b border-[#4A3835]/5 group/item">
                                            <CheckCircle2 size={18} className="transition-colors group-hover/item:text-[#C97A63]" style={{ color: `${colors.text}40` }} />
                                            <span className="text-[11px] font-bold uppercase tracking-widest">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* TECH STACK WITH NEW HOVER ANIMATION */}
                                <div className="flex flex-wrap gap-3 mb-12">
                                    {service.tech.map(t => (
                                        <span key={t}
                                            className="px-5 py-2 border border-[#4A3835]/10 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 hover:-translate-y-1 hover:border-[#C97A63] hover:bg-[#C97A63] hover:text-white cursor-default"
                                            style={{ backgroundColor: `${colors.bgLight}` }}
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-10">
                                    {/* Your Specific Button Component */}
                                    <button
                                        onClick={() => navigate(`/services/${service.id}`)}
                                        className="group relative w-fit overflow-hidden border border-[#4A3835] px-10 py-5 transition-colors duration-500"
                                    >
                                        <span className="relative z-10 font-bold uppercase tracking-widest text-[11px] flex items-center gap-3 group-hover:text-white transition-colors duration-500">
                                            Initialize Project <ArrowUpRight size={18} />
                                        </span>
                                        <div className="absolute inset-0 bg-[#4A3835] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
                                    </button>

                                    <div className="flex flex-col">
                                        <span className="text-[10px] uppercase font-bold opacity-40 tracking-widest">Investment</span>
                                        <span className="text-2xl font-mono font-bold">{service.price}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* 3. PERFORMANCE STATS */}
            <section className="py-32 px-6 lg:px-20" style={{ backgroundColor: colors.gradStart }}>
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-12">
                    <div>
                        <h2 className="text-5xl font-black uppercase tracking-tighter leading-none mb-4">
                            Deployment <br />Efficiency.
                        </h2>
                        <p className="font-medium opacity-60">Audited metrics for all production builds.</p>
                    </div>
                    <div className="flex gap-12 lg:gap-24 flex-wrap justify-center">
                        {[
                            { val: '99%', label: 'Uptime SLA' },
                            { val: '<1.2s', label: 'Load Speed' },
                            { val: 'A+', label: 'Security' }
                        ].map((stat, i) => (
                            <div key={i} className="text-center group">
                                <div className="text-6xl font-black mb-2 transition-transform group-hover:scale-110 duration-500" style={{ color: colors.text }}>
                                    {stat.val.split('').map((char, j) => (
                                        <span key={j} className={char === '%' || char === '+' || char === '<' || char === 's' ? 'text-[#C97A63]' : ''}>
                                            {char}
                                        </span>
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