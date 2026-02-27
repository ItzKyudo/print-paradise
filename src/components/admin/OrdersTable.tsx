import { Order } from "../../types";

export default function OrdersTable({ orders }: { orders: Order[] }) {
    return (
        <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-brand-primary mb-8">Recent Orders</h2>
            <div className="bg-white rounded-2xl shadow-sm border border-brand-text-2/10 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-brand-text-2/5 border-b border-brand-text-2/10">
                                <th className="p-4 font-semibold text-brand-primary">Order ID</th>
                                <th className="p-4 font-semibold text-brand-primary">Customer</th>
                                <th className="p-4 font-semibold text-brand-primary">Date</th>
                                <th className="p-4 font-semibold text-brand-primary">Total</th>
                                <th className="p-4 font-semibold text-brand-primary">Status</th>
                                <th className="p-4 font-semibold text-brand-primary text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr key={order.id} className="border-b border-brand-text-2/5 hover:bg-brand-bg/50 transition-colors">
                                    <td className="p-4 font-medium text-brand-primary">{order.id}</td>
                                    <td className="p-4 text-brand-text-1">{order.customer}</td>
                                    <td className="p-4 text-brand-text-1">{order.date}</td>
                                    <td className="p-4 font-medium text-brand-sec">{order.total}</td>
                                    <td className="p-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                                                order.status === 'Shipped' ? 'bg-blue-100 text-blue-700' :
                                                    'bg-yellow-100 text-yellow-700'
                                            }`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="p-4 text-right">
                                        <button className="text-brand-primary hover:text-brand-sec font-medium text-sm">View Details</button>
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
