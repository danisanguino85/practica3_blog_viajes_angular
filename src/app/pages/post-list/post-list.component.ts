import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CategoriesService } from '../../services/categories.service';
import { PostService } from '../../services/post.service';
import { Post } from '../../interfaces/post';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'post-list',
  imports: [DatePipe],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {



  categoriesService = inject(CategoriesService)
  postService = inject(PostService)
  posts: Post[] = []

  categories: string[] = []

  ngOnInit() {
    this.getCats()
    this.printPosts()
  }

  getCats() {
    this.categories = this.categoriesService.getAllCategories()
  }

  printPosts() {
    this.posts = this.postService.getAllPosts()
    console.log(this.posts)
  }


}
