import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountsService } from 'src/app/services/accounts.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  id:string;

  constructor(private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.id= this.route.snapshot.params['id']
  }

  goProfile(){
    this.router.navigate(['profile/',this.id])
  }

}
