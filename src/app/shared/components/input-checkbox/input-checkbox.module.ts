import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InputCheckboxComponent } from './input-checkbox.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [InputCheckboxComponent],
  exports: [InputCheckboxComponent],
})
export class InputCheckboxModule {}
