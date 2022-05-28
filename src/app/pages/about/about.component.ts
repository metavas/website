import { Component, OnInit } from '@angular/core';
import {ContactService} from "../../services/contact/contact.service";
import {ElNotificationService} from "element-angular";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  contactDetails: {
    name: string,
    email: string,
    message: string
  } = {
    name: '',
    email: '',
    message: ''
  };

  constructor(
    private contactService: ContactService,
    private notify: ElNotificationService
  ) { }

  ngOnInit(): void {
  }

  async contact() {

    if (this.contactDetails.name === '' || this.contactDetails.email === '' || this.contactDetails.message === '') {
      this.notify.warning('Please fill all the fields');
      return;
    }

    await this.contactService.send(this.contactDetails).subscribe( (res: { [key: string]: any; }) => {
      this.notify.success('Contact message successfully sent')
    })
  }

}
