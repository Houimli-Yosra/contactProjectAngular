import {Component, OnInit} from '@angular/core';
import {ContactsService} from '../../services/contactservice/contacts.service';
import {Contact} from '../../model/contact';
import {Router} from '@angular/router';
import {ContactActionsTypes} from '../../state/contact-actions-types';
import {Actionevent} from '../../state/actionevent';
import {EventDeiverServiceService} from '../../services/event/event-deiver-service.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
 lescontact: Contact[] = [];
  message: string;
contact?: Contact;
selected = true;
id = 0;
  constructor(private constactservice: ContactsService , private router: Router , private eventDrivenService: EventDeiverServiceService) { }

  ngOnInit(): void {
    this.eventDrivenService.sourceEventSubjectObservable.subscribe((actionEvent: Actionevent) => {
      this.onActionEvent(actionEvent);
    });
  }
getAll(): void{
    this.constactservice.getAllContact().subscribe(data => {
      this.lescontact = data;
      console.log(data);
    }, ( error) => {
      alert(error.message);
    });
}

  onSearch(DataForm: string): void {
    this.constactservice.SearchContact(DataForm).subscribe(data => {
      this.lescontact = data;
      console.log(data);
    });
  }

  OnDelete(c: Contact): void {
    let v = confirm('êtes vous sûr de supprimer le contact');
    if ( v === true){
 this.constactservice.Delete(c.id).subscribe( _ => {
    this.getAll();
   });
  }}

  onNewContact(): void{
    this.router.navigateByUrl('/newContact');
  }

  OnEdit(c: Contact): void {
    this.router.navigateByUrl('/editContact/' + c.id);
  }

  onActionEvent($event: Actionevent): void{
    switch ($event.type) {
    case ContactActionsTypes.GET_All_CONTACTS: this.getAll(); break;
    case ContactActionsTypes.NEW_CONTACT: this.onNewContact(); break;
      case ContactActionsTypes.DELETE_CONTACT: this.OnDelete($event.payload) ; break;
      case ContactActionsTypes.EDIT_CONTACT:  this.OnEdit($event.payload) ; break;
    }
  }
}
