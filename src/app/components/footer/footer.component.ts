import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  logo = 'assets/img/logo-dark.svg';

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
      name: 'Community',
      link: '/community'
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
