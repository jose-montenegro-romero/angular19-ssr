import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, InputSignal, input } from '@angular/core';

@Component({
    selector: 'app-card',
    imports: [CommonModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss'
})
export class CardComponent {
  public id: InputSignal<string> = input.required<string>();
  public title: InputSignal<string> = input.required<string>();
  public urlMp3: InputSignal<string> = input.required<string>();
}
