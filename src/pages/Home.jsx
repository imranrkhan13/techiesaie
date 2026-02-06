import { useState, useEffect, useRef, React, useCallback } from 'react';
import { ArrowRight, Code, Zap, Shield, Cog, Quote, Star, ArrowUpRight, Plus, Terminal, Cpu, Layout } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';


const HeroBackground = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        // 1. Scene Setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true // Important: allows your background color to show through
        });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        mountRef.current.appendChild(renderer.domElement);

        // 2. Objects: The "System Knot"
        const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
        const material = new THREE.MeshBasicMaterial({
            color: 0xC97A63, // Your signature accent color
            wireframe: true,
            transparent: true,
            opacity: 0.15
        });
        const knot = new THREE.Mesh(geometry, material);
        scene.add(knot);

        // 3. Objects: Floating Data Points (Neural Grid)
        const pointsGeometry = new THREE.BufferGeometry();
        const count = 1500;
        const positions = new Float32Array(count * 3);

        for (let i = 0; i < count * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 60;
        }
        pointsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const pointsMaterial = new THREE.PointsMaterial({
            size: 0.05,
            color: 0x4A3835,
            transparent: true,
            opacity: 0.5
        });
        const particles = new THREE.Points(pointsGeometry, pointsMaterial);
        scene.add(particles);

        camera.position.z = 30;

        // 4. Mouse Interaction Logic
        let mouseX = 0;
        let mouseY = 0;
        const handleMouseMove = (event) => {
            mouseX = (event.clientX - window.innerWidth / 2) / 100;
            mouseY = (event.clientY - window.innerHeight / 2) / 100;
        };
        window.addEventListener('mousemove', handleMouseMove);

        // 5. Animation Loop
        const animate = () => {
            requestAnimationFrame(animate);

            // Smooth rotation
            knot.rotation.x += 0.001;
            knot.rotation.y += 0.002;

            // Gentle floating particles
            particles.rotation.y -= 0.0005;

            // Follow mouse slightly for depth effect
            knot.position.x += (mouseX - knot.position.x) * 0.05;
            knot.position.y += (-mouseY - knot.position.y) * 0.05;

            renderer.render(scene, camera);
        };

        animate();

        // 6. Handle Resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            mountRef.current?.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <div
            ref={mountRef}
            className="absolute inset-0 -z-10 pointer-events-none overflow-hidden"
            style={{ background: 'radial-gradient(circle at 50% 50%, #FFF5F0 0%, #FEECE2 100%)' }}
        />
    );
};

// --- 1. THREE.JS ENGINE (HERO ONLY) ---
function HeroCanvas() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );

        const renderer = new THREE.WebGLRenderer({
            canvas,
            alpha: true,
            antialias: true,
        });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 0);

        // Torus Knot
        const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
        const material = new THREE.MeshBasicMaterial({
            color: 0xC97A63,
            wireframe: true,
            transparent: true,
            opacity: 0.2,
        });

        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        camera.position.z = 30;

        const animate = () => {
            mesh.rotation.x += 0.001;
            mesh.rotation.y += 0.002;
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            renderer.dispose();
            geometry.dispose();
            material.dispose();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 pointer-events-none"
        />
    );
}


