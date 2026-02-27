import { Order, Product } from '../../types';

interface DashboardOverviewProps {
    totalOrders: number;
    activeUsers: number;
    totalSales: string;
    orders: Order[];
    products: Product[];
}

export default function DashboardOverview({ totalOrders, activeUsers, totalSales, orders, products }: DashboardOverviewProps) {
    return (
        <div className="animate-fade-in flex flex-col h-full gap-8">
            <h2 className="text-3xl font-bold text-brand-primary">Dashboard Overview</h2>

            {/* Top Stat Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-text-2/10 relative overflow-hidden group">
                    <div className="absolute -right-6 -top-6 w-24 h-24 bg-brand-sec/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                    <p className="text-brand-text-1 font-medium mb-2 relative z-10">Total Sales</p>
                    <p className="text-3xl font-extrabold text-brand-primary relative z-10">{totalSales}</p>
                    <div className="mt-4 flex items-center text-sm text-green-500 font-medium relative z-10">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                        +12.5% from last month
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-text-2/10 relative overflow-hidden group">
                    <div className="absolute -right-6 -top-6 w-24 h-24 bg-brand-primary/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                    <p className="text-brand-text-1 font-medium mb-2 relative z-10">Total Orders</p>
                    <p className="text-3xl font-extrabold text-brand-primary relative z-10">{totalOrders}</p>
                    <div className="mt-4 flex items-center text-sm text-green-500 font-medium relative z-10">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                        +5.2% from last month
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-text-2/10 relative overflow-hidden group">
                    <div className="absolute -right-6 -top-6 w-24 h-24 bg-brand-text-2/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                    <p className="text-brand-text-1 font-medium mb-2 relative z-10">Active Users</p>
                    <p className="text-3xl font-extrabold text-brand-primary relative z-10">{activeUsers}</p>
                    <div className="mt-4 flex items-center text-sm text-brand-text-2 font-medium relative z-10">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
                        0% change
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column (Chart & Recent Orders) */}
                <div className="lg:col-span-2 flex flex-col gap-8">
                    {/* Revenue Chart */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-brand-text-2/10">
                        <div className="flex justify-between items-center mb-8">
                            <h3 className="text-xl font-bold text-brand-primary">Revenue Overview</h3>
                            <select className="bg-brand-bg border border-brand-text-2/20 text-brand-text-1 text-sm rounded-lg px-3 py-1 outline-none focus:border-brand-sec">
                                <option>Last 6 Months</option>
                                <option>This Year</option>
                            </select>
                        </div>
                        <div className="flex items-end gap-3 h-56 w-full mt-4">
                            {[40, 70, 45, 90, 65, 100].map((height, i) => (
                                <div key={i} className="flex-1 flex flex-col items-center gap-3 group cursor-pointer h-full">
                                    <div className="w-full bg-brand-text-2/10 rounded-t-lg relative h-full flex items-end">
                                        <div
                                            className="w-full bg-brand-primary rounded-t-lg transition-all duration-500 group-hover:bg-brand-sec relative"
                                            style={{ height: `${height}%` }}
                                        >
                                            {/* Tooltip */}
                                            <div className="opacity-0 group-hover:opacity-100 absolute -top-12 left-1/2 -translate-x-1/2 bg-brand-primary text-white text-xs py-1.5 px-3 rounded-md whitespace-nowrap pointer-events-none transition-opacity shadow-lg font-bold z-20">
                                                ₱{(height * 25).toLocaleString()}
                                                {/* Tooltip Arrow */}
                                                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-brand-primary rotate-45"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <span className="text-sm font-semibold text-brand-text-1 group-hover:text-brand-primary transition-colors">
                                        {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'][i]}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Recent Orders Table */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-brand-text-2/10">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-bold text-brand-primary">Recent Orders</h3>
                            <button className="text-sm text-brand-sec font-bold hover:underline">View All</button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-brand-text-2/10 text-brand-text-1 text-sm">
                                        <th className="pb-4 font-semibold uppercase tracking-wider">Order ID</th>
                                        <th className="pb-4 font-semibold uppercase tracking-wider">Customer</th>
                                        <th className="pb-4 font-semibold uppercase tracking-wider">Date</th>
                                        <th className="pb-4 font-semibold uppercase tracking-wider">Status</th>
                                        <th className="pb-4 font-semibold uppercase tracking-wider text-right">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.slice(0, 4).map((order) => (
                                        <tr key={order.id} className="border-b border-brand-text-2/5 hover:bg-brand-text-2/5 transition-colors group">
                                            <td className="py-4 font-bold text-brand-primary text-sm">{order.id}</td>
                                            <td className="py-4 text-brand-text-1 text-sm font-medium">{order.customer}</td>
                                            <td className="py-4 text-brand-text-1 text-sm">{order.date}</td>
                                            <td className="py-4 text-sm">
                                                <span className={`px-3 py-1 rounded-full text-xs font-bold ${order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                                                        order.status === 'Shipped' ? 'bg-blue-100 text-blue-700' :
                                                            'bg-yellow-100 text-yellow-700'
                                                    }`}>
                                                    {order.status}
                                                </span>
                                            </td>
                                            <td className="py-4 font-bold text-brand-sec text-sm text-right group-hover:scale-105 transition-transform">{order.total}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Right Column (Top Products) */}
                <div className="lg:col-span-1 flex flex-col gap-8">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-brand-text-2/10 h-full flex flex-col">
                        <h3 className="text-xl font-bold text-brand-primary mb-8">Top Selling Items</h3>
                        <div className="flex flex-col gap-6 flex-1">
                            {[...products].sort((a, b) => b.sold - a.sold).slice(0, 5).map((product, index) => (
                                <div key={product.id} className="flex items-center gap-4 group cursor-pointer p-2 hover:bg-brand-bg rounded-xl transition-colors">
                                    <div className="relative">
                                        <img src={product.image} className="w-16 h-16 rounded-xl object-cover shadow-sm group-hover:shadow-md transition-shadow" alt={product.name} />
                                        <div className="absolute -top-2 -left-2 w-6 h-6 bg-brand-sec text-white rounded-full flex items-center justify-center text-xs font-bold shadow-md">
                                            {index + 1}
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-brand-primary text-sm group-hover:text-brand-sec transition-colors">{product.name}</h4>
                                        <p className="text-xs text-brand-text-1 font-medium mt-1">{product.category}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-extrabold text-brand-primary text-lg">{product.sold}</p>
                                        <p className="text-[10px] text-brand-text-1 uppercase font-bold tracking-wider">Sold</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="w-full mt-8 py-3 rounded-xl bg-brand-primary/5 text-brand-primary font-bold hover:bg-brand-primary hover:text-white transition-colors border border-brand-primary/10 hover:border-brand-primary text-sm flex items-center justify-center gap-2">
                            View Inventory
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
