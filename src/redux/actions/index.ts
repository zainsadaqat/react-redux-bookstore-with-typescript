import { ActionTypes } from '../action-types';

interface AddBookPayload {
  item_id: string;
  title: string;
  category: string;
}


interface AddAction {
  type: ActionTypes.ADD_BOOK;
  payload: AddBookPayload;
}

interface RemoveAction {
  type: ActionTypes.REMOVE_BOOK;
  payload: string;
}

interface LoadAction {
  type: ActionTypes.LOAD_BOOKS;
  payload: AddBookPayload[];
}

export interface IObject {
  item_id: string;
  title: string;
  category: string;
}

export interface IState {
  books: IObject[];
}

export type Action = AddAction | RemoveAction | LoadAction;
