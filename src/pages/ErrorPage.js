import React from 'react';
import PageNotFound from '../svgs/PageNotFound';
import { Link } from 'react-router-dom';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const ErrorPage = () => {
  return (
    <div className=' d-flex vh-100 mt-5 justify-content-center flex-direction-row'>
      <div>
        <Link to='/' className='text-black border p-1 rounded'>
          <FontAwesomeIcon icon={faAngleLeft} className='text-black prp-5' />{' '}
          Back home
        </Link>
      </div>
      <PageNotFound />
    </div>
  );
};

export default ErrorPage;
