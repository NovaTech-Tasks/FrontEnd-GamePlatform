import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  userNameToDisplay: any;


  constructor() {
    this.getUserData();
  }

  getUserData(){
    let userName = localStorage.getItem("userName");
    this.userNameToDisplay = userName
    console.log("hi")
    console.log(userName)

  }
  ngOnInit(): void {
  }



}
