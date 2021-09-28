import React, { useContext, useEffect } from 'react';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UserContext from '../context/user/userContext';

const CardItem = ({ card, id }) => {
  const userContext = useContext(UserContext);
  const { activeCard, activateCard, setEditorContent, cards } = userContext;

  const onClick = (e) => {
    activateCard(card);
    setEditorContent(card.snippet);
  };

  return (
    <div
      onClick={onClick}
      className={`${
        activeCard.id === card.id
          ? 'dotted-border bg-light-blue z-depth-1'
          : 'bg-white border'
      }  mp-4 px-1 pyp-19 mbp-4  z-depth-1 pp-6 d-flex align-items-center justify-content-space-between cursor-pointer titillium rounded-lg `}
    >
      <div>
        <p
          className={`${
            activeCard.id === card.id ? 'text-dark' : 'text-dark'
          } f-18 m-0 `}
        >
          {card.title.substring(0, 1).toUpperCase() + card.title.substring(1)}
        </p>
        <p
          className={`${
            activeCard.id === card.id ? 'text-dark ' : 'text-dark'
          } f-11 m-0 `}
        >
          {card.learn}
        </p>
      </div>
      <FontAwesomeIcon
        icon={faAngleRight}
        className={`${
          activeCard.id === card.id ? 'text-dark' : 'text-dark'
        } f-24 font-weight-light prp-4 `}
      />
    </div>
  );
};

export default CardItem;
