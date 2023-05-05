import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  constructor() { }
  userlogin(){
    console.warn("user Login Service is called")
  }
}
