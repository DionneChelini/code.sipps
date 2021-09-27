import React, { useEffect, useContext } from 'react';
import {
  faCode,
  faKeyboard,
  faDatabase,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CreateCardEditor from '../components/CreateCardEditor';
import UserContext from '../context/user/userContext';
import CardInputDetails from '../components/CardInputDetails';
import CopySnippet from '../components/CopySnippet';
const CreateCard = () => {
  const userContext = useContext(UserContext);
  const {
    setEditorContent,
    renderEditor,
    setEditState,
    isSelected,
  } = userContext;
  useEffect(() => {
    setEditorContent("Paste or type a code snippet you'd like to remember");
    setEditState(true);
  }, [renderEditor]);
  return (
    <div className='mt-1'>
      <CopySnippet />
      <div className='container-main'>
        {/* The Beginning container that contains the users cards and code snippets  */}
        <section
          id='main_create_card_container'
          className='bg-white border rounded-lg p-2 pb-2 z-depth-4 mt-1'
        >
          <div className='d-flex align-items-center  justify-content-space-between'>
            <h5 className='titillium f-24 text-dark-grey m-0'>
              <button className='btn btn-lg text-light-blue bg-dark z-depth-1 B612 mr-1'>
                {' '}
                <FontAwesomeIcon
                  icon={faDatabase}
                  className='text-light-blue font-weight-light prp-5'
                />
                SAVE SNIPPET
              </button>
            </h5>
            <div className=''>
              <input
                type='text'
                className='input input-border f-20 text-dark'
                placeholder='Plain Text'
              />
            </div>
          </div>
          <CreateCardEditor />
          <CardInputDetails />
        </section>
      </div>
    </div>
  );
};

export default CreateCard;
