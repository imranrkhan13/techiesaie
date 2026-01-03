import { ExternalLink, ArrowRight } from "lucide-react";

export default function TemplatesSection() {
    const templates = [
        {
            name: 'FoodExpress',
            category: 'Food Delivery',
            image: '🍔',
            live: 'https://foodexpress-0v7b.onrender.com/',
            features: ['Real-time tracking', 'Payment integration', 'Admin dashboard']
        },
        {
            name: 'Career Garden',
            category: 'Career Platform',
            image: '🌱',
            live: 'https://career-garden.netlify.app/',
            features: ['Job management', 'User profiles', 'Analytics']
        },
        {
            name: 'WikiReels',
            category: 'Educational',
            image: '🎥',
            live: 'https://wikireels.netlify.app/',
            features: ['Video content', 'Interactive UI', 'Responsive design']
        }
    ];

    return (
        <div className="pt-20 min-h-screen px-4 sm:px-6 lg:px-12 py-16 sm:py-24 lg:py-32 fade-in relative">
            {/* Background decoration */}
            <div className="absolute top-1/4 right-0 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-[#FF6B35]/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="mb-12 sm:mb-16 lg:mb-20 mt-8 sm:mt-12 lg:mt-20">
                    <div className="text-xs sm:text-sm font-bold tracking-widest text-[#FF6B35] mb-3 sm:mb-4">
                        LIVE PROJECTS
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-4 sm:mb-6">
                        Our Work
                    </h1>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl">
                        Explore real projects we've built—fully functional, deployed, and making an impact.
                    </p>
                </div>

                {/* Projects List */}
                <div className="space-y-8 sm:space-y-10 lg:space-y-12">
                    {templates.map((template, i) => (
                        <div
                            key={i}
                            className="group relative bg-white/5 border border-white/10 hover:border-[#FF6B35]/50 transition-all duration-500 overflow-hidden rounded-xl"
                        >
                            <div className="grid lg:grid-cols-2 gap-0">
                                {/* Content Side */}
                                <div className="p-6 sm:p-8 md:p-10 lg:p-16 flex flex-col justify-center order-2 lg:order-1">
                                    <div className="text-xs sm:text-sm font-bold tracking-widest text-[#FF6B35] mb-3 sm:mb-4">
                                        {template.category.toUpperCase()}
                                    </div>

                                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 group-hover:text-[#FF6B35] transition-colors">
                                        {template.name}
                                    </h3>

                                    <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                                        {template.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-400">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B35] flex-shrink-0"></div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                        <a
                                            href={template.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center gap-2 bg-[#FF6B35] text-white px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-bold tracking-wide hover:bg-[#FF8555] transition-all group/btn rounded-lg"
                                        >
                                            VIEW LIVE SITE
                                            <ExternalLink className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                                        </a>
                                        <button className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-bold tracking-wide hover:border-[#FF6B35] hover:text-[#FF6B35] transition-all rounded-lg">
                                            CASE STUDY
                                            <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>

                                {/* Preview Side */}
                                <div className="relative bg-gradient-to-br from-white/10 to-white/5 p-6 sm:p-8 md:p-10 lg:p-16 flex items-center justify-center min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[500px] order-1 lg:order-2">
                                    {/* Browser mockup */}
                                    <div className="relative w-full max-w-sm md:max-w-md">
                                        {/* Browser bar */}
                                        <div className="bg-white/10 rounded-t-lg sm:rounded-t-xl p-2 sm:p-3 flex items-center gap-2">
                                            <div className="flex gap-1 sm:gap-1.5">
                                                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                                                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                                                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                                            </div>
                                            <div className="flex-1 bg-white/5 rounded px-2 sm:px-3 py-1 text-[10px] sm:text-xs text-gray-500 truncate">
                                                {template.live}
                                            </div>
                                        </div>

                                        {/* Preview content */}
                                        <div className="bg-white/5 rounded-b-lg sm:rounded-b-xl p-6 sm:p-8 border-2 border-white/10 group-hover:border-[#FF6B35]/30 transition-colors">
                                            <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-500">
                                                {template.image}
                                            </div>
                                            <div className="space-y-2 sm:space-y-3">
                                                <div className="h-2 sm:h-3 bg-white/10 rounded w-3/4"></div>
                                                <div className="h-2 sm:h-3 bg-white/10 rounded w-full"></div>
                                                <div className="h-2 sm:h-3 bg-white/10 rounded w-2/3"></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Decorative glow */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/0 to-[#FF6B35]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA - Optional */}
                {/* <div className="mt-12 sm:mt-16 lg:mt-20 text-center bg-white/5 border border-white/10 p-8 sm:p-12 lg:p-16 rounded-xl sm:rounded-2xl">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
                        Ready to start your project?
                    </h3>
                    <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto">
                        We build custom solutions tailored to your specific needs and goals.
                    </p>
                    <button className="bg-[#FF6B35] text-white px-8 sm:px-10 lg:px-12 py-4 sm:py-5 text-xs sm:text-sm font-bold tracking-wide hover:bg-[#FF8555] transition-all group rounded-lg">
                        <span className="flex items-center justify-center gap-2 sm:gap-3">
                            START YOUR PROJECT
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </button>
                </div> */}
            </div>
        </div>
    );
}