import { Component, OnInit } from "@angular/core";

@Component({
    selector : 'app-homeScreen',
    templateUrl: './homeScreen.component.html',
    styleUrl: './homeScreen.component.scss'
})
export class HomeScreenComponent implements OnInit{
    toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
    constructor(){}


    ngOnInit(): void {
        
    }
}