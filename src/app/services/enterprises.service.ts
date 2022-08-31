import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnterprisesService {

  constructor(protected http: HttpClient) {
  }

  save(body: any): Observable<any> {
    return this.http.post('/api/enterprises/create', body);
  }

  list(): Observable<any> {
    return this.http.get('/api/enterprises/list');
  }

  update(body: any): Observable<any> {
    return this.http.post('/api/enterprises/update', body);
  }
}
