import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
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
  share() {}
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
}
