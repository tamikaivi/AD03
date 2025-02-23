import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TechnologiesListComponent } from './technologies-list.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  {
    path: '',
    component: TechnologiesListComponent,
  },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule,
  ],
  declarations: [TechnologiesListComponent],
  exports: [TechnologiesListComponent],
})
export class TechnologiesListModule {}
