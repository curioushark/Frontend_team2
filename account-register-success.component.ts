import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountsService } from 'src/app/services/accounts.service';

@Component({
  selector: 'app-account-register-success',
  templateUrl: './account-register-success.component.html',
  styleUrls: ['./account-register-success.component.css']
})
export class AccountRegisterSuccessComponent implements OnInit {

  rek:number;
  show:Object;
  constructor(private router: Router,private route: ActivatedRoute, private service:AccountsService) { }

  ngOnInit() {
    this.rek= this.route.snapshot.params['id']
  }

  back(){
    this.router.navigate(['welcomePage']);
  }

}
