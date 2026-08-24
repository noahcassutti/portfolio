import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { Project } from '../../models/project.model';
import { TechBadgeComponent } from '../tech-badge/tech-badge.component';

@Component({
  selector: 'app-project-card',
  imports: [TechBadgeComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCardComponent {
  readonly project = input.required<Project>();
}
