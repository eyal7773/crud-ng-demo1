import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Course } from 'src/app/interfaces/course';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-delete-course',
  templateUrl: './delete-course.component.html',
  styleUrls: ['./delete-course.component.css']
})
export class DeleteCourseComponent implements OnInit {

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


  onDelete() : void {
    this.coursesService.deleteCourse(this.id).subscribe( (response) => {
      this.router.navigate(['courses']);
    });
  }
}
