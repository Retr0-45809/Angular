import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  constructor(private http:HttpClient) { }
  subscribeFromService(){
    alert("You have already subscribed!");
  }

  productInfo():Observable<any>{
  return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }
}
