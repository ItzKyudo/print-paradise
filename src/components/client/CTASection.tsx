export default function CTASection() {
    return (
        <section className="py-24 bg-brand-bg relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <div className="bg-brand-sec rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 -m-20 w-64 h-64 border-30 border-white/10 rounded-full"></div>
                    <div className="absolute bottom-0 left-0 -m-20 w-64 h-64 border-30 border-white/10 rounded-full"></div>

                    <h2 className="text-3xl md:text-5xl font-bold text-brand-text-3 mb-6 relative z-10">Ready to sublimate your style?</h2>
                    <p className="text-brand-bg/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto relative z-10">
                        Join thousands of happy customers who trust Printing Paradise for all their custom apparel and t-shirt needs.
                    </p>
                    <button className="bg-brand-primary text-brand-text-3 hover:bg-white hover:text-brand-primary px-10 py-5 rounded-full font-bold text-lg transition-all shadow-xl transform hover:-translate-y-1 relative z-10">
                        Start Your Project Today
                    </button>
                </div>
            </div>
        </section>
    );
}
