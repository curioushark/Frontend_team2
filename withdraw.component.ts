import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AccCust } from '../../entity/AccCust';
import { Transaction } from '../../entity/transaction';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {

  accC:Transaction;
  id:string;
  accs:AccCust=new AccCust();


  constructor(private transService : TransactionService,private router : Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.id= this.route.snapshot.params['id']
  }

  save(){
    if(this.accs.amount%50000!=0){
      alert("Masukan Nominal kelipatan 50000");
    }else{
      this.accs.accId = this.id
      this.transService.doWithdraw(this.accs).subscribe(
      (response)=>{
          this.accC=response;
          this.withdrawSuccess(this.accC.accId)
        },error=> {
          alert("Withdraw Gagal")
        }
      );
    }
  }

  submit(){
    this.save();
  }

  withdrawSuccess(id:string ){
    this.router.navigate(['withdrawSuccess',id]);
  }

  back(){
    this.router.navigate(['home',this.id]);
  }

}