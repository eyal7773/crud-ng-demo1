import { Component, OnInit } from '@angular/core';

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
  
  constructor() { 
    this.setMenuItems();
  }

  setMenuItems() {
    this.items.push({title:'Home', link:'dashboard'});
    this.items.push({title:'Courses', link:'courses'});
  }

  ngOnInit(): void {
  }

}
