import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActiveStatus } from '../questionset/model/activestatus.model';
import { EditQuestionSetReq, QuestionSetRes } from '../questionset/model/questionset.model';
import { HttpService } from '../utill/services/http/http.service';
import { EditQuestionReq, QuestionReq, QuestionRes } from './model/question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

public statusdet: object = [];
questionsResData: any; 
listQuestion:any;
modalstatus:boolean = false;
deletemodalstatus:boolean = false;

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

public questionPayload:QuestionReq={
  createdBy: '',
  isActive: false,
  isDiscussion: false,
  isMultiple: false,
  isOrderBy: false,
  isTrueFalse: false,
  question: '',
  questionSetId: 0,
  score: 0
}



public editquestionPayload: EditQuestionReq={
  createdBy: '',
  isActive: false,
  isDiscussion: false,
  isMultiple: false,
  isOrderBy: false,
  isTrueFalse: false,
  question: '',
  questionSetId: 0,
  score: 0,
  id: 0
}

public deletequestionPayload: EditQuestionReq={
  createdBy: '',
  isActive: false,
  isDiscussion: false,
  isMultiple: false,
  isOrderBy: false,
  isTrueFalse: false,
  question: '',
  questionSetId: 0,
  score: 0,
  id: 0
}

public editValQuestion: EditQuestionReq={
  createdBy: '',
  isActive: false,
  isDiscussion: false,
  isMultiple: false,
  isOrderBy: false,
  isTrueFalse: false,
  question: '',
  questionSetId: 0,
  score: 0,
  id: 0
}

 

  constructor(public router:Router ,public httpService:HttpService ) { 
    this.doGetQuestion();
  }

  ngOnInit(): void {
 
   
  }

 // Get Question
 public doGetQuestion(): void {
  this.httpService.doGetQuestion().subscribe(data =>
    {     
    console.log(data);
    this.editValQuestion = data
    this.questionsResData = JSON.stringify(data);  
    this.listQuestion = data;

    //this.editValQuestionSet = null; 
    console.log(this.listQuestion+" :::   With Stringify questionSet :" , this.questionsResData.questionSet); 
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

 // Show Delete Questionset Modal....
 public showDeleteModalQuestionSet(deletequestion:QuestionRes): void{
  console.log(deletequestion);
  this.deletequestionPayload = deletequestion;
  this.deletemodalstatus = true;
}
 // Close Delete Questionset Modal...
public closeDeleteModalQuestionSet(): void{
  this.deletemodalstatus = false;
}

// Show Edit Questionset Modal....
public showModalQuestion(editquestion:QuestionRes): void{
  console.log(editquestion);
  this.editValQuestion = editquestion;
  this.editquestionPayload = editquestion;
  this.modalstatus = true;
}
 // Close Edit Questionset Modal...
public closeModalQuestionSet(): void{
  this.modalstatus = false;
}


}
