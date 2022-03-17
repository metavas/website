import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MetaVas';
  constructor() { }

  ngOnInit(): void {
    let mode = window.localStorage.getItem('mode'),
      root = document.getElementsByTagName('html')[0];
    /*console.log(mode);
    if (mode !== undefined && mode === 'dark') {
      root.classList.add('dark-mode');
    } else {
      root.classList.remove('dark-mode');
    }*/

    window.onload = function () {
      const preloader = document.querySelector('.page-loading');
      // @ts-ignore
      preloader.classList.remove('active');
      setTimeout(function () {
        // @ts-ignore
        preloader.remove();
      }, 1000);
    };

  }

}
