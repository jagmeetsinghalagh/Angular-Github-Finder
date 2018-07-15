import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  name: string;

  constructor(private http: HttpClient) { }
  
  setUser(form: any) {
    this.name = form.name;    
  }

  getUser(): Observable<any>{
    const url = `https://api.github.com/users/${this.name}`;
    return this.http.get(url);
  }

  getRepos(): Observable<any>{
    const url = `https://api.github.com/users/${this.name}/repos`;
    return this.http.get(url);
  }

}
