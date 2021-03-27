import { Injectable } from '@angular/core';
import { Travel, SelectedTravel } from './travel';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart : Array<SelectedTravel> = [];

  constructor() { }

  getTotalPrice() : number {
    return this.cart.reduce((acc, ele) => acc + (ele.price*ele.persons), 0);
  }

  getItems() : Array<SelectedTravel> {
    return this.cart;
  }

  addItem(travel: SelectedTravel) : void {
    let found : boolean = false; 
    for (let ele of this.cart) {
      if (ele.destination === travel.destination && ele.selectedStartdate == travel.selectedStartdate) {
        ele.persons++;
        found = true;
      }
    }
    if (!found) this.cart.push(travel);
  }
    

  clearCart() : void {
    this.cart = [];
  }

  removeItem(travel: SelectedTravel) {
    this.cart.splice(this.cart.indexOf(travel), 1);
  }

  getItemCount() : number {
    return this.cart.length;
  }
}
