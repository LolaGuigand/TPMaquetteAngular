import { Component, OnInit } from '@angular/core';
import {Personne} from "../Modele/Personne";
import {MsgService} from "../services/msg.service";
import {PersonnesService} from "../services/personnes.service";
import {Message} from "../Modele/Message";

@Component({
  selector: 'app-liste-actifs',
  templateUrl: './liste-actifs.component.html',
  styleUrls: ['./liste-actifs.component.css']
})
export class ListeActifsComponent implements OnInit {

listeActifs : Array<Personne>;
/*tabMessages : Array<Message>;*/

  constructor(private svc: MsgService) { // injection de dépendance
/*    this.tabMessages=this.svc.tabMessages;*/
    this.listeActifs=[];
    this.listeActifs=this.svc.tabPersonnes;
  }

  ngOnInit(): void {
  }

/*    get tabPersonnes():Array<Personne>{
    for(let chaqueMessage )
    return this.listeActifs;
  }*/

}
