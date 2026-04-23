import React from 'react';
import { FaBell, FaCalendar, FaSearch } from 'react-icons/fa';

function DashTopNav () {
    const date = new Date()
  return (
    <header className='dash-topnav'>
        <h4>Hello Van👋</h4>
        <ul>
            <li><FaSearch /></li>
            <li><FaBell /></li>
            <li><FaCalendar /> {date.toDateString()}</li>
            <li>Profile</li>
        </ul>
      
    </header>
  );
};

export default DashTopNav;