import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  API_URI = 'http://localhost:3000/api';

    getUser(password_user: string) {
      return this.http.get(`${this.API_URI}/users/${password_user}`);
    } 
  
    saveUser(user: User) {
      return this.http.post(`${this.API_URI}/users`, user);
    }
}
