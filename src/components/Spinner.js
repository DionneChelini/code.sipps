import React from 'react';
import spinner from './spinner.gif';

const Spinner = () => (
  <div className='d-flex justify-content-center align-items-center vh-100'>
    <img src={spinner} alt='loading...' />
  </div>
);

export default Spinner;
