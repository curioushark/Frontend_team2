import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  id:string;

  constructor(private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.id= this.route.snapshot.params['id']
  }

  infoSaldo(){
    this.router.navigate(['saldo',this.id]);
  }

  infoTransaksi(){
    this.router.navigate(['showTransaction',this.id]);
  }

  back(){
    this.router.navigate(['home',this.id]);
  }

}
