import { Injectable } from '@angular/core';
import { Course } from '../interfaces/course';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly SERVER:string = 'http://localhost:3000';

  constructor(private _client:HttpClient) { 
    
  }

  getCourses() : Observable<any> {
    return this._client.get<Observable<any>>(`${this.SERVER}/courses`);
  }
}
