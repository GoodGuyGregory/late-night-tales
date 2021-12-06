import { Injectable } from '@angular/core';
import { Record } from '../Record';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RECORDS } from '../my-records';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  private apiUrl = 'http://localhost:5000/records'

  constructor(private http: HttpClient) { }

  getRecords(): Observable<Record[]> {
    return this.http.get<Record[]>(this.apiUrl);

  }

}
