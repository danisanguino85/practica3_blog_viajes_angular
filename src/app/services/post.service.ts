import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  arrPosts: Post[] = []



  arrCategories: Category[] = [
    { _id: 1, titulo: 'playa' },
    { _id: 2, titulo: 'montaña' },
    { _id: 3, titulo: 'ciudad' },
    { _id: 4, titulo: 'rural' },
    { _id: 5, titulo: 'festivales' },
  ]

  insertPost(post: Post) {

    post._id = Date.now()
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

  getByCat(categoria: string) {

    const posts = this.arrPosts.filter(post => post.categoria == categoria)
    console.log(this.arrPosts)
    return posts

  }

  getAllCategories() {

    return this.arrCategories
  }


  getById(idPost: number) {

    return this.arrPosts.find(post => post._id == idPost);
  }

}
