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

  constructor(
    private subscribeService: SubscribeService
  ) {

  }

  ngOnInit(): void {
  }

  subscribe(subscribeForm: NgForm) {
    if (subscribeForm.invalid) {
      return;
    }
    this.subscribeService.subscribeToList(this.subscribeData)
      .subscribe(res => {
        alert('Subscribed!');
      }, err => {
        console.log(err);
      })
  }

}
