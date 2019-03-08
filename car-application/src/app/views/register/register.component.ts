import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {GlobalService} from 'app/services/global.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor( 
  	private router: Router,
  	private global: GlobalService 
  	) { }

  nextRoute () {
  	if (this.global.isBuyer === true) {
  		this.router.navigate(["contact-buyer"]);
  		this.global.isBuyer = false;
  	} else {
  		this.router.navigate(["contact-seller"]);
  	}
  	
  }

}
