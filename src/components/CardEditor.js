import React, { useEffect, useState, useContext } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';
// Keymaps
import 'codemirror/keymap/sublime';
// Addons
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/lint/javascript-lint';
import 'codemirror/addon/runmode/runmode';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/javascript-hint';
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/edit/matchtags';
import 'codemirror/addon/fold/foldcode';
import 'codemirror/addon/fold/foldgutter';
import 'codemirror/addon/fold/brace-fold';
import 'codemirror/addon/fold/comment-fold';
import 'codemirror/addon/fold/foldgutter.css';
import { Controlled as ControlledEditor } from 'react-codemirror2';
//Context
import UserContext from '../context/user/userContext';

const CardEditor = ({ styles }) => {
  const [data, setData] = useState();
  const [value, setValue] = useState();
  const userContext = useContext(UserContext);
  const { activeCard, editCard, renderEditor, setEditorContent } = userContext;

  useEffect(() => {
    setValue(renderEditor);
    // setEditorContent(value);

    // eslint-disable-next-line
  }, [renderEditor]);

  const handleChange = (editor, data, value) => {
    setData(data);
    setValue(value);
  };
  const handleKeyDown = (editor, event) => {
    console.log(event);
    console.log(editor);
  };

  return (
    <div className='rounded'>
      <ControlledEditor
        onBeforeChange={handleChange}
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
        }}
      />
    </div>
  );
};

export default CardEditor;
