import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DepartmentsService {
  constructor(private http: HttpClient) {}

  endpoint = environment.endpoint;
  token = typeof window !== 'undefined' && localStorage.getItem('auth-token');
  authHeaders = new HttpHeaders({ Authorization: `Bearer ${this.token}` });

  getDepartments() {
    return this.http.get(`${this.endpoint}/departments`, {
      headers: this.authHeaders,
    });
  }

  addDepartment(data: any) {
    return this.http.post(`${this.endpoint}/departments`, data, {
      headers: this.authHeaders,
    });
  }

  updateDepartment(data: any, id: string) {
    return this.http.put(`${this.endpoint}/departments/${id}`, data, {
      headers: this.authHeaders,
    });
  }

  deleteDepartment(id: string) {
    return this.http.delete(`${this.endpoint}/departments/${id}`, {
      headers: this.authHeaders,
    });
  }
}
