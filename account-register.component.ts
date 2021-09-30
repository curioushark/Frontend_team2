import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccCust } from '../../entity/AccCust';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-account-register',
  templateUrl: './account-register.component.html',
  styleUrls: ['./account-register.component.css']
})
export class AccountRegisterComponent implements OnInit {

  accCust:AccCust = new AccCust();

  constructor(private accService : AccountService, private router : Router) { }

  ngOnInit() {
  }
  save(id:number){
    if(this.accCust.nik==null||this.accCust.nik==0){
      alert("ID Number Can't Be Empty!");
    }else if(this.accCust.email==null||this.accCust.email==""){
      alert("Email Can't Be Empty");
    }else if(this.accCust.pin==null){
      alert("Insert Your Pin");
    }else{
    this.accService.saveAccounts(this.accCust).subscribe(
        (response:number)=>{
          this.registerSuccess(response);
        },error=> {
          alert("Can't Use The Data")
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