// --- 2. DYNAMIC TEXT CHANGER ---
const adjectives = ["Platforms", "Models", "Moments", "Standards", "Logic"];
function WordSwitcher() {
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => setIndex(prev => (prev + 1) % adjectives.length), 2000);
        return () => clearInterval(timer);
    }, []);

    return (
        <span className="relative inline-block align-baseline ml-4">
            <AnimatePresence mode="wait">
                <motion.span
                    key={adjectives[index]}
                    initial={{ rotateX: 90, opacity: 0 }}
                    animate={{ rotateX: 0, opacity: 1 }}
                    exit={{ rotateX: -90, opacity: 0 }}
                    transition={{
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="inline-block text-[#C97A63] italic whitespace-nowrap origin-bottom"
                    style={{ transformPerspective: 1200 }}
                >
                    {adjectives[index]}
                </motion.span>
            </AnimatePresence>
        </span>
    );

}

export default function App() {
    const [index, setIndex] = useState(0);

    const testimonials = [
        { name: "Marcus Chen", role: "CTO @ Flux", text: "The architectural integrity of the system they built is unmatched. It's not just code; it's a foundation." },
        { name: "Elena Rossi", role: "Design Director", text: "They finally bridged the gap between high-end aesthetics and industrial-grade performance." },
        { name: "Sarah Jenkins", role: "Founder, Apex", text: "Zero downtime since migration. The engineering logic is simply bulletproof." }
    ];

    // 2. Wrap the nextCard logic so we can reuse it
    const nextCard = useCallback(() => {
        setIndex((prev) => (prev + 1) % testimonials.length);
    }, [testimonials.length]);

    // 3. Add the 5-second timer
    useEffect(() => {
        const timer = setInterval(() => {
            nextCard();
        }, 5000); // 5000ms = 5 seconds

        return () => clearInterval(timer); // Cleanup on unmount
    }, [nextCard]);
    return (
        <div className="bg-[#fff] text-[#4A3835] font-sans selection:bg-[#C97A63] selection:text-white">

            {/* --- HERO SECTION --- */}
            <section className="relative min-h-screen flex items-center overflow-hidden px-6 lg:px-20">
                <HeroCanvas />
                <div className="max-w-7xl mx-auto w-full pt-20">
                    <div className="grid lg:grid-cols-12 gap-10 items-start">

                        {/* LEFT SIDE */}
                        <div className="lg:col-span-7">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-center gap-3 mb-10"
                            >
                                <span className="w-12 h-[1px] bg-[#4A3835]" />
                                <span className="text-[10px] font-bold tracking-[0.4em] uppercase">Est. 2024 / Digital Engineering</span>
                            </motion.div>

                            <h1 className="text-[10vw] lg:text-[7.5rem] font-black leading-[0.85] uppercase tracking-tighter">
                                We Engineer <br />
                                <WordSwitcher />
                            </h1>

                            <div className="grid lg:grid-cols-1 gap-12 mt-24 items-end">
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.7 }}
                                    transition={{ delay: 0.5 }}
                                    className="text-xl lg:text-2xl leading-relaxed max-w-xl font-medium"
                                >
                                    Moving beyond simple web design. We build robust, scalable infrastructures that bridge the gap between industrial reliability and artistic soul.
                                </motion.p>

                                <button className="group relative w-fit overflow-hidden border border-[#4A3835] px-10 py-5">
                                    <span className="relative z-10 font-bold uppercase tracking-widest text-sm flex items-center gap-3 group-hover:text-white transition-colors duration-500">
                                        Initialize Project <ArrowUpRight size={18} />
                                    </span>
                                    <div className="absolute inset-0 bg-[#4A3835] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-expo" />
                                </button>
                            </div>
                        </div>

                        {/* RIGHT SIDE */}
                        
                        <div className="lg:col-span-5 relative mt-20 lg:mt-0 flex justify-end">
                            <div className="relative h-[450px] w-full max-w-[400px] flex items-center justify-end">
                                <motion.div
                                    animate={{ opacity: [0.2, 0.5, 0.2] }}
                                    transition={{ repeat: Infinity, duration: 3 }}
                                    className="absolute -top-12 right-0 flex items-center gap-3"
                                >
                                    <span className="text-[9px] font-mono uppercase tracking-[0.3em]">Click to Cycle Log</span>
                                    <div className="w-8 h-[1px] bg-[#4A3835]/30" />
                                </motion.div>

                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20, filter: "blur(10px)", scale: 0.95 }}
                                        animate={{ opacity: 1, x: 0, filter: "blur(0px)", scale: 1 }}
                                        exit={{ opacity: 0, x: -50, filter: "blur(10px)", scale: 0.9 }}
                                        onClick={nextCard}
                                        className="relative w-full bg-white border border-[#4A3835]/10 p-10 shadow-2xl shadow-[#4A3835]/5 cursor-pointer group"
                                    >
                                        {/* --- SYSTEM SCANNER (Visual 5s Countdown) --- */}
                                        <div className="absolute top-0 left-0 w-full h-[1px] bg-[#4A3835]/5 overflow-hidden">
                                            <motion.div
                                                key={`bar-${index}`} // Resets animation on index change
                                                initial={{ x: "-100%" }}
                                                animate={{ x: "0%" }}
                                                transition={{ duration: 5, ease: "linear" }}
                                                className="w-full h-full bg-[#C97A63]/40"
                                            />
                                        </div>

                                        <div className="flex flex-col gap-8">
                                            <div className="flex justify-between items-start">
                                                <div className="flex gap-1.5">
                                                    {[...Array(5)].map((_, i) => (
                                                        <div key={i} className="w-1.5 h-1.5 bg-[#C97A63] rounded-full" />
                                                    ))}
                                                </div>
                                                <span className="font-mono text-[10px] text-[#C97A63] font-bold">
                                                    SYS_FEED_{index + 1}
                                                </span>
                                            </div>

                                            <p className="text-lg italic font-medium leading-relaxed text-[#4A3835]">
                                                "{testimonials[index].text}"
                                            </p>

                                            <div className="border-t border-[#4A3835]/10 pt-6 flex justify-between items-end">
                                                <div>
                                                    <h5 className="font-black uppercase tracking-tight text-md">
                                                        {testimonials[index].name}
                                                    </h5>
                                                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-40 mt-1">
                                                        {testimonials[index].role}
                                                    </p>
                                                </div>
                                                <div className="w-8 h-8 rounded-full border border-[#4A3835]/10 flex items-center justify-center group-hover:bg-[#4A3835] group-hover:text-white transition-all duration-300">
                                                    <ArrowUpRight size={14} />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Visual Stack Decoration */}
                                        <div className="absolute inset-0 border border-[#4A3835]/5 -z-10 translate-x-3 translate-y-3" />
                                        <div className="absolute inset-0 border border-[#4A3835]/5 -z-20 translate-x-6 translate-y-6" />
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* --- CORE CAPABILITIES (Informative Section) --- */}
            <section className="py-24 px-6 lg:px-20 bg-[#FFF5F0] relative overflow-hidden">
                <div className="max-w-5xl mx-auto relative z-10">

                    {/* --- REFINED TECHNICAL HEADER --- */}
                    <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "40px" }}
                                className="h-[1.5px] bg-[#C97A63] mb-6"
                            />
                            <motion.h2
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="text-[10px] font-bold tracking-[0.6em] uppercase text-[#C97A63] mb-3"
                            >
                                Capabilities
                            </motion.h2>
                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none"
                            >
                                Technical <span className="italic font-light opacity-40 text-[#4A3835]">Stack</span>
                            </motion.h3>
                        </div>
                        <p className="text-[10px] font-mono opacity-40 uppercase tracking-widest max-w-[200px] leading-tight">
                // System optimization through modular engineering.
                        </p>
                    </div>

                    {/* --- REFINED EXPANSION LIST --- */}
                    <div className="border-t border-[#4A3835]/10">
                        {[
                            {
                                title: "System Architecture",
                                icon: <Terminal size={20} />,
                                desc: "Building the backbone of your business with high-availability server structures and clean, documented API layers.",
                                tags: ["Next.js", "Node.js", "AWS"],
                                num: "01"
                            },
                            {
                                title: "Visual Engineering",
                                icon: <Layout size={20} />,
                                desc: "High-end 3D interactions and motion systems that don't just look good, but drive user engagement.",
                                tags: ["Three.js", "GSAP", "Framer"],
                                num: "02"
                            },
                            {
                                title: "Logic & Automation",
                                icon: <Cpu size={20} />,
                                desc: "Reducing operational overhead by automating repetitive workflows through intelligent software hooks.",
                                tags: ["Webhooks", "CI/CD", "Testing"],
                                num: "03"
                            }
                        ].map((s, i) => (
                            <motion.div
                                key={i}
                                initial="initial"
                                whileHover="hover"
                                className="group relative border-b border-[#4A3835]/10 overflow-hidden bg-white cursor-crosshair"
                            >
                                {/* Hover Background: Subtle Tint */}
                                <motion.div
                                    variants={{ hover: { opacity: 1 } }}
                                    initial={{ opacity: 0 }}
                                    className="absolute inset-0 bg-[#FFF5F0]/50 -z-10"
                                />

                                <div className="relative z-10 px-4 md:px-8 py-10 transition-all duration-500">
                                    <div className="flex items-center justify-between gap-4">

                                        {/* Title & Icon Group (Scaled Down) */}
                                        <div className="flex items-center gap-6">
                                            <span className="font-mono text-[10px] text-[#C97A63] font-bold opacity-40">{s.num}</span>
                                            <div className="text-[#4A3835] group-hover:text-[#C97A63] transition-colors duration-500 group-hover:scale-110">
                                                {s.icon}
                                            </div>
                                            <h4 className="text-xl md:text-2xl font-bold uppercase tracking-tight transition-all duration-500">
                                                {s.title}
                                            </h4>
                                        </div>

                                        {/* Tags (Cleaner, smaller) */}
                                        <div className="hidden md:flex gap-1.5 opacity-20 group-hover:opacity-100 transition-opacity">
                                            {s.tags.map(tag => (
                                                <span key={tag} className="text-[8px] font-bold border border-[#4A3835]/20 px-2 py-0.5 rounded-sm uppercase tracking-tighter">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* --- THE COMPACT REVEAL --- */}
                                    <motion.div
                                        variants={{
                                            initial: { height: 0, opacity: 0, filter: "blur(8px)", y: 10 },
                                            hover: {
                                                height: "auto",
                                                opacity: 1,
                                                filter: "blur(0px)",
                                                y: 0,
                                                transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
                                            }
                                        }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pt-8 md:pl-16 max-w-xl">
                                            <p className="text-sm md:text-base leading-relaxed text-[#4A3835]/70 mb-4">
                                                {s.desc}
                                            </p>
                                            {/* Micro-interaction line */}
                                            <motion.div
                                                initial={{ width: 0 }}
                                                variants={{ hover: { width: "40px" } }}
                                                className="h-[1px] bg-[#C97A63]"
                                            />
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Background Number (Smaller & Subtle) */}
                                <span className="absolute right-6 top-1/2 -translate-y-1/2 text-6xl font-black text-[#4A3835]/5 pointer-events-none transition-all duration-700 group-hover:text-[#C97A63]/5">
                                    {s.num}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- THE PROCESS (Timeline) --- */}
            <section className="py-32 px-6 lg:px-20 bg-white relative overflow-hidden">
                <div className="max-w-5xl mx-auto">

                    {/* --- DYNAMIC HEADING --- */}
                    <div className="mb-32 overflow-hidden">
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4 mb-6"
                        >
                            <div className="h-[1px] w-12 bg-[#C97A63]" />
                            <span className="text-xs font-bold tracking-[0.5em] uppercase text-[#C97A63]">Workflow</span>
                        </motion.div>
                        <motion.h2
                            initial={{ skewY: 5, y: 50, opacity: 0 }}
                            whileInView={{ skewY: 0, y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="text-5xl lg:text-7xl font-black uppercase tracking-tighter"
                        >
                            Our <span className="text-outline text-transparent" style={{ WebkitTextStroke: '1px #4A3835' }}>Production</span> <br />
                            Protocol
                        </motion.h2>
                    </div>

                    {/* --- PROCESS STEPS --- */}
                    <div className="space-y-0">
                        {[
                            { step: "01", label: "Discovery", title: "Technical Auditing", text: "We analyze your existing workflows to find bottlenecks in your current digital system." },
                            { step: "02", label: "Blueprint", title: "Architectural Planning", text: "Wireframes not just for visuals, but for data flow and user logic. We map out every interaction." },
                            { step: "03", label: "Build", title: "Industrial Forging", text: "Writing modular, performant code that is built to be extended, not replaced." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial="initial"
                                whileHover="hover"
                                className="group relative border-t border-[#4A3835]/10 py-12 flex flex-col md:flex-row gap-8 md:gap-24 cursor-none"
                            >
                                {/* Left: Step & Label */}
                                <div className="flex items-center gap-6 md:w-48 flex-shrink-0">
                                    <span className="text-sm font-mono text-[#C97A63] opacity-50 group-hover:opacity-100 transition-opacity">
                                        {item.step}
                                    </span>
                                    <div className="h-8 w-[1px] bg-[#4A3835]/10 group-hover:bg-[#C97A63] transition-colors" />
                                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-30 group-hover:opacity-100 transition-all">
                                        {item.label}
                                    </span>
                                </div>

                                {/* Right: The Reveal Logic */}
                                <div className="flex-grow">
                                    <h4 className="text-3xl md:text-5xl font-black uppercase tracking-tight transition-all duration-500 group-hover:text-[#C97A63]">
                                        {item.title}
                                    </h4>

                                    {/* THIS IS THE HOVER REVEAL CONTAINER */}
                                    <motion.div
                                        variants={{
                                            initial: { height: 0, opacity: 0, y: 20, filter: "blur(10px)" },
                                            hover: {
                                                height: "auto",
                                                opacity: 1,
                                                y: 0,
                                                filter: "blur(0px)",
                                                transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
                                            }
                                        }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-lg opacity-60 leading-relaxed pt-6 max-w-xl">
                                            {item.text}
                                        </p>

                                        <div className="flex gap-4 mt-6">
                                            <div className="h-1 w-1 bg-[#C97A63] rounded-full animate-bounce" />
                                            <div className="h-1 w-1 bg-[#C97A63] rounded-full animate-bounce delay-75" />
                                            <div className="h-1 w-1 bg-[#C97A63] rounded-full animate-bounce delay-150" />
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Animated Background Filler */}
                                <motion.div
                                    variants={{
                                        initial: { scaleY: 0 },
                                        hover: { scaleY: 1 }
                                    }}
                                    transition={{ duration: 0.4, ease: "circOut" }}
                                    className="absolute inset-0 bg-[#FFF5F0] -z-10 origin-top"
                                />
                            </motion.div>
                        ))}
                        <div className="border-t border-[#4A3835]/10 w-full" />
                    </div>
                </div>
            </section>

            {/* --- FOOTER --- */}
            <footer className="bg-[#4A3835] text-[#FFF5F0] py-20 px-6 lg:px-20">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
                    <h2 className="text-2xl font-black tracking-tighter">TECHIES®</h2>
                    <div className="flex gap-8 text-[10px] font-bold tracking-widest uppercase">
                        <a href="#" className="hover:text-[#C97A63] transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-[#C97A63] transition-colors">Github</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}