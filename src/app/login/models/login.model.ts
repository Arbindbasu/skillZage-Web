export interface LoginReq {

 
  email: string;
  password: string;


}

export interface LoginRes {

    access_token: string;
    expires_in: string;
    refresh_expires_in: string;
    refresh_token: string;
    token_type: string;
    session_state: string;
    scope: string;
    
  }
