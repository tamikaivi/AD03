import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { TypeAction } from 'src/app/core/enums/type-action';
import { TypeButton } from 'src/app/core/enums/type-button';
import { TypeButtonSize } from 'src/app/core/enums/type-button-size';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() isOpen = false;
  @Input() actionType: TypeAction = TypeAction.ADD;
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<void>();
  typeAction = TypeAction;
  typeButton = TypeButton;
  typeButtonSize = TypeButtonSize;
  closeModal() {
    this.close.emit();
  }
  saveModal() {
    this.save.emit();
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.isOpen) {
    }
  }
}
