import { Component, OnInit } from '@angular/core';
import {GlobalService} from 'app/services/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
  	 public global: GlobalService) { }

  ngOnInit() {}

  isBuyer() {
  	this.global.isBuyer = true;
  }

  isSeller() {
  	this.global.isSeller = true;
  }

}
