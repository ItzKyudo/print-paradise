export default function HeroSection() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
                <div className="space-y-8 max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-sec/10 text-brand-sec font-medium text-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-sec opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-sec"></span>
                        </span>
                        Premium Sublimation Printing
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-extrabold text-brand-primary leading-[1.1] tracking-tight">
                        Bring your t-shirt designs to <span className="text-brand-sec relative whitespace-nowrap">
                            <span className="relative z-10">brilliant life</span>
                            <span className="absolute bottom-2 left-0 w-full h-4 bg-brand-text-2/40 z-0 -rotate-2"></span>
                        </span>.
                    </h1>
                    <p className="text-lg text-brand-text-1 leading-relaxed max-w-xl">
                        From vibrant full-color graphics to seamless all-over prints.
                        We deliver premium t-shirt sublimation with unmatched precision, rich colors, and prints that never fade or crack.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <a
                            href="#home"
                            onClick={() => {
                                setTimeout(() => {
                                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                                }, 100);
                            }}
                            className="bg-brand-primary hover:bg-opacity-90 text-brand-text-3 px-8 py-4 rounded-full font-semibold transition-all shadow-xl shadow-brand-primary/20 transform hover:-translate-y-1 flex items-center justify-center gap-2">
                            Explore Services
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                        <button className="bg-white border-2 border-brand-text-2 text-brand-primary hover:border-brand-sec hover:text-brand-sec px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center">
                            Get a Custom Quote
                        </button>
                    </div>
                </div>

                <div className="relative lg:h-[600px] flex items-center justify-center">
                    <div className="absolute inset-0 bg-linear-to-tr from-brand-sec/20 to-brand-primary/5 rounded-[3rem] transform rotate-3 scale-105 -z-10"></div>
                    <div className="absolute inset-0 bg-linear-to-bl from-brand-text-2/40 to-transparent rounded-[3rem] transform -rotate-2 scale-105 -z-10"></div>
                    <img
                        src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                        alt="Premium Printing"
                        className="rounded-[2.5rem] object-cover h-full w-full shadow-2xl border-4 border-white"
                    />
                    {/* Floating Badge */}
                    <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-brand-text-2/30 flex items-center gap-4 animate-bounce hover:animate-none">
                        <div className="bg-brand-sec/10 p-3 rounded-xl text-brand-sec">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-sm text-brand-text-1 font-medium">Satisfaction</p>
                            <p className="text-xl font-bold text-brand-primary">100%</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
