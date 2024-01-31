import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { ProductsComponent } from './Components/products/products.component';
import { RegisterComponent } from './Components/register/register.component';
import { NotFoundError } from 'rxjs';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ProductDetialsComponent } from './Components/product-detials/product-detials.component';
import { ProductListComponent } from './Components/product-list/product-list.component';

export const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'static-products',component:ProductsComponent},
  {path:'products',component:ProductListComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'detials/:id',component:ProductDetialsComponent},
  {path:'**',component:NotFoundComponent},

];
