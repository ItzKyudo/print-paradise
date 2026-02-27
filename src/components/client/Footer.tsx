export default function Footer() {
    return (
        <footer className="bg-brand-primary py-12 border-t border-brand-text-2/20">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
                <div className="col-span-2 md:col-span-1">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-6 h-6 rounded bg-brand-sec flex items-center justify-center">
                            <svg className="w-4 h-4 text-brand-text-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                            </svg>
                        </div>
                        <span className="text-lg font-bold text-brand-text-3">Printing Paradise</span>
                    </div>
                    <p className="text-brand-text-2 text-sm max-w-xs">
                        Delivering sublimation perfection with every order. Your t-shirt designs, rendered beautifully and permanently.
                    </p>
                </div>
                <div>
                    <h4 className="text-brand-text-3 font-semibold mb-4">Company</h4>
                    <ul className="space-y-2 text-sm text-brand-text-2">
                        <li><a href="#" className="hover:text-brand-sec transition-colors">About Us</a></li>
                        <li><a href="#" className="hover:text-brand-sec transition-colors">Careers</a></li>
                        <li><a href="#" className="hover:text-brand-sec transition-colors">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-brand-text-3 font-semibold mb-4">Services</h4>
                    <ul className="space-y-2 text-sm text-brand-text-2">
                        <li><a href="#" className="hover:text-brand-sec transition-colors">All-Over Prints</a></li>
                        <li><a href="#" className="hover:text-brand-sec transition-colors">Team Uniforms</a></li>
                        <li><a href="#" className="hover:text-brand-sec transition-colors">Custom Tees</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-brand-text-3 font-semibold mb-4">Legal</h4>
                    <ul className="space-y-2 text-sm text-brand-text-2">
                        <li><a href="#" className="hover:text-brand-sec transition-colors">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-brand-sec transition-colors">Terms of Service</a></li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-brand-text-2/20 text-center text-brand-text-2 text-sm">
                <p>&copy; {new Date().getFullYear()} Printing Paradise. All rights reserved.</p>
            </div>
        </footer>
    );
}
