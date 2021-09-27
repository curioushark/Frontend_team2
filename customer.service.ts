import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../entity/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http : HttpClient) { }

  saveCustomer(customer : Customer):Observable<any>{
    return this.http.post(`${this.baseUrl}/customer/save`,customer);
    }
    
}
