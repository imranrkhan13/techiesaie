import { Github, Code, Briefcase, Rocket, Cog } from 'lucide-react';
import { useNavigate } from "react-router-dom";

export default function ServicesPage() {
    const navigate = useNavigate();

    const services = [
        {
            id: 'wordpress',
            icon: <Briefcase className="w-10 h-10" />,
            title: 'WordPress Development',
            description: 'Fast, SEO-optimized WordPress sites',
            price: '$2,500+'
        },
        {
            id: 'small-scale',
            icon: <Rocket className="w-10 h-10" />,
            title: 'Small Scale Sites',
            description: 'Perfect for startups and small businesses',
            price: '$800+'
        },
        {
            id: 'custom',
            icon: <Code className="w-10 h-10" />,
            title: 'Custom Applications',
            description: 'React, Next.js, full-stack solutions',
            price: '$5,000+'
        },
        {
            id: 'automation',
            icon: <Cog className="w-10 h-10" />,
            title: 'Automation Solutions',
            description: 'Save time with intelligent workflows',
            price: '$1,500+'
        }
    ];

    return (
        <div className="pt-20 min-h-screen px-6 lg:px-12 py-32 fade-in">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <div className="text-sm font-bold tracking-widest text-[#FF6B35] mb-4 mt-20">OUR SERVICES</div>
                    <h1 className="text-5xl lg:text-7xl font-black mb-6">What We Offer</h1>
                    <p className="text-xl text-gray-400 max-w-2xl">
                        End-to-end digital solutions tailored to your needs
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="bg-white/5 border border-white/10 p-12 hover:bg-white/10 hover:border-white/20 transition-all hover-lift group"
                        >
                            <div className="text-[#FF6B35] mb-6 group-hover:scale-110 transition-transform">
                                {service.icon}
                            </div>
                            <h3 className="text-3xl font-bold mb-3">{service.title}</h3>
                            <p className="text-gray-400 mb-6 text-lg">{service.description}</p>
                            <div className="flex items-center justify-between">
                                <span className="text-2xl font-bold">{service.price}</span>


                                <button
                                    onClick={() => navigate(`/services/${service.id}`)}
                                    className="text-sm font-bold tracking-wide hover:text-[#FF6B35] transition-colors"
                                >
                                    LEARN MORE →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <button
                        onClick={() => navigate('/book-call')}
                        className="bg-white text-black px-10 py-5 text-sm font-bold tracking-wide hover:bg-gray-200 transition-all"
                    >
                        SCHEDULE CONSULTATION
                    </button>
                </div>
            </div>
        </div>
    );
}