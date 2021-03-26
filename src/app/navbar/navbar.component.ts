import { Component, OnInit, DoCheck } from '@angular/core';
import { HostListener } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'tr-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, DoCheck {
  
  travelCnt: number = 0;

  constructor(private cartService: CartService) { }
  
  ngDoCheck(): void {
    this.travelCnt = this.cartService.getItemCount();
  }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e: Event) {
    let ele = document.querySelector('.navbar');
    let hero = document.querySelector('.hero')
    if (window.pageYOffset >= hero!.clientHeight - ele!.clientHeight) {
      ele!.classList.add('bg-dark');
      ele!.classList.remove('bg-transparent');
    } else {
      ele!.classList.remove('bg-dark');
      ele!.classList.add('bg-transparent');
    }
  }
}
