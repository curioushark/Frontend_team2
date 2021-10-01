import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from '../entity/transaction';
import { HttpClient } from '@angular/common/http';
import { AccCust } from '../entity/AccCust';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private baseUrl = 'http://localhost8080';

  constructor(private http:HttpClient) { }

  doDeposit(trans:Transaction):Observable<any>{
    return this.http.post(`${this.baseUrl}/trans/deposit`,trans);
  }

  doWithdraw(trans:AccCust):Observable<any>{
    return this.http.post(`${this.baseUrl}/trans/withdraw`,trans)
  }

  doTransfer(trans:AccCust):Observable<any>{
    return this.http.post(`${this.baseUrl}/trans/transfer`,trans)
  }
}
