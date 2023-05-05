import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Deepkart';
  constructor(){
    // setTimeout(() => {
    //   this.title="Happy Apptad"
    // }, 3000);
  }
}
