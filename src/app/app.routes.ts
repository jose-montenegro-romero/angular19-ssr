import { Routes } from '@angular/router';
import { RenderMode } from '@angular/ssr';
// Guards
import { loginGuard } from '@guards/login/login.guard';
// Services
import { HomeService } from '@services/home.service';
import { SpotifyAuthService } from '@services/spotify/spotifyAuth.service';

export const routes: Routes = [
  {
    path: 'artista/:id',
    providers: [HomeService],
    canActivate: [loginGuard],
    title: 'Artista',
    // mode: RenderMode.Client, serverRouteConfig ServerRoute[]
    loadComponent: () =>
      import('./pages/artist-detail/artist-detail.component').then(
        (mod) => mod.ArtistDetailComponent
      ),
  },
  {
    path: ':id',
    providers: [HomeService],
    canActivate: [loginGuard],
    title: 'Detail',
    loadComponent: () =>
      import('./pages/home-detail/home-detail.component').then(
        (mod) => mod.HomeDetailComponent
      ),
  },
  {
    path: '',
    providers: [HomeService, SpotifyAuthService],
    title: 'Home',
    loadComponent: () =>
      import('./pages/home/home.component').then((mod) => mod.HomeComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
