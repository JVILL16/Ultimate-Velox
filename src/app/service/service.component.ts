import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Captains } from '../components/captains/captains';

const localUrl = './assets/data/captains.json';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    getCaptains(): Observable<HttpResponse<Captains[]>> {
      return this.http.get<Captains[]>(
        localUrl, { observe: 'response' });
    }
    
}
