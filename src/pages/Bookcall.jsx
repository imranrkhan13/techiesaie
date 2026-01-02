import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Check, Calendar, ArrowRight } from 'lucide-react';

export default function ContactPage({ setCurrentPage }) {
    const formRef = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); 

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        emailjs.sendForm(
            'service_f63dj77',
            'template_iqrd90a',
            formRef.current,
            '861OzFpPPwDoOR_ed'
        )
            .then(() => {
                setSubmitStatus('success');
                setIsSubmitting(false);
                formRef.current.reset();

                setTimeout(() => {
                    setSubmitStatus(null);
                }, 5000);
            })
            .catch((error) => {
                console.error(error);
                setSubmitStatus('error');
                setIsSubmitting(false);

                setTimeout(() => {
                    setSubmitStatus(null);
                }, 5000);
            });
    };

    return (
        <div className="pt-20 min-h-screen px-6 lg:px-12 py-32 fade-in relative">
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#FF6B35]/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-16 text-center">
                    <div className="text-sm font-bold tracking-widest text-[#FF6B35] mb-4 mt-10">
                        GET IN TOUCH
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-black mb-6">Let's Talk</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Have a project in mind? Choose how you'd like to connect with us.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 mb-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-8">Contact Information</h2>

                        <div className="space-y-6 mb-12">
                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 rounded-xl bg-[#FF6B35]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF6B35]/20 transition-all">
                                    <Mail className="w-6 h-6 text-[#FF6B35]" />
                                </div>
                                <div>
                                    <div className="font-bold text-lg mb-1">EMAIL</div>
                                    <a href="mailto:muhammadimrank034@gmail.com" className="text-gray-400 hover:text-[#FF6B35] transition-colors">
                                        muhammadimrank034@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 rounded-xl bg-[#FF6B35]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF6B35]/20 transition-all">
                                    <Phone className="w-6 h-6 text-[#FF6B35]" />
                                </div>
                                <div>
                                    <div className="font-bold text-lg mb-1">PHONE</div>
                                    <div className="text-gray-400">+91 XXXXX XXXXX</div>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 rounded-xl bg-[#FF6B35]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF6B35]/20 transition-all">
                                    <MapPin className="w-6 h-6 text-[#FF6B35]" />
                                </div>
                                <div>
                                    <div className="font-bold text-lg mb-1">LOCATION</div>
                                    <div className="text-gray-400">Mumbai, Maharashtra</div>
                                </div>
                            </div>
                        </div>

                        {/* Prefer Calling CTA */}
                        <div className="bg-gradient-to-br from-[#FF6B35]/10 to-transparent border border-[#FF6B35]/30 p-8 rounded-xl">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-12 h-12 rounded-lg bg-[#FF6B35] flex items-center justify-center flex-shrink-0">
                                    <Calendar className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Prefer a Call?</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Schedule a free 30-minute consultation. We'll discuss your project goals, timeline, and answer all your questions.
                                    </p>
                                </div>
                            </div>

                            <button
                                onClick={() => setCurrentPage('bookcall')}
                                className="w-full bg-[#FF6B35] text-white px-6 py-4 rounded-lg font-bold hover:bg-[#FF8555] transition-all group"
                            >
                                <span className="flex items-center justify-center gap-2">
                                    SCHEDULE A CALL
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* RIGHT - Form */}
                    <div className="bg-white/5 border border-white/10 p-10 rounded-xl relative">
                        <h3 className="text-2xl font-bold mb-8">Send us a Message</h3>

                        {/* Success Message */}
                        {submitStatus === 'success' && (
                            <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <Check className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                    <div className="font-bold text-green-400 mb-1">Message Sent Successfully!</div>
                                    <div className="text-sm text-gray-400">
                                        We've received your message and will get back to you within 24 hours.
                                    </div>
                                </div>
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-white text-sm">✕</span>
                                </div>
                                <div>
                                    <div className="font-bold text-red-400 mb-1">Failed to Send Message</div>
                                    <div className="text-sm text-gray-400">
                                        Something went wrong. Please try again or contact us directly via email.
                                    </div>
                                </div>
                            </div>
                        )}

                        <div ref={formRef}>
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-bold mb-2 text-gray-300">NAME</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your name"
                                        required
                                        disabled={isSubmitting}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 outline-none focus:border-[#FF6B35] transition-colors disabled:opacity-50"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold mb-2 text-gray-300">EMAIL</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="your@email.com"
                                        required
                                        disabled={isSubmitting}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 outline-none focus:border-[#FF6B35] transition-colors disabled:opacity-50"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold mb-2 text-gray-300">MESSAGE</label>
                                    <textarea
                                        name="message"
                                        rows="5"
                                        placeholder="Tell us about your project..."
                                        required
                                        disabled={isSubmitting}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 outline-none focus:border-[#FF6B35] transition-colors resize-none disabled:opacity-50"
                                    />
                                </div>

                                <button
                                    type="button"
                                    onClick={sendEmail}
                                    disabled={isSubmitting}
                                    className="w-full bg-white text-black py-5 rounded-lg font-bold hover:bg-gray-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                                </button>
                            </div>
                        </div>

                        <p className="text-center text-sm text-gray-500 mt-6">
                            We typically respond within 24 hours
                        </p>
                    </div>
                </div>

                {/* Bottom Info */}
                <div className="text-center">
                    <p className="text-gray-400 text-sm">
                        Available Monday - Friday, 9:00 AM - 6:00 PM IST
                    </p>
                </div>
            </div>
        </div>
    );

}