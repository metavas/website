import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import {catchError, finalize, timeout} from 'rxjs/operators';
import {NgxSpinnerService} from "ngx-spinner";
import { AuthService } from '../services/auth/auth.service';
import {Router} from '@angular/router';
import {ElMessageService, ElNotificationService} from 'element-angular';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(
    private spinner: NgxSpinnerService,
    public auth: AuthService,
    private alert: ElMessageService,
    private notify: ElNotificationService
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // req.reportProgress ? this.spinner.show() : null

    if (req.method === 'POST' || req.method === 'PUT' || req.method === 'DELETE') {
      !req.reportProgress ? this.spinner.show() : null
    }

    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.auth.getToken()}`
      }
    })

    // setTimeout( function() {
    //   this.spinner.hide()
    // }, 15000)

    // @ts-ignore
    return next.handle(req).pipe(
      finalize(() =>
        this.spinner.hide()
      ),
    catchError(async error => {
      if (error.status === 401) await this.auth.logout()
      const message = error.error.message
      this.notify.setOptions({
        zIndex: 5000
      })
      this.notify['error'](message, error.statusText)
    }),
    )

  }

}
