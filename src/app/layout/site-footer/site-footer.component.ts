import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PROFILE } from '../../data/profile';

@Component({
  selector: 'app-site-footer',
  templateUrl: './site-footer.component.html',
  styleUrl: './site-footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteFooterComponent {
  readonly profile = PROFILE;
  readonly year = new Date().getFullYear();
}
