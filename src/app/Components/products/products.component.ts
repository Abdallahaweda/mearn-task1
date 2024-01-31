import { Component, importProvidersFrom } from '@angular/core';
import { ProductListService } from "../../services/product-list.service";
import { product} from "../../DataTypes/product";
import { CartListService } from '../../services/cart-list.service';
@Component({
  selector: 'app-products',

  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  p:product[]

  constructor(private _prodService:ProductListService,private _cartService:CartListService){
    this.p=_prodService.products
  }

  reseveData(data:string){
    console.log(data);
      }
      addProduct(item:product){
        this._cartService.addToCart(item.ID)
      }
}
