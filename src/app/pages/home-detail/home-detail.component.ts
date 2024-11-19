import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  InputSignal,
  OnInit,
  WritableSignal,
  input,
  signal,
} from '@angular/core';
import { Router } from '@angular/router';
// Services components
import { HomeDetailService } from '@services-components/home-detail/home-detail.service';
// Services
import { HomeService } from '@services/home.service';
// Interfaces
import { Track } from '@models/track';
// Components
import { CardComponent } from '../../shared/components/card/card.component';

@Component({
    selector: 'app-home-detail',
    imports: [CommonModule, CardComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './home-detail.component.html',
    styleUrl: './home-detail.component.scss'
})
export class HomeDetailComponent implements OnInit {
  // @Input() id = '';
  public id: InputSignal<string> = input.required<string>();

  public dataAlbum: WritableSignal<Track[]> = signal([]);
  public title: WritableSignal<string | undefined> = signal('');

  constructor(
    private homeService: HomeService,
    private homeDetailService: HomeDetailService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.title.set(this.homeDetailService.get().title);

    if (this.id()) {
      this.getAlbum(this.id());
    }
  }

  getAlbum(id: string) {
    this.homeService.getAlbumApi(id).subscribe({
      next: (data: Track[]) => {
        this.dataAlbum.set(data);
      },
      error: (err) => {
        console.log(err);
        this.router.navigateByUrl('');
      },
    });
    // this.router.navigateByUrl('/');
  }
}
