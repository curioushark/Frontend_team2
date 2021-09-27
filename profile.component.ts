import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/entity/customer';
import { AccountsService } from 'src/app/services/accounts.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  id:string;

  customer:Customer;

  constructor(private router: Router,private route: ActivatedRoute, private service:AccountsService) { }

  ngOnInit() {

    this.id= this.route.snapshot.params['id']

    this.customer=new Customer();

    this.service.getCustomer(this.id).subscribe(
      data=>{
        this.customer = data;

      },
      error=>console.log(error)
    );
  }

  back(){
    this.router.navigate(['home',this.id]);
  }



}
