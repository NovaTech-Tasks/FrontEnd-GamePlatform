import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  IsLogged(){
   return !!localStorage.getItem("userName")
  }

}
