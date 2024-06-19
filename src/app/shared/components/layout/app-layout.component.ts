import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { CartDialogComponent } from "../../../modules/Dialog/cart/cart.dialog.component";

@Component({
    selector: 'app-layout',
    templateUrl: 'app-layout.component.html',
    styleUrl: './app-layout.component.scss'
})
export class AppLayoutComponent implements OnInit{

    constructor(private dialog : MatDialog){}


    ngOnInit(): void {
    }

    openCart(enterAnimationDuration: string, exitAnimationDuration: string){
        this.dialog.open(CartDialogComponent, {
            width: '1200px',
            enterAnimationDuration,
            exitAnimationDuration,
          });
    }
}