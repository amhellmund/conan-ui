import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConanService {

  constructor(private http: HttpClient) { }

  is_valid_url (conan_url : string) : bool {
    return false;
  }
}
