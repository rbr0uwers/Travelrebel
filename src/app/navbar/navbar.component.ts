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
    let ele = document.querySelector<HTMLElement>('.navbar');
    let hero = document.querySelector<HTMLElement>('.hero')
    
    //ignore on md size --> set it to #212529 instead
    if (window.innerWidth < 768) {
      ele!.style.backgroundColor = "#212529";
      return;
    }
    
    if (window.pageYOffset >= hero!.clientHeight - ele!.clientHeight) {
      ele!.style.backgroundColor = "#212529";
    } else {
      ele!.style.backgroundColor = "transparent";
    }
  }
}
