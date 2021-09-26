import React, { useContext, useEffect } from 'react';
import UserContext from '../context/user/userContext';
import CardItem from './CardItem';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

const CardDisplay = () => {
  const userContext = useContext(UserContext);
  const { cards, activeCard, filtered } = userContext;
  useEffect(() => {}, [activeCard]);

  if (cards.length === 0) {
    return <h4>Please add a card to get started</h4>;
  }

  return (
    <SimpleBar style={{ maxHeight: 380 }} className='border-right-thin'>
      {filtered !== null
        ? filtered.map((card) => (
            <CardItem key={card.id} id={card.id} card={card} />
          ))
        : cards.map((card) => (
            <CardItem key={card.id} id={card.id} card={card} />
          ))}
    </SimpleBar>
  );
};

export default CardDisplay;
