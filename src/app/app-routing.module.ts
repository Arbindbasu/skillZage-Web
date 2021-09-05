import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AchievementsComponent } from './achievements/achievements.component';
import { CareerpathComponent } from './careerpath/careerpath.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { Manageb2buserComponent } from './manageb2buser/manageb2buser.component';
import { Manageb2cuserComponent } from './manageb2cuser/manageb2cuser.component';
import { MycalenderComponent } from './mycalender/mycalender.component';
import { MygroupsComponent } from './mygroups/mygroups.component';
import { MyprojectsComponent } from './myprojects/myprojects.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { QuestionComponent } from './question/question.component';
import { QuestionsetComponent } from './questionset/questionset.component';
import { TestyourselfComponent } from './testyourself/testyourself.component';

const routes: Routes = [
  { 
    path: '', pathMatch: 'full', component: LoginComponent 
  },

  {
    component:LoginComponent,
    path:'login'

  },
  {
    component:LandingComponent,
    path:'landing',
    
  },
  {
    component:DashboardComponent,
    path:'dashboard',
    
  },
  {
    component:OnboardingComponent,
    path:'onboarding',
    
  },
  {
    component:TestyourselfComponent,
    path:'testyourself',
    
  },
  {
    component:CareerpathComponent,
    path:'careerpath',
    
  },
  {
    component:MycalenderComponent,
    path:'mycalender',
    
  },
  {
    component:AchievementsComponent,
    path:'achievement',
    
  },
  {
    component:MygroupsComponent,
    path:'mygroups',
    
  },
  {
    component:MyprojectsComponent,
    path:'myprojects',
    
  },
  {
    component:Manageb2buserComponent,
    path:'manageb2buserComponent',
    
  },
  {
    component:Manageb2cuserComponent,
    path:'manageb2cuserComponent',
    
  },
  {
    component:QuestionsetComponent,
    path:'questionsetComponent',
    
  },
  {
    component:QuestionComponent,
    path:'questions',
    
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
