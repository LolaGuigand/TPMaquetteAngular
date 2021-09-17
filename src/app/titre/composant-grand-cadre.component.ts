import { Component, OnInit } from '@angular/core';
import {MsgService} from "../services/msg.service";

@Component({
  selector: 'app-composant-grand-cadre',
  templateUrl: './composant-grand-cadre.component.html',
  styleUrls: ['./composant-grand-cadre.component.css']
})
export class ComposantGrandCadreComponent implements OnInit {

  blague:String;

  constructor(private msgService:MsgService) {
this.blague='';
this.msgService.appelAPI().subscribe(
  (donnees) => this.blague=donnees.value,
  () => console.log("ça se passe mal")
    );
  }

  ngOnInit(): void {
  }

}
