import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-llogin',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(private router:Router) {}
    logIn(){
    alert('success')
    this.router.navigateByUrl('/home')
    // this.router.navigate(['/home',id])
   }


}
