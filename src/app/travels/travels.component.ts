import { Component, OnInit } from '@angular/core';
import { ProductsService} from '../products.service';
import { Travel } from '../travel';
import { FormsModule } from '@angular/forms';
import { CartService } from '../cart.service'

@Component({
  selector: 'tr-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.css']
})
export class TravelsComponent implements OnInit {

  products : Array<Travel>;
  date: Date;

  constructor(private productsService : ProductsService, private cartService: CartService) { 
    this.products = productsService.getProducts();
    this.date = new Date();
  }

  ngOnInit(): void {
  }

  addToCart(selectedTravel : Travel) : void {
      this.cartService.addItem(selectedTravel);
  }

}
