import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { register } from '../models/register';
import { UserLogin } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl=environment.baseurl;
  
  constructor(private http: HttpClient) { }
  signUp(user: register) {
    return this.http.post(`${this.baseUrl}/companies`, user)
  }
  getToken(): string {
    return localStorage.getItem('accessToken') // Return an empty string if the token is null or undefined
  }
  login(data:UserLogin){
    return this.http.post<any>(this.baseUrl+'api/v1/job-provider/login',data);
  }

}
