import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonAuthService {

  private api_endpoint= `https://beauticiansystem-demo.herokuapp.com/api/user`
  constructor(private _http:HttpClient) { }

 
  checkSigndata(data:any){
    return this._http.post<any>(this.api_endpoint+`${'/login'}`,data)
  }

  //Register a user
  userRegister(data:any){
    return this._http.post<any>(this.api_endpoint+`${'/register'}`,data)
  }
 
  getUser(){
    return this._http.get(this.api_endpoint);

  }

  gettoken(){
   return sessionStorage.getItem('token');
  }
  removeToken(){
    sessionStorage.removeItem('token');
    window.sessionStorage.clear();
  }

  getuserDetails(){
    const token = this.gettoken();
    if(token){
      let payload = window.atob(token.split('.')[1])
      
      return JSON.parse(payload)
    }
    
  }

  isLoggedIn():boolean
  {
    const user = this.getuserDetails()
    if(user){
      user.exp >Date.now()
      return true
    }
    else {
      return false
    }
  }


}
