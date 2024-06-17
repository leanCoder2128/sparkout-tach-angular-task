import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
    isSignUpEnabled = true;
    loginForm: FormGroup;
    constructor(private fb : FormBuilder){
        this.loginForm = this.fb.group({
            email : [null, [Validators.required , Validators.email]],
            password : [null, Validators.required]
        })
    }


    ngOnInit(): void {
        
    }

    onSubmit(): void {
        if (this.loginForm.invalid) {
          return;
        }
        // Call API to login
        console.log('Login successful!');
      }
}