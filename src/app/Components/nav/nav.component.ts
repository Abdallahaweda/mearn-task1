import { Component } from '@angular/core';
import { ProductListService } from '../../services/product-list.service';
import { CartListService } from '../../services/cart-list.service';
import { IStoredUser } from '../../DataTypes/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav',

  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  productNumber = 0;
  clientName: string = '';
  cartNumber = 0;
  LoggedUser: IStoredUser | null = null;
  constructor(
    private _prodNum: ProductListService,
    private _cartNum: CartListService,
    private AuthApiServ: AuthService
  ) {
    this.productNumber = this._prodNum.products.length;
    let obj = this._cartNum.cartSubject.subscribe((value) => {
      console.log(value);
      this.cartNumber = value.length;
    });
    this.AuthApiServ.UserSubject.subscribe((data) => {
      this.LoggedUser = data;
    });
    // obj.unsubscribe()
  }
  LogOut() {
    this.AuthApiServ.UserLoggedOut();
  }
}
