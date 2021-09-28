import React, { useEffect, useContext } from 'react';
import { faAngleLeft, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CreateCardEditor from '../components/CreateCardEditor';
import UserContext from '../context/user/userContext';
import CardInputDetails from '../components/CardInputTitle';
import CreateInputTags from '../components/CardInputTags';
import { Link } from 'react-router-dom';
import Heading from '../components/Heading';
import SnippetInput from '../components/SnippetInput';
const CreateCard = () => {
  const userContext = useContext(UserContext);
  const { renderEditor, setEditState } = userContext;
  useEffect(() => {
    setEditState(true);
  }, [renderEditor]);
  return (
    <div className='mt-1'>
      <div className='container-main'>
        {/* The Beginning container that contains the users cards and code snippets  */}
        <section
          id='main_create_card_container'
          className='bg-light-grey border rounded-lg p-2 pb-2 z-depth-4 mt-1'
        >
          <div className='d-flex align-items-center  justify-content-space-between'>
            <h5 className='titillium f-24 text-dark-grey m-0'>
              <Link
                to='/'
                className='btn btn-lg text-light-blue bg-dark z-depth-1 B612 mr-1'
              >
                {' '}
                <FontAwesomeIcon
                  icon={faAngleLeft}
                  className='text-light-blue font-weight-light prp-5'
                />
                BACK
              </Link>
            </h5>
          </div>
          <div className='border bg-white rounded mt-1'>
            <div className='d-flex align-items-center w-100 border-bottom-thin'>
              <div className='w-25'>
                <CreateInputTags />
              </div>
              <div className='w-75'>
                <CardInputDetails />
              </div>
            </div>
            <div className='d-flex '>
              <div className='w-25 border-right-thin'>
                <Heading title={'Snippet details'} />
                <SnippetInput />
              </div>

              <div className='w-75'>
                <CreateCardEditor />
              </div>
            </div>
          </div>
          <div className='d-flex justify-content-end'>
            <button className='btn btn-lg text-light-blue bg-dark z-depth-1 B612 mt-1 opacity-50'>
              {' '}
              <FontAwesomeIcon
                icon={faDatabase}
                className='text-light-blue font-weight-light prp-5'
              />
              SAVE SNIPPET
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CreateCard;
