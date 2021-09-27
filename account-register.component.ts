import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccCust } from 'src/app/entity/AccCust';
import { Accounts } from 'src/app/entity/accounts';
import { Customer } from 'src/app/entity/customer';
import { AccountsService } from 'src/app/services/accounts.service';

@Component({
  selector: 'app-account-register',
  templateUrl: './account-register.component.html',
  styleUrls: ['./account-register.component.css']
})
export class AccountRegisterComponent implements OnInit {

  accCust:AccCust=new AccCust();


  constructor(private accService : AccountsService,private router : Router) { }

  ngOnInit() {

  }

  save(id:number){
    if(this.accCust.nik==null||this.accCust.nik==0){
      alert("NIK Tidak Boleh Kosong");
    }else if(this.accCust.email==null||this.accCust.email==""){
      alert("Email Tidak Boleh Kosong");
    }else if(this.accCust.pin==null){
      alert("Masukan PIN anda");
    }else{
    this.accService.saveAccounts(this.accCust).subscribe(
        (response:number)=>{
          this.registerSuccess(response);
        },error=> {
          alert("Data Tidak Bisa Digunakan")
        }
      );
    }
  }

  submit(id:number){
    this.save(id);
  }

  registerSuccess(id:number){
    this.router.navigate(['accountRegisterSuccess',id]);
  }

  back(){
    this.router.navigate(['welcomePage']);
  }

}

