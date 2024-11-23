import {
  CommonModule,
  NgOptimizedImage
} from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  InputSignal,
  OnInit,
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
export class ArtistDetailComponent implements OnInit {
  //InputBinding
  public id: InputSignal<string> = input.required<string>();

  public artist: WritableSignal<IArtist> = signal({ images: [] });

  constructor(
    private homeService: HomeService
  ) {}

  ngOnInit(): void {
    this.getArtist(this.id());
  }

  getArtist(id: string) {
    this.homeService.getArtistApi(id).subscribe((data: IArtist) => {
      this.artist.set(data);
    });
  }
}
