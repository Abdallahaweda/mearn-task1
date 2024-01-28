import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';

export const routes: Routes = [
  {path:'',component:AppComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent}
];
