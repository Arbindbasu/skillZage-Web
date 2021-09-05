export interface B2cUserReq {

    email: string;
    firstname: string;
    lastname: string;
    phoneNumber: string;
    password: string;
    role: string;
    institutionName: string;
    institutionID: string;

  
  }
  
  export interface B2cUserRes {
  
    email: string;
    role: string;
    password: string;
    firstname: string;
    lastname: string;
    statusCode: string;
    status: string;
    phoneNumber: string;
    institutionName: string;
    institutionID: string;
    address1: string;
    address2: string;
  
    }