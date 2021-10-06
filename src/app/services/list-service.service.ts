import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListServiceService {

  constructor(private http:HttpClient) {}

  coinList(url:string){
    return this.http.get(url);
  }

}
