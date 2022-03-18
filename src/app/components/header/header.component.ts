import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  mode = window.localStorage.getItem('mode')
  root = document.getElementsByTagName('html')[0];
  status = false;

  constructor() { }

  ngOnInit(): void {

    if (this.mode !== undefined && this.mode === 'dark') {
      this.root.classList.add('dark-mode');
      this.status = true;
    } else {
      this.root.classList.remove('dark-mode');
      this.status = false;
    }

  }

  async toggleMode() {
    this.status ? this.root.classList.add('dark-mode') : this.root.classList.remove('dark-mode');
    this.status ? localStorage.mode = 'dark' : localStorage.removeItem('mode');
  }

}
