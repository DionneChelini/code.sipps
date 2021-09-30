import React, { useContext, useState, useRef } from 'react';
import UserContext from '../context/user/userContext';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AlertContext from '../context/alert/alertContext';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { withRouter } from 'react-router-dom';

const SnippetDescription = ({ value, setValue, history }) => {
  const userContext = useContext(UserContext);
  const alertContext = useContext(AlertContext);
  const { createCard } = userContext;
  const { setAlert } = alertContext;
  const subtitleRef = useRef();
  const [card, setCard] = useState({
    id: '',
    title: '',
    subtitle: '',
    snippet: '',
    source: '',
  });

  // useEffect(() => {}, [renderEditor]);

  const handleInput = (e) =>
    setCard({
      ...card,
      [e.target.name]: e.target.value,
      snippet: value,
    });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!card.title && !card.subtitle) {
      setAlert('Please include title and subtitle', 'bg-yellow');
      return;
    }
    if (!card.title) {
      setAlert('Please include title', 'bg-yellow');
      return;
    }
    if (!card.subtitle) {
      setAlert('Please include subtitle', 'bg-yellow');
      return;
    }
    if (!value) {
      setAlert('Please include code snippet', 'bg-yellow');
      return;
    }
    setAlert('New code snippet saved to MongoDB', 'bg-green');
    createCard(card);
    setTimeout(() => {
      setValue('');
      history.push('/');
    }, 2000);
  };
  return (
    <div className='pl-1 text-dark f-16 titillium'>
      <form onSubmit={onSubmit}>
        <div className='d-flex align-items-center'>
          <p className='text-dark mrp-4'>This snippet is about</p>
          <Tippy
            content='This snippet is about, ex. Javascipt, ReactJS, MongoDB, Express, HTML &amp; CSS, etc'
            className='text-light-blue titilliumRegular bg-black pp-4 mb-1'
          >
            <input
              name='title'
              onChange={handleInput}
              placeholder='javascript'
              type='text'
              className='dotted-bottom-border titillium f-27 text-dark m-0 p-0 ptp-1 text-center w-25 bg-light-grey'
              style={{ height: '27px' }}
            />
          </Tippy>
          <p className='text-dark mrp-4'>and I've just learned how to</p>
          <Tippy
            content="...and I've just learned to ex. console.log, write a function, loop through an array, connect a database, etc"
            className='text-light-blue titilliumRegular bg-black pp-4 mb-1'
          >
            <input
              name='subtitle'
              ref={subtitleRef}
              onChange={handleInput}
              placeholder='import a library'
              type='text'
              className='dotted-bottom-border titillium f-27 text-dark bg-light-grey m-0 p-0 ptp-1  text-center w-25'
              style={{ height: '27px' }}
            />
          </Tippy>
        </div>
        <div className='mt-1'>
          <p className='text-dark mrp-4 titilliumRegular'>
            <span className='text-black titillium'>Source URL:</span> where does
            this information come from? (optional){' '}
          </p>
          <div className='d-flex justify-content-space-between align-items-center'>
            <input
              name='source'
              onChange={handleInput}
              placeholder='https:\\www.stackoverflow.com'
              type='text'
              className='input input-border f-20 text-dark w-77 '
            />

            <div className='d-flex justify-content-end'>
              <button
                type='submit'
                className='bg-dark btn btn-lg text-white bg-black z-depth-1 B612 ml-1'
              >
                {' '}
                <FontAwesomeIcon
                  icon={faDatabase}
                  className='text-light-blue prp-5'
                />
                SAVE SNIPPET
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default withRouter(SnippetDescription);
