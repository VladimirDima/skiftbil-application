import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {GlobalService} from 'app/services/global.service';
import {FormControl, Validators} from '@angular/forms';

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
  		this.router.navigate(["contact-seller"]);
  		this.global.isBuyer = false;
  	} else {
  		this.router.navigate(["contact-buyer"]);
  	}
  	
  }
   email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

}
