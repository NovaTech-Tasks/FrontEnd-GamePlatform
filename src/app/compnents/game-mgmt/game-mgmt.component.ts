import { Component, OnInit } from '@angular/core';
import {GamesService} from "../../service/games.service";
import { FormGroup,FormControl} from "@angular/forms";

@Component({
  selector: 'app-game-mgmt',
  templateUrl: './game-mgmt.component.html',
  styleUrls: ['./game-mgmt.component.scss']
})
export class GameMgmtComponent implements OnInit {
  gamesData:any;
  constructor(private gamesService:GamesService) { }

  ngOnInit(): void {
    this.gamesService.getAllGames().subscribe((resp:any) =>{
      this.gamesData = resp;
      console.log(this.gamesData);

    })
  }

  deleteGame(gameData: any) {
     this.gamesService.deleteSelected(gameData.gameId).subscribe((resp) =>{
       console.log(resp);
       this.gamesService.getAllGames();
     },(error) =>{
       console.log(error)
     })
  }
}
