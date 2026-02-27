import { CartItem } from "../../types";

interface CartModalProps {
    cart: CartItem[];
    cartTotal: number;
    setIsCartOpen: (open: boolean) => void;
    removeFromCart: (id: number) => void;
}

export default function CartModal({ cart, cartTotal, setIsCartOpen, removeFromCart }: CartModalProps) {
    return (
        <div className="fixed inset-0 z-100 flex items-center justify-end">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-brand-primary/40 backdrop-blur-sm transition-opacity"
                onClick={() => setIsCartOpen(false)}
            ></div>

            {/* Modal Panel */}
            <div className="relative bg-white w-full max-w-md h-full flex flex-col shadow-2xl transform transition-transform border-l border-brand-text-2/30 animate-slide-in-right">
                <div className="px-6 py-5 border-b border-brand-text-2/30 flex justify-between items-center bg-brand-bg">
                    <h2 className="text-2xl font-bold text-brand-primary">Your Cart</h2>
                    <button
                        onClick={() => setIsCartOpen(false)}
                        className="p-2 text-brand-text-1 hover:text-brand-primary hover:bg-brand-text-2/50 rounded-full transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {cart.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-brand-text-1 opacity-70">
                            <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <p className="text-lg font-medium">Your cart is empty.</p>
                        </div>
                    ) : (
                        cart.map(item => (
                            <div key={item.id} className="flex items-center gap-4 bg-brand-bg rounded-2xl p-4 border border-brand-text-2/30 shadow-sm">
                                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-xl border border-brand-text-2/20" />
                                <div className="flex-1">
                                    <h4 className="font-bold text-brand-primary text-lg">{item.name}</h4>
                                    <p className="text-brand-sec font-medium">{item.price}</p>
                                    <p className="text-sm text-brand-text-1 mt-1">Qty: {item.quantity}</p>
                                </div>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="p-2 text-red-500 hover:text-white hover:bg-red-500 rounded-lg transition-colors border border-red-500/20"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                            </div>
                        ))
                    )}
                </div>

                {cart.length > 0 && (
                    <div className="border-t border-brand-text-2/30 p-6 bg-brand-bg/50">
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-lg font-semibold text-brand-text-1">Subtotal</span>
                            <span className="text-2xl font-bold text-brand-primary">
                                ₱{cartTotal.toFixed(2)}
                            </span>
                        </div>
                        <button className="w-full bg-brand-primary hover:bg-opacity-90 text-brand-text-3 py-4 rounded-xl font-bold text-lg shadow-xl shadow-brand-primary/20 transform transition-transform hover:-translate-y-1">
                            Checkout Now
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
