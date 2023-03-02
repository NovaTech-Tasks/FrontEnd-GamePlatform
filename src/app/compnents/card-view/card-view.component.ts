import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit {
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
