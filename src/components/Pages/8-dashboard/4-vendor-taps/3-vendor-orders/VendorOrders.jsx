import React from 'react';

const VendorOrders = () => {
  // بيانات وهمية لطلبات العملاء
  const vendorOrders = [
    { id: '#ORD-9932', customer: 'Ali Hasan', date: 'Oct 2, 2026', items: 2, total: 289.49, status: 'Pending' },
    { id: '#ORD-9811', customer: 'Sara Ahmed', date: 'Sep 29, 2026', items: 1, total: 89.50, status: 'Shipped' },
    { id: '#ORD-9755', customer: 'Mohammed Ali', date: 'Sep 25, 2026', items: 3, total: 340.00, status: 'Delivered' }
  ];

  const getOrderStatusBadge = (status) => {
    switch (status) {
      case 'Pending': return <span className="badge bg-warning text-dark rounded-pill px-3">Pending</span>;
      case 'Shipped': return <span className="badge bg-info text-dark rounded-pill px-3">Shipped</span>;
      case 'Delivered': return <span className="badge bg-success rounded-pill px-3">Delivered</span>;
      default: return <span className="badge bg-secondary rounded-pill px-3">{status}</span>;
    }
  };

  return (
    <div className="fade-in-content">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h3 className="text-white mb-1">Store Orders</h3>
          <p className="text-muted small mb-0">Fulfill and track customer orders.</p>
        </div>
        <div className="d-flex gap-2">
          <select className="form-select form-select-sm glass-input text-white border-secondary border-opacity-50">
            <option value="all" className="bg-dark">All Orders</option>
            <option value="pending" className="bg-dark">Pending Only</option>
            <option value="shipped" className="bg-dark">Shipped</option>
          </select>
        </div>
      </div>

      <div className="glass-panel rounded-4 overflow-hidden">
        <div className="table-responsive">
          <table className="table table-dark table-hover table-borderless glass-table mb-0 align-middle">
            <thead className="border-bottom border-secondary border-opacity-25">
              <tr>
                <th className="py-3 px-4">Order ID</th>
                <th className="py-3">Customer</th>
                <th className="py-3">Date</th>
                <th className="py-3">Amount</th>
                <th className="py-3">Status</th>
                <th className="py-3 text-end px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {vendorOrders.map((order, index) => (
                <tr key={index} className="border-bottom border-secondary border-opacity-10">
                  <td className="px-4 text-white fw-medium">{order.id}</td>
                  <td className="text-muted">{order.customer}</td>
                  <td className="text-muted small">{order.date}</td>
                  <td className="text-info fw-bold">${order.total.toFixed(2)}</td>
                  <td>{getOrderStatusBadge(order.status)}</td>
                  <td className="text-end px-4">
                    <button className="btn btn-sm btn-outline-info rounded-pill px-3">
                      Update Status
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VendorOrders;