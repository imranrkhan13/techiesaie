import { Check, ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
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
            <div className="pt-20 min-h-screen flex items-center justify-center px-4 sm:px-6">
                <div className="text-center">
                    <p className="text-xl sm:text-2xl mb-4 sm:mb-6">Service not found</p>
                    <button
                        onClick={() => navigate('/services')}
                        className="bg-white text-black px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-bold tracking-wide rounded-lg hover:bg-gray-200 transition-all"
                    >
                        BACK TO SERVICES
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-20 min-h-screen px-4 sm:px-6 lg:px-12 py-16 sm:py-24 lg:py-32 fade-in">
            <div className="max-w-5xl mx-auto">
                {/* Back Button */}
                <button
                    onClick={() => navigate('/services')}
                    className="text-gray-400 hover:text-[#FF6B35] mb-8 sm:mb-10 lg:mb-12 flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wide transition-colors group mt-6 sm:mt-0"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    BACK TO SERVICES
                </button>

                {/* Title & Description */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-4 sm:mb-6 lg:mb-8">
                    {service.title}
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-gray-400 mb-10 sm:mb-12 lg:mb-16 leading-relaxed">
                    {service.description}
                </p>

                {/* Features Section */}
                <div className="bg-white/5 border border-white/10 p-6 sm:p-8 lg:p-12 mb-8 sm:mb-10 lg:mb-12 rounded-xl">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">What's Included</h3>
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                        {service.features.map((feature, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF6B35] flex-shrink-0 mt-0.5" />
                                <span className="text-sm sm:text-base text-gray-300">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pricing Section */}
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8555] p-6 sm:p-8 lg:p-12 mb-8 sm:mb-10 lg:mb-12 rounded-xl">
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
                        <div>
                            <div className="text-xs sm:text-sm font-bold tracking-widest mb-2">STARTING AT</div>
                            <div className="text-4xl sm:text-5xl lg:text-6xl font-black">{service.pricing}</div>
                            <p className="text-xs sm:text-sm opacity-90 mt-2">*Final price depends on project scope</p>
                        </div>
                        <button
                            onClick={() => navigate('/book-call')}
                            className="bg-black text-white px-8 sm:px-10 py-4 sm:py-5 text-xs sm:text-sm font-bold tracking-wide hover:bg-gray-900 transition-all rounded-lg whitespace-nowrap"
                        >
                            BOOK CONSULTATION
                        </button>
                    </div>
                </div>

                {/* Additional Info Cards */}
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-xl">
                        <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Quick Turnaround</h4>
                        <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                            Most projects completed within 2-4 weeks, depending on complexity and requirements.
                        </p>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-xl">
                        <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Ongoing Support</h4>
                        <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                            Post-launch support included. We're here to help you succeed with your project.
                        </p>
                    </div>
                </div>

                {/* CTA at bottom */}
                {/* <div className="mt-12 sm:mt-16 text-center">
                    <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
                        Have questions about this service?
                    </p>
                    <button
                        onClick={() => navigate('/contact')}
                        className="border-2 border-white/20 text-white px-8 sm:px-10 py-3 sm:py-4 text-xs sm:text-sm font-bold tracking-wide hover:border-[#FF6B35] hover:text-[#FF6B35] transition-all rounded-lg"
                    >
                        CONTACT US
                    </button>
                </div> */}
            </div>
        </div>
    );
}