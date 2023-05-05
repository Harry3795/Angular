import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Mycomponents/header/header.component';
import { formatCurrency } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatMenuModule } from '@angular/material/menu';
import { LoginComponent } from './Mycomponents/login/login.component';
import { PaintingComponent } from './Mycomponents/painting/painting.component';
import { CommerceComponent } from './Mycomponents/commerce/commerce.component';
import { HomeComponent } from './Mycomponents/home/home.component';
import { SignupComponent } from './Mycomponents/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { UserProfileComponent } from './Mycomponents/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    PaintingComponent,
    CommerceComponent,
    HomeComponent,
    SignupComponent,
    UserProfileComponent,

  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    NgbModule,
    MatMenuModule,
    HttpClientModule,
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
