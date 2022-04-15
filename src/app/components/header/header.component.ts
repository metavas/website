import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { Router,NavigationStart, Event as NavigationEvent } from '@angular/router';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  mode = localStorage.getItem('mode')
  root = document.getElementsByTagName('html')[0];
  footer = document.getElementsByClassName('footer-logo')[0];
  status = false;
  twitter = environment.twitter;
  discord = environment.discord;
  instagram = environment.instagram;

  // header = document.getElementsByClassName('header');
  @ViewChild('header', { read: ElementRef, static:false }) header: ElementRef | undefined;

  event$: any;
  url: any;

  logo = 'assets/img/logo-dark.svg';

  constructor(
    private router: Router
  ) {
    this.event$
      =this.router.events
      .subscribe(
        (event: NavigationEvent) => {
          if(event instanceof NavigationStart) {
            this.url = event.url.toString();
            // @ts-ignore
            event.url === '/' ? this.header.nativeElement.classList.add('position-absolute') : this.header.nativeElement.classList.remove('position-absolute');
          }
        });
  }

  ngOnInit(): void {



    if (this.mode !== null && this.mode === 'dark') {
      this.root.classList.add('dark-mode');
      // this.footer.classList.add('footer-dark-logo');
      this.status = true;
      this.logo = 'assets/img/logo.svg';
    } else {
      this.root.classList.remove('dark-mode');
      // this.footer.classList.remove('footer-dark-logo');
      this.status = false;
      this.logo = 'assets/img/logo-dark.svg';
    }

  }

  async toggleMode() {
    if (this.status) {
      this.root.classList.add('dark-mode');
      localStorage.setItem('mode', 'dark');
      this.logo = 'assets/img/logo.svg';
    } else {
      this.root.classList.remove('dark-mode');
      localStorage.removeItem('mode');
      this.logo = 'assets/img/logo-dark.svg';
    }
  }

  ngOnDestroy() {
    this.event$.unsubscribe();
  }

}
