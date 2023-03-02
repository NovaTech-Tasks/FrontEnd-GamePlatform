import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  constructor(private http:HttpClient) { }
  //Todo:tmpUid change with localStorage values
  tmpUid = localStorage.getItem("userId")
  baseUrlGame = `http://localhost:8080/games/api/v1/users/${this.tmpUid}/game`;
  getAllGames(){
    return this.http.get(this.baseUrlGame)
  }

  saveGameDetails(data:any){
     return this.http.post(this.baseUrlGame,data)
  }
  deleteSelected(id:number){
    return this.http.delete(this.baseUrlGame+`/${id}`)
  }

}
