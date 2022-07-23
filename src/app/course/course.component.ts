import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private api:ApiService) { 
    api.viewCourse().subscribe(
      (response)=>(
        this.data=response
      )
    )
  }

  data:any=[]

  ngOnInit(): void {
  }

}
