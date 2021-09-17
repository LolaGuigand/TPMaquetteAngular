import {Component, EventEmitter, OnInit} from '@angular/core';
import {MsgService} from "../services/msg.service";
import {Message} from "../Modele/Message";
import {Personne} from "../Modele/Personne";

@Component({
  selector: 'app-nouveau-message',
  templateUrl: './nouveau-message.component.html',
  styleUrls: ['./nouveau-message.component.css']
})
export class NouveauMessageComponent implements OnInit {

  constructor(private svc: MsgService) {}


  soumettreLeForm(valeurDuForm:any){
    console.log("le message est:" + valeurDuForm.value);
    //Ajouter un message au tableau de messages
    let msg=new Message(new Personne(valeurDuForm.pseudo), new Date(""), valeurDuForm.nouveauMessage);
    this.svc.ajouterMessage(msg);

  }

  ngOnInit(): void {
  }

}
