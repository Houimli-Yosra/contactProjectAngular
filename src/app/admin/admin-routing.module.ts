import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactsComponent} from '../components/contacts/contacts.component';
import {HomeComponent} from '../components/home/home.component';
import {ContactAddComponent} from '../contact-add/contact-add.component';
import {ContactEditComponent} from '../contact-edit/contact-edit.component';
import {ChangementDeMotDePasseComponent} from '../contact-edit/changement-de-mot-de-passe/changement-de-mot-de-passe.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path: 'contacts' , component: ContactsComponent},
  {path: '' , component: HomeComponent},
  {path: 'newContact' , component: ContactAddComponent},
  {path: 'editContact/:id' , component: ContactEditComponent},
  {path: 'changementDeMotDePasse', component: ChangementDeMotDePasseComponent},
  {path: 'authentication', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
