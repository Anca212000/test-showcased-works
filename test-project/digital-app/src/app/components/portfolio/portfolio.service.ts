import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  host = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getWorks() {
    return this.http.get(`${this.host}`).pipe(map((res) => res));
  }

  createWork(titleWork: string, imgName: string, link: string, description: string, showHide: boolean) {
    // console.log(titleWork);
    let addedWork = {
      title: titleWork,
      fileName: imgName,
      linkProject: link,
      details: description,
      displayed: showHide
    };
    return this.http.post(`${this.host}`, addedWork);
  }

  editWork(id: number, titleWork: string, imgName: string, link: string, description: string, showHide: boolean) {
    // console.log(titleWork);
    let editedWork = {
      title: titleWork,
      fileName: imgName,
      linkProject: link,
      details: description,
      displayed: showHide
    };
    return this.http.post(`${this.host}/${id}`, editedWork);
  }

  deleteWork(id: number) {
    return this.http.delete(`${this.host}/${id}`);
  }
}
