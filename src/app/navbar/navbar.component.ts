import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'tr-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e: Event) {
    let ele = document.querySelector('.navbar');
    if (window.pageYOffset >= window.innerHeight - ele!.clientHeight) {
      ele!.classList.add('bg-dark');
      ele!.classList.remove('bg-transparent');
    } else {
      ele!.classList.remove('bg-dark');
      ele!.classList.add('bg-transparent');
    }
  }
}
