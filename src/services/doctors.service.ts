import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DoctorsService {
  constructor(private http: HttpClient) {}

  endpoint = environment.endpoint;
  token = typeof window !== 'undefined' && localStorage.getItem('auth-token');
  authHeaders = new HttpHeaders({ Authorization: `Bearer ${this.token}` });

  getDoctors() {
    return this.http.get(`${this.endpoint}/doctors`, {
      headers: this.authHeaders,
    });
  }

  addDoctor(data: any) {
    return this.http.post(`${this.endpoint}/doctors`, data, {
      headers: this.authHeaders,
    });
  }

  updateDoctor(data: any, id: string) {
    return this.http.put(`${this.endpoint}/doctors/${id}`, data, {
      headers: this.authHeaders,
    });
  }

  deleteDoctor(id: string) {
    return this.http.delete(`${this.endpoint}/doctors/${id}`, {
      headers: this.authHeaders,
    });
  }
}
