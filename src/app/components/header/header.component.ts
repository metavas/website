import { Component, OnInit } from '@angular/core';

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

  logo = 'assets/img/logo-dark.svg';

  constructor() { }

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

}
