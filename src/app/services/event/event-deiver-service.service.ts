import { Injectable } from '@angular/core';
import {Actionevent} from '../../state/actionevent';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventDeiverServiceService {
sourceEventSubject: Subject<Actionevent> = new Subject<Actionevent>();
  sourceEventSubjectObservable = this.sourceEventSubject.asObservable();
  constructor() { }
  publishEvent(event: Actionevent): void{
    this.sourceEventSubject.next(event);
  }
}
