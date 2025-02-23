import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/storage/app.state';
import * as ItemActions from '../../../core/storage/actions/item.actions';

@Component({
  selector: 'app-input-checkbox',
  templateUrl: './input-checkbox.component.html',
  styleUrls: ['./input-checkbox.component.scss'],
})
export class InputCheckboxComponent {
  @Input() item: any;
  @Input() control: any;
  constructor(private store: Store<AppState>) {}
  toggleSelection(event: any) {
    const updatedItem = { ...this.item, selected: event.target.checked };
    this.store.dispatch(ItemActions.updateItem({ item: updatedItem }));
  }
}
