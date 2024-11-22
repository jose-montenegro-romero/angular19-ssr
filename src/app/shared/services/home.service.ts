import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable, map } from 'rxjs';
// Interfaces
import { Album } from '@models/album';
import { IArtist } from '@models/artist';
import { Track } from '@models/track';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable()
export class HomeService {
  private httpclient = inject(HttpClient);

  public album = signal<Track[]>([]);
  public albums = toSignal(
    this.httpclient
      .get<Album[]>('https://api.spotify.com/v1/browse/new-releases?country=CO')
      .pipe(
        map((response: any) => {
          return response.albums.items;
        })
      ),
    { initialValue: [] }
  );

  setAlbums(id: string) {
    this.getAlbumApi(id).subscribe((track) => this.album.set(track));
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
