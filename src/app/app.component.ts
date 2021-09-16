import { Component } from '@angular/core';
import {Personne} from "./Modele/Personne";
import {Message} from "./Modele/Message";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TPMaquetteAngular';
/*  private _listeActifs : Array<Personne>;
  private _listeMessages : Array<Message>;

  get listeMessages(): Array<Message> {
    return this._listeMessages;
  }

  set listeMessages(value: Array<Message>) {
    this._listeMessages = value;
  }

  get listeActifs(): Array<Personne> {
    return this._listeActifs;
  }


  set listeActifs(value: Array<Personne>) {
    this._listeActifs = value;
  }


  constructor(listeActifs: Array<Personne>, listeMessages: Array<Message>) {
    this._listeActifs = listeActifs;
    this._listeMessages = listeMessages;
  }*/
}
