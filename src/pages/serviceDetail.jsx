import { Check } from "lucide-react";
import { useParams, Link, useNavigate } from "react-router-dom";

export default function ServiceDetail() {
    const { id: serviceId } = useParams();
    const navigate = useNavigate();

    const servicesData = {
        
        wordpress: {
            id: 'wordpress',
            title: 'WordPress Development',
            description: 'Professional WordPress websites optimized for performance, SEO, and user experience.',
            features: [
                'Custom theme development',
                'Plugin integration',
                'Performance optimization',
                'SEO configuration',
                'Mobile-responsive design',
                'Security hardening',
                'WooCommerce integration',
                'Training & documentation'
            ],
            pricing: '$2,500+'
        },
        'small-scale': {
            title: 'Small Scale Websites',
            description: 'Affordable sites for startups and small businesses.',
            features: [
                'One-page websites',
                'Portfolio sites',
                'Local business pages',
                'Fast turnaround (5-7 days)',
                'Mobile-optimized',
                'Contact form integration',
                'Social media integration',
                'Basic SEO setup'
            ],
            pricing: '$800+'
        },
        custom: {
            title: 'Custom Web Applications',
            description: 'Fully custom applications built with cutting-edge tech.',
            features: [
                'React / Next.js / Vue.js',
                'Custom dashboards',
                'API development',
                'User authentication',
                'Database design',
                'Real-time features',
                'Payment integration',
                'Cloud deployment'
            ],
            pricing: '$5,000+'
        },
        automation: {
            title: 'Automation Solutions',
            description: 'Streamline operations with intelligent automation.',
            features: [
                'Email automation',
                'Form processing',
                'CRM automation',
                'Social media posting',
                'Invoice automation',
                'Report generation',
                'API integrations',
                'Custom workflows'
            ],
            pricing: '$1,500+'
        }
    };

    const service = servicesData[serviceId];

    if (!service) {
        return (
            <div className="pt-20 min-h-screen flex items-center justify-center px-6">
                <div className="text-center">
                    <p className="text-2xl mb-6">Service not found</p>
                    <Link
                        to= "/services"
                        className="bg-white text-black px-8 py-4 text-sm font-bold tracking-wide">
                        BACK TO SERVICES
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-20 min-h-screen px-6 lg:px-12 py-32 fade-in">
            <div className="max-w-5xl mx-auto">
                <button
                    onClick={() => navigate('/services')}
                    className="text-gray-400 hover:text-white mb-12 flex items-center gap-2 text-sm font-bold tracking-wide mt-10"
                >
                    ← BACK
                </button>

                <h1 className="text-5xl lg:text-7xl font-black mb-8">{service.title}</h1>
                <p className="text-xl text-gray-400 mb-16 leading-relaxed">{service.description}</p>

                <div className="bg-white/5 border border-white/10 p-12 mb-12">
                    <h3 className="text-3xl font-bold mb-8">What's Included</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {service.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-[#FF6B35] flex-shrink-0" />
                                <span className="text-gray-300">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-[#FF6B35] p-12 mb-12">
                    <div className="flex items-end justify-between">
                        <div>
                            <div className="text-sm font-bold tracking-widest mb-2">STARTING AT</div>
                            <div className="text-6xl font-black">{service.pricing}</div>
                        </div>
                        <button
                            onClick={() => navigate('/book-call')}
                            className="bg-black text-white px-10 py-5 text-sm font-bold tracking-wide hover:bg-gray-900 transition-all"
                        >
                            BOOK CONSULTATION
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}