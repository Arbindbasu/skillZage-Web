export interface QuestionReq {


    createdBy: string;
    isActive: boolean;
    isDiscussion:boolean;
    isMultiple:boolean;
    isOrderBy:boolean;
    isTrueFalse:boolean;
    question: string;
    questionSetId: number;
    score: number;
  }


  export interface EditQuestionReq {

    createdBy: string;
    isActive: boolean;
    isDiscussion:boolean;
    isMultiple:boolean;
    isOrderBy:boolean;
    isTrueFalse:boolean;
    question: string;
    questionSetId: number;
    score: number;
    id:number;

  }


  export interface QuestionRes {

    createdBy: string;
    isActive: boolean;
    isDiscussion:boolean;
    isMultiple:boolean;
    isOrderBy:boolean;
    isTrueFalse:boolean;
    question: string;
    questionSetId: number;
    score: number;
    id:number;
    
  }

 