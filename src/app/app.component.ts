import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { product } from './DataTypes/product';
import { ProductListService } from './services/product-list.service';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mearn-task';
  User='enter your name'
  Email:string=''
  p:product[]
  constructor(private _prodService:ProductListService){
    this.p=_prodService.products
  }
  reseveData(data:string){
console.log(data);

  }
  clicked(val:string){
    // console.log(val);
    this.User=val

  }
  }
