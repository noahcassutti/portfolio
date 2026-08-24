import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

import { setPageMeta } from '../../core/page-meta';
import { PROJECTS } from '../../data/projects';
import { ProjectCardComponent } from '../../shared/project-card/project-card.component';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';

@Component({
  selector: 'app-projects-page',
  imports: [ProjectCardComponent, SectionHeaderComponent],
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsPageComponent {
  readonly projects = PROJECTS;
  readonly selectedTech = signal<string | null>(null);

  private static readonly PRIORITY_TECHS: readonly string[] = [
    'NestJS',
    'Express.js',
    'Django',
    'PostgreSQL',
    'MySQL',
    'TypeORM',
    'Angular',
    'TypeScript',
    'Node.js',
    'JWT',
    'Swagger',
  ];

  readonly technologies = Array.from(
    new Set(PROJECTS.flatMap((project) => project.stack)),
  ).sort((a, b) => {
    const indexA = ProjectsPageComponent.PRIORITY_TECHS.indexOf(a);
    const indexB = ProjectsPageComponent.PRIORITY_TECHS.indexOf(b);
    if (indexA !== -1 && indexB !== -1) return indexA - indexB;
    if (indexA !== -1) return -1;
    if (indexB !== -1) return 1;
    return a.localeCompare(b, 'es');
  });

  readonly filtered = computed(() => {
    const tech = this.selectedTech();
    if (!tech) {
      return this.projects;
    }
    return this.projects.filter((project) => project.stack.includes(tech));
  });

  constructor() {
    setPageMeta(
      'Proyectos — Noah Cassutti',
      'Proyectos de Noah Cassutti: NestJS, Express, Django y Angular.',
    );
  }

  selectTech(tech: string | null): void {
    this.selectedTech.set(tech);
  }
}
