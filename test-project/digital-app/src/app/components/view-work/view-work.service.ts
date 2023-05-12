import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewWorkService {

  host = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getWorkById(id: number) {
    return this.http.get(`${this.host}/${id}`);
  }
}
