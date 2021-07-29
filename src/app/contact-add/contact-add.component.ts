import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ContactsService} from '../services/contactservice/contacts.service';
import {EventDeiverServiceService} from '../services/event/event-deiver-service.service';
import {ContactActionsTypes} from '../state/contact-actions-types';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css']
})
export class ContactAddComponent implements OnInit {
Contactformgroup?: FormGroup;
  submitted = false;
 // nom?: FormControl | null = null;
  // tslint:disable-next-line:max-line-length
  constructor(private  fb: FormBuilder , private contactservice: ContactsService , private EventDrivenService: EventDeiverServiceService) { }

  ngOnInit(): void {
    this.Contactformgroup = this.fb.group({
      id: [ 0 ],
      nom: ['', [Validators.required , Validators.minLength(4)] ],
      prenom: ['', Validators.required],
      email: ['', Validators.required],
      tel: [0, Validators.required],
      password: ['', Validators.required]
    });
  }

  onSave(): void{
    this.submitted = true ;
    if ( this.Contactformgroup?.invalid) {
      return;
    } else {
      this.contactservice.ajouter(this.Contactformgroup?.value).subscribe(data => {
        this.EventDrivenService.publishEvent({type: ContactActionsTypes.Contact_Added});
        console.log(this.Contactformgroup.value);
      });
    }
  }
}
