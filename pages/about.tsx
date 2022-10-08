import React, {FC, useState} 
from 'react';
import Layout from '../components/Layout';

interface AboutProps {
  
}
 
const About: FC<AboutProps> = () => {
  return ( 
    <Layout>
        <div className='main'>
        Website created by Piotr Cywiński
      </div>
    </Layout>
  );
}
 
export default About;