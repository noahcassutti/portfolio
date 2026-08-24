import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { PROFILE } from '../../data/profile';

@Component({
  selector: 'app-site-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteHeaderComponent {
  readonly profile = PROFILE;
  readonly links = [
    { path: '/', label: 'Inicio', exact: true },
    { path: '/proyectos', label: 'Proyectos', exact: false },
    { path: '/stack', label: 'Stack', exact: false },
    { path: '/contacto', label: 'Contacto', exact: false },
  ];
}
