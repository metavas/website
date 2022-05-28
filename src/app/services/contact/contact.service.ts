import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  url = environment.apiUrl+'contact'

  constructor(
    private http: HttpClient
  ) { }

  send(data: any): Observable<any> {
    return this.http.post(`${this.url}`, data, {})
  }

}
