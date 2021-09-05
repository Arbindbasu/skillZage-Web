import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../utill/services/http/http.service';
import { OnboardingReq } from './model/onboarding.model';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent implements OnInit {

  public onBoardingPayload: OnboardingReq={
    email: '',
    firstname: '',
    lastname: '',
    phoneNumber: '',
    password: '',
    role: '',
    institutionName: '',
    institutionID: '',
    address1: '',
    address2: ''
  }

  public onboardingdata: any;

  constructor(public httpService:HttpService , public router:Router) { }

  ngOnInit(): void {
  }

  public dashboard(): void {

    this.router.navigate(['dashboard']);
    //this.httpService.doPostLogin( this.loginPayload );

  }

  public doSignupPost(): void {

    console.log(this.onBoardingPayload);
    this.httpService.doSignupPost( this.onBoardingPayload ).subscribe(data =>
      {     
      this.onboardingdata = data
      this.router.navigate(['dashboard']);
      },error=>{
        console.log(error);
        console.log(`  Error   ${JSON.stringify(error)}`);
      }); 
  }

  

}
