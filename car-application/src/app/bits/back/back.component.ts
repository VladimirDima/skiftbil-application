import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'back-button',
    template: `<button mat-raised-button (click)="goBack()" [color]="color" type="button" class="button-full-width">Back</button>`,
})
export class BackComponent {
    @Input()color: string;

  constructor(private location: Location) { }

  goBack() {
    this.location.back();
  }
}