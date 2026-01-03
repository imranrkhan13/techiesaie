import { useState, useEffect, useRef } from 'react';
import { ArrowRight, ExternalLink, Code, Zap, Shield, Cog } from 'lucide-react';
import * as THREE from 'three';
import '../styles/global.css';
import { useNavigate } from 'react-router-dom';
const colors = {
    bg: '#0A0A0A',
    bgLight: '#141414',
    primary: '#FFFFFF',
    secondary: '#A0A0A0',
    accent: '#FF6B35',
    accentHover: '#FF8555',
};

function ThreeBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
            alpha: true,
            antialias: true
        });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Create beautiful glowing orbs
        const orbs = [];
        for (let i = 0; i < 25; i++) {
            const geometry = new THREE.SphereGeometry(0.3 + Math.random() * 0.4, 32, 32);
            const material = new THREE.MeshStandardMaterial({
                color: i % 3 === 0 ? 0x00F5FF : i % 3 === 1 ? 0x6366F1 : 0x8B5CF6,
                emissive: i % 3 === 0 ? 0x00F5FF : i % 3 === 1 ? 0x6366F1 : 0x8B5CF6,
                emissiveIntensity: 0.5,
                metalness: 0.8,
                roughness: 0.2,
                transparent: true,
                opacity: 0.7
            });
            const orb = new THREE.Mesh(geometry, material);

            orb.position.set(
                (Math.random() - 0.5) * 35,
                (Math.random() - 0.5) * 30,
                (Math.random() - 0.5) * 25
            );

            scene.add(orb);
            orbs.push({
                mesh: orb,
                speed: 0.1 + Math.random() * 0.2,
                amplitude: 0.5 + Math.random() * 1,
                phase: Math.random() * Math.PI * 2
            });
        }

        const rings = [];
        for (let i = 0; i < 8; i++) {
            const geometry = new THREE.TorusGeometry(1.5 + Math.random() * 0.5, 0.1, 16, 50);
            const material = new THREE.MeshStandardMaterial({
                color: i % 2 === 0 ? 0x00F5FF : 0x6366F1,
                emissive: i % 2 === 0 ? 0x00F5FF : 0x6366F1,
                emissiveIntensity: 0.3,
                metalness: 0.9,
                roughness: 0.1,
                transparent: true,
                opacity: 0.4
            });
            const ring = new THREE.Mesh(geometry, material);

            ring.position.set(
                (Math.random() - 0.5) * 30,
                (Math.random() - 0.5) * 25,
                (Math.random() - 0.5) * 20
            );
            ring.rotation.set(
                Math.random() * Math.PI,
                Math.random() * Math.PI,
                Math.random() * Math.PI
            );

            scene.add(ring);
            rings.push({
                mesh: ring,
                rotationSpeed: {
                    x: (Math.random() - 0.5) * 0.01,
                    y: (Math.random() - 0.5) * 0.01,
                    z: (Math.random() - 0.5) * 0.01
                }
            });
        }

        // Create glowing particles field
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 300;
        const positions = new Float32Array(particlesCount * 3);
        const colors = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 50;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 40;

            // Alternate between cyan and purple
            const color = new THREE.Color(i % 2 === 0 ? 0x00F5FF : 0x6366F1);
            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.08,
            vertexColors: true,
            transparent: true,
            opacity: 0.6,
            blending: THREE.AdditiveBlending
        });

        const particles = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particles);

        // Create floating cubes with rounded edges
        const cubes = [];
        for (let i = 0; i < 12; i++) {
            const geometry = new THREE.BoxGeometry(0.8, 0.8, 0.8, 2, 2, 2);
            const material = new THREE.MeshStandardMaterial({
                color: i % 3 === 0 ? 0x00F5FF : i % 3 === 1 ? 0x6366F1 : 0x8B5CF6,
                emissive: i % 3 === 0 ? 0x00F5FF : i % 3 === 1 ? 0x6366F1 : 0x8B5CF6,
                emissiveIntensity: 0.2,
                metalness: 0.7,
                roughness: 0.3,
                transparent: true,
                opacity: 0.5
            });
            const cube = new THREE.Mesh(geometry, material);

            cube.position.set(
                (Math.random() - 0.5) * 30,
                (Math.random() - 0.5) * 25,
                (Math.random() - 0.5) * 20
            );

            scene.add(cube);
            cubes.push({
                mesh: cube,
                rotationSpeed: {
                    x: (Math.random() - 0.5) * 0.015,
                    y: (Math.random() - 0.5) * 0.015,
                    z: (Math.random() - 0.5) * 0.01
                },
                floatSpeed: 0.15 + Math.random() * 0.25
            });
        }

        // Lighting setup
        const light1 = new THREE.PointLight(0x00F5FF, 3, 50);
        light1.position.set(15, 15, 15);
        scene.add(light1);

        const light2 = new THREE.PointLight(0x6366F1, 2.5, 50);
        light2.position.set(-15, -10, 10);
        scene.add(light2);

        const light3 = new THREE.PointLight(0x8B5CF6, 2, 40);
        light3.position.set(0, 20, -15);
        scene.add(light3);

        const ambientLight = new THREE.AmbientLight(0x4040ff, 0.4);
        scene.add(ambientLight);

        camera.position.z = 25;
        camera.position.y = 2;

        let time = 0;
        let animationId;

        const animate = () => {
            animationId = requestAnimationFrame(animate);
            time += 0.005;

            // Animate orbs floating
            orbs.forEach(({ mesh, speed, amplitude, phase }) => {
                mesh.position.y += Math.sin(time * speed + phase) * 0.02;
                mesh.position.x += Math.cos(time * speed * 0.7 + phase) * 0.01;
                mesh.rotation.x += 0.005;
                mesh.rotation.y += 0.005;

                // Pulse effect
                const scale = 1 + Math.sin(time * 2 + phase) * 0.1;
                mesh.scale.setScalar(scale);
            });

            // Animate rings
            rings.forEach(({ mesh, rotationSpeed }) => {
                mesh.rotation.x += rotationSpeed.x;
                mesh.rotation.y += rotationSpeed.y;
                mesh.rotation.z += rotationSpeed.z;
            });

            // Animate cubes
            cubes.forEach(({ mesh, rotationSpeed, floatSpeed }) => {
                mesh.rotation.x += rotationSpeed.x;
                mesh.rotation.y += rotationSpeed.y;
                mesh.rotation.z += rotationSpeed.z;
                mesh.position.y += Math.sin(time * floatSpeed + mesh.position.x) * 0.015;
            });

            // Animate particles
            particles.rotation.y += 0.0003;
            particles.rotation.x = Math.sin(time * 0.1) * 0.05;

            const positions = particles.geometry.attributes.position.array;
            for (let i = 0; i < positions.length; i += 3) {
                positions[i + 1] += Math.sin(time + i) * 0.005;
            }
            particles.geometry.attributes.position.needsUpdate = true;

            // Camera movement
            camera.position.x = Math.sin(time * 0.1) * 2;
            camera.position.y = 2 + Math.cos(time * 0.08) * 1.5;
            camera.lookAt(0, 0, 0);

            // Lights dancing
            light1.position.x = 15 * Math.cos(time * 0.2);
            light1.position.z = 15 * Math.sin(time * 0.2);

            light2.position.x = -15 * Math.sin(time * 0.15);
            light2.position.y = -10 + Math.cos(time * 0.25) * 5;

            light3.position.x = Math.sin(time * 0.18) * 10;
            light3.position.z = -15 + Math.cos(time * 0.18) * 5;

            renderer.render(scene, camera);
        };
        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationId);
            renderer.dispose();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                pointerEvents: 'none'
            }}
        />
    );
}
function AnimatedWord() {
    const words = ['PRODUCTS', 'PLATFORMS', 'SYSTEMS', 'INTERFACES', 'SOLUTIONS'];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % words.length);
                setIsAnimating(false);
            }, 600);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <span
            className="inline-block"
            style={{
                animation: isAnimating ? 'wordExit 0.6s ease-in forwards' : 'wordEnter 0.6s ease-out',
            }}
        >
            <style>{`
        @keyframes wordExit {
          0% { transform: translateY(0) scale(1); opacity: 1; }
          100% { transform: translateY(-100px) scale(0.5); opacity: 0; }
        }
        @keyframes wordEnter {
          0% { transform: translateY(100px) scale(0.5); opacity: 0; }
          100% { transform: translateY(0) scale(1); opacity: 1; }
        }
      `}</style>
            <span className="text-[#FF6B35]">
                {words[currentIndex]}
            </span>
        </span>
    );
}

 export default function HomePage() {
    const navigate  = useNavigate();

    const services = [
        {
            icon: <Code className="w-12 h-12" />,
            title: 'Web Development',
            desc: 'Custom sites built with React, Next.js, modern tech',
            number: '01'
        },
        {
            icon: <Zap className="w-12 h-12" />,
            title: 'Fast & Optimized',
            desc: 'Performance-first approach, SEO-ready solutions',
            number: '02'
        },
        {
            icon: <Shield className="w-12 h-12" />,
            title: 'Secure & Stable',
            desc: 'Enterprise-grade security and reliability',
            number: '03'
        },
        {
            icon: <Cog className="w-12 h-12" />,
            title: 'Automation',
            desc: 'Streamline workflows, reduce manual tasks',
            number: '04'
        }
    ];
    return (
        <div className="fade-in">
            <ThreeBackground />
            {/* Hero */}
            <section className="min-h-screen flex items-center px-6 lg:px-12 pt-20">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>

                            <div className="text-sm font-bold tracking-widest text-gray-400 mb-6">DIGITAL AGENCY</div>
                            <h1 className="text-6xl lg:text-8xl font-black leading-none mb-8">
                                WE CREATE
                                <br />
                                <span className="text-[#FF6B35]"><AnimatedWord /></span>
                            </h1>
                            <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-xl">
                                Modern web experiences that drive results. No fluff, no outdated designs—just clean, powerful digital solutions.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={() => navigate('/book-call')}
                                    className="bg-white text-black px-10 py-5 text-sm font-bold tracking-wide hover:bg-gray-200 transition-all group"
                                >
                                    <span className="flex items-center justify-center gap-3">
                                        START PROJECT
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </button>
                                <button
                                    onClick={() => navigate('/templates')}
                                    className="border-2 border-white text-white px-10 py-5 text-sm font-bold tracking-wide hover:bg-white hover:text-black transition-all"
                                >
                                    VIEW WORK
                                </button>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {[
                                { emoji: '🍔', name: 'FoodExpress', desc: 'Food ordering with real-time tracking', live: 'https://foodexpress-0v7b.onrender.com/' },
                                { emoji: '🌱', name: 'Career Garden', desc: 'Career management platform', live: 'https://career-garden.netlify.app/' },
                                { emoji: '🎥', name: 'WikiReels', desc: 'Educational micro-content hub', live: 'https://wikireels.netlify.app/' }
                            ].map((project, i) => (
                                <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:bg-white/10 hover:border-white/20 transition-all hover-lift">
                                    <div className="flex items-start gap-6 mb-4">
                                        <span className="text-5xl">{project.emoji}</span>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                                            <p className="text-gray-400">{project.desc}</p>
                                        </div>
                                    </div>
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-bold tracking-wide text-white hover:text-[#FF6B35] transition-colors"
                                    >
                                        VIEW LIVE
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-32 px-6 lg:px-12 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B35]/5 rounded-full blur-3xl"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="mb-20">
                        <div className="text-sm font-bold tracking-widest text-[#FF6B35] mb-4">WHAT WE DO</div>
                        <h2 className="text-5xl lg:text-7xl font-black mb-6">Our Services</h2>
                        <p className="text-xl text-gray-400 max-w-2xl">
                            Comprehensive solutions designed to elevate your digital presence
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {services.map((service, i) => (
                            <div
                                key={i}
                                className="group relative bg-white/5 border border-white/10 p-10 hover:bg-white/10 hover:border-[#FF6B35]/50 transition-all duration-500 hover-lift overflow-hidden"
                            >
                                {/* Hover background effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/0 to-[#FF6B35]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Number badge */}
                                <div className="absolute top-6 right-6 text-6xl font-black text-white/5 group-hover:text-[#FF6B35]/10 transition-colors">
                                    {service.number}
                                </div>

                                <div className="relative z-10">
                                    <div className="w-20 h-20 rounded-2xl bg-[#FF6B35]/10 flex items-center justify-center text-[#FF6B35] mb-8 group-hover:scale-110 group-hover:bg-[#FF6B35]/20 transition-all duration-300">
                                        {service.icon}
                                    </div>

                                    <h3 className="text-3xl font-bold mb-4 group-hover:text-[#FF6B35] transition-colors">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                        {service.desc}
                                    </p>

                                    <button
                                        onClick={() => navigate('/services')}
                                        className="inline-flex items-center gap-2 text-sm font-bold tracking-wide text-gray-400 group-hover:text-[#FF6B35] transition-colors"
                                    >
                                        LEARN MORE
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            

            {/* CTA */}
            {/* <section className="py-32 px-6 lg:px-12">
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
                        onClick={() => setCurrentPage('book-call')}
                        className="bg-white text-black px-12 py-6 text-sm font-bold tracking-wide hover:bg-gray-200 transition-all group"
                    >
                        <span className="flex items-center justify-center gap-3">
                            GET STARTED
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </button>
                </div>
            </section> */}
        </div>
    );
}