import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-car-registration-input',
  templateUrl: './car-registration-input.component.html',
  styleUrls: ['./car-registration-input.component.scss']
})
export class CarRegistrationInputComponent implements OnInit {
  public regNumForm: FormGroup;
 
  constructor() { }

  ngOnInit() {
    this.regNumForm = new FormGroup({
      regNum: new FormControl('',  Validators.required),
    });
  }
   public hasError = (controlName: string, errorName: string) =>{
    return this.regNumForm.controls[controlName].hasError(errorName);
  }
  

}
