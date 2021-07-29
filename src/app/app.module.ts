import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactnavbarComponent } from './components/contactnavbar/contactnavbar.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HomeComponent } from './components/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactNavBarComponent } from './components/contacts/contact-nav-bar/contact-nav-bar.component';
import { ContactListComponent } from './components/contacts/contact-list/contact-list.component';
import { ContactItemComponent } from './components/contacts/contact-list/contact-item/contact-item.component';
import { StateComponent } from './state/state.component';
import { CompteurComponent } from './components/compteur/compteur.component';
import { ChangementDeMotDePasseComponent } from './contact-edit/changement-de-mot-de-passe/changement-de-mot-de-passe.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactnavbarComponent,
    ContactsComponent,
    HomeComponent,
    ContactAddComponent,
    ContactEditComponent,
    ContactNavBarComponent,
    ContactListComponent,
    ContactItemComponent,
    StateComponent,
    CompteurComponent,
    ChangementDeMotDePasseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
