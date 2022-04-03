import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-http.service';

export interface MenuItem {
  title:string;
  link:string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items:MenuItem[] = [];
  
  constructor(public _authService:AuthService,
              private _router:Router) { 
    this.setMenuItems();
  }

  setMenuItems() {
    this.items.push({title:'Home', link:'dashboard'});
    this.items.push({title:'Courses', link:'courses'});
  }

  ngOnInit(): void {
  }

  onLogout() {
    this._authService.logout();
    this._router.navigate(['']);
  }

}
