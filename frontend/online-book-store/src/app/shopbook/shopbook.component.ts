import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService } from '../service/http-client.service';
import { Book } from '../entity/Book';
import { Cart } from '../entity/Cart';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shopbook',
  templateUrl: './shopbook.component.html',
  styleUrls: ['./shopbook.component.css']
})
export class ShopbookComponent implements OnInit {

  books: Array<Book>;
  booksRecieved: Array<Book>;

  cartBooks: any;

  constructor(private router: Router, private httpClientService: HttpClientService) { }
  
  // getItems() {
  //   this.router.navigate(["cart"]);
  //   }

  ngOnInit() {
    this.httpClientService.getBooks().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
    //from localstorage retrieve the cart item
    // let data = this.getItems();
    // // if this is not null convert it to JSON else initialize it as empty
    // if (data !== null) {
    //   this.cartBooks = JSON.parse(data);
    // } else {
    //   this.cartBooks = [];
    // }
  }

  // we will be taking the books response returned from the database
  // and we will be adding the retrieved   
  handleSuccessfulResponse(response) {
    this.books = new Array<Book>();
    //get books returned by the api call
    this.booksRecieved = response;
    for (const book of this.booksRecieved) {

      const bookwithRetrievedImageField = new Book();
      bookwithRetrievedImageField.id = book.id;
      bookwithRetrievedImageField.name = book.name;
      //populate retrieved image field so that book image can be displayed
      bookwithRetrievedImageField.retrievedImage = 'data:image/jpeg;base64,' + book.picByte;
      bookwithRetrievedImageField.author = book.author;
      bookwithRetrievedImageField.price = book.price;
      bookwithRetrievedImageField.picByte = book.picByte;
      this.books.push(bookwithRetrievedImageField);
    }
  }

  addToCart(id) {
    let book = this.books.find(book => {
      return book.id === +id;
    });
    let cartData = [];
    //retrieve cart data from localstorage
    // let data = this.getItems();
    // //parse it to json 
    // if (data !== null) {
    //   cartData = JSON.parse(data);
    // }
    // add the selected book to cart data
    cartData.push(book);
    //updated the cartBooks
    this.updateCartData(cartData);
    //save the updated cart data in localstorage
    localStorage.setItem('cart', JSON.stringify(cartData));
    //make the isAdded field of the book added to cart as true
    book.isAdded = true;
  }

  updateCartData(cartData) {
    this.cartBooks = cartData;
  }


}
