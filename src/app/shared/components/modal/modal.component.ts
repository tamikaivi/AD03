import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { TypeAction } from 'src/app/core/enums/type-action';

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
