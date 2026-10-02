import React from 'react';

const OrdersTab = () => {
  return (
    <div className="fade-in-content">
      <h3 className="text-white mb-4">My Orders</h3>
      <div className="glass-panel rounded-4 overflow-hidden">
        <table className="table table-dark table-hover table-borderless glass-table mb-0">
          <thead className="border-bottom border-secondary border-opacity-25">
            <tr>
              <th>Order ID</th>
              <th>Date</th>
              <th>Status</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#ORD-8372</td>
              <td>Oct 15, 2026</td>
              <td><span className="badge bg-warning text-dark">Processing</span></td>
              <td>$289.49</td>
              <td><button className="btn btn-sm btn-outline-info rounded-pill">View</button></td>
            </tr>
            <tr>
              <td>#ORD-8345</td>
              <td>Sep 28, 2026</td>
              <td><span className="badge bg-success">Delivered</span></td>
              <td>$199.99</td>
              <td><button className="btn btn-sm btn-outline-info rounded-pill">View</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersTab;