import { Injectable } from '@angular/core';
import { Travel } from './travel';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart : Array<Travel> = [];

  constructor() { }

  getTotalPrice() : number {
    return this.cart.reduce((acc, ele) => acc + ele.price, 0);
  }

  getItems() : Array<Travel> {
    return this.cart;
  }

  addItem(travel: Travel) : void {
    this.cart.push(travel);
  }

  clearCart() : void {
    this.cart = [];
  }

  getItemCount() : number {
    return this.cart.length;
  }
}
