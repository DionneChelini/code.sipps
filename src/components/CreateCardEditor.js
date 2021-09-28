import React, { useEffect, useState, useContext } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';
// Keymaps
import 'codemirror/keymap/sublime';
// Addons
import { Controlled as ControlledEditor } from 'react-codemirror2';
//Context
import UserContext from '../context/user/userContext';

const CreateCardEditor = ({ styles }) => {
  const [data, setData] = useState();
  const [value, setValue] = useState();
  const userContext = useContext(UserContext);
  const {
    activeCard,
    editCard,
    renderEditor,
    setEditorContent,
    setIsSelected,
    isSelected,
  } = userContext;

  useEffect(() => {
    // eslint-disable-next-line
  }, []);

  const handleChange = (editor, data, value) => {
    setData(data);
    setValue(value);
  };

  return (
    <div className='rounded-lg  p-1'>
      <ControlledEditor
        onBeforeChange={handleChange}
        placeholder='paste'
        value={value}
        data={data}
        className='text-mid-grey f-26'
        options={{
          tabSize: 12,
          comment: true,
          autocorrect: true,
          autocursor: true,
          smartIndent: true,
          lineWrapping: true,
          mode: 'plaintext',
          lineNumbers: false,
          foldGutter: true,
          autoCloseTags: true,
          keyMap: 'sublime',
          matchtags: true,
          matchBrackets: true,
          autoCloseBrackets: true,
          extraKeys: {
            Tab: 'autocomplete',
          },
          attributes: {
            color: '#000',
          },
        }}
      />
    </div>
  );
};

export default CreateCardEditor;
