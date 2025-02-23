import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LocalStorageService } from '../../services/local-storage.service';
import * as ItemActions from '../actions/item.actions';
import { map, switchMap, tap } from 'rxjs/operators';
import { Item } from '../../models/item.model';

@Injectable()
export class ItemEffects {
  constructor(
    private actions$: Actions,
    private localStorageService: LocalStorageService
  ) {}

  loadItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemActions.loadItems),
      map(() => {
        const items = this.localStorageService.getItems() || [];
        return ItemActions.loadItemsSuccess({ items });
      })
    )
  );

  addItem$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ItemActions.addItem),
        tap(({ item }) => this.localStorageService.addItem(item))
      ),
    { dispatch: false }
  );

  updateItem$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ItemActions.updateItem),
        tap(({ item }) => this.localStorageService.updateItem(item))
      ),
    { dispatch: false }
  );

  deleteItem$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ItemActions.deleteItem),
        tap(({ id }) => this.localStorageService.deleteItem(id))
      ),
    { dispatch: false }
  );
}
