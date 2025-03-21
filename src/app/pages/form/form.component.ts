import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Post } from '../../interfaces/post';
import { PostService } from '../../services/post.service';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

export class FormComponent {

  postService = inject(PostService)
  route = inject(Router)

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

    this.postService.insertPost(this.blogForm.value)
    this.route.navigate(['/home'])


  }


}
