import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post';
import { Category } from '../interfaces/category';
import { CATEGORIES, NEWS, POSTS, SPONSORED } from '../db/posts';
import { News } from '../interfaces/news';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  arrPosts: Post[] = POSTS
  arrCategories: Category[] = CATEGORIES
  arrNews: News[] = NEWS
  arrSpsonsored: News[] = SPONSORED
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
      return undefined;
    }

  }
  getAllNews() {
    return this.arrNews
  }
  getAllSponsored() {
    return this.arrSpsonsored
  }

}
