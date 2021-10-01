import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AccCust } from '../../entity/AccCust';
import { Transaction } from '../../entity/transaction';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

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
    }else if(this.accs.accNumber==0){
      alert("Masukan Rekening Tujuan Anda");
    }else{
      this.accs.accId = this.id
      this.transService.doTransfer(this.accs).subscribe(
      (response)=>{
          this.accC=response;
          this.transferSuccess(this.id)
        },error=> {
          alert("Transfer Gagal")
        }
      );
    }
  }

  submit(){
    this.save();
  }

  transferSuccess(id:string ){
    this.router.navigate(['transferSuccess',id]);
  }

  back(){
    this.router.navigate(['home',this.id]);
  }

}
