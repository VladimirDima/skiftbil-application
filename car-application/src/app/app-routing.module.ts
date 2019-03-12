import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { RegisterComponent }    from './views/register/register.component';
import { HomeComponent }        from './views/home/home.component';
import { ContactSellerComponent }     from './views/contact-seller/contact-seller.component';
import { ContactBuyerComponent }     from './views/contact-buyer/contact-buyer.component';
import { CarInfoOptionsComponent }      from './views/car-info-options/car-info-options.component';
import { CarRegistrationInputComponent }      from './views/car-registration-input/car-registration-input.component';
import { CarInfoComponent }     from './views/car-info/car-info.component';
import { CarPriceInputComponent }     from './views/car-price-input/car-price-input.component';
import { FinancingOptionComponent }     from './views/financing-option/financing-option.component';
import { FinancingDisplayComponent }     from './views/financing-display/financing-display.component';
import { ReminderComponent }     from './views/reminder/reminder.component';
import { LoanFlowComponent }     from './views/loan-flow/loan-flow.component';
import { DashboardComponent }     from './views/dashboard/dashboard.component';
import { ContactInfoOptionsComponent }     from './views/contact-info-options/contact-info-options.component';
 
export const appRoutes: Routes = [
    { path: 'register',  component: RegisterComponent },
    { path: 'home',  component: HomeComponent },
    { path: 'contact-seller',  component: ContactSellerComponent },
    { path: 'contact-buyer',  component: ContactBuyerComponent },
    { path: 'contact-options',  component: ContactInfoOptionsComponent },
    { path: 'car-options',  component: CarInfoOptionsComponent },
    { path: 'car-reg-input',  component: CarRegistrationInputComponent },
    { path: 'car-info',  component: CarInfoComponent },
    { path: 'car-price',  component: CarPriceInputComponent },
    { path: 'financing-option',  component: FinancingOptionComponent },
    { path: 'financing',  component: FinancingDisplayComponent },
    { path: 'reminder',  component: ReminderComponent },
    { path: 'loan-flow',  component: LoanFlowComponent },
    { path: 'dashboard',  component: DashboardComponent },

    // { path: 'result',  component: ResultComponent },
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: HomeComponent }
];
 
@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true} )],
  exports: [RouterModule]
})
 
export class AppRoutingModule {}