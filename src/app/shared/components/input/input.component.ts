import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @ViewChild('inputField', { static: false }) inputField:
    | ElementRef
    | undefined;
  @Input() control: any;
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() type: string = '';
  @Input() minValue: number | undefined;
  @Input() maxValue: number | undefined;
  @Input() readonly: boolean = false;
  @Input() enterKey: boolean = false;
  @Output() inputChange = new EventEmitter<string>();
  @Output() enterPressed = new EventEmitter<true>();
  @Output() input = new EventEmitter<any>();
  @Output() onfocus = new EventEmitter<any>();
  @Output() focusout = new EventEmitter<any>();
  required: boolean = false;
  constructor() {}
  checkRequired() {
    const validator = this.control.validator
      ? this.control.validator({} as AbstractControl)
      : undefined;
    if (validator && validator.required) {
      this.required = true;
    } else {
      this.required = false;
    }
  }
  sendInputChange($event: any) {
    if (this.control.value === '') {
      this.control.setValue(null);
    }
    this.inputChange.emit($event);
  }
  search(event: any) {
    if (this.enterKey && event.key == 'Enter') {
      this.enterPressed.emit(true);
    }
  }
}
