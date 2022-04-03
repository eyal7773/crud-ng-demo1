import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-http.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private readonly EMAIL_KEY = 'email';

  isAuthenticated:boolean = false;
  
  constructor(private _router: Router, 
              private _authService:AuthService) {

   }

  ngOnInit(): void {
  }

  onLogin(value:any) :void{
    console.log(value);

    this._authService.login(value.email,value.password ).subscribe( (response:any ) => {
      // We will check
      // in a very simple way
      // that the object arrived.
      if (response[0] && response[0].id) {
        this.isAuthenticated = true;
        localStorage.setItem(this.EMAIL_KEY,value.email)
        this._router.navigate(['dashboard']);
      } else {
        throw new Error('not authenticated')
      }
    },(err) => {
      localStorage.clear();
      this.isAuthenticated = false;
      console.log('NOT')
    })
  }


}
