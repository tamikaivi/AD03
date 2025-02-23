import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InputComponent } from './input.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [InputComponent],
  exports: [InputComponent],
})
export class InputModule {}
