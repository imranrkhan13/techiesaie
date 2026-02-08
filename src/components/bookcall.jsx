import { useRef, useState, useEffect } from 'react';
import { Send, Sparkles, ArrowUpRight, Fingerprint, Zap } from 'lucide-react';
import Cal, { getCalApi } from "@calcom/embed-react";

export default function ContactPage() {
    const formRef = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [focusedField, setFocusedField] = useState(null);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "30min" });
            cal("ui", {
                "theme": "light",
                "cssVarsPerTheme": { "light": { "cal-brand": "#C97A63" } },
                "hideEventTypeDetails": true,
                "layout": "month_view"
            });
        })();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSuccess(false);

        const formData = new FormData(e.target);

        try {
            const response = await fetch("/", {
                method: "POST",
                body: new URLSearchParams(formData).toString(),
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            e.target.reset();
            setFocusedField(null);
            setSuccess(true);
        } catch (err) {
            console.error(err);
            alert("Submission failed. Try again.");
        } finally {
            setIsSubmitting(false);
        }
    };


    
    return (
        <div className="min-h-screen w-full bg-[#FAF5F0] text-[#4A3835] font-['Poppins'] p-4 md:p-10 lg:pt-32">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 items-start">

                {/* LEFT: THE INTERACTIVE ANIMATED FORM CARD */}
                <section className="w-full lg:w-[400px] shrink-0 lg:sticky lg:top-32">
                    <div className={`relative transition-all duration-500 rounded-[2.5rem] p-1 shadow-2xl ${focusedField ? 'bg-gradient-to-br from-[#C97A63] to-[#4A3835]' : 'bg-transparent'}`}>
                        <div className="bg-[#1A1615] rounded-[2.4rem] p-10 text-white relative overflow-hidden">

                            {/* Animated Background Element */}
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-[#C97A63] rounded-full blur-[60px] transition-opacity duration-700 ${focusedField ? 'opacity-30' : 'opacity-10'}`} />

                            {/* Scanning Light Effect */}
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C97A63]/40 to-transparent animate-scan" />

                            <header className="mb-10 relative z-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`h-[2px] bg-[#C97A63] transition-all duration-500 ${focusedField ? 'w-12' : 'w-6'}`} />
                                    <Fingerprint size={18} className={`transition-all duration-500 ${focusedField ? 'text-[#C97A63] opacity-100' : 'text-white/20'}`} />
                                </div>
                                <h1 className="text-4xl font-black tracking-tighter leading-none mb-2">
                                    BUILD <br />
                                    <span className="text-[#C97A63] italic font-light lowercase">your edge.</span>
                                </h1>
                                <p className="text-[9px] font-bold tracking-[0.4em] uppercase text-white/30">Secure Transmission</p>
                            </header>

                            <form
                                name="contact"
                                method="POST"
                                data-netlify="true"
                                netlify-honeypot="bot-field"
                                ref={formRef}
                                onSubmit={handleSubmit}
                                className="space-y-8 relative z-10"
                                >
                                {/* Netlify required hidden inputs */}
                                <input type="hidden" name="form-name" value="contact" />
                                <input type="hidden" name="bot-field" />

                                <div className="space-y-7">
                                    {/* Name Input */}
                                    <div className="relative group">
                                        <input
                                            required
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder=" "
                                            onFocus={() => setFocusedField('name')}
                                            onBlur={() => setFocusedField(null)}
                                            className="peer w-full bg-transparent border-b border-white/10 py-2 outline-none text-sm transition-all focus:border-[#C97A63]"
                                        />

                                        <label htmlFor="name" className="absolute left-0 top-2 text-white/20 text-xs uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[#C97A63] peer-focus:font-bold peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px]">
                                            Full Name
                                        </label>
                                        <div className="absolute bottom-0 left-0 h-[1px] bg-[#C97A63] w-0 peer-focus:w-full transition-all duration-500" />
                                    </div>

                                    {/* Email Input */}
                                    <div className="relative group">
                                        <input
                                            required
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder=" "
                                            onFocus={() => setFocusedField('email')}
                                            onBlur={() => setFocusedField(null)}
                                            className="peer w-full bg-transparent border-b border-white/10 py-2 outline-none text-sm transition-all focus:border-[#C97A63]"
                                        />

                                        <label htmlFor="email" className="absolute left-0 top-2 text-white/20 text-xs uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[#C97A63] peer-focus:font-bold peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px]">
                                            Email Address
                                        </label>
                                        <div className="absolute bottom-0 left-0 h-[1px] bg-[#C97A63] w-0 peer-focus:w-full transition-all duration-500" />
                                    </div>

                                    {/* Message Input */}
                                    <div className="relative group">
                                        <textarea
                                            required
                                            rows="2"
                                            id="msg"
                                            name="message"
                                            placeholder=" "
                                            onFocus={() => setFocusedField('msg')}
                                            onBlur={() => setFocusedField(null)}
                                            className="peer w-full bg-transparent border-b border-white/10 py-2 outline-none text-sm transition-all focus:border-[#C97A63] resize-none"
                                        />

                                        <label htmlFor="msg" className="absolute left-0 top-2 text-white/20 text-xs uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[#C97A63] peer-focus:font-bold peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px]">
                                            Project Brief
                                        </label>
                                        <div className="absolute bottom-0 left-0 h-[1px] bg-[#C97A63] w-0 peer-focus:w-full transition-all duration-500" />
                                    </div>
                                </div>

                                <button className={`group relative w-full rounded-2xl py-5 transition-all duration-500 overflow-hidden shadow-xl
                                    ${isSubmitting ? 'bg-[#C97A63]' : 'bg-white hover:bg-[#C97A63]'}`}
                                    >
                                    <span className={`relative z-10 text-[10px] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-3 transition-colors duration-300
                                        ${isSubmitting ? 'text-white' : 'text-[#1A1615] group-hover:text-white'}`}>
                                        {isSubmitting ? "TRANSMITTING..." : "INITIALIZE SYNC"}
                                        <Zap size={14} className={`${isSubmitting ? 'animate-pulse' : 'group-hover:rotate-12 transition-transform'}`} fill="currentColor" />
                                        {success && (
                                            <p className="text-[#C97A63] text-[10px] tracking-widest text-center">
                                                Transmission successful.
                                            </p>
                                        )}

                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>
                </section>

                {/* RIGHT: CALENDAR (UNCHANGED) */}
                <section className="flex-1 w-full bg-white rounded-[2.5rem] shadow-sm border border-[#4A3835]/5 overflow-hidden">
                    <div className="px-8 py-6 border-b border-[#4A3835]/5 flex items-center justify-between bg-white/50 backdrop-blur-sm">
                        <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-[#4A3835]">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#C97A63] animate-pulse" />
                            Schedule a Call
                        </div>
                        <Sparkles size={16} className="text-[#C97A63] opacity-30" />
                    </div>
                    <div className="h-[600px] overflow-y-auto scrollbar-hide">
                        <div className="p-2 md:p-6">
                            <Cal
                                namespace="30min"
                                calLink="imran-khan-aywnsj/30min"
                                style={{ width: "100%", height: "100%" }}
                                config={{ "layout": "month_view", "useSlotsViewOnSmallScreen": "true", "theme": "light" }}
                            />
                        </div>
                    </div>
                </section>
            </div>

            <style jsx global>{`
            
                @keyframes scan {
                    0% { top: 0; opacity: 0; }
                    50% { opacity: 1; }
                    100% { top: 100%; opacity: 0; }
                }
                .animate-scan { animation: scan 4s linear infinite; }
                .scrollbar-hide::-webkit-scrollbar { display: none; }
                .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
                .scrollbar-hide iframe { margin-top: 15px !important; min-height: 550px !important; }
                @media (max-width: 1024px) { .lg\:sticky { position: relative !important; top: 0 !important; } }
            `}</style>
        </div>
    );
}