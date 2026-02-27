import { Service } from "../../types";

interface ServiceModalProps {
    service: Service;
    setSelectedService: (service: Service | null) => void;
}

export default function ServiceModal({ service, setSelectedService }: ServiceModalProps) {
    return (
        <div className="fixed inset-0 z-120 flex items-center justify-center px-4 animate-fade-in">
            <div
                className="absolute inset-0 bg-brand-primary/60 backdrop-blur-sm"
                onClick={() => setSelectedService(null)}
            ></div>
            <div className="relative bg-white w-full max-w-lg p-8 rounded-4xl shadow-2xl animate-scale-up">
                <button
                    onClick={() => setSelectedService(null)}
                    className="absolute top-4 right-4 p-2 text-brand-text-1 hover:text-brand-primary hover:bg-brand-text-2/20 rounded-full transition-colors"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="w-20 h-20 bg-brand-sec/20 rounded-3xl flex items-center justify-center mb-6 shadow-sm mx-auto text-brand-sec">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {service.icon}
                    </svg>
                </div>
                <h2 className="text-3xl font-extrabold text-brand-primary mb-4 text-center">
                    {service.title}
                </h2>
                <div className="bg-brand-bg rounded-2xl p-6 border border-brand-text-2/10">
                    <p className="text-brand-text-1 text-lg leading-relaxed text-center mb-6">
                        {service.fullDesc}
                    </p>
                    <button
                        onClick={() => {
                            setSelectedService(null);
                            setTimeout(() => {
                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            }, 100);
                        }}
                        className="w-full bg-brand-primary hover:bg-brand-sec text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-brand-primary/20 transform transition-transform hover:-translate-y-1"
                    >
                        Get a Quote
                    </button>
                </div>
            </div>
        </div>
    );
}
