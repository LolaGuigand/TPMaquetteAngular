import { Component, OnInit } from '@angular/core';
import {Personne} from "../Modele/Personne";

@Component({
  selector: 'app-liste-actifs',
  templateUrl: './liste-actifs.component.html',
  styleUrls: ['./liste-actifs.component.css']
})
export class ListeActifsComponent implements OnInit {


   personne1: Personne= new Personne("Ginette", 2012);
   personne2: Personne= new Personne("Bernard", 2012);
   personne3: Personne= new Personne("kikoolol95", 2018);

 listeActifs : Array<Personne>;

  constructor() {
    this.listeActifs=[this.personne1, this.personne2, this.personne3];
  }

  ngOnInit(): void {
  }

}
