import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CoursesService } from '../../services/courses.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../../model/course';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent {

  id: number = 0;
  course!: Course;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: CoursesService,
    private _snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
    )
    {
      this.form = formBuilder.group({
        name: [null],
        category: [null]
      })
    }

    ngOnInit() {
      this.route.paramMap.subscribe(params => {
        
        let id = params.get('id');

        if(id){
          this.service.loadById(parseInt(id))
          .subscribe(
            {
                next: (course) => {
                  this.form = this.formBuilder.group({name: course.name, category: course.category})
                },
                error: (erro) => {console.log(erro)}
            })
        }
      });
    }

    handleSubmit() {
      this.service.save(this.form.value)
      .subscribe(
        {
            next: () => {this.handleSuccess()},
            error: (erro) => {this.handleError()}
        })
    }

    openSnackBar(message: string){
      this._snackBar.open(message, 'Ok', {duration: 4000});
    }

    private handleSuccess() {
      this.openSnackBar('Curso salvo com sucesso');
    }

    private handleError(){
      this.openSnackBar('Ocorreu um erro na requisição');
    }

    handleCancel(){
      this.location.back();
    }

}
