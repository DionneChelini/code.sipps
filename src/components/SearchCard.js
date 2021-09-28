import React, { useState, useContext } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UserContext from '../context/user/userContext';

const SearchCard = () => {
  const userContext = useContext(UserContext);
  const { filterCards } = userContext;
  const [input, setInput] = useState({ text: '' });

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
      <input
        name='search'
        onChange={handleInput}
        type='text'
        className='f-16'
        placeholder='Search snippet library...'
      />
    </div>
  );
};

export default SearchCard;
