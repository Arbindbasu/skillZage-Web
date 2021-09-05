export interface QuestionSetReq {


    createdBy: string;
    createdTime: string;
    isActive: boolean;
    numberOfQuestions: number;
    questionSet: string;
    questionSetType: string;
    score: number;
    type: string;
    
  }

  export interface EditQuestionSetReq {

    createdBy: string;
    createdTime: string;
    isActive: boolean;
    numberOfQuestions: number;
    questionSet: string;
    questionSetType: string;
    score: number;
    type: string;
    id:number;

  }


  export interface QuestionSetRes {

    createdBy: string;
    createdTime: string;
    isActive: boolean;
    numberOfQuestions: number;
    questionSet: string;
    questionSetType: string;
    score: number;
    type: string;
    id:number;
    
  }