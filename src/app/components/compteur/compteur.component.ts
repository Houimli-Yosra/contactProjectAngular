import { Component, OnInit } from '@angular/core';
import {EventDeiverServiceService} from '../../services/event/event-deiver-service.service';
import {Actionevent} from '../../state/actionevent';
import {ContactActionsTypes} from '../../state/contact-actions-types';

@Component({
  selector: 'app-compteur',
  templateUrl: './compteur.component.html',
  styleUrls: ['./compteur.component.css']
})
export class CompteurComponent implements OnInit {

  counter = 0;
  constructor(private eventDrivenService: EventDeiverServiceService) { }

  ngOnInit(): void {
    this.eventDrivenService.sourceEventSubjectObservable.subscribe((actionEvent: Actionevent) => {
      if (actionEvent.type === ContactActionsTypes.Contact_Added){
        this.counter = this.counter + 1;
      }
    });
  }

}
