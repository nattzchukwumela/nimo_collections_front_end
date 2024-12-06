import { useState } from 'react';
import { Products } from '../../component/Product/product';
import { Dashboard } from '../../component/Dashboard/Dashboard';
// import { useNavigate } from 'react-router-dom';
import './admin.css';
// Main Admin Dashboard Component
export const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('Dashboard');

    // Sidebar Component
    const Sidebar = () => {
        const menuItems = [
            { icon: '📊', label: 'Dashboard' },
            { icon: '🛍️', label: 'Products' },
            { icon: '📦', label: 'Orders' },
            { icon: '👥', label: 'Customers' },
            { icon: '📈', label: 'Analytics' },
            { icon: '⚙️', label: 'Settings' }
        ];

        return (
            <div className="sidebar">
                <div className="logo">
                    <h2>Admin Panel</h2>
                </div>
                <nav>
                    {menuItems.map((item, index) => (
                        <div
                            key={index}
                            className={`menu-item ${activeTab === item.label ? 'active' : ''}`}
                            onClick={() => setActiveTab(item.label)}
                        >
                            <span className="menu-icon">{item.icon}</span>
                            <span className="menu-label">{item.label}</span>
                        </div>
                    ))}
                </nav>
            </div>
        );
    };

    // Add global styles using a style tag
    return (
        <>
            <div className="admin-dashboard">
                <Sidebar />
                <div className="main-content">
                    {activeTab === 'Dashboard' && <Dashboard />}
                    {activeTab === 'Products' && <Products />}
                    {/* Add other tab components as needed */}
                </div>
            </div>
        </>
    );
};

