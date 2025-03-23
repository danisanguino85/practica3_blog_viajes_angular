import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PostService } from '../../services/post.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'nav-bar',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBARComponent {

  nameForm: FormGroup = new FormGroup({
    nombre: new FormControl('')
  })

  route = inject(Router)

  postService = inject(PostService)


  onSubmit() {

    const seleccion = this.postService.getByName(this.nameForm.value.nombre);
    console.log(seleccion)
    if (seleccion !== undefined) {
      this.route.navigate(['/post', seleccion]);

    } else {
      console.error('Post not found');
      console.log(seleccion)
    }
    this.nameForm.reset()
  }

}
