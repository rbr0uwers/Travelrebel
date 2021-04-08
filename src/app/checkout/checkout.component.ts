import { Component, OnInit, DoCheck } from '@angular/core';
import { CartService } from '../cart.service';
import { SelectedTravel } from '../travel';
import Swal from 'sweetalert2';

@Component({
  selector: 'tr-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit, DoCheck {

  cart: Array<SelectedTravel> = [];
  total: number = 0;
  discountedTotal: number = 0;
  discount : number = 0;

  constructor(private cartService: CartService) { }
  ngDoCheck(): void {
    this.total = this.cartService.getTotal();
    this.discountedTotal = this.cartService.getDiscountedTotal();
    this.cart = this.cartService.getItems();
    this.discount = this.cartService.getTotal() - this.cartService.getDiscountedTotal();
  }

  ngOnInit(): void {
    this.total = this.cartService.getTotal();
    this.cart = this.cartService.getItems();
    this.discountedTotal = this.cartService.getDiscountedTotal();
    this.discount = this.cartService.getTotal() - this.cartService.getDiscountedTotal();
  }

  placeOrder() : void {
    this.cartService.clearCart();
    Swal.fire(
      'Thank you!',
      'Enjoy your travel.',
      'success'
    )
  }

  increasePersons(travel: SelectedTravel) : void {
    travel.persons++;
  }

  decreasePersons(travel: SelectedTravel) : void {
    if (travel.persons > 1) 
      travel.persons--;
    else {
      Swal.fire({
        title: `Do you really want to delete your travel to ${travel.destination}?`, icon: 'question', showCancelButton: true, confirmButtonColor: '#DC3646', cancelButtonColor: '#248754', confirmButtonText: 'Yes, delete my travel.'
      }).then((result) => {
        if (result.isConfirmed) {
          this.cartService.removeItem(travel);
        }
      })
    }
  }
}

