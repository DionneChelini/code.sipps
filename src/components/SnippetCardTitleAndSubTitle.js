import React, { useContext, useEffect } from 'react';
import UserContext from '../context/user/userContext';

const SnippetCardTitleAndSubTitle = () => {
  const userContext = useContext(UserContext);
  const { activeCard, cards } = userContext;

  useEffect(() => [activeCard]);
  if (!cards || !activeCard) {
    return (
      <div className='border-bottom-thin pl-1 d-flex align-items-center'>
        <p className='f-19 m-0 text-dark titillium prp-8'>Title</p>
        <p className='f-13 text-dark titilliumRegular  bg-mid-grey rounded pxp-6 pyp-3'>
          Subtitle
        </p>
      </div>
    );
  }
  return (
    <div className='border-bottom-thin pl-1 d-flex align-items-center'>
      <p className='f-19 m-0 text-dark titillium prp-8'>
        {activeCard.title.substring(0, 1).toUpperCase() +
          activeCard.title.substring(1)}
      </p>
      <p className='f-13 text-dark titilliumRegular  bg-mid-grey rounded pxp-6 pyp-3'>
        {activeCard.subtitle.substring(0, 1).toUpperCase() +
          activeCard.subtitle.substring(1)}
      </p>
    </div>
  );
};

export default SnippetCardTitleAndSubTitle;
