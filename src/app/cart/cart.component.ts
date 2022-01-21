import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartBooks: any;
  constructor() { }

  ngOnInit(): void {

    let data = localStorage.getItem('cart');
    if (data !== null) {
      this.cartBooks = JSON.parse(data);
      
    } else {
      this.cartBooks = [];
    }
  }

  emptyCart() {
    this.cartBooks = [];
    localStorage.clear();
  }

 
}
