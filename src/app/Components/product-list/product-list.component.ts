import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Iproduct } from '../../DataTypes/productList';
import { APIResult } from '../../DataTypes/apiResault';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-product-list',

  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  list: Iproduct[] = [];
  constructor(private prodApiService: ApiService) {
    this.prodApiService.GetAllProducts().subscribe({
      next: (response) => {
        console.log(response);
        this.list = response.data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
