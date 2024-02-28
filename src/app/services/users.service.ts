import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url: string = "https://jsonplaceholder.typicode.com/todos/";

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.url);
  }

}
