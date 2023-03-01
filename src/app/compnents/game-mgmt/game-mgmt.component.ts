import { Component, OnInit } from '@angular/core';
import {GamesService} from "../../service/games.service";

@Component({
  selector: 'app-game-mgmt',
  templateUrl: './game-mgmt.component.html',
  styleUrls: ['./game-mgmt.component.scss']
})
export class GameMgmtComponent implements OnInit {
  gamesData:any;
  constructor(private gamesService:GamesService) { }

  ngOnInit(): void {
    this.gamesService.getAllGames().subscribe((data:any) =>{
      this.gamesData = data;
      console.log(this.gamesData);

    })
  }

}
