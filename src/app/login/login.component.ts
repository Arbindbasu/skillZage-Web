import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../utill/services/http/http.service';
import { LoginReq } from './models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginResData: any; 

  public loginPayload: LoginReq={
    email: '',
    password: ''
  };

  constructor(public httpService:HttpService , public router:Router) { }

  public logindata: any;

  ngOnInit(): void {

    

  }

  public doLogin(): void {
    console.log(this.loginPayload);
    this.httpService.doPostLogin( this.loginPayload ).subscribe(data =>
      {     
      this.logindata = data;
      console.log(data);
      this.loginResData = JSON.stringify(this.logindata);  
      console.log("With Stringify accesstoken:" , this.loginResData.access_token);
 
        if(null != this.loginResData.access_token){
          sessionStorage.setItem('accesstoken', this.loginResData.access_token);
          sessionStorage.setItem('expireaccesstoken', this.loginResData.refresh_expires_in);
          this.router.navigate(['dashboard']);
        }else{
          this.router.navigate(['login']);
        }

      },error=>{
        console.log(error);
        console.log(`  Error in credentials  ${JSON.stringify(error)}`);
      }); 
  }



}
