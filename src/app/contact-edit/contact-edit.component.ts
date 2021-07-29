import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactsService} from '../services/contactservice/contacts.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EventDeiverServiceService} from '../services/event/event-deiver-service.service';
import {ContactActionsTypes} from '../state/contact-actions-types';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {
contactId: number;
  submitted = false;
  Contactformgroup?: FormGroup;
  constructor(private activatedRoute: ActivatedRoute , private constactservice: ContactsService , private fb: FormBuilder , private EventDrivenService: EventDeiverServiceService,
              private router: Router) {
    this.contactId = activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
      this.constactservice.GetById(this.contactId).subscribe(conatact => {
       this.Contactformgroup = this.fb.group({
         id: [ conatact.id ],
          nom: [conatact.nom , [Validators.required , Validators.minLength(4)]],
          prenom: [conatact.prenom, Validators.required],
          email: [conatact.email, Validators.required],
          tel: [conatact.tel, Validators.required],
        });
      });
    }

  onUpdate(): void {
    this.submitted = true ;
    if ( this.Contactformgroup?.invalid) {
      return;
    } else {
      this.constactservice.updateContact(this.Contactformgroup?.value).subscribe(data => {
        this.EventDrivenService.publishEvent({type: ContactActionsTypes.Contact_UPDATE});
        alert('update fait avec succés Bravo!!');
      });
    }
  }

  changementMDP(): void {
    let v = confirm('êtes-vous sûr de changer votre Mot de passe ');
    if (v === true){
      this.router.navigateByUrl('/changementDeMotDePasse');
    }
  }
}

