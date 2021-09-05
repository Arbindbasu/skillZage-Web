import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../utill/services/http/http.service';
import { ActiveStatus } from './model/activestatus.model';
import { EditQuestionSetReq, QuestionSetReq, QuestionSetRes } from './model/questionset.model';
import {MatDialog} from '@angular/material/dialog';
import * as moment from 'moment';


@Component({
  selector: 'app-questionset',
  templateUrl: './questionset.component.html',
  styleUrls: ['./questionset.component.css']
})
export class QuestionsetComponent implements OnInit {

status_val: string | undefined ;
id_val: number | undefined ;
modalstatus:boolean = false;
deletemodalstatus:boolean = false;

public statusdet: object = [];

public  statusfld: ActiveStatus[] = 
[
 
  {
    "val": true,
    "status": "Active"
  },
  {
    "val": false,
    "status": "In-Active"
  }
];

  public questionsetPayload: QuestionSetReq={
    createdBy: '',
    createdTime: '',
    isActive: false,
    numberOfQuestions: 0,
    questionSet: '',
    questionSetType: '',
    score: 0,
    type: ''
  }

  public editquestionsetPayload: EditQuestionSetReq={
    createdBy: '',
    createdTime: '',
    isActive: false,
    numberOfQuestions: 0,
    questionSet: '',
    questionSetType: '',
    score: 0,
    type: '',
    id: 0
  }

  public deletequestionsetPayload: EditQuestionSetReq={
    createdBy: '',
    createdTime: '',
    isActive: false,
    numberOfQuestions: 0,
    questionSet: '',
    questionSetType: '',
    score: 0,
    type: '',
    id: 0
  }

  public editValQuestionSet: EditQuestionSetReq={
    createdBy: '',
    createdTime: '',
    isActive: false,
    numberOfQuestions: 0,
    questionSet: '',
    questionSetType: '',
    score: 0,
    type: '',
    id: 0
  }

  questionsetTypeResData: any; 
  listQuestionSet:any;


  constructor(public httpService:HttpService , public router:Router) { 
    this.doGetQuestionSet();
  }

  ngOnInit(): void {
  }

  getActiveStatus(ev: any) {
    console.log(ev.target.value);
    this.questionsetPayload.isActive=ev.target.value;
    return ev.target.value; 
  }

  // Create Questionset
  public doCreateQuestionSet(): void {
    this.questionsetPayload.createdTime = moment().toISOString();
    this.questionsetPayload.isActive=true;
    this.httpService.doPostCreateQuestionSettype(this.questionsetPayload).subscribe(data =>
      {     
      console.log(data);
      console.log(data+" :::   With Stringify questionSet :"+data.questionSet); 
      this.questionsetTypeResData = JSON.stringify(data);  
        if(null != data.questionSet){       
          this.router.navigate(['questionsetComponent']);
        }else{
          this.router.navigate(['login']);
        }
      },error=>{
        console.log(error);
        console.log(`  Error in credentials  ${JSON.stringify(error)}`);
      });  
  }

   // Get Questionset
  public doGetQuestionSet(): void {
    this.httpService.doGetQuestionSettype().subscribe(data =>
      {     
      console.log(data);
      this.editValQuestionSet = data
      this.questionsetTypeResData = JSON.stringify(data);  
      this.listQuestionSet = data;

      //this.editValQuestionSet = null; 
      console.log(this.listQuestionSet+" :::   With Stringify questionSet :" , this.questionsetTypeResData.questionSet); 
        if(data.length > 0){        
          this.router.navigate(['questionsetComponent']);
        }else{
          this.router.navigate(['login']);
        }
      },error=>{
        console.log(error);
        console.log(`  Error in credentials  ${JSON.stringify(error)}`);
      }); 
  }

  // Update Questionset
  public doUpdateQuestionSet(): void {
    this.editquestionsetPayload.createdTime = moment().toISOString();
    this.editquestionsetPayload.isActive = true;
    //console.log("  Update this record   ::   "+this.editquestionsetPayload);
    this.httpService.doPostUpdateQuestionSettype(this.editquestionsetPayload).subscribe(data =>
      {     
      console.log(data);
      console.log(data+" :::   with update :"+data.questionSet);   
        if(null != data.questionSet){  
          this.doGetQuestionSet();     
          //this.router.navigate(['questionsetComponent']);
        }else{
            this.router.navigate(['login']);
        }
      },error=>{
        console.log(error);
        console.log(`  Error in credentials  ${JSON.stringify(error)}`);
      });  
  }

  // Delete Questionset
  public doDeleteQuestionSet(): void {
    console.log("  Delete this record   ::   "+this.deletequestionsetPayload);
    this.httpService.doPostDeleteQuestionSettype(this.deletequestionsetPayload);  
    this.closeDeleteModalQuestionSet();
    this.doGetQuestionSet();  
  }

   // Show Delete Questionset Modal....
  public showDeleteModalQuestionSet(deletequestionset:QuestionSetRes): void{
    console.log(deletequestionset);
    this.deletequestionsetPayload = deletequestionset;
    this.deletemodalstatus = true;
  }
   // Close Delete Questionset Modal...
  public closeDeleteModalQuestionSet(): void{
    this.deletemodalstatus = false;
  }

  // Show Edit Questionset Modal....
  public showModalQuestionSet(editquestionset:QuestionSetRes): void{
    console.log(editquestionset);
    this.editValQuestionSet = editquestionset;
    this.editquestionsetPayload = editquestionset;
    this.modalstatus = true;
  }
   // Close Edit Questionset Modal...
  public closeModalQuestionSet(): void{
    this.modalstatus = false;
  }

  public onEventForQuestionset(questionset:QuestionSetRes,type:String): void{
    console.log(questionset);
    switch (type) {
      case 'add':
        this.router.navigate(['questions'],{state:{"data1":questionset}}  );
        break;

        case 'edit':
          console.log(type);
        // Get the modal
       
        break;

        case 'delete':
          console.log(type);
         
        break;
    
      default:
        break;
    }

   
  }

  public onEditQuestions(questionset:QuestionSetRes): void{
    console.log(questionset);
    this.router.navigate(['questions'],{state:{"data1":questionset}}  );
  }


}
