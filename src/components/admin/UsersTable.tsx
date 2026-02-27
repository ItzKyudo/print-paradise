import { User } from "../../types";

export default function UsersTable({ users }: { users: User[] }) {
    return (
        <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-brand-primary mb-8">Registered Users</h2>
            <div className="bg-white rounded-2xl shadow-sm border border-brand-text-2/10 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-brand-text-2/5 border-b border-brand-text-2/10">
                                <th className="p-4 font-semibold text-brand-primary">Name</th>
                                <th className="p-4 font-semibold text-brand-primary">Email</th>
                                <th className="p-4 font-semibold text-brand-primary">Role</th>
                                <th className="p-4 font-semibold text-brand-primary">Joined</th>
                                <th className="p-4 font-semibold text-brand-primary text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id} className="border-b border-brand-text-2/5 hover:bg-brand-bg/50 transition-colors">
                                    <td className="p-4 font-medium text-brand-primary flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center font-bold text-xs uppercase">
                                            {user.name.charAt(0)}
                                        </div>
                                        {user.name}
                                    </td>
                                    <td className="p-4 text-brand-text-1">{user.email}</td>
                                    <td className="p-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${user.role === 'Admin' ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-700'
                                            }`}>
                                            {user.role}
                                        </span>
                                    </td>
                                    <td className="p-4 text-brand-text-1">{user.joined}</td>
                                    <td className="p-4 text-right">
                                        <button className="text-brand-primary hover:text-brand-sec font-medium text-sm">Manage</button>
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
