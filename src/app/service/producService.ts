import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ProductService{

    private apiURL = 'http://localhost:3000/';



    constructor(private http : HttpClient){
        
    }

    getProductDetail(){
       return this.http.get<any[]>(this.apiURL + 'product');
    }

    addItemToMyCart(myCartPayload : any){
        return this.http.post<any>(this.apiURL + 'myCart' , myCartPayload);
    }
}