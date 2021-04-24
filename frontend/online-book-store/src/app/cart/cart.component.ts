// import { Component, OnInit } from '@angular/core';
// import { Book } from '../entity/Book';
// import { HttpClientService } from '../service/http-client.service';
// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.component.html',
//   styleUrls: ['./cart.component.css'],
// })
// export class CartComponent implements OnInit {
//   carts;
//   cartDetails;
//   books: Array<Book>;
//   cartBooks: any;

//   constructor(private httpClient: HttpClientService) {}
//   _getCart(): void {
//     this.httpClient.getCartItems().subscribe((data: any) => {
//       this.carts = data.data;
//       // this.cartDetails = data.data;
//       console.log(this.carts);
//     });
//   }
//   _increamentQTY(id, quantity): void {
//     const payload = {
//       productId: id,
//       quantity,
//     };
//     this.httpClient.increaseQty(payload).subscribe(() => {
//       this._getCart();
//       alert('Book Added');
//     });
//   }
//   _emptyCart(): void {
//     this.httpClient.emptyCart().subscribe(() => {
//       this._getCart();
//       alert('Cart Emptied');
//     });
//   }

//   addToCart(id) {
//     //retrieve book from books array using the book id
//     let book = this.books.find(book => {
//       return book.id === +book.id;
//     });
//     let cartData = [];
//     //retrieve cart data from localstorage
//     let data = localStorage.getItem('cart');
//     //prse it to json 
//     if (data !== null) {
//       cartData = JSON.parse(data);
//     }
//     // add the selected book to cart data
//     cartData.push(book);
//     //updated the cartBooks
//     // this.updateCartData(cartData);
//     //save the updated cart data in localstorage
//     localStorage.setItem('cart', JSON.stringify(cartData));
//     //make the isAdded field of the book added to cart as true
//     book.isAdded = true;
//   }

//   //   updateCartData(cartData) {
//   //   this.cartBooks = cartData;
//   // }

//   //   goToCart() {
//   //   this.router.navigate(['/cart']);
//   // }

//   // emptyCart() {
//   //   this._getCart = [];
//   //   localStorage.clear();
//   // }


//   ngOnInit(): void {
//     this._getCart();
//   }
// }


import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent{
    books = this.cartService.getItems();
  
    constructor(
      private cartService: CartService
    ) { }
  }