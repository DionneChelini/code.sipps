import React, { useEffect, useContext } from 'react';
import SearchCard from '../components/SearchCard';
import Filter from '../components/Filter';
import CardDisplay from '../components/CardDisplay';
import CardTitle from '../components/CardTitle';
import CardEditor from '../components/CardEditor';
import EditDeleteFunctionality from '../components/EditDeleteFunctionality';
import UserContext from '../context/user/userContext';

const Home = () => {
  const userContext = useContext(UserContext);
  const { activeCard, setEditorContent, setEditState } = userContext;
  useEffect(() => {
    setEditorContent(activeCard.snippet);
    setEditState(false);
    // eslint-disable-next-line
  }, []);
  return (
    <div className='bg-light-grey mt-1 p-1'>
      <div className='container-main'>
        <section className='mb-1 d-flex align-items-center justify-content-space-between'>
          <button className='btn btn-lg bg-pink text-dark z-depth-1 B612'>
            TRAIN NOW
          </button>
          <p className='f-16 text-dark-grey'>
            Train Reguarly: Set up a{' '}
            <span className='dotted-bottom-border'>habit streak.</span>
          </p>
        </section>
        {/* The Beginning container that contains the users cards and code snippets  */}
        <section
          id='main_code_snippet_container'
          className='bg-white rounded border d-flex'
        >
          {/* We want two main divs that split down the middle */}
          <div id='main_section_1' className='w-25'>
            <SearchCard />
            <Filter />
            <CardDisplay />
          </div>
          <div id='main_section_2' className='w-75'>
            <CardTitle />
            <CardEditor styles={'p-1 border-bottom-thin text-dark-grey'} />
            <EditDeleteFunctionality />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
