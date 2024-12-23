import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Signal,
  afterNextRender,
  inject,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { driver } from 'driver.js';
// Services components
import { HomeDetailService } from '@services-components/home-detail/home-detail.service';
// Services
import { HomeService } from '@services/home.service';
// Interfaces
import { Album } from '@models/album';
// Components
import { CardDetailComponent } from '../../shared/components/card-detail/card-detail.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { SsrService } from '@services/ssr/ssr.service';
import { LocalstorageService } from '@services/localstorage/localstorage.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, CardDetailComponent, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(
    private ssrService: SsrService,
    private localstorageService: LocalstorageService
  ) {
    console.log('Es navegador: ', ssrService.isBrowser());
    afterNextRender(() => {

      if (!localstorageService.get('onboardingComplete')) {
        const driverObj = driver({
          showProgress: true,
          animate: true,
          allowClose: false,
          nextBtnText: '—›',
          prevBtnText: '‹—',
          doneBtnText: 'Finalizar',
          showButtons: ['next', 'previous'],
          onNextClick: () => {
            if (driverObj.isLastStep()) {
              localstorageService.set('onboardingComplete', 'true');
            }

            driverObj.moveNext();
          },
          steps: [
            {
              element: '#div-title',
              popover: {
                title: 'Título',
                description: 'Este es el título de la página web.',
                side: 'bottom',
                align: 'start',
              },
            },
            {
              element: '#div-content',
              popover: {
                title: 'Contenido',
                description: 'Estos son los discos disponibles.',
                side: 'top',
                align: 'start',
              },
            },
            {
              popover: {
                title: 'Feliz día',
                description: 'Gracias por seguir nuestro tutorial.',
              },
            },
          ],
        });

        driverObj.drive();
      }
    });
  }

  // Inject
  private homeService = inject(HomeService);
  private homeDetailService = inject(HomeDetailService);

  //Data
  // public dataAlbums: Signal<Album[]> = this.homeService.albums;
  public dataAlbums: Signal<Album[]> = toSignal(
    this.homeService.getAlbumsApi(),
    { initialValue: [] }
  );

  redirectCardDetail(event: any): void {
    this.homeDetailService.set({ id: event.id, title: event.title });
  }
}
