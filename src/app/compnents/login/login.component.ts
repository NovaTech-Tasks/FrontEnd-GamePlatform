import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl} from "@angular/forms";
import {UserService} from "../../service/user.service";
import {AuthService} from "../../shared/auth.service";

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
    this.userService.saveUser(this.createUser.value)
    window.location.reload()
  }

  saveSignInData() {
    this.userService.signInUser(this.signInUser.value)
  }

}
