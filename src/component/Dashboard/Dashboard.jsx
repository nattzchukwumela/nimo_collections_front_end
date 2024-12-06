// Dashboard Component
export const Dashboard = () => {
    const stats = [
        { label: 'Total Sales', value: '$45,231', change: '+20.1%' },
        { label: 'Total Orders', value: '1,234', change: '+15.3%' },
        { label: 'Total Customers', value: '5,678', change: '+8.7%' }
    ];

    return (
        <div className="dashboard-content">
            <h1>Dashboard Overview</h1>
            <div className="stats-grid">
                {stats.map((stat, index) => (
                    <div key={index} className="stat-card">
                        <h3>{stat.label}</h3>
                        <div className="stat-value">{stat.value}</div>
                        <div className={`stat-change ${stat.change.includes('+') ? 'positive' : 'negative'}`}>
                            {stat.change}
                        </div>
                    </div>
                ))}
            </div>
            <div className="recent-orders">
                <h2>Recent Orders</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Date</th>
                            <th>Total</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#12345</td>
                            <td>John Doe</td>
                            <td>2024-01-15</td>
                            <td>$299.99</td>
                            <td><span className="status-badge shipped">Shipped</span></td>
                        </tr>
                        <tr>
                            <td>#12346</td>
                            <td>Jane Smith</td>
                            <td>2024-01-16</td>
                            <td>$199.50</td>
                            <td><span className="status-badge processing">Processing</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};