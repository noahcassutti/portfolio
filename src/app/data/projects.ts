import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    id: 'gestion-proyectos',
    title: 'Gestión de Proyectos',
    period: 'mar. 2026 – jul. 2026',
    institution: 'Universidad Nacional de Entre Ríos',
    summary:
      'Sistema web integral para el seguimiento de proyectos, tareas y clientes. Trabajo final integrador de Desarrollo de Aplicaciones Web (UNER), desarrollado en equipo.',
    highlights: [
      'Autenticación con validación de estado operativo (activo/baja).',
      'Ciclo de vida de proyectos y tareas, con baja lógica e integridad de clientes.',
      'API NestJS + PostgreSQL/TypeORM y frontend Angular con formularios validados.',
      'Despliegue pensado para producción con Nginx y PM2.',
      'Expansiones: Kanban, métricas, búsqueda y paginación, reportes, historial.',
    ],
    stack: [
      'Angular',
      'TypeScript',
      'NestJS',
      'TypeORM',
      'Node.js',
      'PostgreSQL',
      'Nginx',
      'PM2',
      'Git',
      'Swagger'
    ],
    repoUrl: 'https://github.com/noahcassutti/gestion_de_proyectos',
    featured: true,
  },
  {
    id: 'progiii',
    title: 'PROGIII — API REST de reservas',
    period: 'jul. 2025 – nov. 2025',
    institution: 'Universidad Nacional de Entre Ríos',
    summary:
      'API REST para la gestión de salones de eventos: reservas, servicios, turnos y usuarios. Proyecto colaborativo de la Tecnicatura Universitaria en Desarrollo Web (UNER).',
    highlights: [
      'JWT y autorización por roles (Admin, Empleado, Cliente).',
      'Soft deletes, validaciones con express-validator e informes vía stored procedures.',
      'Contratos documentados con Swagger y registro de usuarios tipo cliente.',
    ],
    stack: ['Node.js', 'Express.js', 'MySQL', 'JWT', 'Swagger'],
    repoUrl: 'https://github.com/noahcassutti/prog3-trabajofinalintegrador',
    featured: true,
  },
  {
    id: 'planet-superheroes',
    title: 'Planet Superheroes',
    period: 'jun. 2024 – jul. 2025',
    institution: 'ISPC Instituto Superior Politécnico Córdoba',
    summary:
      'E-commerce fullstack de cómics con API Django, web en Angular y app móvil nativa. Proyecto final de la Tecnicatura Superior, coordinado con Scrum.',
    highlights: [
      'API Django para lógica de negocio, autenticación y persistencia.',
      'Web Angular y mobile Java/Kotlin sincronizados sobre la misma API.',
      'Catálogo, carrito, eventos y perfiles de usuario.',
    ],
    stack: ['Django', 'Python', 'Angular', 'TypeScript', 'Java', 'Kotlin', 'REST', 'MySQL'],
    repoUrl: 'https://github.com/noahcassutti/PlanetSuperHeroes',
    featured: true,
  },
  {
    id: 'salones-infantiles',
    title: 'Salones Infantiles — TPI',
    period: 'abr. 2025 – jul. 2025',
    institution: 'Universidad Nacional de Entre Ríos',
    summary:
      'Sitio multi-página responsive para centralizar la oferta de salones de eventos infantiles. Introducción al Desarrollo Web (UNER).',
    highlights: [
      'HTML5 semántico, CSS Grid/Flexbox y Bootstrap.',
      'Navegación entre inicio, contacto, nosotros y catálogos.',
    ],
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    repoUrl: 'https://github.com/noahcassutti/Salones-Infantiles',
    demoUrl: 'https://salonesinfantiles.netlify.app/',
    featured: false,
  },
];
