import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RequestService {
  api = 'http://localhost:3000/'
  constructor(private http: HttpClient) { }

  getUsers(query): Observable<any> {
    return this.http.post<any>(this.api + 'users', this.queryI(query))
  }

  getPhotos(query): Observable<any> {
    return this.http.post<any>(this.api + 'photos', this.queryI(query))
  }

  queryI(query) {
    return { query: query }
  }
}
