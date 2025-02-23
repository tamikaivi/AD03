import { createAction, props } from '@ngrx/store';
import { Item } from '../../models/item.model';

export const loadItems = createAction('[Item] Load Items');
export const loadItemsSuccess = createAction(
  '[Item] Load Items Success',
  props<{ items: Item[] }>()
);
export const addItem = createAction('[Item] Add Item', props<{ item: Item }>());
export const updateItem = createAction(
  '[Item] Update Item',
  props<{ item: Item }>()
);
export const deleteItem = createAction(
  '[Item] Delete Item',
  props<{ id: string }>()
);
export const multiSelectItem = createAction(
  '[Item] MultiSelect Item',
  props<{ item: Item }>()
);
export const toggleSelection = createAction(
  '[Items] Toggle Selection',
  props<{ item: any }>()
);

export const setSearchTerm = createAction(
  '[Item] Set Search Term',
  props<{ searchTerm: any }>()
);
