import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';

@Injectable()
export class MyCartService {
  private apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getMyCartDetail() {
    return this.http.get<any[]>(this.apiURL + '/myCart');
  }

  updateItemInCart(id: string, updatedItem: any): Observable<any> {
    return this.http.put<any>(`${this.apiURL}/myCart/${id}`,updatedItem );
  }

  updateItemsInCart(items: any[]): Observable<any[]> {
    const updateRequests = items.map(item => 
      this.updateItemInCart(item.id, item)
    );
    return forkJoin(updateRequests);
  }

  deleteItemFromCart(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/myCart/${id}`);
  }
}
