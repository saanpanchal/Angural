import { Component } from '@angular/core';

@Component({
  selector: 'courses', //'app-course'   <if lable component no use krvo hoy to Step 1 : open the File app.module.ts :>  ReactiveFormsModule (it's form component)
  template:`

  <h2>{{title}}</h2>
  <label>Porduct Id:<input type="text"> <br>
  <label>Porduct Mame:<input type="text"> <br>
  <label>Porduct Feedback:<input type="text"> <br>
  <button type="submit">submit</button>
  <ul>
  <li *ngFor="let course of  courses"> 
  {{course}}
  </li>
  </ul>
  `
  })
export class CourseComponent {

  title ="this is course return data"

 courses = ["course 1" , "course 2", "course 3"];//Derectory concept

  // gettitle(){
  //   return this.title;
  // }                                                      

}
