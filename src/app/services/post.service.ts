import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  arrPosts: Post[] = []



  arrCategories: Category[] = [
    { _id: 1, titulo: 'Playa' },
    { _id: 2, titulo: 'Montaña' },
    { _id: 3, titulo: 'Ciudad' },
    { _id: 4, titulo: 'Rural' },
    { _id: 5, titulo: 'Festivales' },
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

    const posts = this.arrPosts.filter(post => post.categoria.toLowerCase() == categoria.toLowerCase())
    console.log(this.arrPosts)
    return posts

  }

  getAllCategories() {

    return this.arrCategories
  }


  getById(idPost: number) {

    return this.arrPosts.find(post => post._id == idPost);
  }
  getByName(nombre: string): number | undefined {

    const select = this.arrPosts.find(post => post.titulo == nombre)

    if (select) {
      return select._id
    } else {
      console.log('error')
      console.log(select)
      return undefined;
    }

  }

}
