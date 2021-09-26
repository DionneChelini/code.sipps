import React, { useEffect, useContext } from 'react';
import { faCode, faKeyboard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CreateCardEditor from '../components/CreateCardEditor';
import UserContext from '../context/user/userContext';
import CardInputDetails from '../components/CardInputDetails';

const CreateCard = () => {
  const userContext = useContext(UserContext);
  const { setEditorContent, renderEditor, setEditState } = userContext;
  useEffect(() => {
    setEditorContent("Paste or type a code snippet you'd like to remember");
    setEditState(true);
  }, [renderEditor]);
  return (
    <div className='mt-1 p-1'>
      <div className='container-main'>
        <section className='d-flex align-items-center justify-content-center mb-2'>
          <button className='btn btn-sm text-dark bg-pink z-depth-1 B612 mr-1'>
            {' '}
            <FontAwesomeIcon
              icon={faCode}
              className='text-dark font-weight-light prp-4'
            />
            CODE
          </button>

          <button className='btn text-dark btn-sm bg-mid-grey z-depth-1 B612'>
            <FontAwesomeIcon
              icon={faKeyboard}
              className='text-dark font-weight-light prp-4'
            />{' '}
            SHORTCUT
          </button>
        </section>
        {/* The Beginning container that contains the users cards and code snippets  */}
        <section
          id='main_create_card_container'
          className='bg-white border rounded p-1 pb-2'
        >
          <div className='d-flex align-items-center  justify-content-space-between'>
            <h5 className='titillium f-24 text-dark-grey m-0'>
              Paste or type in your code
            </h5>
            <div className=''>
              <input
                type='text'
                className='input input-border f-20 text-dark'
                placeholder='Plain Text'
              />
            </div>
          </div>
          <CreateCardEditor styles={'mt-1 text-mid-grey'} />
          <CardInputDetails />
        </section>
      </div>
    </div>
  );
};

export default CreateCard;
