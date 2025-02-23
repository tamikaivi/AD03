import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/storage/app.state';
import * as ItemActions from '../../../core/storage/actions/item.actions';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  control: FormControl;

  // Inicializar el FormControl

  constructor(private store: Store<AppState>) {
    this.control = new FormControl('');
  }

  onSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    const searchTerm = input.value;
  }
  sendInputChange($event: any) {
    if (this.control.value === '') {
      this.control.setValue(null);
    }
    const searchValue: any = this.control.value;
    console.log('CAMFIO', searchValue);
    this.store.dispatch(ItemActions.setSearchTerm(searchValue));
  }
}
