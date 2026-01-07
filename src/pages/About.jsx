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
        <div className="pt-20 min-h-screen px-4 sm:px-6 lg:px-12 py-16 sm:py-24 lg:py-32 fade-in relative bg-[#0A0A0A] text-white">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-64 sm:w-96 lg:w-[500px] h-64 sm:h-96 lg:h-[500px] bg-[#FF6B35]/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="mb-12 sm:mb-16 lg:mb-20 text-center">
                    <div className="text-xs sm:text-sm font-bold tracking-widest text-[#FF6B35] mb-3 sm:mb-4 mt-12 sm:mt-16 lg:mt-20">ABOUT US</div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-6 sm:mb-8">Who We Are</h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
                        A modern web agency focused on building digital products that combine beautiful design with powerful functionality.
                    </p>
                </div>

                {/* Mission & Vision */}
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
                    <div className="group relative bg-gradient-to-br from-[#FF6B35]/10 to-transparent border border-[#FF6B35]/30 p-8 sm:p-10 lg:p-12 hover:border-[#FF6B35]/50 transition-all">
                        <div className="absolute top-4 sm:top-6 right-4 sm:right-6 text-5xl sm:text-6xl lg:text-7xl font-black text-[#FF6B35]/10">01</div>
                        <div className="relative z-10">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-4 sm:mb-6 text-[#FF6B35]">Our Mission</h2>
                            <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                                To empower businesses with cutting-edge web solutions that drive growth, engagement, and success. We believe technology should be accessible, intuitive, and impactful.
                            </p>
                        </div>
                    </div>

                    <div className="group relative bg-gradient-to-br from-white/5 to-transparent border border-white/10 p-8 sm:p-10 lg:p-12 hover:border-[#FF6B35]/30 transition-all">
                        <div className="absolute top-4 sm:top-6 right-4 sm:right-6 text-5xl sm:text-6xl lg:text-7xl font-black text-white/5">02</div>
                        <div className="relative z-10">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-4 sm:mb-6">Our Vision</h2>
                            <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                                To become the go-to partner for businesses seeking exceptional digital experiences—where innovation meets reliability and creativity meets code.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Values */}
                <div className="mb-12 sm:mb-16 lg:mb-20">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-8 sm:mb-12 text-center">What Drives Us</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        {values.map((value, i) => (
                            <div
                                key={i}
                                className="bg-white/5 border border-white/10 p-6 sm:p-8 hover:bg-white/10 hover:border-[#FF6B35]/30 transition-all group"
                            >
                                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#FF6B35]/10 flex items-center justify-center text-[#FF6B35] mb-4 sm:mb-6 group-hover:bg-[#FF6B35]/20 group-hover:scale-110 transition-all">
                                    {value.icon}
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{value.title}</h3>
                                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats */}
                <div className="bg-gradient-to-r from-[#FF6B35]/10 via-[#FF6B35]/5 to-transparent border border-[#FF6B35]/30 p-8 sm:p-12 lg:p-16 rounded-2xl">
                    <h2 className="text-2xl sm:text-3xl font-black mb-8 sm:mb-12 text-center">Our Impact</h2>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
                        {[
                            { num: '100+', label: 'Projects Delivered', icon: <Briefcase /> },
                            { num: '50+', label: 'Clients Worldwide', icon: <Users /> },
                            { num: '5+', label: 'Years of Experience', icon: <Award /> },
                            { num: '24/7', label: 'Dedicated Support', icon: <Headphones /> },
                        ].map((stat, i) => (
                            <div key={i} className="text-center group hover:scale-105 transition-transform">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mb-4 sm:mb-6 mx-auto flex items-center justify-center border border-[#FF8555]/40 text-[#FF8555]">
                                    {React.cloneElement(stat.icon, {
                                        className: 'w-5 h-5 sm:w-6 sm:h-6',
                                    })}
                                </div>
                                <div className="text-3xl sm:text-4xl lg:text-5xl font-black mb-1 sm:mb-2 bg-gradient-to-r from-[#FF6B35] to-[#FF8555] bg-clip-text text-transparent">
                                    {stat.num}
                                </div>
                                <div className="text-gray-400 text-xs sm:text-sm tracking-wide px-2">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}