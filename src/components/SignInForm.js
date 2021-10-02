import React from 'react';
import { motion } from 'framer-motion';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
const SignInForm = () => {
  return (
    <motion.div
      className='border z-depth-2 rounded bg-white'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className='m-2' style={{ width: '350px' }}>
        <h2 className='titillium'>LOG IN</h2>
        <div
          className='bg-purple rounded'
          style={{ width: '70px', height: '8px' }}
        ></div>

        <form className='d-flex flex-direction-column justify-content-start mt-1 titillium'>
          <p className='m-0'>Email</p>
          <input type='text' className='border mb-1 p-1' />
          <p className='m-0'>Password</p>
          <input
            type='password'
            className='border p-1 '
            name='password'
            autoComplete=''
          />
          <div className='d-flex align-items-center text-dark justify-content-space-between'>
            <div className='d-flex align-items-center'>
              <input type='checkbox' name='' id='' className='mtp-6 mrp-4' />
              <p className='titilliumRegular'>Remember me</p>
            </div>
            <Link className='text-blue titilliumRegular'>
              Forgot your password?
            </Link>
          </div>
          <button className='btn btn-block text-white titilliumRegular f-16 p-1 mb-1 mt-2 bg-purple rounded'>
            LOG IN
          </button>
          <p className='text-dark text-center f-12 m-0'>OR</p>
          <button className='btn btn-block text-dark titilliumRegular f-16 p-1 my-1  bg-grey rounded'>
            <FontAwesomeIcon icon={faGithub} className='text-dark  prp-5' />{' '}
            CONNECT WITH GITHUB
          </button>
        </form>
        <div className='d-flex justify-content-center'>
          <Link to='/' className='text-blue p-1 rounded f-12'>
            <FontAwesomeIcon
              icon={faAngleLeft}
              className='text-blue prp-5 titilliumRegular'
            />{' '}
            Back home
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default SignInForm;
