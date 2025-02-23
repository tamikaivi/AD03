import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-technologies-list',
  templateUrl: './technologies-list.component.html',
  styleUrls: ['./technologies-list.component.scss'],
})
export class TechnologiesListComponent {
  formTecnologies: FormGroup;
  modalOpen = false;
  constructor(private _fb: FormBuilder) {
    this.formTecnologies = this._fb.group({
      title: [
        null,
        [
          Validators.required,
          Validators.maxLength(100),
          Validators.minLength(4),
        ],
      ],
      description: [
        null,
        [
          Validators.required,
          Validators.maxLength(100),
          Validators.minLength(4),
        ],
      ],
      status: [null, [Validators.required]],
      creation_date: [null, [Validators.required]],
      update_date: [null, [Validators.required]],
    });
  }
  share() {
    console.log('SHARE', this.formTecnologies.value);
  }
  add() {
    this.openModal();
  }

  saveModal() {
    console.log('SAVED', this.formTecnologies.value);
  }
  openModal() {
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
  }

  updateModal() {
    console.log('UPDATED', this.formTecnologies.value);
    this.openModal();
  }
  deleteModal() {
    console.log('DELETED', this.formTecnologies.value);
  }
  delete() {
    console.log('delete');
  }
}
