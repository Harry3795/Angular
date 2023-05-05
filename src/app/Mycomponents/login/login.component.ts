import { Component } from '@angular/core';
import { UserLoginService } from 'src/app/services/user-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

constructor(private userLogin:UserLoginService){

}
login(data:Object):void{
  console.warn(data);
  this.userLogin.userlogin(); 
}

}
