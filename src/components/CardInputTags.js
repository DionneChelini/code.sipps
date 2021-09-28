import React from 'react';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const CardInputTags = () => {
  return (
    <div className='d-flex align-items-center px-1 pyp-4 pbp-8 ptp-7 border-right-thin'>
      <section
        id='main_code_snippet_container'
        className='bg-white rounded align-items-center d-flex'
      >
        {' '}
        <FontAwesomeIcon
          icon={faTags}
          className='f-17 text-dark prp-4 cursor-pointer'
        />
        <input
          name='search'
          type='text'
          className='f-16'
          placeholder='Add tags...'
        />
      </section>
    </div>
  );
};

export default CardInputTags;
