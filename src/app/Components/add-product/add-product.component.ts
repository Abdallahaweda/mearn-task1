import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Iproduct } from '../../DataTypes/productList';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-add-product',

  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {
  form: FormGroup;
  data: FormData;
  constructor(
    private builder: FormBuilder,
    private ApiService: ApiService,
    private router: Router
  ) {
    this.data = new FormData();
    this.form = this.builder.group({
      name: this.builder.control('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      price: ['0', [Validators.required, Validators.min(10)]],
      quantity: ['', [Validators.required, Validators.min(1)]],
      colors: this.builder.array([
        this.builder.control('#ff0000'),
        this.builder.control('#0000ff'),
      ]),
      // imgURL: ['', [Validators.required]],
      categoryName: ['test'],
      categoryID: ['1'],
      description: ['', [Validators.required, Validators.minLength(10)]],
    });
  }
  get colorArray() {
    return this.form.controls['colors'] as FormArray;
  }
  addColor() {
    this.colorArray.push(this.builder.control(''));
  }
  removeColor(i: any) {
    this.colorArray.removeAt(i);
  }
  chooseImg(imginput: any) {
    console.log(imginput.files);
    this.data.append('imgURL', imginput.files[0]);
  }
  addProduct() {
    console.log('NewProduct');
    console.log(this.form.value);
    for (const key in this.form.controls) {
      this.data.append(key, this.form.controls[key].value);
    }
    // let data = this.form.value as Iproduct;
    this.ApiService.AddProduct(this.data).subscribe({
      next: (response) => {
        console.log(response);
        if (response.success) {
          alert(response.message);
          this.form.reset();
          this.data = new FormData(); //!msh hs8ala !!!
          // this.router.navigateByUrl('/products');
        } else {
          alert(response.message);
        }
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
