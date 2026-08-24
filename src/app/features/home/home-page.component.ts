import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { setPageMeta } from '../../core/page-meta';
import { PROFILE } from '../../data/profile';
import { PROJECTS } from '../../data/projects';
import { ProjectCardComponent } from '../../shared/project-card/project-card.component';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink, ProjectCardComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  readonly profile = PROFILE;
  readonly featured = PROJECTS.filter((project) => project.featured);

  constructor() {
    setPageMeta(
      'Noah Cassutti — Desarrollador backend',
      'Portfolio de Noah Cassutti. APIs y sistemas con NestJS, Express, Django y Angular.',
    );
  }
}
