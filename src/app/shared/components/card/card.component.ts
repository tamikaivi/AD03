import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TypeButtonSize } from 'src/app/core/enums/type-button-size';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() data: any;
  @Input() label: any;
  @Input() tagValue: any;
  @Input() tagCode: any;
  @Input() valueCodeDate: any;
  @Input() control: any;
  @Output() deletebtn = new EventEmitter<any>();
  typeButtonSize = TypeButtonSize;
  constructor() {}
  delete() {
    this.deletebtn.emit();
  }
}
