import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InputSelectComponent } from './input-select.component';

@NgModule({
  imports: [CommonModule],
  declarations: [InputSelectComponent],
  exports: [InputSelectComponent],
})
export class InputSelectModule {}
