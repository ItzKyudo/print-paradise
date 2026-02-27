import { useState } from 'react';
import { SHOP_PRODUCTS, MOCK_ORDERS, MOCK_USERS } from '../data/mockData';
import Sidebar from '../components/admin/Sidebar';
import DashboardOverview from '../components/admin/DashboardOverview';
import ItemsTable from '../components/admin/ItemsTable';
import OrdersTable from '../components/admin/OrdersTable';
import UsersTable from '../components/admin/UsersTable';

export default function AdminPage({ onLogout }: { onLogout: () => void }) {
    const [activeTab, setActiveTab] = useState<'dashboard' | 'items' | 'orders' | 'users'>('dashboard');

    return (
        <div className="min-h-screen bg-brand-bg flex">
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} onLogout={onLogout} />

            <main className="flex-1 p-8 overflow-y-auto">
                {activeTab === 'dashboard' && (
                    <DashboardOverview
                        totalOrders={MOCK_ORDERS.length}
                        activeUsers={MOCK_USERS.length}
                        totalSales={"₱1,769.00"}
                        orders={MOCK_ORDERS}
                        products={SHOP_PRODUCTS}
                    />
                )}

                {activeTab === 'items' && <ItemsTable products={SHOP_PRODUCTS} />}
                {activeTab === 'orders' && <OrdersTable orders={MOCK_ORDERS} />}
                {activeTab === 'users' && <UsersTable users={MOCK_USERS} />}
            </main>
        </div>
    );
}
