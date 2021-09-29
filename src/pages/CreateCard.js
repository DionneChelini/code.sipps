import React, { useEffect, useContext } from 'react';
import SnippetCreateEditor from '../components/SnippetCreateEditor';
import UserContext from '../context/user/userContext';
import SnippetDescription from '../components/SnippetDescription';
import BackButton from '../components/BackButton';
import Alerts from '../components/Alerts';
import TagsInput from '../components/TagsInput';
const CreateCard = () => {
  const userContext = useContext(UserContext);

  const { renderEditor, setEditState, value, setValue } = userContext;

  useEffect(() => {
    setEditState(true);

    //eslint-disable-next-line
  }, [renderEditor]);
  const selectedTags = (defaultTags) => {};
  return (
    <div className='mt-1'>
      <div className='container-main'>
        <section className='bg-light-grey border rounded-lg p-2 pb-2 z-depth-4 mt-1'>
          <div className='d-flex justify-content-space-between'>
            <BackButton />
            <Alerts />
          </div>

          <section className='border bg-white rounded mt-1'>
            <div className='d-flex align-items-center border-bottom-thin'>
              <div>
                <TagsInput
                  defaultTags={['Nodejs', 'MongoDB']}
                  selectedTags={selectedTags}
                />
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
