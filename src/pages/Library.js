import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import SearchSnippet from '../components/SearchSnippet';
import SimpleTitle from '../components/SimpleTitle';
import SnippetDisplay from '../components/SnippetDisplay';
import SnippetLibEditor from '../components/SnippetLibEditor';
import SnippetCrudFunctionality from '../components/SnippetCrudFunctionality';
import UserContext from '../context/user/userContext';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SnippetTitle from '../components/SnippetCardTitleAndSubTitle';

const Library = () => {
  const userContext = useContext(UserContext);
  const { activeCard, setEditState, cards, activateCard } = userContext;
  useEffect(() => {
    activateCard(cards[0]);
    setEditState(false);
    // eslint-disable-next-line
  }, [cards]);

  if (!cards) return <h1>No cards available</h1>;

  return (
    <div className='bg-light-grey mt-4 container-main p-2 rounded-lg z-depth-2'>
      <div className='container-main'>
        <section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className='mb-1 d-flex align-items-center justify-content-space-between'
        >
          <Link
            to='/add_new_code_snippet'
            className='btn btn-lg border text-dark B612'
          >
            <FontAwesomeIcon
              icon={faPlusCircle}
              className='f-20 text-dark plp-2'
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
            <SearchSnippet />
            <SimpleTitle title={'Snippet library'} />
            <SnippetDisplay />
          </div>
          <div id='main_section_2' className='w-75'>
            <SnippetTitle />
            <SnippetLibEditor activeCard={activeCard} />
            <SnippetCrudFunctionality />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Library;
