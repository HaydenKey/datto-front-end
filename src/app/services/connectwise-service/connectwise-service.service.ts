import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConnectwiseCompany } from 'src/app/models/ConnectWiseCompany/connectwiseCompany.model';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ConnectwiseService {
  constructor(private http: HttpClient) {}

  getConnectwiseCompanies(): Observable<ConnectwiseCompany[]> {
    return this.http.get<ConnectwiseCompany[]>('http://localhost:8080/connectwise').pipe(
      catchError(error => {
        console.error(error);
        throw error;
      })
    );
  }

  getConnectwiseCompany(companyId: number): Observable<ConnectwiseCompany> {
    return this.http.get<ConnectwiseCompany>('http://localhost:8080/connectwise' + companyId).pipe(
      catchError(error => {
        console.error(error);
        throw error;
      })
    );
  }
}
