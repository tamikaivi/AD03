import { NgModule } from '@angular/core';
import { ModalCustomModule } from './components/modal-custom/modal-custom.module';
import { CardModule } from './components/card/card.module';
import { InputCheckboxModule } from './components/input-checkbox/input-checkbox.module';
import { InputSelectModule } from './components/input-select/input-select.module';

@NgModule({
  declarations: [],
  imports: [
    ModalCustomModule,
    CardModule,
    InputCheckboxModule,
    InputSelectModule,
  ],
  exports: [],
  providers: [],
})
export class SharedModule {}
