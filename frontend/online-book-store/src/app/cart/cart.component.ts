import { Component, OnInit } from '@angular/core';
import { Book } from '../entity/Book';
import { HttpClientService } from '../service/http-client.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  books = [];
  
  constructor(private http: HttpClientService) {}
  _getCart(): void {
    this.http.getCartItems().subscribe((data: any) => {
      this.books = data.data;
      console.log(this.books);
    });
  }
  _increamentQTY(id, quantity): void {
    const payload = {
      productId: id,
      quantity,
    };
    this.http.increaseQty(payload).subscribe(() => {
      this._getCart();
      alert('Book Added');
    });
  }
  _emptyCart(): void {
    this.http.emptyCart().subscribe(() => {
      this._getCart();
      alert('Cart Emptied');
    });
  }
  ngOnInit(): void {
    this._getCart();
  }

}

