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
let obj=this._cartNum.cartSubject.subscribe((value)=>{
  console.log(value);
  this.cartNumber=value.length

})
// obj.unsubscribe()
}
}
