import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  constructor(private http: HttpClient) {}

  endpoint = environment.endpoint;
  token = typeof window !== 'undefined' && localStorage.getItem('auth-token');
  authHeaders = new HttpHeaders({ Authorization: `Bearer ${this.token}` });

  getEmployees() {
    return this.http.get(`${this.endpoint}/users`, {
      headers: this.authHeaders,
    });
  }

  addEmployee(data: any) {
    return this.http.post(`${this.endpoint}/register`, data, {
      headers: this.authHeaders,
    });
  }

  updateEmployee(data: any, id: string) {
    return this.http.put(`${this.endpoint}/users/${id}`, data, {
      headers: this.authHeaders,
    });
  }

  deleteEmployee(id: string) {
    return this.http.delete(`${this.endpoint}/users/${id}`, {
      headers: this.authHeaders,
    });
  }

  getRoles() {
    return this.http.get(`${this.endpoint}/user-roles`, {
      headers: this.authHeaders,
    });
  }
}
