import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ContactActionsTypes} from '../../../state/contact-actions-types';
import {Actionevent} from '../../../state/actionevent';
import {EventDeiverServiceService} from '../../../services/event/event-deiver-service.service';
import {ContactsService} from '../../../services/contactservice/contacts.service';
import {Contact} from '../../../model/contact';

@Component({
  selector: 'app-contact-nav-bar',
  templateUrl: './contact-nav-bar.component.html',
  styleUrls: ['./contact-nav-bar.component.css']
})
export class ContactNavBarComponent implements OnInit {
// @Output() contacteventEmitter: EventEmitter<Actionevent> = new EventEmitter<Actionevent>();
  message: string;
  lescontact: Contact[] = [];
  constructor(private eventDrivenService: EventDeiverServiceService , private constactservice: ContactsService) { }

  ngOnInit(): void {
  }

  getAll(): void {
    // this.contacteventEmitter.emit({type: ContactActionsTypes.GET_All_CONTACTS});
    this.eventDrivenService.publishEvent({type: ContactActionsTypes.GET_All_CONTACTS});
  }

  onNewContact(): void {
   // this.contacteventEmitter.emit({type: ContactActionsTypes.NEW_CONTACT});
    this.eventDrivenService.publishEvent({type: ContactActionsTypes.NEW_CONTACT});
  }


  onSearch(message: string): void {
    this.constactservice.SearchContact(message).subscribe(data => {
      this.lescontact = data;
      console.log(data);
    });
  }
}
