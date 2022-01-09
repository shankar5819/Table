import { TableData } from './../../assets/Model/tableData';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {
    private apiServer = "https://api.publicapis.org";
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

  constructor(private http: HttpClient) { }

  getAll(): Observable<TableData[]> {
    return this.http.get<TableData[]>(this.apiServer + '/entries')
  }

}