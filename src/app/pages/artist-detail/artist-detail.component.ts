import {
  CommonModule,
  NgOptimizedImage
} from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  InputSignal,
  signal,
  WritableSignal,
} from '@angular/core';
// Models
import { IArtist } from '@models/artist';
// Services
import { HomeService } from '@services/home.service';

@Component({
  selector: 'app-artist-detail',
  imports: [CommonModule, NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './artist-detail.component.html',
  styleUrl: './artist-detail.component.scss',
})
export class ArtistDetailComponent {
  //InputBinding
  public id: InputSignal<string> = input.required<string>();

  // Injections
  private homeService = inject(HomeService);

  // public artist: WritableSignal<IArtist> = signal({ images: [] });

  public artist = this.homeService.getArtistApi(this.id);

  artistIsLoading = computed(() =>
    this.artist.isLoading()
  );

}
