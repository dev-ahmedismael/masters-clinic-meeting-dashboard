import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BranchesService {
  constructor(private http: HttpClient) {}

  endpoint = environment.endpoint;
  token = typeof window !== 'undefined' && localStorage.getItem('auth-token');
  authHeaders = new HttpHeaders({ Authorization: `Bearer ${this.token}` });

  getBranches() {
    return this.http.get(`${this.endpoint}/branches`, {
      headers: this.authHeaders,
    });
  }

  addBranch(data: any) {
    return this.http.post(`${this.endpoint}/branches`, data, {
      headers: this.authHeaders,
    });
  }

  updateBranch(data: any, id: string) {
    return this.http.put(`${this.endpoint}/branches/${id}`, data, {
      headers: this.authHeaders,
    });
  }

  deleteBranch(id: string) {
    return this.http.delete(`${this.endpoint}/branches/${id}`, {
      headers: this.authHeaders,
    });
  }
}
