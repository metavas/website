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
    await this.contactService.send(this.contactDetails).subscribe( (res: { [key: string]: any; }) => {
      //reset contact details
      this.contactDetails = {
        name: '',
        email: '',
        message: ''
      };
    }, async (error) => {
      const message = error.error.message
      // this.notify['error'](message, 'All orders')
    })
  }

}
