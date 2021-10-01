import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Transaction } from '../../entity/transaction';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  trans:Transaction=new Transaction();
  accC:Transaction;
  id:string;


  constructor(private transService : TransactionService,private router : Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.id= this.route.snapshot.params['id']
  }

  save(){
    if(this.trans.amount%50000!=0){
      alert("Masukan Nominal kelipatan 50000");
    }else{
      this.trans.accId = this.id
    this.transService.doDeposit(this.trans).subscribe(
      (response)=>{
          this.accC=response;
          this.depoSuccess(this.id)
        },error=> {
          alert("deposit gagal")
        }
      );
    }
  }

  submit(){
    this.save();
  }

  depoSuccess(id:string ){
    this.router.navigate(['depositSuccess',id]);
  }

  back(){
    this.router.navigate(['home',this.id]);
  }

}
