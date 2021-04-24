import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';

@Injectable({
  providedIn: 'root'
})


  export class CartService {
    books = [];
  
 
    constructor(
      private http: HttpClientService
    ) {}

    // addToCart(Book) {
    //   this.books.push(Book);
    // }
  
    getItems() {
      return this.books;
    }
  
    clearCart() {
      this.books = [];
      return this.books;
    }
  }