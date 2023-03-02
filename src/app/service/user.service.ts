import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient) { }
  baseURL:any = "http://localhost:8080/games/api/v1/users";


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
      localStorage.setItem("useId",returnData.id)
      localStorage.setItem("userName",returnData.userName)
    }

    return this.http.get( this.baseURL+`/${data.email}/${data.password}`).subscribe((res) =>{
      console.log(res);
      returnData = res
      saveDataToLocalStorage(returnData)
    })
  }

}
