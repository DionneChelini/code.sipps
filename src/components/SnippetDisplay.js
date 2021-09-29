import React, { useContext, useEffect } from 'react';
import UserContext from '../context/user/userContext';
import SnippetItem from './SnippetItem';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

const SnippetDisplay = () => {
  const userContext = useContext(UserContext);
  const { cards, activeCard, filtered } = userContext;
  useEffect(() => {}, [activeCard]);

  if (!cards) return <h1>There are no cards</h1>;

  return (
    <SimpleBar style={{ maxHeight: 380 }} className=''>
      {filtered !== null
        ? filtered.map((card) => (
            <SnippetItem key={card.id} id={card.id} card={card} />
          ))
        : cards.map((card) => (
            <SnippetItem key={card.id} id={card.id} card={card} />
          ))}
    </SimpleBar>
  );
};

export default SnippetDisplay;
