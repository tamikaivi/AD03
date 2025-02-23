import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() badge = false;
  @Input() type = false;
  @Input() label = '';
  @Input() badgeNumber: number | null = null;
  @Output() clickBtn = new EventEmitter<any>();
  constructor() {}
}
