import { useState } from 'react';
import { faTimesCircle, faTags } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const TagsInput = ({ defaultTags, selectedTags }) => {
  const [tags, setTags] = useState(defaultTags);

  const removeTags = (indexToRemove) => {
    setTags([...tags.filter((_, index) => index !== indexToRemove)]);
  };
  const addTags = (event) => {
    if (event.target.value !== '') {
      setTags([...tags, event.target.value]);
      selectedTags([...tags, event.target.value]);
      event.target.value = '';
    }
  };

  return (
    <div className='d-flex w-100'>
      <ul className='d-flex p-0 pl-1 align-items-center'>
        <FontAwesomeIcon
          icon={faTags}
          className='text-black prp-5 cursor-pointer f-13'
        />
        <Tippy
          content='Why add a tag? Tags make finding your snippets super easy. Add a tag, (ex. MongoDB Project) and later use the tag as a reference to find snippet quickly.'
          className='text-light-blue titilliumRegular bg-black pp-4 mb-1'
        >
          <input
            className='input pp-9 '
            type='text'
            onKeyUp={(event) => (event.key === 'Enter' ? addTags(event) : null)}
            placeholder='Press enter to add tags'
          />
        </Tippy>
        {tags.map((tag, index) => (
          <li
            key={index}
            className=' bg-black mrp-4 pp-9 rounded-lg d-flex text-white  titilliumRegular align-items-center f-14'
          >
            <span> {tag}</span>
            <FontAwesomeIcon
              icon={faTimesCircle}
              className='text-white plp-4 cursor-pointer f-18'
              onClick={() => removeTags(index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TagsInput;
