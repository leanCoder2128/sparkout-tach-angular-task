import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "../model";

@Injectable()
export class ProductService{

    private apiURL = 'http://localhost:3000/';



    constructor(private http : HttpClient){
        
    }

    getProductDetail(){
       return this.http.get<Product[]>(this.apiURL + 'product');
    }

    addItemToMyCart(myCartPayload : Product){
        return this.http.post<Product>(this.apiURL + 'myCart' , myCartPayload);
    }
}