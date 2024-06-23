import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from '../../../service/auth.service';
import { UserDto } from '../../../model';

export const StrongPasswordRegx: RegExp =
  /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  isSignUpEnabled = true;
  userDetail: UserDto[] = [];
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private route: Router,
    private spinner: NgxSpinnerService,
    private notificationSvc: NotificationsService,
    private loginSvc: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [
        null,
        [Validators.required, Validators.pattern(StrongPasswordRegx)],
      ],
      confirmPassword: [null],
      userName: [null],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    
    this.spinner.show();

    const loginForm = this.loginForm;
    const { email, password, userName, confirmPassword } = loginForm.controls;

    
    const showWarning = (message: string) => {
        this.notificationSvc.warn('Warning', message);
        this.spinner.hide();
    };

    
    if (!this.isSignUpEnabled && (!email?.value || !password?.value)) {
        showWarning(`${!email?.value ? 'EmailId' : 'Password'} is required`);
        return;
    }

    if (this.isSignUpEnabled) {
        if (!email?.value || !password?.value || !userName?.value || !confirmPassword?.value) {
            showWarning(`${!email?.value ? 'EmailId' : !password?.value ? 'Password' : !userName?.value ? 'User Name' : 'Confirm Password'} is required`);
            return;
        }
        if (password.value !== confirmPassword.value) {
            showWarning('Password not matched with confirm password you entered');
            return;
        }
    }

    if (!this.isSignUpEnabled) {
        this.loginSvc.getUserList().subscribe((res) => {
            const userDetail = res?.find(user =>
                user.email?.toLowerCase() === email?.value.toLowerCase() &&
                user.confirmPassword.toLowerCase() === password?.value.toLowerCase()
            );
            if (userDetail) {
                sessionStorage.setItem('userDetail', JSON.stringify(userDetail));
                this.route.navigateByUrl('/products');
            } else {
                this.notificationSvc.error('Error', 'Login failed. Please check your credentials');
            }
            this.spinner.hide();
        });
        return;
    }

    if (this.isSignUpEnabled && !loginForm.invalid) {
        this.loginSvc.registerUser(loginForm.value).subscribe((res) => {
            if (res) {
                this.notificationSvc.success('Success', 'Registration successful. Please use your credentials to login');
                this.isSignUpEnabled = false;
            }
            this.spinner.hide();
        });
    } else {
        showWarning('Registration failed. Please ensure your credentials follow the password policy');
    }
}

}
