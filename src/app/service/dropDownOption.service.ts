import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable()
export class DropDownService{
    private apiURL = 'http://localhost:3000/filterOptions';

    constructor(private http : HttpClient){
        
    }

    getFilterOption(){
       return this.http.get<any[]>(this.apiURL);
    }
}