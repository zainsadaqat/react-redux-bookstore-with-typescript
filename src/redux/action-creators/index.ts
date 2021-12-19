import { ActionTypes } from '../action-types';
import { Dispatch } from 'redux';
import { Action, IObject } from '../actions';
import axios from 'axios';

export const addBook = (payload: IObject) => (dispatch: Dispatch<Action>) => {
  axios
    .post(
      'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/DptC52DnXzgbaFrbUZ9W/books',
      payload
    )
    .then(() => dispatch({ type: ActionTypes.ADD_BOOK, payload }));
};

export const removeBook = (payload: string) => (dispatch: Dispatch<Action>) => {
  axios
    .delete(
      `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/DptC52DnXzgbaFrbUZ9W/books/${payload}`
    )
    .then(() => dispatch({ type: ActionTypes.REMOVE_BOOK, payload }));
};

export const loadBooks = () => (dispatch: Dispatch<Action>) => {
  axios
    .get(
      'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/DptC52DnXzgbaFrbUZ9W/books'
    )
    .then((response) =>
      dispatch({ type: ActionTypes.LOAD_BOOKS, payload: response.data })
    );
};
