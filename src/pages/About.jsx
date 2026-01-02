import { Target, Rocket, Smile, Clock, MessageCircle, Briefcase, Users, Award, Headphones } from "lucide-react";
import React from "react";
export default function AboutSection() {
    const values = [
        {
            icon: <Target className="w-8 h-8" />,
            title: 'Client-First',
            desc: 'Your success is our success. We prioritize understanding your goals and delivering solutions that exceed expectations.'
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: 'Quality Driven',
            desc: 'Every line of code, every design choice is crafted with precision and attention to detail.'
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: 'Collaborative',
            desc: "We work alongside you, keeping you informed and involved throughout the entire development process."
        },
        {
            icon: <Clock className="w-8 h-8" />,
            title: 'Fast Delivery',
            desc: 'We respect deadlines and move quickly without compromising on quality or functionality.'
        }
    ];

    return (
        <div className="pt-20 min-h-screen px-6 lg:px-12 py-32 fade-in relative">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#FF6B35]/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="mb-20 text-center">
                    <div className="text-sm font-bold tracking-widest text-[#FF6B35] mb-4 mt-20">ABOUT US</div>
                    <h1 className="text-5xl lg:text-7xl font-black mb-8">Who We Are</h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        A modern web agency focused on building digital products that combine beautiful design with powerful functionality.
                    </p>
                </div>

                {/* Mission & Vision */}
                <div className="grid lg:grid-cols-2 gap-8 mb-20">
                    <div className="group relative bg-gradient-to-br from-[#FF6B35]/10 to-transparent border border-[#FF6B35]/30 p-12 hover:border-[#FF6B35]/50 transition-all">
                        <div className="absolute top-6 right-6 text-7xl font-black text-[#FF6B35]/10">01</div>
                        <div className="relative z-10">
                            <h2 className="text-4xl font-black mb-6 text-[#FF6B35]">Our Mission</h2>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                To empower businesses with cutting-edge web solutions that drive growth, engagement, and success. We believe technology should be accessible, intuitive, and impactful.
                            </p>
                        </div>
                    </div>

                    <div className="group relative bg-gradient-to-br from-white/5 to-transparent border border-white/10 p-12 hover:border-[#FF6B35]/30 transition-all">
                        <div className="absolute top-6 right-6 text-7xl font-black text-white/5">02</div>
                        <div className="relative z-10">
                            <h2 className="text-4xl font-black mb-6">Our Vision</h2>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                To become the go-to partner for businesses seeking exceptional digital experiences—where innovation meets reliability and creativity meets code.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Values */}
                <div className="mb-20">
                    <h2 className="text-4xl font-black mb-12 text-center">What Drives Us</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, i) => (
                            <div
                                key={i}
                                className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 hover:border-[#FF6B35]/30 transition-all group"
                            >
                                <div className="w-16 h-16 rounded-xl bg-[#FF6B35]/10 flex items-center justify-center text-[#FF6B35] mb-6 group-hover:bg-[#FF6B35]/20 group-hover:scale-110 transition-all">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats */}
                <div className="bg-gradient-to-r from-[#FF6B35]/10 via-[#FF6B35]/5 to-transparent border border-[#FF6B35]/30 p-16 rounded-2xl">
                    <h2 className="text-3xl font-black mb-12 text-center">Our Impact</h2>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                        {[
                            { num: '100+', label: 'Projects Delivered', icon: <Briefcase /> },
                            { num: '50+', label: 'Clients Worldwide', icon: <Users /> },
                            { num: '5+', label: 'Years of Experience', icon: <Award /> },
                            { num: '24/7', label: 'Dedicated Support', icon: <Headphones /> },
                        ].map((stat, i) => (
                            <div key={i} className="text-center group hover:scale-110 transition-transform">
                                <div className="w-[4.5rem]
    h-[3.5rem]
    mb-6
    ml-20
    flex items-center justify-center
    border border-[#FF8555]/40
    text-[#FF8555]]"> {React.cloneElement(stat.icon, {
                                    className: 'w-6 h-6',
                                })}</div>
                                <div className="text-5xl font-black mb-2 bg-gradient-to-r from-[#FF6B35] to-[#FF8555] bg-clip-text text-transparent">
                                    {stat.num}
                                </div>
                                <div className="text-gray-400 text-sm tracking-wide">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Team CTA */}
                {/* <div className="mt-20 text-center">
                    <p className="text-xl text-gray-400 mb-8">
                        Want to work with us? Let's build something amazing together.
                    </p>
                    <button className="bg-[#FF6B35] text-white px-12 py-5 text-sm font-bold tracking-wide hover:bg-[#FF8555] transition-all group">
                        <span className="flex items-center justify-center gap-3">
                            GET IN TOUCH
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </button>
                </div> */}
            </div>
        </div>
    );
}