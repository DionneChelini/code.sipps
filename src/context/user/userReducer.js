import {
  SET_CARD,
  CREATE_CARD,
  GET_SNIPPETS,
  SET_EDIT_STATE,
  SET_EDITOR_STATE,
  FILTER_CARDS,
  SET_IS_SELECTED,
} from '../types';

let reducer = (state, action) => {
  switch (action.type) {
    case GET_SNIPPETS:
      return {
        ...state,
        snippets: action.payload,
      };
    case SET_CARD:
      return {
        ...state,
        activeCard: action.payload,
      };
    case SET_EDIT_STATE:
      return {
        ...state,
        editCard: action.payload,
      };
    case SET_EDITOR_STATE:
      return {
        ...state,
        renderEditor: action.payload,
      };
    case CREATE_CARD:
      return {
        ...state,
        cards: [...state.cards, action.payload],
      };
    case SET_IS_SELECTED:
      return {
        ...state,
        isSelected: action.payload,
      };
    case FILTER_CARDS:
      return {
        ...state,
        filtered: state.cards.filter((cards) => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return cards.title.match(regex) || cards.learn.match(regex);
        }),
      };

    default:
      return state;
  }
};

export default reducer;
