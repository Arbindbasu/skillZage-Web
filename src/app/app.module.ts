import { HttpClientModule, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { TestyourselfComponent } from './testyourself/testyourself.component';
import { CareerpathComponent } from './careerpath/careerpath.component';
import { MycalenderComponent } from './mycalender/mycalender.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { MygroupsComponent } from './mygroups/mygroups.component';
import { MyprojectsComponent } from './myprojects/myprojects.component';
import { ProjectdetailsComponent } from './projectdetails/projectdetails.component';
import { Manageb2buserComponent } from './manageb2buser/manageb2buser.component';
import { Manageb2cuserComponent } from './manageb2cuser/manageb2cuser.component';
import { HttpService } from './utill/services/http/http.service';
import { QuestionsetComponent } from './questionset/questionset.component';
import { QuestionComponent } from './question/question.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingComponent,
    DashboardComponent,
    OnboardingComponent,
    TestyourselfComponent,
    CareerpathComponent,
    MycalenderComponent,
    AchievementsComponent,
    MygroupsComponent,
    MyprojectsComponent,
    ProjectdetailsComponent,
    Manageb2buserComponent,
    Manageb2cuserComponent,
    QuestionsetComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})






export class AppModule { }
