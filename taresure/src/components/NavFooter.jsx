import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/NavFooter.css';

const NavFooter = () => {
  const navigate = useNavigate();
  const menuItems = [
    { name: 'Stake', path: '/stake' },
    { name: 'Earn', path: '/collection' },
    { name: 'Reserve', path: '/reserve' },
    { name: 'Assets', path: '/assets' },
    { name: 'My', path: '/my' }
  ];

  return (
    <div
      data-v-b02889ae=""
      className="footer-nav-outer ivu-row-flex ivu-row-flex-middle"
    >
      {menuItems.map((item, index) => (
        <React.Fragment key={item.name}>
          <div
            data-v-b02889ae=""
            className="footer-nav-item ivu-col ivu-col-span-sm-24 ivu-col-span-md-24 ivu-col-span-lg-8 ivu-col-span-xl-8"
            onClick={() => navigate(item.path)}
            style={{ cursor: 'pointer' }}
          >
            <span data-v-b02889ae="" className="title-grey999-PFR-14">
              {item.name}
            </span>
          </div>
          {index < menuItems.length - 1 && (
            <div
              data-v-b02889ae=""
              className="footer-nav-item ivu-col ivu-col-span-sm-24 ivu-col-span-md-24 ivu-col-span-lg-8 ivu-col-span-xl-8"
            >
              <span data-v-b02889ae="" className="title-grey999-PFR-14">
                |
              </span>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default NavFooter; 