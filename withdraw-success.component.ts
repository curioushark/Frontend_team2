import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-withdraw-success',
  templateUrl: './withdraw-success.component.html',
  styleUrls: ['./withdraw-success.component.css']
})
export class WithdrawSuccessComponent implements OnInit {

  id:string;
  constructor(private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.id= this.route.snapshot.params['id']
  }

  back(){
    this.router.navigate(['home',this.id]);
  }

}
