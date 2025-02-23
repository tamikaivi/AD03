import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss'],
})
export class InputSelectComponent {
  @Input() control: any;
  selectedOption: string = '';
  options = [
    { value: 'opcion1', viewValue: 'Opción 1' },
    { value: 'opcion2', viewValue: 'Opción 2' },
    { value: 'opcion3', viewValue: 'Opción 3' },
  ];
}
