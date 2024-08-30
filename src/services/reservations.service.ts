import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ReservationsService {
  constructor(private http: HttpClient) {}

  endpoint = environment.endpoint;
  token = typeof window !== 'undefined' && localStorage.getItem('auth-token');
  authHeaders = new HttpHeaders({ Authorization: `Bearer ${this.token}` });

  getReservations() {
    return this.http.get(`${this.endpoint}/reservations`, {
      headers: this.authHeaders,
    });
  }

  addReservation(data: any) {
    return this.http.post(`${this.endpoint}/reservations`, data, {
      headers: this.authHeaders,
    });
  }

  updateReservation(data: any, id: string) {
    return this.http.put(`${this.endpoint}/reservations/${id}`, data, {
      headers: this.authHeaders,
    });
  }

  deleteReservation(id: string) {
    return this.http.delete(`${this.endpoint}/reservations/${id}`, {
      headers: this.authHeaders,
    });
  }

  getDoctors(data: any) {
    return this.http.post(`${this.endpoint}/reservation-doctors`, data, {
      headers: this.authHeaders,
    });
  }

  getTodayReservations() {
    return this.http.get(`${this.endpoint}/today-reservations`, {
      headers: this.authHeaders,
    });
  }
  getDoctorReservations() {
    return this.http.get(`${this.endpoint}/doctor-reservations`, {
      headers: this.authHeaders,
    });
  }
}
