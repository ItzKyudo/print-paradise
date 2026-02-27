import { Product } from "../types";

export default function Shop({
    products,
    onSelectProduct,
    onAddToCart
}: {
    products: Product[];
    onSelectProduct: (product: Product) => void;
    onAddToCart: (product: Product) => void;
}) {
    return (
        <section id="shop" className="pt-32 pb-24 bg-brand-bg relative min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-brand-primary mb-4">Shop Premium Sublimation</h2>
                    <p className="text-brand-text-1 max-w-2xl mx-auto text-lg">Browse our selection of top-quality sublimated products, ready for your custom designs.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:shadow-brand-sec/10 transition-all duration-300 border border-brand-text-2/10 group flex flex-col cursor-pointer hover:-translate-y-1"
                            onClick={() => onSelectProduct(product)}
                        >
                            <div className="relative h-64 overflow-hidden bg-brand-text-2/20">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-brand-primary">
                                    {product.category}
                                </div>
                            </div>
                            <div className="p-6 flex flex-col grow">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold text-brand-primary">{product.name}</h3>
                                    <div className="flex items-center gap-1 bg-yellow-100 text-yellow-700 px-2 py-1 rounded-md text-xs font-bold">
                                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        {product.rating}
                                    </div>
                                </div>
                                <p className="text-brand-sec font-semibold text-lg mb-4">{product.price}</p>

                                <div className="flex justify-between items-center text-sm text-brand-text-1 mt-auto">
                                    <span>{product.sold.toLocaleString()} sold</span>
                                    <span>Stock: {product.stock}</span>
                                </div>

                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onAddToCart(product);
                                    }}
                                    className="mt-4 w-full py-3 px-4 bg-brand-primary/5 hover:bg-brand-primary text-brand-primary hover:text-white rounded-xl font-medium transition-colors border border-brand-primary/10 hover:border-brand-primary flex justify-center items-center gap-2"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
