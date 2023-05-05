import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Mycomponents/login/login.component';
import { HeaderComponent } from './Mycomponents/header/header.component';
import { PaintingComponent } from './Mycomponents/painting/painting.component';
import { CommerceComponent } from './Mycomponents/commerce/commerce.component';
import { HomeComponent } from './Mycomponents/home/home.component';
import { SignupComponent } from './Mycomponents/signup/signup.component';
import { UserProfileComponent } from './Mycomponents/user-profile/user-profile.component';
import { AuthenticationGuard } from './services/authentication.guard';

const routes: Routes = [

  {
    path:'',
    component:HomeComponent
  },
  {    path:'login',
    component:LoginComponent
  },
  {
    path:'painting',
    component:PaintingComponent
  },
  {
    path:'commerce',
    component:CommerceComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'signup',
    component:SignupComponent,
    canActivate:[AuthenticationGuard]
  },
  {
    path:'userProfile',
    component:UserProfileComponent,
    canActivate:[AuthenticationGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
