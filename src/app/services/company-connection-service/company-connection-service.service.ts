import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { CompanyConnection } from '../../models/CompanyConnection/companyConnection.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyDataService {
  private apiUrl = "http://localhost:8000/company-connection";

  constructor(private http: HttpClient) { }

  getCompanyConnections(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getCompanyConnection(dattoDomain: string): Observable<any> {
    return this.http.get(this.apiUrl + "/" + dattoDomain);
  }

  addCompanyConnection(company: CompanyConnection): Observable<any> {
    return this.http.post(this.apiUrl + "/add", company);
  }
}
