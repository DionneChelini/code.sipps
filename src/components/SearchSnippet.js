import React, { useState, useContext } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UserContext from '../context/user/userContext';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const SearchSnippet = () => {
  const userContext = useContext(UserContext);
  const { filterCards } = userContext;
  const [input] = useState({ text: '' });

  const handleInput = (e) => {
    filterCards(e.target.value);
  };
  return (
    <div className='d-flex align-items-center px-1 pyp-4 pbp-8 ptp-7 border-bottom-thin'>
      {' '}
      <FontAwesomeIcon
        icon={faSearch}
        className='f-17 text-dark prp-4 cursor-pointer'
      />
      <Tippy
        content='Searching for snippets is super easy. Remember what you learnt? Or you can even search for a tag'
        className='text-light-blue titilliumRegular bg-black pp-4 mb-1'
      >
        <input
          name='search'
          onChange={handleInput}
          type='text'
          className='f-16'
          placeholder='Search snippet library...'
        />
      </Tippy>
    </div>
  );
};

export default SearchSnippet;
