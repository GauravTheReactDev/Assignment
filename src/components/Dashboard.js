import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { FaCaretUp } from 'react-icons/fa';
import Cards from './Cards';
import ActivityChart from './ActivityChart';
import ListCard from './ListCard';
import RecentOrders from './RecentOrders';
import CustomerFeedback from './CustomerFeedback';
import RadialBarChart from './RadialBarchart';

const Dashboard = () => {
    return (
        <div className="container-fluid">
            <h3 style={{ fontWeight: 'bold' }} className='mt-4'>Dashboard</h3>

            <Row>
                <Col lg={7} md={4}>
                    <Cards />
                </Col>
                <Col lg={5} md={4}>
                    <Card className="text-light bg-dark">
                        <Card.Body className='w-100'>
                            <div className='box'>
                                <div>
                                    <h5>Net Profit</h5>
                                    <h1 className='fw-bold' style={{ margin: 0 }}>$6759.25</h1>
                                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: 5 }}>
                                        <FaCaretUp size={20} color="#0a6348" style={{ margin: 0 }} />
                                        <h5 style={{ marginLeft: '5px', margin: 0 }}>3%</h5>
                                    </div>
                                </div>
                                <RadialBarChart />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col lg={7} md={4}>
                    <ActivityChart />
                </Col>
                <Col lg={5} md={4}>
                    <ListCard items={[0, 1, 2]} />
                </Col>
            </Row>

            <Row className='my-4'>
                <Col lg={7} md={4}>
                    <RecentOrders />
                </Col>
                <Col lg={5} md={4}>
                    <CustomerFeedback />
                </Col>
            </Row>
        </div>
    );
}

export default Dashboard;
