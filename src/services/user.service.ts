import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  endpoint = environment.endpoint;
  token = typeof window !== 'undefined' && localStorage.getItem('auth-token');
  authHeaders = new HttpHeaders({ Authorization: `Bearer ${this.token}` });

  getAuthUser() {
    return this.http.get(`${this.endpoint}/auth-user`, {
      headers: this.authHeaders,
    });
  }

  logout() {
    return this.http.get(`${this.endpoint}/logout`, {
      headers: this.authHeaders,
    });
  }
}
