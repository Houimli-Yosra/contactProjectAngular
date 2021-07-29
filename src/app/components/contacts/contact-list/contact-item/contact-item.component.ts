import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from '../../../../model/contact';
import {Actionevent} from '../../../../state/actionevent';
import {ContactActionsTypes} from '../../../../state/contact-actions-types';
import {EventDeiverServiceService} from '../../../../services/event/event-deiver-service.service';
import {ContactsService} from '../../../../services/contactservice/contacts.service';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent implements OnInit {
@Input() contact: Contact | null = null;
  lescontact: Contact[] = [];
  message: string;
// @Output()  contactsEventEmitter: EventEmitter<Actionevent> = new EventEmitter<Actionevent>();
  constructor(private eventDrivenAction: EventDeiverServiceService , private constactservice: ContactsService) { }

  ngOnInit(): void {
  }

  OnDelete(contact: Contact): void{
    // this.contactsEventEmitter.emit({type: ContactActionsTypes.DELETE_CONTACT , payload: contact});
    this.eventDrivenAction.publishEvent({type: ContactActionsTypes.DELETE_CONTACT , payload: contact});
  }

  OnEdit(contact: Contact): void{
   // this.contactsEventEmitter.emit({type: ContactActionsTypes.EDIT_CONTACT , payload: contact  });
    this.eventDrivenAction.publishEvent({type: ContactActionsTypes.EDIT_CONTACT , payload: contact  });
  }

  onSearch(DataForm: string): void {
    this.constactservice.SearchContact(DataForm).subscribe(data => {
      this.lescontact = data;
      console.log(data);
    });
  }
}
