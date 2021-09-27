import React, { useEffect, useState, useContext } from 'react';
import CopySnippet from '../components/CopySnippet';
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
    setValue(renderEditor);

    // eslint-disable-next-line
  }, [renderEditor]);

  const handleChange = (editor, data, value) => {
    setData(data);
    setValue(value);
  };
  const onSelection = (editor, data) => {
    if (editor.doc.somethingSelected()) {
      setIsSelected(true);
    }
  };
  const onFocus = (editor, data) => {
    setValue('');
  };
  const onBlur = (editor, data) => {
    setValue("Paste or type a code snippet you'd like to remember");
  };

  return (
    <div className='rounded-lg'>
      <ControlledEditor
        onBeforeChange={handleChange}
        onSelection={onSelection}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        data={data}
        className='text-mid-grey mt-1  f-28'
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
