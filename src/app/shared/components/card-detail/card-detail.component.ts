import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  InputSignal,
  input,
  output,
} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-card-detail',
    imports: [CommonModule, RouterLink, NgOptimizedImage],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './card-detail.component.html',
    styleUrl: './card-detail.component.scss'
})
export class CardDetailComponent {
  public id: InputSignal<string> = input.required<string>();
  public urlImage: InputSignal<string> = input.required<string>();
  public url: InputSignal<string> = input.required<string>();
  public title: InputSignal<string> = input.required<string>();
  public priorityImage: InputSignal<boolean> = input<boolean>(false);

  public redirectUrl = output<{ title: string; id: string }>();

  redirectRouterLink() {
    this.redirectUrl.emit({ title: this.title(), id: this.id() });
  }
}
