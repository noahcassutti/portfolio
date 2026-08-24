import { ChangeDetectionStrategy, Component } from '@angular/core';

import { setPageMeta } from '../../core/page-meta';
import { EDUCATION, STACK_GROUPS } from '../../data/profile';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';
import { TechBadgeComponent } from '../../shared/tech-badge/tech-badge.component';

@Component({
  selector: 'app-stack-page',
  imports: [SectionHeaderComponent, TechBadgeComponent],
  templateUrl: './stack-page.component.html',
  styleUrl: './stack-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StackPageComponent {
  readonly groups = STACK_GROUPS;
  readonly education = EDUCATION;

  constructor() {
    setPageMeta(
      'Stack & Formación — Noah Cassutti',
      'Tecnologías y formación académica: NestJS, Express, Django, Angular, PostgreSQL, UNER e ISPC.',
    );
  }
}
