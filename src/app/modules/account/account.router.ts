import {  Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";


export const accountRoutes : Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component : LoginComponent,
        data: {title : 'Log in to continue'}
    }
];