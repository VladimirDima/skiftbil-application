import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {GlobalService} from 'app/services/global.service';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import {userService} from 'app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public regForm: FormGroup;

  constructor(private router: Router, private global: GlobalService, private user: userService) {
     this.regForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.compose([Validators.minLength(5),Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$') ])),
    });
  }

  ngOnInit() {
   
  }


  public hasError = (controlName: string, errorName: string) =>{
    return this.regForm.controls[controlName].hasError(errorName);
  }


  nextRoute () {
  	if (this.global.isBuyer === true) {
  		this.router.navigate(["contact-seller"]);
  		this.global.isBuyer = false;
  	} else {
  		this.router.navigate(["contact-buyer"]);
  	}
  	
  }

  addUser (username, email, password) {
    this.user.addUser(username, email, password);

     if (this.regForm.invalid) {
            return;
        }

    this.nextRoute();
  }

}
