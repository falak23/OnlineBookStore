import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../entity/Book';
import { Cart } from '../entity/Cart';


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  
  constructor(private httpClient: HttpClient) {
  }

  getBooks() {
    return this.httpClient.get<Book[]>('http://localhost:8080/books/get');
  }

  addUploadData(selectedFile) {
    return this.httpClient.post('http://localhost:8080/books/upload', selectedFile);
  }

  addBook(newBook : Book) {
    return this.httpClient.post<Book>('http://localhost:8080/books/add', newBook);
  }

  deleteBook(id) {
    return this.httpClient.delete<Book>('http://localhost:8080/books/' + id);
  }

  updateBook(updatedBook: Book) {
    return this.httpClient.put<Book>('http://localhost:8080/books/update', updatedBook);
  }

  findBook(id) {
    return this.httpClient.get<Book>('http://localhost:8080/books/' + id);
  }


  // getAllBooks() {
  //   return this.httpClient.get<Book[]>('http://localhost:8080/book');
  // }

  addToCart(payload) {
    return this.httpClient.post('http://localhost:8080/cart', payload);
  }
  // getCartItems() {
  //   return this.httpClient.get<Cart[]>('http://localhost:8080/cart');
  // }
  // increaseQty(payload) {
  //   return this.httpClient.post('http://localhost:8080/cart', payload);
  // }
  // emptyCart() {
  //   return this.httpClient.delete('http://localhost:8080/cart/empty-cart');
  // }
}