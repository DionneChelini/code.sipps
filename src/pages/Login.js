import React from 'react';
import SignInForm from '../components/SignInForm';
import PairProgramming from '../svgs/PairProgramming';

const Login = () => {
  return (
    <div>
      <section className='d-flex mt-6 container-main justify-content-space-around align-items-center'>
        <SignInForm />
        <PairProgramming width={'1330'} />
      </section>
    </div>
  );
};

export default Login;
