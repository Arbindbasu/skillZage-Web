import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../utill/services/http/http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

   accesstoken : any;
   refresh_expires_in : any;

  constructor(public httpService:HttpService , public router:Router) {

    accesstoken : sessionStorage.getItem('accesstoken'); 
    refresh_expires_in : sessionStorage.getItem('expireaccesstoken'); 

  }

  ngOnInit(): void {
  }

  public doTestYourSelf(): void {

    this.router.navigate(['testyourself']);
    //this.httpService.doPostLogin( this.loginPayload );

  }

  public doCareerPath(): void {

    this.router.navigate(['careerpath']);
    //this.httpService.doPostLogin( this.loginPayload );

  }

  public doAchievement(): void {

    this.router.navigate(['achievement']);
    //this.httpService.doPostLogin( this.loginPayload );

  }

  public doMyGroups(): void {

    this.router.navigate(['mygroups']);
    //this.httpService.doPostLogin( this.loginPayload );

  }

  public doMyProjects(): void {

    this.router.navigate(['myprojects']);
    //this.httpService.doPostLogin( this.loginPayload );

  }


  

}
