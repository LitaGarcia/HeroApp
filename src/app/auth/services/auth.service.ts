import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Auth } from '../interfaces/auth.interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = environment.baseUrl;
  private _auth: Auth | undefined;
  constructor(private http: HttpClient) {}

  loginWithUser() {
    return this.http.get<Auth>(`${this.baseUrl}/users/1`).pipe(tap)
  }
}
