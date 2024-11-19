import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
// Interfaces
import { Album } from '@models/album';
import { IArtist } from '@models/artist';
import { Track } from '@models/track';

@Injectable()
export class HomeService {
  constructor(private httpclient: HttpClient) {}

  getAlbumsApi(): Observable<Album[]> {
    return this.httpclient
      .get<Album[]>(
        'https://api.spotify.com/v1/browse/new-releases?country=CO'
      )
      .pipe(
        map((response: any) => {
          return response.albums.items;
        })
      );
  }

  getAlbumApi(id: string): Observable<Track[]> {
    return this.httpclient
      .get<Track[]>(`https://api.spotify.com/v1/albums/${id}`)
      .pipe(
        map((response: any) => {
          return response.tracks.items;
        })
      );
  }

  getArtistApi(id: string): Observable<IArtist> {
    return this.httpclient
      .get<IArtist>(`https://api.spotify.com/v1/artists/${id}`)
      .pipe(
        map((response: IArtist) => {
          return response;
        })
      );
  }
}
