import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SearchComponent } from './search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputModule } from '../input/input.module';

@NgModule({
  imports: [CommonModule, InputModule, ReactiveFormsModule],
  declarations: [SearchComponent],
  exports: [SearchComponent],
})
export class SearchModule {}
