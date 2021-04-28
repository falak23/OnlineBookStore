import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private host: string = "http://localhost:8080";
  constructor(private http: HttpClient) { }

 

  saveUser(user) {
    return this.http.post(`${this.host}/users/register`, user);
  }
  getUsers() {
    return this.http.get(`${this.host}/users/all`);
  }
  findUser(username) {
    return this.http.get(`${this.host}/users/${username}`);
  }

  getUserLogin(username, password){
    return this.http.get(`${this.host}/users/login/${username}`);
  }

}
