import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from '../../../model/contact';
import {Actionevent} from '../../../state/actionevent';
import {ContactActionsTypes} from '../../../state/contact-actions-types';
import {EventDeiverServiceService} from '../../../services/event/event-deiver-service.service';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
 @Input() lescontact: Contact[] = [];
// @Output() contactsEventEmitter: EventEmitter<Actionevent> = new EventEmitter<Actionevent>();
  constructor(private eventDrivenAction: EventDeiverServiceService) { }

  ngOnInit(): void {
  }
/*
  OnDelete(contact: Contact): void{
  //  this.contactsEventEmitter.emit({type: ContactActionsTypes.DELETE_CONTACT , payload: contact});
    this.eventDrivenAction.publishEvent({type: ContactActionsTypes.DELETE_CONTACT , payload: contact});
  }

  OnEdit(contact: Contact): void{
  //  this.contactsEventEmitter.emit({type: ContactActionsTypes.EDIT_CONTACT , payload: contact  });
    this.eventDrivenAction.publishEvent({type: ContactActionsTypes.EDIT_CONTACT , payload: contact  });
  }

  onActionEvent($event: Actionevent): void {
 //  this.contactsEventEmitter.emit($event);
  }
 */
}
