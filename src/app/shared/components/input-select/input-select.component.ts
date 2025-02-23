import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss'],
})
export class InputSelectComponent {
  @Input() control: any;
  @Input() optionList: Array<any> | null = [];
  @Input() valueLabel: string = '';
  @Input() valueCode: string = '';
  selectedOption: string = '';
}
