import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  mailChimpEndpoint = 'https://metavas.us14.list-manage.com/subscribe/post?u=511a3d7b52921bd4fe4fca290&amp;id=d0e353e8c7';

  constructor(
    private http: HttpClient
  ) { }
  subscribeToList(data: { email: string; }) {
    const params = new HttpParams()
      .set('EMAIL', data.email)
    const mailChimpUrl = `${this.mailChimpEndpoint}&${params.toString()}`;
    return this.http.jsonp(mailChimpUrl, 'c')
  }
}
