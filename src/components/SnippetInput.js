import React from 'react';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
const SnippetInput = () => {
  return (
    <SimpleBar style={{ maxHeight: 380 }} className=''>
      <section className=' px-1'>
        <p className='f-10'>
          Where does this snippet come from?
          <span className='text-mid-grey'> (optional)</span>
        </p>
        <form action=''>
          <input
            name='search'
            type='text'
            className='f-14 border w-75'
            placeholder='https://www.stackoverflow.com'
          />

          <p className='f-10'>
            Choose a language?{' '}
            <span className='text-mid-grey'> (required)</span>
          </p>

          <input
            name='search'
            type='text'
            className='f-14 border w-75'
            placeholder='Javascript'
          />
          <p className='f-10'>
            Where does this snippet come from?
            <span className='text-mid-grey'> (optional)</span>
          </p>
          <textarea
            name='search'
            type='text'
            className='f-14 border w-100 pp-10'
            placeholder='Add some notes'
            height='100px'
          />
        </form>
      </section>
    </SimpleBar>
  );
};

export default SnippetInput;
