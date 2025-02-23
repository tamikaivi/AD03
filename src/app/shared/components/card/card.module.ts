import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardComponent } from './card.component';
import { InputCheckboxModule } from '../input-checkbox/input-checkbox.module';
import { ButtonModule } from '../button/button.module';
import { TagModule } from '../tag/tag.module';

@NgModule({
  imports: [CommonModule, InputCheckboxModule, ButtonModule, TagModule],
  declarations: [CardComponent],
  exports: [CardComponent],
})
export class CardModule {}
