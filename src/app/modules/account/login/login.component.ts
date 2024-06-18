import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
    isSignUpEnabled = true;
    loginForm: FormGroup;
    constructor(private fb : FormBuilder, private route : Router){
        this.loginForm = this.fb.group({
            email : [null, [Validators.required , Validators.email]],
            password : [null, Validators.required]
        })
    }


    ngOnInit(): void {
    }

    onSubmit(): void {
        // if (this.loginForm.invalid) {
        //   return;
        // }
        this.route.navigateByUrl('/products')
      }
}