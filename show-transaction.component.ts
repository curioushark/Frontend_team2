import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { TransInfo } from '../../entity/TransInfo';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-show-transaction',
  templateUrl: './show-transaction.component.html',
  styleUrls: ['./show-transaction.component.css']
})
export class ShowTransactionComponent implements OnInit {

  id:string
  trans: Observable<TransInfo[]>;

  constructor(private router: Router,private route: ActivatedRoute,private accService : AccountService) { }

  ngOnInit() {
    this.id= this.route.snapshot.params['id']
    this.trans = this.accService.showTransaction(this.id);

  }

  back(){
    this.router.navigate(['info',this.id]);
  }

}
