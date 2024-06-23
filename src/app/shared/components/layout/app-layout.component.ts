import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { UserDto } from "../../../model";
import { CartDialogComponent } from "../../../modules/Dialog/cart/cart.dialog.component";

@Component({
    selector: 'app-layout',
    templateUrl: 'app-layout.component.html',
    styleUrl: './app-layout.component.scss'
})
export class AppLayoutComponent implements OnInit{
    userDetail : UserDto ;
    constructor(private dialog : MatDialog, private router : Router){
        const userDetail = sessionStorage.getItem('userDetail');
        if(userDetail){
          this.userDetail = JSON.parse(userDetail);
        }
    }


    ngOnInit(): void {
    }

    openCart(enterAnimationDuration: string, exitAnimationDuration: string){
        this.dialog.open(CartDialogComponent, {
            width: '1200px',
            enterAnimationDuration,
            exitAnimationDuration,
          });
    }

    logot(){
        sessionStorage.clear();
        this.router.navigateByUrl('/login');
    }
}