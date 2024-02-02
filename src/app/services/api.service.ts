import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIResult } from '../DataTypes/apiResault';
import { Iproduct } from '../DataTypes/productList';
import { IRegisterUser } from '../DataTypes/user';
import { ILoginUser } from '../DataTypes/user';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  OriginalPath = 'http://localhost:5000';
  constructor(private http: HttpClient) {}
  GetAllProducts() {
    return this.http.get<APIResult<Iproduct[]>>(this.OriginalPath + '/product');
  }
  GetProductByID(id: string) {
    return this.http.get<APIResult<Iproduct>>(
      this.OriginalPath + 'product' + id
    );
  }
  AddProduct(data: FormData) {
    return this.http.post<APIResult<any>>(
      this.OriginalPath + '/product/add',
      data
    );
  }
  ////////////////////////////!
  Register(User: IRegisterUser) {
    return this.http.post<APIResult<any>>(
      this.OriginalPath + '/user/register',
      User
    );
  }
  Login(User: ILoginUser) {
    return this.http.post<APIResult<any>>(
      this.OriginalPath + '/user/login',
      User
    );
  }
}
