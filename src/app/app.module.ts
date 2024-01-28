import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { HomeComponent } from "./Components/home/home.component";
import { LoginComponent } from './Components/login/login.component';
import { FormsModule } from "@angular/forms";
import { NavComponent } from "./Components/nav/nav.component";
import { FooterComponent } from "./Components/footer/footer.component";
import { RateComponent } from "./Components/rate/rate.component";
import { CartListService } from "./services/cart-list.service";
import { RouteConfigLoadStart, RouterModule } from "@angular/router";
import { routes } from "./app.routes";

@NgModule({
  declarations:[
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavComponent,
    FooterComponent,
    RateComponent
   ],
  imports:[
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap:[
    AppComponent
  ],
  providers:[
CartListService
  ]

})
export class AppModule{}
