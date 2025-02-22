import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalCustomComponent } from './modal-custom.component';
import { ButtonModule } from '../button/button.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ModalCustomComponent],
  exports: [ModalCustomComponent],
  imports: [CommonModule, ButtonModule],
})
export class ModalCustomModule {}
