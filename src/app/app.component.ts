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
