import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import SearchCard from '../components/SearchCard';
import Heading from '../components/Heading';
import CardDisplay from '../components/CardDisplay';
import CardTitle from '../components/CardTitle';
import CardEditor from '../components/CardEditor';
import EditDeleteFunctionality from '../components/EditDeleteFunctionality';
import UserContext from '../context/user/userContext';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Home = () => {
  const userContext = useContext(UserContext);
  const {
    activeCard,
    setEditorContent,
    setEditState,
    cards,
    activateCard,
  } = userContext;

  useEffect(() => {
    activateCard(cards[0]);
    setEditorContent(activeCard.snippet);
    setEditState(false);
    // eslint-disable-next-line
  }, []);

  return (
    <div className='bg-light-grey mt-1 container-main p-2 rounded-lg z-depth-4'>
      <div className='container-main'>
        <section className='mb-1 d-flex align-items-center justify-content-space-between'>
          <Link
            to='/createCard'
            className='btn btn-lg bg-dark text-white z-depth-1 B612'
          >
            <FontAwesomeIcon
              icon={faPlusCircle}
              className='f-20 text-light-blue plp-2'
            />{' '}
            ADD SNIPPET
          </Link>
          <p className='f-16 text-dark-grey  titillium '>
            You currently have{' '}
            <span className='dotted-bottom-border'>
              {cards.length} snippets
            </span>
          </p>
        </section>
        {/* The Beginning container that contains the users cards and code snippets  */}
        <section
          id='main_code_snippet_container'
          className='bg-white rounded border d-flex'
        >
          {/* We want two main divs that split down the middle */}
          <div id='main_section_1' className='w-25 border-right-thin'>
            <SearchCard />
            <Heading title={'Snippet library'} />
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
