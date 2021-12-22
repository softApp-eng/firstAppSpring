import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
    public host:string = "http://localhost:8080";
  constructor(private http:HttpClient) { }

  public getResource(url:any){
    return this.http.get(this.host + url);
  }
}
