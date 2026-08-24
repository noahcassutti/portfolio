import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-tech-badge',
  templateUrl: './tech-badge.component.html',
  styleUrl: './tech-badge.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechBadgeComponent {
  readonly label = input.required<string>();
}
