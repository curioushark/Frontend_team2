import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccCust } from '../entity/AccCust';


@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http:HttpClient) { }

   headers = new HttpHeaders()
    .append(
      'Content-Type',
      'application/json'
    );

  saveAccounts(accCust:AccCust):Observable<any>{
    return this.http.post(`${this.baseUrl}/accounts/save`,accCust);
  }

  doLogin(accCust:AccCust):Observable<any>{
    return this.http.post(`${this.baseUrl}/accounts/login`,accCust);
  }

  getCustomer(id:string):Observable<any>{
    return this.http.get(`${this.baseUrl}/accounts/find/${id}`)
  }
}
