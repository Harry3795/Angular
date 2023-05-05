import { Component } from '@angular/core';
import { UserSignupService } from 'src/app/services/user-signup.service';
import { Router } from '@angular/router';
import { SignUp } from 'src/app/data-type';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private userSignup:UserSignupService,private router:Router){

  }
  signup(data:SignUp):void{
    this.userSignup.userSignup(data).subscribe((result)=>{
    if (result) {
      this.router.navigate(['userProfile'])
    }
    }); 
  }
}
