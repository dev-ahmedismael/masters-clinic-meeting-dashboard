import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  constructor(private http: HttpClient) {}

  endpoint = environment.endpoint;
  token = typeof window !== 'undefined' && localStorage.getItem('auth-token');
  authHeaders = new HttpHeaders({ Authorization: `Bearer ${this.token}` });

  getMessages() {
    return this.http.get(`${this.endpoint}/messages`, {
      headers: this.authHeaders,
    });
  }

  deleteMessage(id: string | number) {
    return this.http.delete(`${this.endpoint}/messages/${id}`, {
      headers: this.authHeaders,
    });
  }
}
