import React from 'react';
import { Table, Card, Image } from 'react-bootstrap';
import './RecentOrders.css';

const RecentOrders = () => {
  return (
    <Card className="bg-dark text-light mb-4 card-scrollable">
      <Card.Body>
        <Card.Title className='mr-auto mb-4 fw-bold'>Recent Orders</Card.Title>
        <Table hover variant="dark" >
          <thead>
            <tr>
              <th>Customer</th>
              <th>Order No.</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="customer-info">
                  <Image src="/images/image4.png" roundedCircle className="customer-img" />
                  <span className="customer-name">Wade Warren</span>
                </div>
              </td>
              <td>15478256</td>
              <td>$124.00</td>
              <td><span className="status delivered">Delivered</span></td>
            </tr>
            <tr>
              <td>
                <div className="customer-info">
                  <Image src="/images/image4.png" roundedCircle className="customer-img" style={{ height: 40, width: 40 }} />
                  <span className="customer-name">Jane Cooper</span>
                </div>
              </td>
              <td>48967586</td>
              <td>$305.02</td>
              <td><span className="status delivered">Delivered</span></td>
            </tr>
            <tr>
              <td>
                <div className="customer-info">
                  <Image src="/images/image4.png" roundedCircle className="customer-img" />
                  <span className="customer-name">Guy Hawkins</span>
                </div>
              </td>
              <td>78958215</td>
              <td>$45.88</td>
              <td><span className="status cancelled">Cancelled</span></td>
            </tr>
            <tr>
              <td>
                <div className="customer-info">
                  <Image src="/images/image4.png" roundedCircle className="customer-img" />
                  <span className="customer-name">Kristin Watson</span>
                </div>
              </td>
              <td>20965732</td>
              <td>$65.00</td>
              <td><span className="status cancelled">Pending</span></td>
            </tr>
            <tr>
              <td>
                <div className="customer-info">
                  <Image src="/images/image4.png" roundedCircle className="customer-img" />
                  <span className="customer-name">Cody Fisher</span>
                </div>
              </td>
              <td>95715620</td>
              <td>$545.00</td>
              <td><span className="status delivered">Delivered</span></td>
            </tr>
            <tr>
              <td>
                <div className="customer-info">
                  <Image src="/images/image4.png" roundedCircle className="customer-img" />
                  <span className="customer-name">Savannah Nguyen</span>
                </div>
              </td>
              <td>78514568</td>
              <td>$128.20</td>
              <td><span className="status delivered">Delivered</span></td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default RecentOrders;
