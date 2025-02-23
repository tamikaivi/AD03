import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() data: any;
  @Input() control: any;
  @Output() deletebtn = new EventEmitter<any>();
  constructor() {}
  delete() {
    console.log('delete');
    this.deletebtn.emit();
  }
}
