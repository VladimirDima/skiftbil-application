import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { RegisterComponent }    from './views/register/register.component';
import { HomeComponent }        from './views/home/home.component';
import { SendInfoComponent }     from './views/send-info/send-info.component';
import { CarInfoOptionsComponent }      from './views/car-info-options/car-info-options.component';
import { CarRegistrationInputComponent }      from './views/car-registration-input/car-registration-input.component';
import { CarInfoComponent }     from './views/car-info/car-info.component';
import { CarPriceInputComponent }     from './views/car-price-input/car-price-input.component';
import { FinancingOptionComponent }     from './views/financing-option/financing-option.component';
import { FinancingDisplayComponent }     from './views/financing-display/financing-display.component';
import { ReminderComponent }     from './views/reminder/reminder.component';
 
export const appRoutes: Routes = [
    { path: 'register',  component: RegisterComponent },
    { path: 'home',  component: HomeComponent },
    { path: 'contact',  component: SendInfoComponent },
    { path: 'car-options',  component: CarInfoOptionsComponent },
    { path: 'car-reg-input',  component: CarRegistrationInputComponent },
    { path: 'car-info',  component: CarInfoComponent },
    { path: 'car-price',  component: CarPriceInputComponent },
    { path: 'financing-option',  component: FinancingOptionComponent },
    { path: 'financing',  component: FinancingDisplayComponent },
    { path: 'reminder',  component: ReminderComponent },
    // { path: 'result',  component: ResultComponent },
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: HomeComponent }
];
 
@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true} )],
  exports: [RouterModule]
})
 
export class AppRoutingModule {}