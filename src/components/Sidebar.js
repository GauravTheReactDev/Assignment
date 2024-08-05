import React from 'react';
import { Nav } from 'react-bootstrap';
import { FaHome, FaClipboardCheck, FaChartBar, FaWallet, FaShoppingBag, FaSignOutAlt } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <Nav className="sidebar bg-dark d-flex flex-column align-items-center py-3 h-100">
      <Nav.Item className="my-3 icon-item">
        <FaHome className="sidebar-icon" />
      </Nav.Item>
      <Nav.Item className="my-3 icon-item">
        <FaClipboardCheck className="sidebar-icon" />
      </Nav.Item>
      <Nav.Item className="my-3 icon-item">
        <FaChartBar className="sidebar-icon" />
      </Nav.Item>
      <Nav.Item className="my-3 icon-item">
        <FaWallet className="sidebar-icon" />
      </Nav.Item>
      <Nav.Item className="my-3 icon-item">
        <FaShoppingBag className="sidebar-icon" />
      </Nav.Item>
      <Nav.Item className="mt-auto icon-item" style={{ marginBottom: '70px' }}>
        <FaSignOutAlt className="sidebar-icon" />
      </Nav.Item>
    </Nav>
  );
};

export default Sidebar;
