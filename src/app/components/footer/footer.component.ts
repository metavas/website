import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment";

const { facebook, instagram, discord, twitter, medium, telegram } = environment;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  logo = 'assets/img/logo-dark.svg';
  facebook = facebook;
  instagram = instagram;
  discord = discord;
  twitter = twitter;
  medium = medium;
  telegram = telegram;

  year = new Date().getFullYear();

  constructor() { }

  menus = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'Token',
      link: '/token'
    },
    {
      name: 'Whitepaper',
      link: '/whitepaper'
    },
    {
      name: 'Blog',
      link: '/blog'
    },
    {
      name: 'About',
      link: '/about'
    }
  ];

  ngOnInit(): void {
  }

}
