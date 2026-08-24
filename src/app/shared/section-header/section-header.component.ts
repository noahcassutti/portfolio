import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrl: './section-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionHeaderComponent {
  readonly eyebrow = input('');
  readonly title = input.required<string>();
  readonly subtitle = input('');
}
