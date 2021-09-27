import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/entity/customer';
import { CustomerService } from 'src/app/services/customer.service';


@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css']
})
export class CustomerRegisterComponent implements OnInit {


  customer:Customer= new Customer();

  constructor(private csService : CustomerService,private router : Router) { }

  ngOnInit() {
  }

  save(){
    if(this.customer.nik==null||this.customer.nik==0){
      alert("NIK Tidak Boleh Kosong");
    }else if(this.customer.fullname==null||this.customer.fullname==""){
      alert("Harap Isi Nama Anda");
    }else if(this.customer.email==null||this.customer.email==""){
      alert("Email Tidak Boleh Kosong");
    }else if(this.customer.address==null||this.customer.address==""){
      alert("Harap Isi Alamat Anda");
    }else{
      this.csService.saveCustomer(this.customer).subscribe(
      (response:true)=>{
      this.registerSuccess()
      },(error:false)=> {
      alert("NIK Sudah Terdaftar")
      }
      );
    }

  }

  submit(){
    this.save();
  }

  registerSuccess(){
    this.router.navigate(['customerRegisterSuccess']);
  }

  back(){
    this.router.navigate(['welcomePage']);
  }

}
