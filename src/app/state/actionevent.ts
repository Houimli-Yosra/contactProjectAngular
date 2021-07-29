import {ContactActionsTypes} from './contact-actions-types';
import {Contact} from '../model/contact';

export interface Actionevent {
  type: ContactActionsTypes ;
  payload?: Contact;
}
