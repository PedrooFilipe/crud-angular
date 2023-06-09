import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './containers/courses/courses.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { CourseFormComponent } from './containers/course-form/course-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CourseListComponent } from './components/course-list/course-list.component';


@NgModule({
  declarations: [
    CoursesComponent,
    CourseFormComponent,
    CourseListComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule //Fornece o formbuild
  ]
})
export class CoursesModule { }
