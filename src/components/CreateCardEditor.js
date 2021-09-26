import React, { useEffect, useState, useContext } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';
// Keymaps
import 'codemirror/keymap/sublime';
// Addons

import { Controlled as ControlledEditor } from 'react-codemirror2';
//Context
import UserContext from '../context/user/userContext';
import { render } from '@testing-library/react';

const CardEditor = ({ styles }) => {
  const [data, setData] = useState();
  const [value, setValue] = useState();
  const [isSelected, setIsSelected] = useState();
  const userContext = useContext(UserContext);
  const { activeCard, editCard, renderEditor, setEditorContent } = userContext;

  useEffect(() => {
    setValue(renderEditor);

    // eslint-disable-next-line
  }, [renderEditor]);

  const handleChange = (editor, data, value) => {
    setData(data);
    setValue(value);
    setIsSelected(editor.doc.somethingSelected());
    console.log(isSelected);
  };
  const onSelection = (editor, data) => {
    console.log(editor);
    if (editor.doc.somethingSelected()) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  };

  return (
    <div className='rounded'>
      <ControlledEditor
        onBeforeChange={handleChange}
        onSelection={onSelection}
        value={value}
        data={data}
        className={`${styles} f-28`}
        options={{
          tabSize: 12,
          comment: true,
          readOnly: editCard ? false : 'nocursor',
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

export default CardEditor;
