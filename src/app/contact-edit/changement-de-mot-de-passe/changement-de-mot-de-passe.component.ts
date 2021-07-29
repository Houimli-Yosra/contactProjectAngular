import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ContactActionsTypes} from '../../state/contact-actions-types';
import {ContactsService} from '../../services/contactservice/contacts.service';
import {Contact} from '../../model/contact';
import {EventDeiverServiceService} from '../../services/event/event-deiver-service.service';

@Component({
  selector: 'app-changement-de-mot-de-passe',
  templateUrl: './changement-de-mot-de-passe.component.html',
  styleUrls: ['./changement-de-mot-de-passe.component.css']
})
export class ChangementDeMotDePasseComponent implements OnInit {
  @Input() contact: Contact | null = null;
  formgroup ?: FormGroup;

  constructor(private fb: FormBuilder , private contactservice: ContactsService , private EventDrivenService: EventDeiverServiceService) {
  }

  ngOnInit(): void {
    this.formgroup = this.fb.group({
        nvMdp : ['', Validators.required]
      }
    );
  }

  Onsave(): void {
    if ( this.formgroup?.invalid) {
      return;
    } else {
      console.log(this.contact);
      }
  }
}
