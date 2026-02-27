import { Product } from "../../types";

interface ProductModalProps {
    product: Product;
    setSelectedProduct: (product: Product | null) => void;
    handleAddToCart: (product: Product) => void;
    setIsCartOpen: (open: boolean) => void;
}

export default function ProductModal({ product, setSelectedProduct, handleAddToCart, setIsCartOpen }: ProductModalProps) {
    return (
        <div className="fixed inset-0 z-110 flex items-center justify-center px-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-brand-primary/60 backdrop-blur-sm transition-opacity"
                onClick={() => setSelectedProduct(null)}
            ></div>

            {/* Modal Panel */}
            <div className="relative bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row overflow-hidden animate-slide-up">
                <button
                    onClick={() => setSelectedProduct(null)}
                    className="absolute top-4 right-4 z-10 p-2 bg-white/50 backdrop-blur-md text-brand-primary hover:bg-white rounded-full transition-colors shadow-sm"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-brand-text-2/20">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold text-brand-primary shadow-sm">
                        {product.category}
                    </div>
                </div>

                <div className="w-full md:w-1/2 p-8 flex flex-col bg-brand-bg">
                    <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center text-yellow-500">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="font-bold ml-1 text-gray-800">{product.rating}</span>
                        </div>
                        <span className="text-brand-text-1 text-sm">({product.reviews} reviews)</span>
                    </div>

                    <h2 className="text-3xl font-bold text-brand-primary mb-2 tracking-tight">
                        {product.name}
                    </h2>

                    <p className="text-2xl font-bold text-brand-sec mb-6">
                        {product.price}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mt-auto">
                        <div className="bg-brand-text-3/5 border border-brand-text-2/30 rounded-2xl p-4 text-center">
                            <p className="text-brand-text-1 text-sm mb-1">Status</p>
                            <p className="font-bold text-brand-primary text-lg">
                                {product.stock > 0 ? "In Stock" : "Sold Out"}
                            </p>
                            <p className="text-xs text-brand-primary/60 mt-1">{product.stock} available</p>
                        </div>
                        <div className="bg-brand-text-3/5 border border-brand-text-2/30 rounded-2xl p-4 text-center">
                            <p className="text-brand-text-1 text-sm mb-1">Total Sold</p>
                            <p className="font-bold text-brand-primary text-lg">{product.sold.toLocaleString()}</p>
                            <p className="text-xs text-brand-primary/60 mt-1">units shipped</p>
                        </div>
                    </div>

                    <button
                        onClick={() => {
                            handleAddToCart(product);
                            setSelectedProduct(null);
                            setIsCartOpen(true);
                        }}
                        className="mt-auto w-full py-4 px-6 bg-brand-primary hover:bg-opacity-90 text-brand-text-3 hover:text-white rounded-xl font-bold text-lg transition-all shadow-xl shadow-brand-primary/20 hover:-translate-y-1 flex justify-center items-center gap-2"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}
