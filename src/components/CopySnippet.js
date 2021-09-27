import React, { useContext, useEffect } from 'react';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UserContext from '../context/user/userContext';

const CopySnippet = () => {
  const userContext = useContext(UserContext);
  const { isSelected } = userContext;

  useEffect(() => {}, [isSelected]);

  return (
    <>
      {isSelected ? (
        <FontAwesomeIcon
          icon={faPlusCircle}
          className='f-29 text-light-blue'
          style={{ position: 'absolute', top: `${window.pageXOffset}px` }}
        />
      ) : (
        ''
      )}
    </>
  );
};

export default CopySnippet;
