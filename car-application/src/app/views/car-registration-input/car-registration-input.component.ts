import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-car-registration-input',
  templateUrl: './car-registration-input.component.html',
  styleUrls: ['./car-registration-input.component.scss']
})
export class CarRegistrationInputComponent implements OnInit {
  public regNumForm: FormGroup;
 
  constructor( private CarService: CarService) { }

  ngOnInit() {
    this.getCar();

    this.regNumForm = new FormGroup({
      regNum: new FormControl('',  Validators.required),
    });

  }
   

  getCar(): void {
    let regNum = this.regNumForm.get('regNum').value;

    this.CarService.getCar(regNum)
      .subscribe(car => console.log(car));
  }

   public hasError = (controlName: string, errorName: string) =>{
    return this.regNumForm.controls[controlName].hasError(errorName);
  }
}
