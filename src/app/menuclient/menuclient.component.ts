import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menuclient',
  templateUrl: './menuclient.component.html',
  styleUrls: ['./menuclient.component.css']
})
export class MenuclientComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  emptyCart() {
    localStorage.clear();
  }
}
