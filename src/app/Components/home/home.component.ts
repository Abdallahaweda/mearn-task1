import { Component } from '@angular/core';

@Component({
  selector: 'app-home',

  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  User='enter your name'
  Email:string=''
  title = 'mearn-task';

  clicked(val:string){
    // console.log(val);
    this.User=val

  }
}
