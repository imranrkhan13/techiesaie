import { Check, ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

export default function ServiceDetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    // Mapping of data based on the original IDs
    const service = {
        title: "Architecture & Design",
        pricing: "$2,500+",
        description: "A comprehensive deep-dive into your digital infrastructure, ensuring every touchpoint is optimized for conversion and brand authority.",
        features: ["Bespoke Visual Identity", "High-Performance Code", "SEO & Speed Strategy", "24/7 Priority Support"]
    };

    return (
        <div className="min-h-screen bg-[#FFF5F0] text-[#4A3835] font-['Poppins']">
            {/* Split Header */}
            <div className="grid lg:grid-cols-2 min-h-[60vh]">
                <div className="bg-gradient-to-br from-[#FFEBE3] to-[#FFE0D4] p-12 lg:p-24 flex flex-col justify-center">
                    <button onClick={() => navigate('/services')} className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase mb-12 opacity-60 hover:opacity-100 transition-opacity">
                        <ArrowLeft size={14} /> Back to Catalog
                    </button>
                    <h1 className="text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
                        {service.title}
                    </h1>
                    <div className="text-4xl font-light italic text-[#C97A63]">Starting at {service.pricing}</div>
                </div>

                <div className="p-12 lg:p-24 flex flex-col justify-center border-l border-[#4A3835]/5">
                    <p className="text-2xl leading-relaxed opacity-80 font-medium mb-12">
                        {service.description}
                    </p>

                    <div className="space-y-6">
                        {service.features.map((feat, i) => (
                            <div key={i} className="flex items-center gap-4 py-4 border-b border-[#4A3835]/10">
                                <div className="w-2 h-2 rounded-full bg-[#C97A63]" />
                                <span className="text-sm font-bold uppercase tracking-wider">{feat}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Call to Action */}
            <div className="py-32 px-6 text-center">
                <button
                    onClick={() => navigate('/book-call')}
                    className="group relative inline-flex items-center gap-6 bg-[#4A3835] text-white px-16 py-8 text-xs font-bold tracking-[0.3em] uppercase overflow-hidden"
                >
                    <span className="relative z-10">Initiate Project</span>
                    <ArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform" />
                    <div className="absolute inset-0 bg-[#C97A63] -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                </button>
            </div>
        </div>
    );
}