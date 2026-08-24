import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home-page.component').then((m) => m.HomePageComponent),
    title: 'Noah Cassutti — Desarrollador backend',
  },
  {
    path: 'proyectos',
    loadComponent: () =>
      import('./features/projects/projects-page.component').then(
        (m) => m.ProjectsPageComponent,
      ),
    title: 'Proyectos — Noah Cassutti',
  },
  {
    path: 'stack',
    loadComponent: () =>
      import('./features/stack/stack-page.component').then((m) => m.StackPageComponent),
    title: 'Stack — Noah Cassutti',
  },
  {
    path: 'contacto',
    loadComponent: () =>
      import('./features/contact/contact-page.component').then(
        (m) => m.ContactPageComponent,
      ),
    title: 'Contacto — Noah Cassutti',
  },
  { path: '**', redirectTo: '' },
];
