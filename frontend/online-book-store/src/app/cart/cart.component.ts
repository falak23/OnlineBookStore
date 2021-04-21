import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  carts;
  cartDetails;
  constructor(private httpClient: HttpClientService) {}
  _getCart(): void {
    this.httpClient.getCartItems().subscribe((data: any) => {
      this.carts = data.data;
      // this.cartDetails = data.data;
      console.log(this.carts);
    });
  }
  _increamentQTY(id, quantity): void {
    const payload = {
      productId: id,
      quantity,
    };
    this.httpClient.increaseQty(payload).subscribe(() => {
      this._getCart();
      alert('Book Added');
    });
  }
  _emptyCart(): void {
    this.httpClient.emptyCart().subscribe(() => {
      this._getCart();
      alert('Cart Emptied');
    });
  }
  ngOnInit(): void {
    this._getCart();
  }
}