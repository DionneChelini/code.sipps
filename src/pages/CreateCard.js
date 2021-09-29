import React, { useEffect, useContext } from 'react';
import SnippetCreateEditor from '../components/SnippetCreateEditor';
import UserContext from '../context/user/userContext';
import AlertContext from '../context/alert/alertContext';
import SnippetDescription from '../components/SnippetDescription';
import SnippetReference from '../components/SnippetRefererence';
import BackButton from '../components/BackButton';
import Alerts from '../components/Alerts';
const CreateCard = () => {
  const userContext = useContext(UserContext);
  const alertContext = useContext(AlertContext);
  const { renderEditor, setEditState, value, setValue } = userContext;
  const { alerts, setAlert } = alertContext;
  useEffect(() => {
    setEditState(true);

    //eslint-disable-next-line
  }, [renderEditor]);
  return (
    <div className='mt-1'>
      <div className='container-main'>
        <section className='bg-light-grey border rounded-lg p-2 pb-2 z-depth-4 mt-1'>
          <div className='d-flex justify-content-space-between'>
            <BackButton />
            <Alerts />
          </div>

          <section className='border bg-white rounded mt-1'>
            <div className='d-flex align-items-center w-100 border-bottom-thin'>
              <div className='w-25'>
                <SnippetReference />
              </div>
            </div>
            <section className='d-flex '>
              <div className='w-100'>
                <SnippetCreateEditor value={value} setValue={setValue} />
              </div>
            </section>
          </section>
          <SnippetDescription value={value} />
        </section>
      </div>
    </div>
  );
};

export default CreateCard;
