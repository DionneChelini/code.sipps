import React, { useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';
// Keymaps
import 'codemirror/keymap/sublime';
// Addons
import { Controlled as ControlledEditor } from 'react-codemirror2';

const CreateCardEditor = ({ styles, value, setValue }) => {
  const [data, setData] = useState();

  const handleChange = (editor, data, value) => {
    setData(data);
    setValue(value);
  };

  return (
    <div className='rounded-lg  p-1'>
      <ControlledEditor
        onBeforeChange={handleChange}
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
          mode: 'c++',
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
