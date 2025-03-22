import { Injectable } from '@angular/core';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  arrCategories: Category[] = [
    { _id: 1, titulo: 'Playa' },
    { _id: 1, titulo: 'Montaña' },
    { _id: 1, titulo: 'Ciudad' },
    { _id: 1, titulo: 'Rural' },
    { _id: 1, titulo: 'Festivales' },
  ]




  getByCat() {

  }
  getAllCategories() {
    return this.arrCategories
  }




}


