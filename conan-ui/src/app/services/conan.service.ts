import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

export interface ConanPackage {
  name: string;
  version: string;
  user: string;
  channel: string;

  settings : Object;
  options : Object;
}

export interface ConanRepoStatus {
  url: string;
  valid : boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ConanService {

  constructor(private httpClient: HttpClient) { }

  conanUIServerURL = 'http://localhost:20000/api/0.1'

  getHttpOptions() : Object {
    return {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
  }

  isValidUrl (conanUrl : string) : Observable<boolean> {
    const requestData = { url : conanUrl };
    return this.httpClient.post<ConanRepoStatus>(`${this.conanUIServerURL}/conan-repo-status`, requestData, this.getHttpOptions())
      .pipe(map((status : ConanRepoStatus) => status.valid));
  }
}
