import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { IRegisterUser } from '../../DataTypes/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',

  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  user: IRegisterUser;
  constructor(private AuthApiServ: ApiService, private router: Router) {
    this.user = {
      name: '',
      password: '',
      email: '',
      phoneNumber: '',
    };
  }
  send() {
    this.AuthApiServ.Register(this.user).subscribe({
      next: (response) => {
        if (response.success == true) {
          alert(response.message);
          this.router.navigateByUrl('/user/login');
        } else {
          alert(response.message);
        }
      },
    });
  }
}
