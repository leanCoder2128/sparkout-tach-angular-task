import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { UserDto } from '../model';

@Injectable()
export class AuthService {
  private apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}


  registerUser(payload : UserDto){
    return this.http.post<UserDto>(this.apiURL + '/userList' , payload);
  }

  getUserList(){
    return this.http.get<UserDto[]>(this.apiURL + '/userList');
  }
}
