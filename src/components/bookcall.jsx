import { ArrowRight, Check, Sparkles } from "lucide-react";
export default function BookCallPage() {
    return (
        <div className="pt-20 min-h-screen flex items-center justify-center px-6 py-32 fade-in">
            <div className="max-w-3xl w-full text-center">
                <div className="w-20 h-20 bg-[#FF6B35] flex items-center justify-center mx-auto mb-8 mt-20">
                    <Sparkles className="w-10 h-10" />
                </div>

                <h1 className="text-5xl lg:text-7xl font-black mb-8">Book a Call</h1>
                <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto">
                    Choose a time that works for you. Google Meet link will be sent to your email.
                </p>

                <div className="bg-white/5 border border-white/10 p-12 mb-12">
                    <h3 className="text-2xl font-bold mb-8">What to Expect</h3>
                    <div className="grid md:grid-cols-2 gap-6 text-left">
                        {[
                            '30-minute consultation',
                            'Project goals discussion',
                            'Timeline estimation',
                            'Custom recommendations',
                            'Q&A session'
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-[#FF6B35] flex-shrink-0" />
                                <span className="text-gray-300">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <a
                    href="https://calendly.com/muhammadimrank034/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-white text-black px-12 py-6 text-sm font-bold tracking-wide hover:bg-gray-200 transition-all group"
                >
                    SCHEDULE NOW
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
            </div>
        </div>
    );
}
