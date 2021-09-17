import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComposantGrandCadreComponent } from './titre/composant-grand-cadre.component';
import { ListeActifsComponent } from './liste-actifs/liste-actifs.component';
import { MessagesComponent } from './messages/messages.component';
import { NouveauMessageComponent } from './nouveau-message/nouveau-message.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ComposantGrandCadreComponent,
    ListeActifsComponent,
    MessagesComponent,
    NouveauMessageComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
