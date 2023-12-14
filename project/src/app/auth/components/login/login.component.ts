import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { UserLogin } from '../../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  backgroundImageUrl = '../../../../../assets/images/LoginPageImg.png';

  constructor( private authService: AuthService, private router: Router) {}

  login(loginForm: NgForm) {
    const loginFormvalue = loginForm.value;

    const userlogin: UserLogin = {
      email: loginFormvalue.email,
      password: loginFormvalue.password
    };
  
    this.authService.login(userlogin).subscribe(
      (response:any) => {
        console.log("login successfully",response.token);
        localStorage.setItem('accessToken',response.token);
        localStorage.setItem('jobProviderId',response.id);
        this.router.navigate(['home']);
      },
      (error) => {
        alert('login failed');
        console.log('Login failed:', error);
      }
    );
    // this.router.navigate(['home']);
  }
}

