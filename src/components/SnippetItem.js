import React, { useContext } from 'react';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UserContext from '../context/user/userContext';
import { motion } from 'framer-motion';

const SnippetItem = ({ card, id }) => {
  const userContext = useContext(UserContext);
  const { activeCard, activateCard, setEditorContent } = userContext;

  const onClick = (e) => {
    activateCard(card);
    setEditorContent(card.snippet);
  };
  if (!activeCard) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      onClick={onClick}
      className={`${
        activeCard.id === card.id
          ? ' bg-black text-white z-depth-1'
          : 'bg-white border'
      }  mp-4 px-1 pyp-19 mbp-4  z-depth-1 pp-6 d-flex align-items-center justify-content-space-between cursor-pointer titilliumRegular rounded-lg `}
    >
      <div>
        <p className='f-18 m-0'>
          {card.title.substring(0, 1).toUpperCase() + card.title.substring(1)}
        </p>
        <p className='text-grey f-11 m-0'>{card.subtitle}</p>
      </div>
      <FontAwesomeIcon icon={faAngleRight} className='text-grey f-24  prp-4' />
    </motion.div>
  );
};

export default SnippetItem;
