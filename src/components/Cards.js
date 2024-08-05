import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { FaBoxOpen, FaTruck, FaTimesCircle, FaDollarSign, FaCaretUp, FaCaretDown } from 'react-icons/fa';
import './Cards.css';

const Cards = () => {
  return (
    <Row>
      <Col lg={3} md={6} className="mb-4">
        <Card className="text-light bg-dark">
          <Card.Body className='w-100'>
            <FaBoxOpen size={30} color="#1c5bba" />
            <h5>Total Orders</h5>
            <div className='box'>
              <h2 className='fw-bold' style={{ marginTop: 6 }}>75</h2>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <FaCaretUp size={20} color="#0a6348" style={{ marginTop: 6 }} />
                <h5 style={{ marginLeft: '5px', margin: 0 }}>3%</h5>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={3} md={6} className="mb-4">
        <Card className="text-light bg-dark">
          <Card.Body className='w-100'>
            <FaTruck size={30} color="#0a6348" />
            <h5>Total Delivered</h5>
            <div className='box'>
              <h2 className='fw-bold' style={{ marginTop: 6 }}>70</h2>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <FaCaretDown size={20} color="#c7312c" style={{ marginTop: 6 }} />
                <h5 style={{ marginLeft: '5px', margin: 0 }}>3%</h5>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={3} md={6} className="mb-4">
        <Card className="text-light bg-dark">
          <Card.Body className='w-100'>
            <FaTimesCircle size={30} color="#b34a15" />
            <h5>Total Canceled</h5>
            <div className='box'>
              <h2 className='fw-bold' style={{ marginTop: 6 }}>5</h2>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <FaCaretUp size={20} color="#0a6348" style={{ marginTop: 6 }} />
                <h5 style={{ marginLeft: '5px', margin: 0 }}>3%</h5>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={3} md={6} className="mb-4">
        <Card className="text-light bg-dark">
          <Card.Body className='w-100'>
            <FaDollarSign size={30} color="#b01367" />
            <h5>Total Revenue</h5>
            <div className='box'>
              <h2 className='fw-bold' style={{ marginTop: 6 }}>$12k</h2>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <FaCaretDown size={20} color="#c7312c" style={{ marginTop: 6 }} />
                <h5 style={{ marginLeft: '5px', margin: 0 }}>3%</h5>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Cards;
