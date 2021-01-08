import { Component, OnInit } from '@angular/core';
import { ServiceCartService } from '../service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items;

  constructor(private cartService: ServiceCartService) { }

  ngOnInit() {
     this.items = this.cartService.getItems()
  }

}