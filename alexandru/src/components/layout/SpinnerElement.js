import React from 'react';
import { Spinner } from 'react-bootstrap';

const SpinnerElement = () => (
  <Spinner animation='border' variant='dark'>
    <span className='sr-only'>Loading...</span>
  </Spinner>
);
export default SpinnerElement;
