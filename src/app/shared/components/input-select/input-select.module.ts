import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InputSelectComponent } from './input-select.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [InputSelectComponent],
  exports: [InputSelectComponent],
})
export class InputSelectModule {}
