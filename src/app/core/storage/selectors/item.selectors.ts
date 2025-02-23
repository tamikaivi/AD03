// item.selectors.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Item } from '../../models/item.model';

// Define el nombre de la "feature" del estado
export const selectItemsFeature = createFeatureSelector<Item[]>('items');

// Selector para obtener todos los items
export const selectAllItems = createSelector(
  selectItemsFeature,
  (state: Item[]) => state
);

// Selector para obtener un item específico por ID
export const selectItemById = (itemId: string) =>
  createSelector(selectItemsFeature, (state: Item[]) =>
    state.find((item) => item.id === itemId)
  );

// Selector para filtrar items por título o descripción (útil para el buscador)
export const selectItemsBySearch = (searchTerm: string) =>
  createSelector(selectAllItems, (items: Item[]) => {
    if (!searchTerm) {
      return items; // Si no hay término de búsqueda, devuelve toda la lista
    }
    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

// Selector para contar los items seleccionados (para el badge del botón "share")
export const selectSelectedItemsCount = createSelector(
  selectAllItems,
  (items: Item[]) => items.filter((item) => item.selected).length
);
export const selectSelectedItems = createSelector(
  selectAllItems,
  (items: Item[]) => items.filter((item) => item.selected)
);
export const selectSearchTerm = createSelector(
  selectItemsFeature,
  (state: any) => state.searchTerm
);
export const selectFilteredItems = createSelector(
  selectAllItems,
  selectSearchTerm,
  (items: Item[], searchTerm: string) =>
    items.filter(
      (item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
);
