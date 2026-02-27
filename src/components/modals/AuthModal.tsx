import React from "react";

interface AuthModalProps {
    authModal: 'login' | 'register';
    setAuthModal: (modal: 'login' | 'register' | null) => void;
    handleAuthSubmit: (e: React.FormEvent) => void;
}

export default function AuthModal({ authModal, setAuthModal, handleAuthSubmit }: AuthModalProps) {
    return (
        <div className="fixed inset-0 z-120 flex items-center justify-center px-4 animate-fade-in">
            <div
                className="absolute inset-0 bg-brand-primary/60 backdrop-blur-sm"
                onClick={() => setAuthModal(null)}
            ></div>
            <div className="relative bg-white w-full max-w-md p-8 rounded-4xl shadow-2xl animate-slide-up">
                <button
                    onClick={() => setAuthModal(null)}
                    className="absolute top-4 right-4 p-2 text-brand-text-1 hover:text-brand-primary hover:bg-brand-text-2/20 rounded-full transition-colors"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <h2 className="text-3xl font-extrabold text-brand-primary mb-2 text-center">
                    {authModal === 'login' ? 'Welcome Back!' : 'Join Paradise'}
                </h2>
                <p className="text-brand-text-1 mb-8 text-center">
                    {authModal === 'login' ? 'Sign in to complete your purchase' : 'Register to get the best sublimation pieces'}
                </p>

                <form onSubmit={handleAuthSubmit} className="space-y-4">
                    <div>
                        <label className="block text-brand-primary font-bold mb-2 text-sm">Email</label>
                        <input
                            type="email"
                            name="email"
                            autoFocus
                            required
                            placeholder="hello@example.com"
                            className="w-full px-4 py-3 rounded-xl border border-brand-text-2/30 focus:border-brand-sec focus:ring-2 focus:ring-brand-sec/20 outline-none transition-all"
                        />
                    </div>
                    <div>
                        <label className="block text-brand-primary font-bold mb-2 text-sm">Password</label>
                        <input
                            type="password"
                            name="password"
                            required
                            placeholder="••••••••"
                            className="w-full px-4 py-3 rounded-xl border border-brand-text-2/30 focus:border-brand-sec focus:ring-2 focus:ring-brand-sec/20 outline-none transition-all"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-brand-sec hover:bg-opacity-90 text-brand-text-3 py-4 rounded-xl font-bold text-lg shadow-xl shadow-brand-sec/30 transform transition-transform hover:-translate-y-1 mt-6"
                    >
                        {authModal === 'login' ? 'Sign In' : 'Sign Up'}
                    </button>
                </form>

                <p className="text-center mt-6 text-brand-text-1 text-sm">
                    {authModal === 'login' ? "Don't have an account? " : "Already have an account? "}
                    <button
                        onClick={() => setAuthModal(authModal === 'login' ? 'register' : 'login')}
                        className="text-brand-sec font-bold hover:underline"
                    >
                        {authModal === 'login' ? 'Register' : 'Log in'}
                    </button>
                </p>
            </div>
        </div>
    );
}
