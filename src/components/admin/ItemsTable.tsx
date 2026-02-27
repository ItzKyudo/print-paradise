import { Product } from "../../types";

export default function ItemsTable({ products }: { products: Product[] }) {
    return (
        <div className="animate-fade-in">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-brand-primary">Items Management</h2>
                <button className="bg-brand-primary hover:bg-opacity-90 text-white px-5 py-2.5 rounded-xl font-medium transition-all shadow-md shadow-brand-primary/20 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                    Add Item
                </button>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-brand-text-2/10 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-brand-text-2/5 border-b border-brand-text-2/10">
                                <th className="p-4 font-semibold text-brand-primary">Name</th>
                                <th className="p-4 font-semibold text-brand-primary">Category</th>
                                <th className="p-4 font-semibold text-brand-primary">Price</th>
                                <th className="p-4 font-semibold text-brand-primary">Stock</th>
                                <th className="p-4 font-semibold text-brand-primary">Sold</th>
                                <th className="p-4 font-semibold text-brand-primary text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.id} className="border-b border-brand-text-2/5 hover:bg-brand-bg/50 transition-colors">
                                    <td className="p-4 font-medium text-brand-primary">{product.name}</td>
                                    <td className="p-4 text-brand-text-1">
                                        <span className="px-3 py-1 bg-brand-sec/10 text-brand-sec rounded-full text-xs font-bold">{product.category}</span>
                                    </td>
                                    <td className="p-4 font-medium text-brand-sec">{product.price}</td>
                                    <td className="p-4 text-brand-text-1">{product.stock}</td>
                                    <td className="p-4 text-brand-text-1">{product.sold}</td>
                                    <td className="p-4 text-right">
                                        <button className="text-brand-primary hover:text-brand-sec font-medium text-sm mr-3">Edit</button>
                                        <button className="text-red-500 hover:text-red-700 font-medium text-sm">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
