import React from 'react';

const SimpleTitle = ({ title }) => {
  return (
    <section className='z-depth-1 mp-4'>
      <div className='p-1 mp-4 bg-white   titillium text-center cursor-pointer f-14'>
        {title}
      </div>
    </section>
  );
};

export default SimpleTitle;
