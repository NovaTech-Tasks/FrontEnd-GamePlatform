import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  constructor(private http:HttpClient) { }
  tmpUid = "58ffdc63-de80-4e88-b6ae-017010f5dcf5"
  baseUrlGame = `http://localhost:8080/games/api/v1/users/${this.tmpUid}/game`;
  getAllGames(){
    return this.http.get(this.baseUrlGame)
  }

}
