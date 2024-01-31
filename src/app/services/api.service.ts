import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIResult } from '../DataTypes/apiResault';
import { Iproduct } from '../DataTypes/productList';
import { IRegisterUser } from '../DataTypes/user';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  OriginalPath = '';
  constructor(private http: HttpClient) {}
  GetAllProducts() {
    return this.http.get<APIResult<Iproduct[]>>(this.OriginalPath + 'products');
  }
  GetProductByID(id: string) {
    return this.http.get<APIResult<Iproduct>>(
      this.OriginalPath + 'product' + id
    );
  }
  Register(User: IRegisterUser) {
    return this.http.post<APIResult<any>>(
      this.OriginalPath + 'user/register',
      User
    );
  }
}
