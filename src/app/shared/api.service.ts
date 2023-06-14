import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { companymodel } from '../Model/companymodel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  // apiurl = " http://localhost:3000/company";
  readonly apiurl = "https://localhost:7235/api/CompanyLists"; //https://localhost:7235/api/CompanyLists?id=1

  // get method
  Getallcompany(): Observable<companymodel[]> {
    return this.http.get<companymodel[]>(this.apiurl);
  }

  // get by id
  GetcompanybyCode(id: any): Observable<companymodel[]> {
    return this.http.get<companymodel[]>(this.apiurl + '/' + id);
  }
  //remove by id
  RemovecompanybyCode(id: any) {
    return this.http.delete<companymodel[]>(this.apiurl + '/' + id);
  }

  //post method

  CreateCompany(companydata: any) {
    return this.http.post(this.apiurl, companydata);
  }

  //Update company
  UpdateCompany(id: any, companydata: any) {
    return this.http.put(this.apiurl + '?id=' + id, companydata);
  }

  // check



}
