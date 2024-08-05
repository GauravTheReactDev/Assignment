import React from 'react';
import { Navbar, FormControl, InputGroup } from 'react-bootstrap';
import { FaSearch, FaUserCircle } from 'react-icons/fa';
import { CiMail, CiSettings } from 'react-icons/ci';
import { IoMdNotificationsOutline } from "react-icons/io"

import './Header.css';

const Header = () => {
  return (
    <Navbar className="header bg-dark text-light" >

      <div style={{ display: 'flex', width: '100%', height: '100%', alignItems: 'center' }} className='ml-auto' >
        <img src={'/images/dashboard.png'} alt="Item" className="dashboard-image" />

        <div style={{ marginLeft: '50px', width: '25vw' }}>
          <InputGroup>
            <InputGroup.Text className="border-1" style={{ background: '#3d3d3d', borderColor: '#5c5c5c', color: "white" }}>
              <FaSearch />
            </InputGroup.Text>
            <FormControl type="text" placeholder="Search" className="input-custom" style={{ background: '#3d3d3d', borderColor: '#5c5c5c' }} />
          </InputGroup>
        </div>
        <div className='ml-auto'>
          <div className="icon-bar">
            <div className="icon-wrapper">
              <CiMail size={28} />
            </div>
            <div className="icon-wrapper ml-3">
              <CiSettings size={28} />
            </div>
            <div className="icon-wrapper ml-3 mr-2">
              <IoMdNotificationsOutline size={28} />
            </div>
            <FaUserCircle size={30} className="ml-3 mr-4" />

          </div>
        </div>
      </div>
    </Navbar >
  );
};

export default Header;
