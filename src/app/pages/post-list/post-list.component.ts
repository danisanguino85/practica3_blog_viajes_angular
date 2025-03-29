import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PostService } from '../../services/blog.service';
import { Post } from '../../interfaces/post';
import { DatePipe } from '@angular/common';
import { Category } from '../../interfaces/category';

@Component({
  selector: 'post-list',
  imports: [DatePipe, RouterLink],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {

  postService = inject(PostService)

  posts!: Post[]

  categories: Category[] = []

  ngOnInit() {
    this.getCats()
    this.posts = this.postService.getAllPosts()

  }

  getCats() {
    this.categories = this.postService.getAllCategories()

  }
  onChange($event: any) {
    if ($event.target.value.toLowerCase() === 'categorias') {
      this.posts = this.postService.getAllPosts()
    } else {

      this.posts = this.postService.getByCat($event.target.value)

      console.log($event.target.value)
    }
  }

}

