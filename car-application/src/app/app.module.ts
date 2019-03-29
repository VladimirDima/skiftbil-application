import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import { RegisterComponent } from './views/register/register.component';
import { HomeComponent } from './views/home/home.component';
import { CarInfoOptionsComponent } from './views/car-info-options/car-info-options.component';
import { CarRegistrationInputComponent } from './views/car-registration-input/car-registration-input.component';
import { AppRoutingModule } from './app-routing.module';
import { CarInfoComponent } from './views/car-info/car-info.component';
import { CarPriceInputComponent } from './views/car-price-input/car-price-input.component';
import { FinancingOptionComponent } from './views/financing-option/financing-option.component';
import { FinancingDisplayComponent } from './views/financing-display/financing-display.component';
import { ReminderComponent } from './views/reminder/reminder.component';
import { ContactSellerComponent } from './views/contact-seller/contact-seller.component';
import { ContactBuyerComponent } from './views/contact-buyer/contact-buyer.component';
import { BackComponent } from './bits/back/back.component';
import { LoanFlowComponent } from './views/loan-flow/loan-flow.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ContactInfoOptionsComponent } from './views/contact-info-options/contact-info-options.component';
import { NavbarComponent } from './bits/navbar/navbar.component';
import { userService } from './services/user.service';

import { HttpErrorHandler }     from './http-error-handler.service';
import { MessageService }       from './message.service';
import { FooterComponent } from './bits/footer/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    CarInfoOptionsComponent,
    CarRegistrationInputComponent,
    CarInfoComponent,
    CarPriceInputComponent,
    FinancingOptionComponent,
    FinancingDisplayComponent,
    ReminderComponent,
    ContactSellerComponent,
    ContactBuyerComponent,
    BackComponent,
    LoanFlowComponent,
    DashboardComponent,
    ContactInfoOptionsComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    HttpErrorHandler,
    MessageService,
    userService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
