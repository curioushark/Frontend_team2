import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountRegisterSuccessComponent } from './controller/account-register-success/account-register-success.component';
import { AccountRegisterComponent } from './controller/account-register/account-register.component';
import { CustomerRegisterSuccessComponent } from './controller/customer-register-success/customer-register-success.component';
import { CustomerRegisterComponent } from './controller/customer-register/customer-register.component';
import { HomePageComponent } from './controller/home-page/home-page.component';
import { LoginComponent } from './controller/login/login.component';
import { ProfileComponent } from './controller/profile/profile.component';
import { WelcomePageComponent } from './controller/welcome-page/welcome-page.component';


const routes: Routes = [
  {path:'',redirectTo:'welcomePage',pathMatch:'full' },
  {path:'welcomePage',component:WelcomePageComponent },
  {path:'customerRegister',component:CustomerRegisterComponent },
  {path:'customerRegisterSuccess',component:CustomerRegisterSuccessComponent },
  {path:'accountRegister',component:AccountRegisterComponent },
  {path:'accountRegisterSuccess/:id',component:AccountRegisterSuccessComponent },
  {path:'login',component:LoginComponent },
  {path:'home/:id',component:HomePageComponent },
  {path:'profile/:id',component:ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
