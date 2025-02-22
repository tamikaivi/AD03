import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InputCheckboxComponent } from './input-checkbox.component';

@NgModule({
  imports: [CommonModule],
  declarations: [InputCheckboxComponent],
  exports: [InputCheckboxComponent],
})
export class InputCheckboxModule {}
