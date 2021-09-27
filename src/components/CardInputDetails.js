import React, { useContext, useState, useEffect } from 'react';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UserContext from '../context/user/userContext';

const CardInputDetails = () => {
  const userContext = useContext(UserContext);
  const { createCard, cards, renderEditor } = userContext;

  const [card, setCard] = useState({
    id: 7,
    title: '',
    learn: '',
    snippet: '',
    source: '',
  });

  // useEffect(() => {}, [renderEditor]);

  const handleInput = (e) =>
    setCard({
      ...card,
      [e.target.name]: e.target.value,
      snippet: renderEditor,
    });

  const onSubmit = (e) => {
    e.preventDefault();
    createCard(card);
  };
  return (
    <div className='mt-1 text-dark f-24 titillium '>
      <form onSubmit={onSubmit}>
        <div className='d-flex align-items-center'>
          <p className='text-dark mrp-4'>This card is about</p>
          <input
            name='title'
            onChange={handleInput}
            placeholder='javascript'
            type='text'
            className='dotted-bottom-border titillium f-28 text-mid-grey m-0 p-0 ptp-1 text-center w-25'
            style={{ height: '27px' }}
          />
          <p className='text-dark mrp-4'>and I've just learned how to</p>
          <input
            name='learn'
            onChange={handleInput}
            placeholder='import a library'
            type='text'
            className='dotted-bottom-border titillium f-28 text-mid-grey  m-0 p-0 ptp-1  text-center w-25'
            style={{ height: '27px' }}
          />
        </div>
        <div className='mt-1'>
          <p className='text-dark mrp-4 titilliumRegular'>
            <span className='text-black titillium'>Source URL:</span> where does
            this information come from? (optional){' '}
          </p>
          <div className='d-flex'>
            <input
              name='source'
              onChange={handleInput}
              placeholder='https:\\www.stackoverflow.com'
              type='text'
              className='input input-border f-20 text-dark w-77 p-1 mr-2 '
            />
          </div>
          <div className='d-flex justify-content-end'></div>
        </div>
      </form>
    </div>
  );
};

export default CardInputDetails;
