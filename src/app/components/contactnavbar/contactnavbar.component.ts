import { Component, OnInit } from '@angular/core';
import {ContactsService} from '../../services/contactservice/contacts.service';
import {Contact} from '../../model/contact';

@Component({
  selector: 'app-contactnavbar',
  templateUrl: './contactnavbar.component.html',
  styleUrls: ['./contactnavbar.component.css']
})
export class ContactnavbarComponent implements OnInit {
message: string;
  lescontact: Contact[] = [];
  constructor(private constactservice: ContactsService) { }

  ngOnInit(): void {
  }
  onSearch(DataForm: string): void {
    this.constactservice.SearchContact(DataForm).subscribe(data => {
      this.lescontact = data;
      console.log(data);
    });
  }

}
