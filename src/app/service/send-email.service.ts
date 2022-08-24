import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SendEmailService {

  constructor(private _http: HttpClient) { }



  sendEmail(payload: any) {

    return this._http.post(environment.baseurl, payload, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) })
  }

}

