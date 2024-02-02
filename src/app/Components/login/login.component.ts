import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ILoginUser, IStoredUser } from '../../DataTypes/user';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-llogin',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user: ILoginUser;
  constructor(
    private router: Router,
    private AuthApiServ: AuthService,
    private ApiService: ApiService
  ) {
    this.user = {
      email: '',
      password: '',
    };
  }
  logIn() {
    this.ApiService.Login(this.user).subscribe({
      next: (response) => {
        if (response.success) {
          alert(response.message);
          console.log(response.data);
          let data: IStoredUser = {
            token: response.data.token,
            name: response.data.user.name,
          };

          this.AuthApiServ.newUserLoggedIn(data);
          this.router.navigateByUrl('/home');
          // this.router.navigate(['/home',id])
        } else {
          alert(response.message);
        }
      },
    });
  }
}
