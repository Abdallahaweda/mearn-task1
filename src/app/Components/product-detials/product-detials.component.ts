import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-product-detials',
  standalone: true,
  imports: [],
  templateUrl: './product-detials.component.html',
  styleUrl: './product-detials.component.css',
})
export class ProductDetialsComponent {
  constructor(
    private route: ActivatedRoute,
    private prodApiService: ApiService
  ) {
    console.log(this.route.snapshot.params);
    let id = this.route.snapshot.params['id'];
    this.prodApiService.GetProductByID(id).subscribe({
      next: (response) => {
        console.log(response);
      },
    });
  }
}
