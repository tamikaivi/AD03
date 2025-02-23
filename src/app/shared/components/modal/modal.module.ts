import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ModalComponent } from './modal.component';
import { InputSelectModule } from '../input-select/input-select.module';
import { ButtonModule } from '../button/button.module';
import { InputModule } from '../input/input.module';

@NgModule({
  imports: [CommonModule, InputModule, ButtonModule, InputSelectModule],
  declarations: [ModalComponent],
  exports: [ModalComponent],
})
export class ModalModule {}
