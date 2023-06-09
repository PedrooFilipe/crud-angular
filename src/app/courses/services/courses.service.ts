import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';
import { Observable, delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  api: string = '/assets/courses.json';

  constructor(private httpClient: HttpClient) { 
  }

  list(): Observable<Course[]>{
    return this.httpClient.get<Course[]>(this.api)
    .pipe(
      first() //Assim que pegar a primeira resposta que o sv enviar, finaliza a conexão com o ele (servidor)
      );
  }

  save(record: Course){
    return this.httpClient.post<Course>(`${this.api}/save`, record)
    .pipe(
        first()
    )
  }

}
