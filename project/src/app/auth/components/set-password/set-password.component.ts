import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.css']
})
export class SetPasswordComponent implements OnInit {
  user = {
    password: '',
    confirmPassword: '',
  };
  signupId: any;
  passwordMismatch = false;
  emailVerified: boolean = false;

  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      this.signupId = params['signupid'];
      console.log('Signup ID:', this.signupId);
      this.authService.verifyEmail(this.signupId).subscribe((response: any) => {
        this.emailVerified = response.status === 200;
        console.log(response);

        // Redirect if email is already verified
        if (this.emailVerified) {
          this.router.navigate(['/login']);
        }
      });
    });
  }

  ngOnInit() {}

  submitForm(form: any) {
    if (form.valid && !this.emailVerified) {
      if (this.user.password !== this.user.confirmPassword) {
        this.passwordMismatch = true;
      } else {
        this.passwordMismatch = false;
        console.log('Form submitted:', this.user);

        this.authService.setNewPassword(this.user.password, this.signupId).subscribe((response: HttpResponse<string>) => {
          const statusCode = response.status;
          console.log(`Status Code: ${statusCode}`);
          console.log(response);

          if (statusCode === 200) {
            this.router.navigate(['/login']);
          } else {
            this.router.navigate(['/set-password']);
          }
        });
      }
    }
  }
}
