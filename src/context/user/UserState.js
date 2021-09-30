import React, { useReducer } from 'react';
import UserContext from './userContext';
import userReducer from './userReducer';
import { v4 as uuid } from 'uuid';
import {
  CREATE_CARD,
  SET_CARD,
  SET_EDIT_STATE,
  SET_EDITOR_STATE,
  FILTER_CARDS,
  SET_IS_SELECTED,
  SET_VALUE,
} from '../types';

const UserState = (props) => {
  const initialState = {
    cards: [
      {
        id: uuid(),
        title: 'start a headless browser',
        subtitle: 'the library puppeteer',
        snippet:
          'useEffect(() => {setValue(renderEditor);// eslint-disable-next-line}, [renderEditor]);const handleChange = (editor, data, value) => {setData(data);setValu(value);};',
      },
    ],
    activeCard: null,
    renderEditor: '',
    editCard: false,
    filtered: null,
    isSelected: null,
    value: '',
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
    const id = uuid();
    dispatch({ type: CREATE_CARD, payload: { ...card, id } });
  };

  const filterCards = (text) => {
    dispatch({ type: FILTER_CARDS, payload: text });
  };
  const setIsSelected = (bool) => {
    dispatch({
      type: SET_IS_SELECTED,
      payload: bool,
    });
  };
  const setValue = (value) => {
    dispatch({
      type: SET_VALUE,
      payload: value,
    });
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
        value: state.value,
        setValue,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
