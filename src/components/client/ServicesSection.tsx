import { SERVICES } from "../../data/mockData";
import { Service } from "../../types";

export default function ServicesSection({ onSelectService }: { onSelectService: (service: Service) => void }) {
    return (
        <section id="services" className="py-24 bg-brand-primary relative">
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-[50px] w-full" style={{ fill: 'var(--color-brand-bg)' }}>
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                </svg>
            </div>
            <div className="max-w-7xl mx-auto px-6 mt-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-brand-text-3 mb-4">Mastering T-Shirt Sublimation</h2>
                    <p className="text-brand-text-2 max-w-2xl mx-auto text-lg">From personal projects to full team apparel, we create fade-defying prints using state-of-the-art sublimation technology.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {SERVICES.map((service, i) => (
                        <div key={i} className="group bg-brand-text-3/5 border border-brand-text-2/10 p-8 rounded-2xl hover:bg-brand-text-3/10 hover:shadow-xl hover:shadow-brand-sec/20 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
                            <div className="w-14 h-14 bg-brand-sec/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-sec transition-all shadow-sm text-brand-sec group-hover:text-brand-text-3">
                                <svg className="w-7 h-7 text-brand-sec group-hover:text-brand-text-3 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    {service.icon}
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-brand-text-3 mb-3">{service.title}</h3>
                            <p className="text-brand-text-2 leading-relaxed mb-6">{service.desc}</p>
                            <button
                                onClick={() => onSelectService(service)}
                                className="inline-flex items-center font-medium text-brand-sec hover:text-brand-text-3 transition-colors outline-none cursor-pointer">
                                Learn more
                                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
