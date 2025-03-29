import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Post } from '../../interfaces/post';
import { PostService } from '../../services/blog.service';
import { Router, RouterLink } from '@angular/router';
import { Category } from '../../interfaces/category';
import { NgxSonnerToaster, toast } from 'ngx-sonner';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule, NgxSonnerToaster],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

export class FormComponent {

  postService = inject(PostService)
  route = inject(Router)

  categories: Category[] = []


  blogForm: FormGroup = new FormGroup({

    titulo: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    autor: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20)

    ]),
    apellidos: new FormControl('', [
      Validators.required,
      Validators.maxLength(30)
    ]),
    texto: new FormControl('', [
      Validators.required,
      Validators.minLength(100)
    ]),
    imagen: new FormControl('', [
      Validators.required,
      Validators.pattern(/https?:\/\/.+/)
    ]),
    categoria: new FormControl('', [
      Validators.required
    ]),
    fecha: new FormControl('', [
      Validators.required,

    ]),

  })
  checkError(fieldName: string, errorName: string) {
    return this.blogForm.get(fieldName)?.hasError(errorName) && this.blogForm.get(fieldName)?.touched
  }

  ngOnInit() {
    this.getCats()
  }
  onSubmit() {
    if (this.blogForm.valid) {
      this.postService.insertPost(this.blogForm.value)
      toast.success('Post añadido correctamente', {
        description: 'Ahora puedes verlo en la página principal'
      })
      setTimeout(() => {
        this.route.navigate(['/home'])
      }, 2000)

    } else {
      Swal.fire({
        icon: 'error',
        text: "Debes rellenar todos los campos"
      });
    }
  }

  getCats() {
    this.categories = this.postService.getAllCategories()
  }
}
