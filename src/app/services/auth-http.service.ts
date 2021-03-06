import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly EMAIL_KEY = 'email';
  baseUrl:string = 'http://localhost:3000';
  
  constructor(private http: HttpClient) {   }

  login(email:string, password:string)  
  {
    let httpOptions = {
      params: {
        email,
        password
      }
    }
    return this.http.get( this.baseUrl  + '/users' ,  httpOptions ); 
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem(this.EMAIL_KEY);
    return (token !== null)
  }

  public logout() {
    localStorage.clear();
  }
}

