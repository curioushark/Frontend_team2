import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../../services/account.service';
import { AccCust } from '../../entity/AccCust';
@Component({
  selector: 'app-balance-info',
  templateUrl: './balance-info.component.html',
  styleUrls: ['./balance-info.component.css']
})
export class BalanceInfoComponent implements OnInit {

  id:string;

  accs:AccCust;

  constructor(private router: Router,private route: ActivatedRoute, private service:AccountService) { }

  ngOnInit() {

    this.id= this.route.snapshot.params['id']

    this.accs=new AccCust();

    this.service.infoSaldo(this.id).subscribe(
      data=>{
        this.accs = data;

      },
      error=>console.log(error)
    );
  }

  back(){
    this.router.navigate(['info',this.id]);
  }

}
