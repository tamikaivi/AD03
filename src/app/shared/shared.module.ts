import { NgModule } from '@angular/core';
import { CardModule } from './components/card/card.module';
import { InputCheckboxModule } from './components/input-checkbox/input-checkbox.module';
import { InputSelectModule } from './components/input-select/input-select.module';
import { TagModule } from './components/tag/tag.module';
import { ButtonModule } from './components/button/button.module';
import { ModalModule } from './components/modal/modal.module';
import { InputModule } from './components/input/input.module';
import { SearchModule } from './components/search/search.module';

@NgModule({
  declarations: [],
  imports: [
    CardModule,
    InputCheckboxModule,
    InputSelectModule,
    TagModule,
    ButtonModule,
    ModalModule,
    InputModule,
    SearchModule,
  ],
  exports: [
    CardModule,
    InputCheckboxModule,
    InputSelectModule,
    TagModule,
    ButtonModule,
    ModalModule,
    InputModule,
    SearchModule,
  ],
  providers: [],
})
export class SharedModule {}
