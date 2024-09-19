import React from 'react';
import Layout from '../components/Layout'; // Import the drawer component

const Agent = () => {
  return (
    <div>
      <Layout />  
      <div style={{ marginLeft: '240px', padding: '20px' }}> {/* Offset content by drawer width */}
        {/* Your dashboard content here */}
      </div>
    </div>
  );
};

export default Agent;
