import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../shared/auth.service";


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  userNameToDisplay: any;
  isLogged = false
  isLogout = false


  constructor(private loginServ:AuthService) {
    this.getUserData();
  }

  getUserData(){
    let userName = localStorage.getItem("userName");
    this.userNameToDisplay = userName
    console.log("hi")
    console.log(userName)
    this.isLogged = this.loginServ.IsLogged()


  }
  ngOnInit(): void {
  }

  logout() {
    localStorage.clear();
    this.isLogout = this.loginServ.IsLogged()
    window.location.reload()
  }
}
