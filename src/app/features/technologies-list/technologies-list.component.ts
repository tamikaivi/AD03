import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as ItemActions from '../../core/storage/actions/item.actions';
import { Item, Status } from '../../core/models/item.model';
import { AppState } from 'src/app/core/storage/app.state';
import { Observable } from 'rxjs';
import * as ItemSelectors from '../../core/storage/selectors/item.selectors';
import { take } from 'rxjs/operators';
import { TypeAction } from 'src/app/core/enums/type-action';

@Component({
  selector: 'app-technologies-list',
  templateUrl: './technologies-list.component.html',
  styleUrls: ['./technologies-list.component.scss'],
})
export class TechnologiesListComponent {
  items$: Observable<Item[]> = this.store.select(ItemSelectors.selectAllItems);
  selectedItemsCount$: Observable<number> = this.store.select(
    ItemSelectors.selectSelectedItemsCount
  );
  selectedItems$: Observable<Item[]> = this.store.select(
    ItemSelectors.selectSelectedItems
  );
  formTecnologies: FormGroup;
  modalOpen = false;
  actionType: TypeAction = TypeAction.ADD;
  statusOptions = [
    { id: 1, description: Status.FrontEnd },
    { id: 2, description: Status.BackEnd },
    { id: 3, description: Status.FullStack },
    { id: 4, description: Status.DevOps },
    { id: 5, description: Status.QA },
    { id: 6, description: Status.Architect },
  ];
  constructor(private _fb: FormBuilder, private store: Store<AppState>) {
    this.formTecnologies = this._fb.group({
      id: [null],
      title: [
        null,
        [
          Validators.required,
          Validators.maxLength(100),
          Validators.minLength(4),
        ],
      ],
      description: [
        null,
        [
          Validators.required,
          Validators.maxLength(100),
          Validators.minLength(4),
        ],
      ],
      status: [null, [Validators.required]],
      creation_date: [null, [Validators.required]],
      update_date: [null, [Validators.required]],
      selected: [null, []],
    });
  }
  ngOnInit() {
    // selectItemsBySearch
    this.store.dispatch(ItemActions.loadItems());
  }
  share() {
    this.selectedItems$.pipe(take(1)).subscribe((items) => {
      console.log('Compartiendo estos ítems:', items);
      // Lógica adicional para compartir
    });
  }
  add() {
    this.actionType = TypeAction.ADD;
    this.formTecnologies.reset();
    this.openModal();
  }

  saveModal() {
    if (this.actionType === TypeAction.ADD) {
      const now = Date.now().toString(36);
      const random = Math.random().toString(36).substring(2, 8);
      const newItem: Item = {
        id: `${now}-${random}`,
        title: this.formTecnologies.value.title,
        description: this.formTecnologies.value.description,
        status: this.formTecnologies.value.status,
        creation_date: new Date().toISOString(),
        selected: false,
      };
      this.store.dispatch(ItemActions.addItem({ item: newItem }));
    } else {
      this.updateItem(this.formTecnologies.value);
    }

    this.closeModal();
    console.log('SAVED', this.formTecnologies.value);
  }
  updateItem(item: Item) {
    console.log('EDIT item', item);
    const updatedItem = { ...item, update_date: new Date().toISOString() };
    console.log('EDIT', updatedItem);
    this.store.dispatch(ItemActions.updateItem({ item: updatedItem }));
  }
  openModal() {
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
  }

  updateModal() {
    this.actionType = TypeAction.UPDATE;

    console.log('UPDATED', this.formTecnologies.value);
    this.openModal();
  }
  deleteModal() {
    console.log('DELETED', this.formTecnologies.value);
  }
  delete() {
    console.log('delete');
    const id = this.formTecnologies.value.id;
    this.store.dispatch(ItemActions.deleteItem({ id: id }));
  }
}
