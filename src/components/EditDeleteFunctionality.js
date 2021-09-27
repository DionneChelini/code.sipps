import React, { useContext } from 'react';
import {
  faPencilAlt,
  faTrash,
  faCarrot,
  faSave,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//Context
import UserContext from '../context/user/userContext';

const EditDeleteFunctionality = () => {
  const userContext = useContext(UserContext);
  const { setEditState, editCard } = userContext;

  const editHandler = () =>
    editCard ? setEditState(false) : setEditState(true);
  const deleteHandler = () => {};
  const prioritizeHandler = () => {};

  return (
    <div className='d-flex justify-content-space-between py-1 pxp-10 border-left-thin'>
      <div>
        <div
          onClick={editHandler}
          className='btn btn-sm bg-dark z-depth-1 text-mid-grey B612 cursor-pointer'
        >
          <FontAwesomeIcon icon={faPencilAlt} className='f-14 text-green' />{' '}
          EDIT
        </div>
        {editCard ? (
          <div className='btn btn-sm bg-dark z-depth-1 text-mid-grey B612 cursor-pointer ml-1'>
            <FontAwesomeIcon icon={faSave} className='f-14 text-mid-grey' />{' '}
            SAVE
          </div>
        ) : (
          ''
        )}
      </div>
      <div>
        <div
          onClick={deleteHandler}
          className='btn btn-sm bg-dark text-mid-grey  z-depth-1 B612 cursor-pointer mr-1'
        >
          <FontAwesomeIcon icon={faTrash} className='f-14 prp-4 text-red' />{' '}
          DELETE
        </div>
        <div
          onClick={prioritizeHandler}
          className='btn btn-sm bg-dark text-mid-grey  z-depth-1 B612 cursor-pointer'
        >
          <FontAwesomeIcon
            icon={faCarrot}
            className='f-14  prp-4 text-orange'
          />{' '}
          PRIORITIZE
        </div>
      </div>
    </div>
  );
};

export default EditDeleteFunctionality;
