import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-deposit-success',
  templateUrl: './deposit-success.component.html',
  styleUrls: ['./deposit-success.component.css']
})
export class DepositSuccessComponent implements OnInit {

  id:string;
  constructor(private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.id= this.route.snapshot.params['id']
  }

  back(){
    this.router.navigate(['home',this.id]);
  }

}