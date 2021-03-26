import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Travel } from '../travel';

@Component({
  selector: 'tr-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cart: Array<Travel> = [];
  cartTotal: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.getItems();
    this.cartTotal = this.cartService.getTotalPrice();
  }

  placeOrder() : void {
    this.cartService.clearCart();
    alert("Thank you!");
  }

}
