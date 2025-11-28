

import { ContentData } from './types';

const COMMON_PROFILE = {
  name: "Erick Zuñiga",
  email: "erick.zunigan@gmail.com",
  linkedin: "linkedin.com/in/erick-zuniga",
  github: "github.com/ErickZuniga",
};

const TECH_SKILLS = [
  { name: "Java", icon: "java" },
  { name: "Spring Boot", icon: "spring" },
  { name: "Maven", icon: "maven" },
  { name: "Git", icon: "git" },
  { name: "REST APIs", icon: "globe" },
  { name: "JavaScript", icon: "js" },
  { name: "JSON", icon: "code" },
  { name: "Docker", icon: "docker" },
  { name: "JUnit", icon: "java" },
  { name: "MongoDB", icon: "db" },
  { name: "MySQL", icon: "db" },
  { name: "Python", icon: "python" },
  { name: "HTML", icon: "html" },
  { name: "CSS3", icon: "code" },
  { name: "Bootstrap", icon: "code" },
  { name: "Hibernate", icon: "db" },
  { name: "jQuery", icon: "js" },
  { name: "Jenkins", icon: "settings" },
  { name: "gRPC", icon: "server" },
];

export const CONTENT: { en: ContentData; es: ContentData } = {
  en: {
    profile: {
      ...COMMON_PROFILE,
      title: "Software Engineer",
      location: "Chihuahua, Mexico",
      summary: "Experienced Software Engineer with over 8 years of track record specializing in Java Development, Software Infrastructure, and robust System Design. Proven ability to deliver high-quality backend solutions for global clients."
    },
    ui: {
      portfolio: "Portfolio",
      contactMe: "CONTACT ME",
      linkedin: "LINKEDIN",
      github: "GITHUB",
      experience: "Professional Experience",
      education: "Education",
      skills: "Technologies & Tools",
      projects: "Personal Projects",
      footerRights: "All rights reserved.",
      footerTagline: "Building robust software infrastructure and scalable backend systems.",
      present: "Present",
      themeLabel: "Toggle Theme",
      languageLabel: "Cambiar a español"
    },
    experiences: [
      {
        id: "globallogic",
        company: "GlobalLogic",
        role: "Software Engineer",
        period: "Oct 2024 - Present",
        duration: "1 yr 2 mos",
        location: "Chihuahua, Mexico (Remote)",
        description: "Driving software innovation and delivery in a dynamic environment, contributing to high-impact projects with a focus on code quality and system scalability.",
        tech: ["Java", "Spring Boot", "Microservices", "Cloud Infrastructure", "PostgreSQL"]
      },
      {
        id: "epam",
        company: "EPAM Systems / Expedia",
        role: "Software Engineer",
        period: "Sep 2021 - Jun 2024",
        duration: "2 yrs 10 mos",
        location: "Guadalajara, Mexico (Remote)",
        description: "Led the design and implementation of innovative features for various Expedia backend services. Collaborated with global teams to troubleshoot critical issues, establishing and improving Service Level Objectives (SLOs). Played a key role in migrating a legacy system to a modern technology stack in AWS, significantly enhancing performance. Conducted code reviews and mentored junior developers, promoting continuous learning within the team.",
        tech: ["Java", "AWS", "High Scale Systems", "Backend Architecture", "NoSQL"]
      },
      {
        id: "amdocs",
        company: "Amdocs",
        role: "Software Support Specialist / Team Lead",
        period: "May 2020 - Mar 2021",
        duration: "11 mos",
        location: "Guadalajara, Mexico",
        description: "Served as Team Lead for the platform unit in the Americas time zone. Provided software troubleshooting support for CatalogOne accounts and kept customers informed on resolution progress. Leveraged tools like Openshift Container Platform, Couchbase, and ServiceNow to manage enterprise telecommunication systems. Overseen workload distribution, knowledge sharing, and training for the team.",
        tech: ["Java", "Unix/Linux", "Couchbase", "Enterprise Support", "Openshift Container Platform"]
      },
      {
        id: "softtek",
        company: "Softtek",
        role: "Java Software Engineer III",
        period: "Oct 2019 - May 2020",
        duration: "8 mos",
        location: "Guadalajara, Mexico",
        description: "Developed Java code for new features on an internal system using Spring Framework, including Kafka message integration for subscription management. Wrote MSSQL scripts for database management and conducted build/release activities. Operated efficiently in an Agile environment to meet project objectives.",
        tech: ["Java", "Agile", "Scrum", "Kafka"]
      },
      {
        id: "1a-auto-dev",
        company: "1A Auto",
        role: "Software Developer",
        period: "Apr 2017 - Oct 2019",
        duration: "2 yr 6 mos",
        location: "Chihuahua, Mexico",
        description: "Developed and maintained code for internal systems using Java with Spring Boot, such as an Automated Returns system and a data quality framework for BI using .NET. Maintained Python scripts for 3rd party API integrations. Proposed infrastructure solutions and coordinated/mentored junior developers and interns.",
        tech: ["Java", "SQL", "REST APIs", "Selenium", "Python"]
      },
       {
        id: "1a-auto-jr",
        company: "1A Auto",
        role: "Jr. Software Developer",
        period: "Jul 2016 - Jul 2017",
        duration: "1 yr",
        location: "Chihuahua, Mexico",
        description: "Developed internal web systems (e.g., ItemInfo) to display sales history and inventory data using Java, Spring Boot, JavaScript, and Thymeleaf. Maintained NewRelic Synthetics monitors to ensure system uptime and performance.",
        tech: ["Java", "Spring Boot", "JavaScript", "jQuery", "MSSQL"]
      },
       {
        id: "1a-auto-intern",
        company: "1A Auto",
        role: "Intern Software Developer",
        period: "May 2015 - Jun 2016",
        duration: "1 yr 1 mo",
        location: "Chihuahua, Mexico",
        description: "Developed an Automated Testing framework for regression testing on the main ecommerce site using Java, Selenium, and Maven. Successfully delivered a Proof-of-Concept (PoC) that became a utilized framework for the company.",
        tech: ["Java", "Selenium", "Maven", "Automation"]
      }
    ],
    education: [
      {
        id: "utc",
        school: "Universidad Tecnologica de Chihuahua",
        degree: "Bachelor's degree in Information and Comunication Technologies",
        years: "2013 - 2017"
      }
    ],
    skills: TECH_SKILLS,
    projects: [
      {
        id: "medpalz",
        title: "MedPalz",
        description: "A comprehensive doctor appointment booking platform and medical directory. Designed to streamline patient-doctor interactions and manage schedules efficiently.",
        link: "https://medpalz.com",
        tech: ["Booking System", "Directory", "Full Stack", "Java", "React Native", "Expo", "PostgreSQL"]
      }
    ]
  },
  es: {
    profile: {
      ...COMMON_PROFILE,
      title: "Ingeniero de Software",
      location: "Chihuahua, México",
      summary: "Ingeniero de Software experimentado con más de 8 años de trayectoria especializándome en Desarrollo Java, Infraestructura de Software y Diseño de Sistemas robustos. Capacidad probada para entregar soluciones backend de alta calidad para clientes globales."
    },
    ui: {
      portfolio: "Portafolio",
      contactMe: "CONTÁCTAME",
      linkedin: "LINKEDIN",
      github: "GITHUB",
      experience: "Experiencia Profesional",
      education: "Educación",
      skills: "Tecnologías y Herramientas",
      projects: "Proyectos Personales",
      footerRights: "Todos los derechos reservados.",
      footerTagline: "Construyendo infraestructura de software robusta y sistemas backend escalables.",
      present: "Actualidad",
      themeLabel: "Alternar Tema",
      languageLabel: "Switch to English"
    },
    experiences: [
      {
        id: "globallogic",
        company: "GlobalLogic",
        role: "Ingeniero de Software",
        period: "Oct 2024 - Actualidad",
        duration: "1 año 2 m",
        location: "Chihuahua, México (Remoto)",
        description: "Impulsando la innovación y entrega de software en un entorno dinámico, contribuyendo a proyectos de alto impacto con enfoque en calidad de código y escalabilidad.",
        tech: ["Java", "Spring Boot", "Microservices", "Cloud Infrastructure", "PostgreSQL"]
      },
      {
        id: "epam",
        company: "EPAM Systems / Expedia",
        role: "Ingeniero de Software",
        period: "Sep 2021 - Jun 2024",
        duration: "2 años 10 m",
        location: "Guadalajara, México (Remoto)",
        description: "Lideré el diseño e implementación de funcionalidades innovadoras para servicios backend de Expedia. Colaboré con equipos globales para solucionar problemas críticos y mejorar los Objetivos de Nivel de Servicio (SLOs). Participé en la migración de sistemas legados a AWS, mejorando significativamente el rendimiento. Realicé revisiones de código y mentoría a desarrolladores junior.",
        tech: ["Java", "AWS", "High Scale Systems", "Backend Architecture", "NoSQL"]
      },
      {
        id: "amdocs",
        company: "Amdocs",
        role: "Especialista de Soporte / Líder de Equipo",
        period: "May 2020 - Mar 2021",
        duration: "11 m",
        location: "Guadalajara, México",
        description: "Fui Líder de Equipo para la unidad de plataforma en la zona horaria de América. Brindé soporte de resolución de problemas para cuentas de CatalogOne. Utilicé herramientas como Openshift, Couchbase y ServiceNow para gestionar sistemas de telecomunicaciones empresariales. Supervisé la distribución de carga de trabajo y capacitación del equipo.",
        tech: ["Java", "Unix/Linux", "Couchbase", "Enterprise Support", "Openshift Container Platform"]
      },
      {
        id: "softtek",
        company: "Softtek",
        role: "Ingeniero de Software Java III",
        period: "Oct 2019 - May 2020",
        duration: "8 m",
        location: "Guadalajara, México",
        description: "Desarrollé código Java para nuevas funcionalidades en sistemas internos utilizando Spring Framework e integración con Kafka. Escribí scripts MSSQL para gestión de bases de datos y realicé actividades de construcción y despliegue. Operé eficientemente en un entorno Ágil.",
        tech: ["Java", "Agile", "Scrum", "Kafka"]
      },
      {
        id: "1a-auto-dev",
        company: "1A Auto",
        role: "Desarrollador de Software",
        period: "Abr 2017 - Oct 2019",
        duration: "2 años 6 m",
        location: "Chihuahua, México",
        description: "Desarrollé y mantuve código para sistemas internos usando Java y Spring Boot, como sistemas de Devoluciones Automatizadas y frameworks de calidad de datos. Mantuve scripts de Python para integraciones de APIs de terceros. Propuse soluciones de infraestructura y coordiné a desarrolladores junior.",
        tech: ["Java", "SQL", "REST APIs", "Selenium", "Python"]
      },
      {
        id: "1a-auto-jr",
        company: "1A Auto",
        role: "Desarrollador de Software Jr.",
        period: "Jul 2016 - Jul 2017",
        duration: "1 año",
        location: "Chihuahua, México",
        description: "Desarrollé sistemas web internos (ej. ItemInfo) para visualizar historial de ventas e inventario utilizando Java, Spring Boot, JavaScript y Thymeleaf. Mantuve monitores de NewRelic Synthetics para asegurar el rendimiento del sistema.",
        tech: ["Java", "Spring Boot", "JavaScript", "jQuery", "MSSQL"]
      },
       {
        id: "1a-auto-intern",
        company: "1A Auto",
        role: "Pasante de Desarrollo de Software",
        period: "May 2015 - Jun 2016",
        duration: "1 año 1 m",
        location: "Chihuahua, México",
        description: "Desarrollé un framework de Pruebas Automatizadas para pruebas de regresión en el sitio de comercio electrónico principal usando Java, Selenium y Maven. Entregué exitosamente una Prueba de Concepto (PoC) que se convirtió en una herramienta utilizada por la empresa.",
        tech: ["Java", "Selenium", "Maven", "Automation"]
      }
    ],
    education: [
      {
        id: "utc",
        school: "Universidad Tecnológica de Chihuahua",
        degree: "Grado en Ingeniería en Tecnologías de la Información y la Comunicación",
        years: "2013 - 2017"
      }
    ],
    skills: TECH_SKILLS,
    projects: [
      {
        id: "medpalz",
        title: "MedPalz",
        description: "Una plataforma integral de reserva de citas médicas y directorio. Diseñada para agilizar las interacciones paciente-doctor y gestionar horarios eficientemente.",
        link: "https://medpalz.com",
        tech: ["Sistema de Reservas", "Directorio", "Full Stack"]
      }
    ]
  }
};