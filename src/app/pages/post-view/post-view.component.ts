import { Component, inject, Input } from '@angular/core';
import { PostService } from '../../services/blog.service';
import { Post } from '../../interfaces/post';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'post-view',
  imports: [DatePipe],
  templateUrl: './post-view.component.html',
  styleUrl: './post-view.component.css'
})
export class PostViewComponent {

  @Input() idPost: number = 0
  postservice = inject(PostService)
  post: Post | undefined
  activatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    if (!isNaN(this.idPost)) {
      this.post = this.postservice.getById(this.idPost)
    }
  }
}
