import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl} from "@angular/forms";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private userService :UserService) { }
  //sign up data
  createUser = new FormGroup({
      userName: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl('')
    });
  //sign in data
  signInUser: FormGroup =  new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
});
  ngOnInit(): void {
  }
  SaveUser() {
    //console.log(this.createUser.value)
    this.userService.saveUser(this.createUser.value)
  }

  saveSignInData() {
    this.userService.signInUser(this.signInUser.value)
  }

}
