import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  private readonly STORAGE_KEY = 'items';

  getItems(): Item[] {
    return JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
  }

  addItem(item: Item) {
    const items = this.getItems();
    items.push(item);
    this.saveItems(items);
  }

  updateItem(updatedItem: Item) {
    const items = this.getItems().map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );
    this.saveItems(items);
  }

  deleteItem(id: string) {
    const items = this.getItems().filter((item) => item.id !== id);
    this.saveItems(items);
  }

  private saveItems(items: Item[]) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(items));
  }
}
