import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PostService } from '../../services/post.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgxSonnerToaster, toast } from 'ngx-sonner';

@Component({
  selector: 'nav-bar',
  imports: [RouterLink, ReactiveFormsModule, NgxSonnerToaster],
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

    const seleccion = this.postService.getByName(this.nameForm.value.nombre.toUpperCase());
    if (seleccion !== undefined) {
      this.route.navigate(['/post', seleccion]);

    } else {
      toast.message(`No se encuentra ningún post llamado ${this.nameForm.value.nombre}`, {
        description: 'Prueba a escribir un nuevo lugar'
      })
    }
    this.nameForm.reset()
  }

}
