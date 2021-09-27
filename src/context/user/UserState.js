import React, { useReducer } from 'react';
import UserContext from './userContext';
import userReducer from './userReducer';
import {
  GET_SNIPPETS,
  CREATE_CARD,
  SET_CARD,
  SET_EDIT_STATE,
  SET_EDITOR_STATE,
  FILTER_CARDS,
  SET_IS_SELECTED,
} from '../types';

const UserState = (props) => {
  const initialState = {
    cards: [
      {
        id: 1,
        title: 'start a headless browser',
        learn: 'the library puppeteer',
        snippet:
          'useEffect(() => {setValue(renderEditor);// eslint-disable-next-line}, [renderEditor]);const handleChange = (editor, data, value) => {setData(data);setValu(value);};',
      },
      {
        id: 2,
        title: 'how to import',
        learn: 'basic javscript import',
        snippet:
          'useEffect(() => {setValue(renderEditor);// eslint-disable-next-line}, [renderEditor]);const handleChange = (editor, data, value) => {setData(data);setValu(value);};',
      },
      {
        id: 3,
        title: 'react boiler plate',
        learn: 'boiler plate setup',
        snippet: 'let name = "Briam"',
      },
      {
        id: 4,
        title: 'Javascript string literal',
        learn: 'String literals',
        snippet: 'let name = "Mary"',
      },
      {
        id: 5,
        title: 'Javascript string literal',
        learn: 'String literals',
        snippet: 'let name = "Mary"',
      },
      {
        id: 6,
        title: 'Javascript string literal',
        learn: 'String literals',
        snippet:
          'useEffect(() => {setValue(renderEditor);// eslint-disable-next-line}, [renderEditor]);const handleChange = (editor, data, value) => {setData(data);setValu(value);};',
      },
    ],
    activeCard: {
      id: 1,
      title: 'start a headless browser',
      learn: 'the library puppeteer',
      snippet:
        'useEffect(() => {setValue(renderEditor);// eslint-disable-next-line}, [renderEditor]);const handleChange = (editor, data, value) => {setData(data);setValu(value);};',
    },
    renderEditor: '',
    editCard: false,
    filtered: null,
    isSelected: null,
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  const activateCard = (card) => {
    dispatch({ type: SET_CARD, payload: card });
  };
  const setEditorContent = (text) => {
    dispatch({ type: SET_EDITOR_STATE, payload: text });
  };
  const setEditState = (bool) => {
    dispatch({ type: SET_EDIT_STATE, payload: bool });
  };
  const createCard = (card) => {
    dispatch({ type: CREATE_CARD, payload: card });
  };

  const filterCards = (text) => {
    dispatch({ type: FILTER_CARDS, payload: text });
  };
  const setIsSelected = (bool) => {
    dispatch({ type: SET_IS_SELECTED, payload: bool });
  };
  return (
    <UserContext.Provider
      value={{
        cards: state.cards,
        activeCard: state.activeCard,
        activateCard,
        editCard: state.editCard,
        setEditState,
        renderEditor: state.renderEditor,
        setEditorContent,
        createCard,
        filtered: state.filtered,
        filterCards,
        isSelected: state.isSelected,
        setIsSelected,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
