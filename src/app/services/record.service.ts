import { Injectable } from '@angular/core';
import { Record } from '../Record';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RECORDS } from '../my-records';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  constructor(private http: HttpClient) { }

  getRecords(): Record[] {
    return RECORDS;

  }

}
