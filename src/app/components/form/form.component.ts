import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  blogForm: FormGroup = new FormGroup({

    titulo: new FormControl('', [
      Validators.required
    ]),
    texto: new FormControl('', [
      Validators.required
    ]),
    imagen: new FormControl('', [
      Validators.required
    ]),
    categoria: new FormControl('', [
      Validators.required
    ]),
    fecha: new FormControl('', [
      Validators.required
    ]),

  })


  onSubmit() {
    console.log(this.blogForm.value)
  }


}
