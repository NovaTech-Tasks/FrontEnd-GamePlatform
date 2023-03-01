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
   })

  }
  signInUser(data:any){
    console.log(data);
    return this.http.get(`http://localhost:8080/games/api/v1/users/${data.email}/${data.password}`).subscribe((res) =>{
      console.log(res);
      //ToDo:Save to local storage the email and pw
    })
  }


}
