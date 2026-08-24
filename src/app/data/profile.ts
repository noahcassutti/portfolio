import { EducationItem, Profile, StackGroup } from '../models/profile.model';

export const PROFILE: Profile = {
  name: 'Noah Cassutti',
  headline: 'Desarrollador backend | APIs, datos y arquitectura',
  bio: 'Estudiante de la Tecnicatura Universitaria en Desarrollo Web (UNER). Construyo APIs y sistemas de gestión con NestJS, Express y Django, y frontends en Angular cuando el producto lo pide.',
  github: 'https://github.com/noahcassutti',
  linkedin: 'https://www.linkedin.com/in/noahcassutti/',
};

export const STACK_GROUPS: StackGroup[] = [
  {
    title: 'Backend',
    items: ['NestJS', 'Express.js', 'Django', 'Node.js', 'TypeORM'],
  },
  {
    title: 'Datos',
    items: ['PostgreSQL', 'MySQL'],
  },
  {
    title: 'Frontend',
    items: ['Angular', 'TypeScript', 'HTML5', 'CSS/SCSS'],
  },
  {
    title: 'Infra y herramientas',
    items: ['JWT', 'Swagger', 'Git', 'GitHub', 'Nginx', 'PM2'],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    institution: 'Universidad Nacional de Entre Ríos (UNER)',
    degree: 'Tecnicatura Universitaria en Desarrollo Web',
    period: '2024 – Presente',
    status: 'En curso',
    description:
      'Formación universitaria focalizada en desarrollo de software para la web, arquitectura cliente/servidor, diseño de APIs REST y bases de datos relacionales.',
    highlights: [
      'Desarrollo de Aplicaciones Web: NestJS, TypeORM, PostgreSQL y Angular.',
      'Programación Web III: APIs REST con Express.js, MySQL, autenticación JWT y roles.',
      'Trabajos integradores orientados a estándares de producción y trabajo colaborativo.',
    ],
  },
  {
    institution: 'Universidad Tecnológica Nacional (UTN)',
    degree: 'Ingenieria en Sistemas',
    period: '2020-Actualidad',
    status: 'En Curso',
    description:
      'Formación en fundamentos de ingeniería de software, algoritmia, lógica computacional y metodologías de desarrollo.',
    highlights: [
      'Lógica de programación y diseño algorítmico estructurado.',
      'Bases sólidas de ingeniería y resolución de problemas técnicos.',
    ],
  },
  {
    institution: 'ISPC — Instituto Superior Politécnico Córdoba',
    degree: 'Tecnicatura Superior en Desarrollo Web y Aplicaciones',
    period: '2023 – 2025',
    status: 'Completado',
    description:
      'Formación técnica superior con énfasis en desarrollo fullstack, trabajo en equipo con metodologías ágiles (Scrum) e integración de plataformas multi-dispositivo.',
    highlights: [
      'Proyecto final integrador (Planet Superheroes): backend Django REST con frontends Angular y Android (Java/Kotlin).',
      'Modelado relacional, persistencia y control de versiones distribuido.',
    ],
  },
];
