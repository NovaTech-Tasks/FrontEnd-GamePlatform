import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, Routes, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth :AuthService,private route : Router) {
  }
  canActivate()
  {
    if(this.auth.IsLogged()){
      console.log(this.auth.IsLogged())
      return true;
    }else{
      console.log(this.auth.IsLogged())
      alert("Your Not Logged In")
      this.route.navigate(["login"]).then(r => {

      });
      return false
    }



  }

}
