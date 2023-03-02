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
      return true;
    }else{
      alert("Your Not Logged In")
      this.route.navigate(["login"]).then(r => {
        console.log(r)
      });
      return false
    }



  }

}
