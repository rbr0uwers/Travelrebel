import { Component, OnInit } from '@angular/core';
import { ProductsService} from '../products.service';
import { SelectedTravel, Travel } from '../travel';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { CartService } from '../cart.service'

@Component({
  selector: 'tr-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.css']
})
export class TravelsComponent implements OnInit {

  products : Array<Travel>;
  selection = new FormGroup({
    date: new FormControl("", Validators.required),
  })

  constructor(private productsService : ProductsService, private cartService: CartService) { 
    this.products = productsService.getProducts();
  }

  ngOnInit(): void {
  }

  onSubmit(travel : Travel){
    if (this.selection.valid) {
      let selectedTravel : SelectedTravel = {...travel, selectedStartdate: this.selection.value.date, persons: 1};
      this.cartService.addItem(selectedTravel);
    } 
  }
}
