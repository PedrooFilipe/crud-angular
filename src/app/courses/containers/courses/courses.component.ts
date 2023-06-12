import { Component } from '@angular/core';
import { Course } from '../../model/course';
import { CoursesService } from '../../services/courses.service';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrodDialogComponent } from 'src/app/shared/components/errod-dialog/errod-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent {

  courses$: Observable<Course[]>;

  constructor(
      private service: CoursesService,
      public dialog: MatDialog,
      private router: Router,
      private route: ActivatedRoute
    ){
    this.courses$ = service.list()
    .pipe(
      catchError(error => {
        this.handleError('Erro ao carregar cursos')
        return of ([])
      })
    );
  }

  handleError(errorMsg: string) {
    this.dialog.open(ErrodDialogComponent, {
      data: errorMsg
    });
  }

  handleAdd(){
    this.router.navigate(['new'], {relativeTo: this.route}) //pega a rota atual e concatena com o new
    console.log('Cadastrar');
  }

  handleEdit(course: Course){
    this.router.navigate(['edit', course.id], {relativeTo: this.route})
  }

  handleRemove(){
    console.log('Remove');
  }

}
