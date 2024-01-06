import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { DattoDomain } from 'src/app/models/DattoDomain/datto-domain.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DattoService {
  constructor(private http: HttpClient) {}

  getDattoDomains(): Observable<DattoDomain[]> {
    return this.http.get<DattoDomain[]>('http://localhost:8080/datto').pipe(
      catchError(error => {
        console.error(error);
        throw error;
      })
    );
  }

  getDattoDomain(companyId: number): Observable<DattoDomain> {
    return this.http.get<DattoDomain>('http://localhost:8080/datto' + companyId).pipe(
      catchError(error => {
        console.error(error);
        throw error;
      })
    );
  }
}
