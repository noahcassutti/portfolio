import { ChangeDetectionStrategy, Component } from '@angular/core';

import { setPageMeta } from '../../core/page-meta';
import { PROFILE } from '../../data/profile';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';

@Component({
  selector: 'app-contact-page',
  imports: [SectionHeaderComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactPageComponent {
  readonly profile = PROFILE;

  constructor() {
    setPageMeta(
      'Contacto — Noah Cassutti',
      'Contacto de Noah Cassutti en GitHub y LinkedIn.',
    );
  }
}
