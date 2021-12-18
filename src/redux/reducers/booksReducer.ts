import { ActionTypes } from '../action-types';
import { Action, IState } from '../actions';

const initialState = { books: [] };

const booksReducer = (state: IState = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.ADD_BOOK:
      return { ...state, books: [state.books, action.payload] };
    case ActionTypes.REMOVE_BOOK:
      return state.books.filter(
        (book) => book.item_id.toString() !== action.payload.toString()
      );
    case ActionTypes.LOAD_BOOKS:
      return { ...state, books: action.payload };
    default:
      return state;
  }
};

export default booksReducer;
