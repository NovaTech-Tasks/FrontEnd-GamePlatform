import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient) { }
  baseURL:any = "http://localhost:8080/games/api/v1/users";
  router : Router | any


  saveUser(data:any){
    console.log(data)
   return this.http.post(this.baseURL,data).subscribe((rst) =>{
     console.log(rst);

   },error => {
     console.error(error)
   })

  }
  signInUser(data:any){
    let returnData
    console.log(data);
    localStorage.setItem("userEmail",data.email)

    function saveDataToLocalStorage(returnData:any) {
      localStorage.clear();
      localStorage.setItem("useId",returnData.id)
      localStorage.setItem("userName",returnData.userName)
    }

    return this.http.get( this.baseURL+`/${data.email}/${data.password}`).subscribe((res) =>{
      console.log(res);

      //Todo: Sweet alert
      returnData = res
     // this.router.navigate(['games'])
      saveDataToLocalStorage(returnData)
      alert("Login Success")
      window.location.reload();

    },(error) => {
      console.error(error)
      alert("Invalid Email or Password")
      this.router.navigate(['login'])
    })
  }

}
