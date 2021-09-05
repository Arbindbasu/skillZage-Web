import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoginReq, LoginRes } from 'src/app/login/models/login.model';
import { B2bUserReq, B2bUserRes } from 'src/app/manageb2buser/model/b2buser.model';
import { B2cUserReq, B2cUserRes } from 'src/app/manageb2cuser/model/b2cuser.model';
import { OnboardingReq } from 'src/app/onboarding/model/onboarding.model';
import { EditQuestionSetReq, QuestionSetReq } from 'src/app/questionset/model/questionset.model';
import { EditQuestionReq, QuestionReq } from 'src/app/question/model/question.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public httpClient: HttpClient) {


   }


   //Login  Service implementation..
   public doPostLogin(payload:LoginReq){
      let proxyloginurl = environment.appbaseurl+"skillzag/auth/users/login";
      return  this.httpClient.post<any>(proxyloginurl,payload,{
        headers:{
          "Content-Type":"application/json"
        }
      });
   }

   //Signup  Service implementation..
   public doSignupPost(payload:OnboardingReq){
      
     payload.password = "1234";
     payload.role = "b2c";
     console.log(payload);
    let onboardingurl = environment.appbaseurl+"skillzag/auth/users/create";
    return  this.httpClient.post<any>(onboardingurl,payload);

 }

  //Get Question Set Type implementation..
  public doGetQuestionSettype(){
   let ongetquestionseturl = environment.appbaseurl2+"api/question-sets";
   return  this.httpClient.get<any>(ongetquestionseturl);
 }

 //Create question set  Service implementation..
 public doPostCreateQuestionSettype(payload:QuestionSetReq){
   console.log(payload);
  let proxyquestionseturl = environment.appbaseurl2+"api/question-sets";
  return  this.httpClient.post<any>(proxyquestionseturl,payload,{
    headers:{
      
    }
  });
}

 //Update question set  Service implementation..
 public doPostUpdateQuestionSettype(payload:EditQuestionSetReq){
 console.log(payload);
 let questionseturl = environment.appbaseurl2+"api/question-sets";
 return  this.httpClient.put<any>(questionseturl,payload,{
   headers:{
    
   }
 });
}


//Delete question set  Service implementation..
public doPostDeleteQuestionSettype(payload:EditQuestionSetReq){
  
  let questionseturl = environment.appbaseurl2+"api/question-sets/"+payload.id;
  console.log(questionseturl);
   this.httpClient.delete<any>(questionseturl);
}



 //Get Question  implementation..
 public doGetQuestion(){
  let ongetquestionurl = environment.appbaseurl2+"api/questions";
  return  this.httpClient.get<any>(ongetquestionurl);
}


 //Create question Service implementation..
 public doPostCreateQuestion(payload:QuestionReq){
  console.log(payload);
 let proxyquestionurl = environment.appbaseurl2+"api/questions";
 return  this.httpClient.post<any>(proxyquestionurl,payload,{
   headers:{
     
   }
 });
}

//Update question Service implementation..
public doPostUpdateQuestion(payload:EditQuestionReq){
  console.log(payload);
  let questionurl = environment.appbaseurl2+"api/questions";
  return  this.httpClient.put<any>(questionurl,payload,{
    headers:{
     
    }
  });
 }


 //Delete question  Service implementation..
public doPostDeleteQuestion(payload:EditQuestionReq){
  
  let questionseturl = environment.appbaseurl2+"api/questions/"+payload.id;
  console.log(questionseturl);
   this.httpClient.delete<any>(questionseturl);
}



}
