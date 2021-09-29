import { useState } from 'react';
import { faTimesCircle, faTags } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
    <div className='d-flex'>
      <ul className='d-flex p-0 pl-1 align-items-center'>
        <FontAwesomeIcon
          icon={faTags}
          className='text-black prp-5 cursor-pointer f-13'
        />
        <input
          className='input p-0 '
          type='text'
          onKeyUp={(event) => (event.key === 'Enter' ? addTags(event) : null)}
          placeholder='Press enter to add tags'
        />
        {tags.map((tag, index) => (
          <li
            key={index}
            className=' bg-black mrp-4 pp-6 rounded-lg d-flex text-light-blue titilliumRegular align-items-center f-14'
          >
            <span>{tag}</span>
            <FontAwesomeIcon
              icon={faTimesCircle}
              className='text-white plp-4 cursor-pointer'
              onClick={() => removeTags(index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TagsInput;
