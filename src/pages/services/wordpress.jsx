import { Star, Code, Zap, Shield, TrendingUp, Users, Award, Sparkles, ArrowRight, ExternalLink, Github } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
export default function WordPress({ setCurrentPage }) {
    return (
        <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 px-4 sm:px-6 py-12 sm:py-20">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-12">
                    <h1 className="text-3xl sm:text-5xl font-bold mb-6 text-gray-900">WordPress Development</h1>
                    <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed">
                        We build fast, secure, and SEO-friendly WordPress websites tailored for businesses that want results. Our WordPress solutions combine beautiful design with powerful functionality.
                    </p>

                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold mb-4 text-gray-900">What's Included</h3>
                        <ul className="space-y-4 text-gray-700 text-lg">
                            {[
                                "Custom WordPress theme development",
                                "Plugin integration and customization",
                                "Performance optimization and caching",
                                "SEO setup and optimization",
                                "Mobile-responsive design",
                                "Security hardening and backups",
                                "WooCommerce for e-commerce",
                                "Training and documentation"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl mb-8">
                        <h3 className="text-xl font-semibold mb-3 text-gray-900">Pricing</h3>
                        <p className="text-gray-700 mb-2">Starting at <span className="text-2xl font-bold text-indigo-600">$2,500</span></p>
                        <p className="text-sm text-gray-600">*Final price depends on project complexity and requirements</p>
                    </div>

                    <button
                        onClick={() => setCurrentPage('book-call')}
                        className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-4 rounded-lg hover:shadow-xl transition-all font-medium text-lg w-full sm:w-auto"
                    >
                        Book a Consultation
                    </button>
                </div>
            </div>
        </div>
    );
}