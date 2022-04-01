import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/interfaces/course';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses:Course[] = [];

  constructor(private coursesService:CoursesService) {
    this.courses = this.coursesService.getCourses();
   }

  ngOnInit(): void {
  }

  onDelete(id:number) : void {

  }

}
