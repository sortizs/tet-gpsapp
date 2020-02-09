import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';
import { UserModel } from '../entities/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string;
  private token: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:5000/api/User';

    this.token = `Bearer ${localStorage.getItem('token')}`;
  }

  getUsers(): Observable<UserModel[]> {
    const headers = new HttpHeaders({
      Authorization: this.token
    });

    return this.http.get(this.url/*, { headers }*/).pipe(
      map((data: UserModel[]) => data)
    );
  }

  getUser(id: string): Observable<UserModel> {
    let url = `${this.url}/${id}`;

    return this.http.get(url).pipe(
      map((data: UserModel) => data)
    );
  }

  createUser(user: UserModel): Observable<UserModel> {
    const headers = new HttpHeaders({
      Authorization: this.token
    });

    return this.http.post<UserModel>(this.url, user/*, { headers }*/);
  }

  updateUser(user: UserModel): Observable<UserModel> {
    let url = `${this.url}/${user.id}`;

    return this.http.put<UserModel>(url, user);
  }

  loggedIn(): boolean {
    return localStorage.getItem('token') ? true : false;
  }

  auth(username: string, password: string): Observable<UserModel> {
    let url = `${this.url}/auth`;

    return this.http.post<UserModel>(url, { username, password });
  }
}
