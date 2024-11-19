import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
// Environments
import { environment } from '@environments/environment';

interface IAuth {
  access_token: string;
  token_type: string;
  expires_in: number;
}

@Injectable({
  providedIn: 'root',
})
export class SpotifyAuthService {
  constructor(private httpclient: HttpClient) { }

  getAccessToken(): Observable<IAuth> {
    const url = 'https://accounts.spotify.com/api/token';

    const encodedBody = new HttpParams({
      fromObject: {
        grant_type: 'client_credentials',
        client_id: environment.spotifyClientId,
        client_secret: environment.spotifyClientSecret,
      },
    });

    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: '',
    });

    return this.httpclient.post<IAuth>(url, encodedBody, {
      headers: httpHeaders,
    }).pipe(
      map((response: any) => {
        return response;
      })
    );

    // const res = await lastValueFrom(
    //   this.httpclient.post<IAuth>(url, encodedBody, { headers: httpHeaders })
    // );
  }
}
