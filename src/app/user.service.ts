import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class UserService {
  public subject = new Subject();
  constructor(private http: HttpClient) {}
  getUserDetails() {
    return this.http.get('https://api.publicapis.org/entries');
  }
}
