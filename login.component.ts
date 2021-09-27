import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccCust } from 'src/app/entity/AccCust';
import { Accounts } from 'src/app/entity/accounts';
import { AccountsService } from 'src/app/services/accounts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  accCust:AccCust=new AccCust();
  accC:AccCust;


  constructor(private accService : AccountsService,private router : Router) { }

  ngOnInit() {

  }

  save(){
    if(this.accCust.accNumber==null||this.accCust.accNumber==0){
      alert("Masukan No Rekening Anda");
    }else if(this.accCust.pin==null||this.accCust.pin==0){
      alert("Masukan Pin Anda");
    }else{
    this.accService.doLogin(this.accCust).subscribe(
      (response)=>{
          this.accC=response;
          this.loginSuccess(this.accC.id)
        },error=> {
          alert("No Rekening/PIN Salah")
        }
      );
    }
  }

  submit(){
    this.save();
  }

  loginSuccess(id:string){
    this.router.navigate(['home',id]);
  }

  back(){
    this.router.navigate(['welcomePage']);
  }


}
