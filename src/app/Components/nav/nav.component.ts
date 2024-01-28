import { Component } from '@angular/core';
import { ProductListService } from '../../services/product-list.service';
import { CartListService } from '../../services/cart-list.service';

@Component({
  selector: 'app-nav',

  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
clientName:string=''
productNumber=0
cartNumber=0
constructor(private _prodNum:ProductListService,private _cartNum:CartListService){
this.productNumber=this._prodNum.products.length
this.cartNumber=this._cartNum.userCart.length
}
}
