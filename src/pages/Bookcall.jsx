import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Check, ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ContactPage() {
    const navigate = useNavigate();
    const formRef = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    // Helper to encode form data for Netlify
    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        const formData = new FormData(formRef.current);
        const data = Object.fromEntries(formData);

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...data })
        })
            .then(() => {
                setSubmitStatus('success');
                setIsSubmitting(false);
                formRef.current.reset();
                setTimeout(() => setSubmitStatus(null), 5000);
            })
            .catch((error) => {
                console.error(error);
                setSubmitStatus('error');
                setIsSubmitting(false);
                setTimeout(() => setSubmitStatus(null), 5000);
            });
    };

    return (
        <div className="pt-20 min-h-screen px-6 lg:px-20 py-32 bg-[#FFF5F0] text-[#4A3835] font-['Poppins']">
            <div className="max-w-7xl mx-auto">

                {/* 1. EDITORIAL HEADER */}
                <div className="grid lg:grid-cols-2 gap-20 mb-32 items-end">
                    <div>
                        <span className="text-[10px] font-bold tracking-[0.4em] uppercase opacity-60 mb-6 block">Get in Touch</span>
                        <h1 className="text-6xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tighter">
                            Let’s <br />
                            <span className="text-[#C97A63] italic">Connect.</span>
                        </h1>
                    </div>
                    <div className="pb-4">
                        <p className="text-xl opacity-70 font-medium leading-relaxed max-w-md">
                            Have a vision? We have the architecture. Reach out to discuss your next digital landmark.
                        </p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-20">

                    {/* 2. CONTACT INFO */}
                    <div className="lg:col-span-5 space-y-16">
                        <div className="space-y-12">
                            <div className="group">
                                <div className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40 mb-4 flex items-center gap-2">
                                    <Mail size={12} /> Email
                                </div>
                                <a href="mailto:muhammadimrank034@gmail.com" className="text-2xl font-bold hover:text-[#C97A63] transition-colors">
                                    muhammadimrank034@gmail.com
                                </a>
                            </div>

                            <div className="group">
                                <div className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40 mb-4 flex items-center gap-2">
                                    <Phone size={12} /> Phone
                                </div>
                                <div className="text-2xl font-bold">+91 7506190224</div>
                            </div>

                            <div className="group">
                                <div className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40 mb-4 flex items-center gap-2">
                                    <MapPin size={12} /> Studio Location
                                </div>
                                <div className="text-2xl font-bold">Mumbai, Maharashtra</div>
                            </div>
                        </div>

                        <div className="bg-[#4A3835] text-[#FFF5F0] p-10 rounded-sm relative overflow-hidden">
                            <Sparkles className="absolute -top-4 -right-4 w-24 h-24 opacity-10" />
                            <h3 className="text-2xl font-black uppercase tracking-tight mb-4">Prefer a direct talk?</h3>
                            <p className="text-sm opacity-70 mb-8 font-medium leading-relaxed">
                                Skip the form and schedule a 30-minute deep dive directly into our calendar.
                            </p>
                            <button
                                onClick={() => navigate('/book-call')}
                                className="flex items-center gap-4 text-[10px] font-bold tracking-[0.3em] uppercase text-[#C97A63] hover:text-white transition-colors"
                            >
                                Open Calendar <ArrowRight size={14} />
                            </button>
                        </div>
                    </div>

                    {/* 3. INQUIRY FORM */}
                    <div className="lg:col-span-7 bg-white p-10 lg:p-16 border border-[#4A3835]/5 shadow-sm">
                        <h3 className="text-3xl font-black uppercase tracking-tighter mb-10">Project Inquiry</h3>

                        {submitStatus === 'success' && (
                            <div className="mb-10 p-5 bg-[#C97A63]/10 border border-[#C97A63]/20 text-[#C97A63] text-sm font-bold flex items-center gap-3">
                                <Check size={18} /> MESSAGE TRANSMITTED SUCCESSFULLY
                            </div>
                        )}

                        {/* Note the attributes: 
                            - data-netlify="true"
                            - name="contact"
                        */}
                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className="space-y-8"
                            name="contact"
                            data-netlify="true"
                        >
                            {/* Hidden input required for Netlify + React/SPAs */}
                            <input type="hidden" name="form-name" value="contact" />

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="border-b border-[#4A3835]/20 py-2 focus-within:border-[#C97A63] transition-colors">
                                    <label className="block text-[10px] font-bold tracking-widest opacity-40 uppercase mb-2">Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        disabled={isSubmitting}
                                        className="w-full bg-transparent outline-none text-lg font-medium placeholder:opacity-20"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="border-b border-[#4A3835]/20 py-2 focus-within:border-[#C97A63] transition-colors">
                                    <label className="block text-[10px] font-bold tracking-widest opacity-40 uppercase mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        disabled={isSubmitting}
                                        className="w-full bg-transparent outline-none text-lg font-medium placeholder:opacity-20"
                                        placeholder="john@studio.com"
                                    />
                                </div>
                            </div>

                            <div className="border-b border-[#4A3835]/20 py-2 focus-within:border-[#C97A63] transition-colors">
                                <label className="block text-[10px] font-bold tracking-widest opacity-40 uppercase mb-2">Project Brief</label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    required
                                    disabled={isSubmitting}
                                    className="w-full bg-transparent outline-none text-lg font-medium resize-none placeholder:opacity-20"
                                    placeholder="Tell us about your digital goals..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-[#4A3835] text-[#FFF5F0] py-6 text-[11px] font-bold tracking-[0.4em] uppercase hover:bg-[#C97A63] transition-all disabled:opacity-50"
                            >
                                {isSubmitting ? 'Transmitting...' : 'Send Inquiry'}
                            </button>
                        </form>

                        <p className="mt-8 text-[10px] font-bold tracking-widest opacity-30 text-center uppercase">
                            Typical response time: 24 Hours
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}