import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Signal, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
// Services components
import { HomeDetailService } from '@services-components/home-detail/home-detail.service';
// Services
import { HomeService } from '@services/home.service';
// Interfaces
import { Album } from '@models/album';
// Components
import { CardDetailComponent } from '../../shared/components/card-detail/card-detail.component';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-home',
    imports: [CommonModule, CardDetailComponent, RouterLink],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {

  // Inject
  private homeService = inject(HomeService);
  private homeDetailService = inject(HomeDetailService);

  //Data
  public dataAlbums: Signal<Album[]> = toSignal(this.homeService.getAlbumsApi(), { initialValue: [] });

  redirectCardDetail(event: any): void {    
    this.homeDetailService.set({ id: event.id, title: event.title });
  }
}
