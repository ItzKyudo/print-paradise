import { CartItem } from "../../types";

interface NavigationProps {
    currentHash: string;
    isAuthenticated: boolean;
    isAdmin: boolean;
    cartCount: number;
    onSignOut: () => void;
    onNavigateAdmin: () => void;
    onNavigateShop: () => void;
    onNavigateLogin: () => void;
    onOpenCart: () => void;
}

export default function Navigation({
    currentHash,
    isAuthenticated,
    isAdmin,
    cartCount,
    onSignOut,
    onNavigateAdmin,
    onNavigateShop,
    onNavigateLogin,
    onOpenCart
}: NavigationProps) {
    return (
        <nav className="fixed w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-brand-text-2/30">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <a
                    href="#home"
                    className="flex items-center gap-2 cursor-pointer outline-none"
                >
                    <div className="w-8 h-8 rounded-lg bg-brand-primary flex items-center justify-center">
                        <svg className="w-5 h-5 text-brand-text-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                        </svg>
                    </div>
                    <span className="text-xl font-bold text-brand-primary tracking-tight">Printing Paradise</span>
                </a>
                <div className="hidden md:flex space-x-8">
                    <a
                        href="#home"
                        className={`font-medium transition-colors ${currentHash === '#home' || currentHash === '' ? 'text-brand-sec' : 'text-brand-text-1 hover:text-brand-sec'}`}
                    >
                        Home
                    </a>
                    <a
                        href="#shop"
                        className={`font-medium transition-colors ${currentHash === '#shop' ? 'text-brand-sec' : 'text-brand-text-1 hover:text-brand-sec'}`}
                    >
                        Shop
                    </a>
                    <a href="#services" onClick={() => { window.location.hash = '#home'; setTimeout(() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="text-brand-text-1 hover:text-brand-sec transition-colors font-medium">Services</a>
                    <a href="#about" className="text-brand-text-1 hover:text-brand-sec transition-colors font-medium">About</a>
                    <a href="#contact" className="text-brand-text-1 hover:text-brand-sec transition-colors font-medium">Contact</a>
                </div>
                <div className="flex items-center gap-4">
                    {isAuthenticated ? (
                        <div className="hidden sm:flex items-center gap-4">
                            {isAdmin && (
                                <button
                                    onClick={onNavigateAdmin}
                                    className="text-brand-text-1 hover:text-brand-sec font-medium transition-colors"
                                >
                                    Admin Panel
                                </button>
                            )}
                            <button
                                onClick={onSignOut}
                                className="text-brand-text-1 hover:text-brand-sec font-medium transition-colors"
                            >
                                Sign Out
                            </button>
                        </div>
                    ) : (
                        <div className="hidden sm:flex items-center gap-2">
                            <a
                                href="#login"
                                className="text-brand-text-1 hover:text-brand-sec font-medium transition-colors px-3 py-2"
                            >
                                Log In
                            </a>
                            <a
                                href="#register"
                                className="bg-brand-text-1 hover:bg-brand-primary text-white px-5 py-2.5 rounded-full font-medium transition-all text-sm"
                            >
                                Sign Up
                            </a>
                        </div>
                    )}
                    <div
                        className="relative cursor-pointer text-brand-primary hover:text-brand-sec transition-colors"
                        onClick={onOpenCart}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-brand-sec text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center shadow-sm">
                                {cartCount}
                            </span>
                        )}
                    </div>
                    <button
                        onClick={() => {
                            if (!isAuthenticated) {
                                onNavigateLogin();
                            } else {
                                onNavigateShop();
                            }
                        }}
                        className="bg-brand-sec hover:bg-opacity-90 text-brand-text-3 px-6 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-brand-sec/30 transform hover:-translate-y-0.5">
                        Order Now
                    </button>
                </div>
            </div>
        </nav>
    );
}
