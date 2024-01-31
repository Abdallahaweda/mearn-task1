import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CartListService {
  // userCart:any[]=[]
  cartSubject:BehaviorSubject<any[]>
  constructor() {
    this.cartSubject=new BehaviorSubject<any[]>(this.getFromStorge());

  }
  getFromStorge():any[]{
    let str=localStorage.getItem('cart')
    if (str==null||str=='') {
      return []
    } else {
      return JSON.parse(str)as any[]
    }
  }
setToStorage(newProduct:any[]){
localStorage.setItem('cart',JSON.stringify(newProduct))
}

  addToCart(id:any){
    let data=this.cartSubject.value
    data.push(id)
    this.setToStorage(data)
  this.cartSubject.next(data)
    // this.userCart.push(id)
  }
}
