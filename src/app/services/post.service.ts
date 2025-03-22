import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  arrPosts: Post[] = []

  insertPost(post: Post) {
    this.arrPosts.push(post)
    localStorage.setItem('posts', JSON.stringify(this.arrPosts))
  }

  getAllPosts() {
    const posts = localStorage.getItem('posts');
    if (posts) {
      this.arrPosts = JSON.parse(posts);
    }
    return this.arrPosts


  }
  getById() {

  }

}
