import { Injectable } from '@angular/core';
import { Course } from '../interfaces/course';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  courses:Course[] = [];

  constructor() { 
    this.courses = [
      {id:1, name: 'Cakes course', desc: 'Learn to back amazing cakes', isActive: true,price: 3000,updatedAt: new Date('2022-01-02')},
      {id:2, name: 'Cars course', desc: 'Learn to build your own car', isActive: true,price: 2000,updatedAt: new Date('2021-01-02')},
    ]
  }

  getCourses() : Course[] {
    return this.courses;
  }
}
