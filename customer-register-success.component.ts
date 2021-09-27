import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-register-success',
  templateUrl: './customer-register-success.component.html',
  styleUrls: ['./customer-register-success.component.css']
})
export class CustomerRegisterSuccessComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['accountRegister']);
  }

}
