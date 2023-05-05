import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignUp } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class UserSignupService {

  constructor(private http:HttpClient) {
    
  }
   userSignup(data:SignUp){
    return this.http.post('http://localhost:3000/signup',{data})
    // console.warn("user Signup Service is called")
  }
}
