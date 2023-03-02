import { Component, OnInit } from '@angular/core';
import {GamesService} from "../../service/games.service";
import { FormGroup,FormControl} from "@angular/forms";
import {observable, Observable, Subscriber} from "rxjs";
import {error} from "@angular/compiler/src/util";

@Component({
  selector: 'app-game-mgmt',
  templateUrl: './game-mgmt.component.html',
  styleUrls: ['./game-mgmt.component.scss']
})
export class GameMgmtComponent implements OnInit {
  gamesData:any;
  gameImage:any;
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

  onChange($event : Event) {
    // @ts-ignore
    const file = ($event.target as HTMLInputElement).files[0];
    //console.log(file)
    this.convertToBase64(file);
  }
  convertToBase64(file:File){
    const obs = new Observable((subscriber:Subscriber<any>) =>{
         this.readFile(file,subscriber)
    });
    obs.subscribe((data) =>{
      console.log(data)
      this.gameImage = data;
    })
  }

  readFile(file:File,subscriber: Subscriber<any>) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () =>{
      subscriber.next(fileReader.result);
      subscriber.complete();
    };
    fileReader.onerror = (error) =>{
      subscriber.error(error);
      subscriber.complete();
    }
  }
  //game details form data send
  gameDetails = new FormGroup({
    gameName: new FormControl(''),
    gameDate: new FormControl(''),
    gameImg: new FormControl(''),
  });

  saveGameDetails() {
    this.gameDetails.value.gameImg = this.gameImage;
    this.gamesService.saveGameDetails(this.gameDetails.value).subscribe((resp) =>{
      console.log(resp);
    },error =>{
      console.log(error);
    })

  }
}
