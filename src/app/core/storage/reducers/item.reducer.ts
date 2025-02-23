import { createReducer, on } from '@ngrx/store';
import { Item } from '../../models/item.model';
import * as ItemActions from '../actions/item.actions';
import { Status } from '../../models/item.model';

export const initialState: Item[] = [];

export const itemReducer = createReducer(
  initialState,
  on(ItemActions.loadItemsSuccess, (state, { items }) => [...items]),
  on(ItemActions.addItem, (state, { item }) => [...state, item]),
  on(ItemActions.updateItem, (state, { item }) =>
    state.map((i) => (i.id === item.id ? item : i))
  ),
  on(ItemActions.deleteItem, (state, { id }) =>
    state.filter((item) => item.id !== id)
  ),
  on(ItemActions.multiSelectItem, (state, { item }) =>
    state.map((i) => (i.id === item.id ? { ...i, selected: !i.selected } : i))
  ),
  on(ItemActions.setSearchTerm, (state, { searchTerm }) => ({
    ...state,
    searchTerm,
  })),
  on(ItemActions.setSearchTerm, (state, { searchTerm }) => ({
    ...state,
    searchTerm,
  }))
);
