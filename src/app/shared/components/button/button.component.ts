import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TypeButtonSize } from 'src/app/core/enums/type-button-size';
import { TypeButton } from 'src/app/core/enums/type-button'; // Add this line

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() icon = '';
  @Input() badge = false;
  @Input() type: TypeButton = TypeButton.NO_FILL;
  @Input() size: TypeButtonSize = TypeButtonSize.LARGE;
  @Input() label = '';
  @Input() badgeNumber: number | null = null;
  @Output() clickBtn = new EventEmitter<any>();
  typeButtonSize = TypeButtonSize;
  typeButton = TypeButton;
  ngOnInit() {
    console.log(this.type);
  }
  constructor() {}

  getButtonClass() {
    return {
      'btn-circle': this.type === TypeButton.FILL_ROUND,
      'btn-rectangle': this.type === TypeButton.RECTANGLE,
      'btn-default': this.type === TypeButton.NO_FILL,
    };
  }
  getButtonSizeClass() {
    return {
      'btn-small': this.size === TypeButtonSize.SMALL,
      'btn-large': this.size === TypeButtonSize.LARGE,
    };
  }
}
