import React from 'react';
import { Link } from 'react-router-dom';
import {
  faFilter,
  faAngleDown,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Filter = () => {
  return (
    <section className='border-right-thin'>
      <Link to='/createCard' className='text-dark-grey font-weight-bold'>
        <div className='btn-lg p-1 mp-4 bg-grey z-depth-1  text-center cursor-pointer f-14'>
          <FontAwesomeIcon
            icon={faPlus}
            className=' text-dark-grey prp-4 f-12'
          />{' '}
          CREATE NEW CARD
        </div>
      </Link>
    </section>
  );
};

export default Filter;
