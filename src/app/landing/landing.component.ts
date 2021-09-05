import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../utill/services/http/http.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(public httpService:HttpService , public router:Router) { 

    this.onLanding();

  }

  ngOnInit(): void {
  }

  public questiondata: any;

  public onLanding(): void {

    //this.router.navigate(['onboarding']);
    //this.httpService.doQuestionService();

   

  }

}
