import { Component, OnInit } from '@angular/core';
import {SubscribeService} from "../../services/subscribe.service";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {

  subscribeData: any = <any>{};
  buttonText: string = 'Subscribe';
  isSubscribed: boolean = false;
  subscribing: boolean = false;
  hasError: boolean = false;

  constructor(
    private subscribeService: SubscribeService
  ) {

  }

  ngOnInit(): void {
  }

  async subscribe(subscribeForm: NgForm) {
    if (subscribeForm.invalid) {
      this.hasError = true;
      setTimeout(() => {
        this.hasError = false;
      }, 5000);
      return;
    }
    this.buttonText = 'Subscribing...';
    this.subscribing = true;
    this.subscribeService.subscribeToList(this.subscribeData).subscribe(
      (data) => {
        this.resetForm(subscribeForm);
      },
      (error) => {
        console.log(error);
        // this.resetForm(subscribeForm);
      }
    );

  }

  resetForm(subscribeForm: NgForm) {
    subscribeForm.reset();
    this.subscribeData = <any>{};
    this.buttonText = 'Subscribe';
    this.isSubscribed = true;
    this.subscribing = false;
    setTimeout(() => {
      this.isSubscribed = false;
    }, 5000);
  }

}
