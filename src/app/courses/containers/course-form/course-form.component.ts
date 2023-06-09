import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CoursesService } from '../../services/courses.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: CoursesService,
    private _snackBar: MatSnackBar,
    private location: Location
    )
    {
      this.form = formBuilder.group({
        name: [null],
        category: [null]
      })
    }

    openSnackBar(message: string){
      this._snackBar.open(message, 'Ok', {duration: 4000});
    }

    handleSubmit() {
      this.service.save(this.form.value)
      .subscribe(
        {
            next: () => {this.handleSuccess()},
            error: (erro) => {this.handleError()}
        })
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
