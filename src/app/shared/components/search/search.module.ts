import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SearchComponent } from './search.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [SearchComponent],
  exports: [SearchComponent],
})
export class SearchModule {}
