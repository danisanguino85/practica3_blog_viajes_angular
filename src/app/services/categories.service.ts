import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  arrCategories = ['Playa', 'Montaña', 'Ciudad', 'Rural', 'Festivales']




  getByCat() {

  }
  getAllCategories() {
    return this.arrCategories
  }




}


