import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

   url = '../../assets/data';

  constructor(private http: HttpClient) { }

  getRestData(jsonName: string): Observable<any> {
    const uri = `${this.url}/${jsonName}.json`;
    return this.http.get(uri);
  }

}
