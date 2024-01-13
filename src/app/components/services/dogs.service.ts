import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogsService {
  API_URL = 'https://dog.ceo/api/breed/hound/images/random/3';
  constructor(
    private http: HttpClient,
  ) { }
  getDogs(): Observable<any> {
    return this.http.get<any>(this.API_URL);
  }
}
