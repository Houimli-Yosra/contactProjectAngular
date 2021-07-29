import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Contact} from '../../model/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
   host = environment.host;
  constructor(private http: HttpClient) {
  }
  getAllContact(): Observable<Contact[]>{
    return this.http.get<Contact[]>(this.host + '/all');
  }
  getSelectedContact(): Observable<Contact[]>{
  return this.http.get<Contact[]>(this.host + '/all?slected=true');
}
SearchContact(keyword: string): Observable<Contact[]>{
    return this.http.get<Contact[]>(`http://localhost:8082/api/contact/chercherContacts?mc=${keyword}`);
}
Delete(id: number): Observable<Contact>{
    return this.http.delete<Contact>(this.host + ` ${id}`);
}
ajouter(newContact: Contact): Observable<void>{
    return  this.http.post<void>(this.host , newContact);
}
GetById(id: number): Observable<Contact>{
    return this.http.get<Contact>(this.host + `/Find/${id}`);
}

updateContact(contact: Contact): Observable<Contact>{
    return this.http.put<Contact>(this.host + `${contact.id}` , contact);
}
}
