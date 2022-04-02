import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Course } from 'src/app/interfaces/course';
import { CoursesService } from 'src/app/services/courses.service';


@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  id:number = 0;
  
  course:Course = {} as Course;

  constructor(private route:ActivatedRoute,
              private router:Router,
              private coursesService:CoursesService) {

      this.route.params.subscribe( (params:Params) => {
        this.id = params['id'];
      });

  }

  ngOnInit(): void {

    this.coursesService.getSingleCourse(this.id).subscribe( (response) => {
      this.course = response;
    })

  }

  onSubmit(value:any) {
    this.coursesService.putCourse(this.id, this.course).subscribe( (response) => {
      this.router.navigate(['courses']);
    })
  }

}
