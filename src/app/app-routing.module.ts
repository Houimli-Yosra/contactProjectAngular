import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactsComponent} from './components/contacts/contacts.component';
import {HomeComponent} from './components/home/home.component';
import {ContactAddComponent} from './contact-add/contact-add.component';
import {ContactEditComponent} from './contact-edit/contact-edit.component';
import {ChangementDeMotDePasseComponent} from './contact-edit/changement-de-mot-de-passe/changement-de-mot-de-passe.component';
import {AdminModule} from './admin/admin.module';

const routes: Routes = [
  {
    path: 'Login' ,
    loadChildren: () => import('./admin/admin.module').then(m => AdminModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
