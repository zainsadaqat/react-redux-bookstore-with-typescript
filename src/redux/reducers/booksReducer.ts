import { ActionTypes } from '../action-types';
import { Action } from '../actions';

const initialState: { item_id: string; title: string; category: string }[] = [];

const booksReducer = (
  state: { item_id: string; title: string; category: string }[] = initialState,
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.ADD_BOOK:
      return [...state, action.payload];
    case ActionTypes.REMOVE_BOOK:
      return state.filter(
        (book) => book.item_id && book.item_id !== action.payload
      );
    case ActionTypes.LOAD_BOOKS:
      return action.payload;
    default:
      return state;
  }
};

export default booksReducer;
