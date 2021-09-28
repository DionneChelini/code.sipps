import React from 'react';
import { Link } from 'react-router-dom';
import {
  faFilter,
  faAngleDown,
  faHandScissors,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Heading = ({ title }) => {
  return (
    <section className='z-depth-1 mp-4'>
      <div className='p-1 mp-4 bg-white   titillium text-center cursor-pointer f-14'>
        {title}
      </div>
    </section>
  );
};

export default Heading;
