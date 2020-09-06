import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  constructor(private http: HttpClient) { }


  fetchURL() {
   return this.http.get<any>('https://api.spacexdata.com/v3/launches?limit=100')
 }

}
