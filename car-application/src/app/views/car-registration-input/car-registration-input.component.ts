import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestMethod, RequestOptions, Headers } from '@angular/http';

@Component({
  selector: 'app-car-registration-input',
  templateUrl: './car-registration-input.component.html',
  styleUrls: ['./car-registration-input.component.scss']
})
export class CarRegistrationInputComponent {

  result;
  errorFromSubscribe;
  errorFromCatch;
  displayItems;
  constructor(private http: Http) { }

  onClick() {

    this.http.get('http://api.nrpla.de')
      .subscribe((res: Response) => {
        this.result = res.json();
        console.log(this.result);
      }, error => {
        console.log(error);
        this.errorFromSubscribe = error;
      });

  }

}
