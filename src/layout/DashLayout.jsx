import React from 'react';
import DashSideNav from '../components/dashboard/DashSideNav';
import DashTopNav from '../components/dashboard/DashTopNav';

function DashLayout () {
  return (
    <div>
      <DashTopNav />
      <DashSideNav />
    </div>
  );
};

export default DashLayout;