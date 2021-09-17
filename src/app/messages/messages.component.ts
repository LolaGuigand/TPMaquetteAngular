import { Component, OnInit } from '@angular/core';
import {Message} from "../Modele/Message";
import {MsgService} from "../services/msg.service";
import {Personne} from "../Modele/Personne";



@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})

export class MessagesComponent implements OnInit {

  /*
   personne1: Personne= new Personne("Ginette", 2012);
   personne2: Personne= new Personne("Bernard", 2012);
   personne3: Personne= new Personne("kikoolol95", 2018);

  message1 : Message = new Message(this.personne1,new Date("2020, 12, 12, 14:25:56"),"Coucou!");
  message2 : Message = new Message(this.personne2, new Date("2020, 12, 12, 15:26:35"),"Cc");
  message3 : Message = new Message(this.personne3,new Date("2021, 03, 05, 15:29:32"),"lol");*/


 listeMessages: Array<any>;



  constructor(private svc: MsgService) { //j'injecte mon service


this.listeMessages=[];
    this.svc.appelAPI().subscribe(

      (donnees) => this.listeMessages = donnees,
      () => console.log("ça se passe mal")
    );

  }

  ngOnInit(): void {
    this.svc.emetteur.subscribe((messages)=>this.listeMessages=messages);
  }

}




