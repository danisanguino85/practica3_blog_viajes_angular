import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Post } from '../../interfaces/post';
import { PostService } from '../../services/post.service';
import { Router, RouterLink } from '@angular/router';
import { Category } from '../../interfaces/category';


@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
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
  checkError(fieldName: string, errorName: string) {
    return this.blogForm.get(fieldName)?.hasError(errorName) && this.blogForm.get(fieldName)?.touched
  }

  ngOnInit() {
    this.getCats()
  }
  onSubmit() {
    if (this.blogForm.valid) {
      this.postService.insertPost(this.blogForm.value)
      this.route.navigate(['/home'])
    }


  }

  getCats() {
    this.categories = this.postService.getAllCategories()
  }
}
