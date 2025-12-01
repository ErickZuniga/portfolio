

import { ContentData } from './types';

const COMMON_PROFILE = {
  name: "Erick Zuñiga",
  email: "erick.zunigan@gmail.com",
  linkedin: "linkedin.com/in/erick-zuniga",
  github: "github.com/ErickZuniga",
};

const TECH_SKILLS = [
    { name: "Java", icon: "java" },
    { name: "Spring Boot", icon: "spring-boot" },
    { name: "React", icon: "react" },
    { name: "Maven", icon: "maven" },
    { name: "Git", icon: "git" },
    { name: "REST APIs", icon: "rest-api" },
    { name: "JavaScript", icon: "js" },
    { name: "JSON", icon: "json" },
    { name: "Docker", icon: "docker" },
    { name: "JUnit", icon: "java" },
    { name: "MongoDB", icon: "db" },
    { name: "MySQL", icon: "db" },
    { name: "Python", icon: "python" },
    { name: "HTML", icon: "html5" },
    { name: "CSS3", icon: "css3" },
    { name: "Bootstrap", icon: "bootstrap" },
    { name: "Hibernate", icon: "hibernate" },
    { name: "jQuery", icon: "js" },
    { name: "Jenkins", icon: "jenkins" },
    { name: "gRPC", icon: "grpc" },
    { name: "AWS", icon: "aws" },
    { name: "Couchbase", icon: "couchbase" },
    { name: "SonarQube", icon: "sonarqube" },
    { name: "Tailwind", icon: "tailwind" },
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
      backToTop: "Back to Top",
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
        description: "Designing and implementing backend services for Imprivata, ensuring scalability and high availability. Developing gRPC APIs to modernize service communication patterns and improve performance. Collaborating with global cross-functional teams. Promoting clean architecture principles and SOLID design patterns through code reviews and active participation in Agile ceremonies.",
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
        id: "1a-auto",
        company: "1A Auto",
        role: "Software Developer",
        period: "May 2015 - Oct 2019",
        duration: "4 yr 5 mos",
        location: "Chihuahua, Mexico",
        description: "Progressed from Intern to Software Developer, developing and maintaining internal systems with Java and Spring Boot. Created an Automated Testing framework using Java and Selenium that became a company-standard PoC. Built web systems like ItemInfo for sales/inventory data, an Automated Returns system, and a BI data quality framework. Maintained Python scripts for API integrations and mentored junior developers.",
        tech: ["Java", "Spring Boot", "JavaScript", "Python", "SQL", "REST APIs", "Selenium", "Maven", "Automation"]
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
        id: "medpal",
        title: "MedPal (In beta)",
        description: "A comprehensive doctor appointment booking platform and medical directory. Designed to streamline patient-doctor interactions and manage schedules efficiently.",
        link: "https://medpal.erickzuniga.dev",
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
      backToTop: "Volver al inicio",
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
        description: "Diseño e implementación de servicios backend para Imprivata, asegurando escalabilidad y alta disponibilidad. Desarrollo de APIs gRPC para modernizar patrones de comunicación entre servicios y mejorar el rendimiento. Promoción de principios de arquitectura limpia y patrones de diseño SOLID a través de revisiones de código y ceremonias Ágiles.",
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
        id: "1a-auto",
        company: "1A Auto",
        role: "Desarrollador de Software",
        period: "May 2015 - Oct 2019",
        duration: "4 años 5 m",
        location: "Chihuahua, México",
        description: "Progresé de Pasante a Desarrollador de Software, desarrollando y manteniendo sistemas internos con Java y Spring Boot. Creé un framework de Pruebas Automatizadas usando Java y Selenium que se convirtió en un estándar de la empresa. Construí sistemas web como ItemInfo para datos de ventas/inventario, un sistema de Devoluciones Automatizadas y un framework de calidad de datos para BI. Mantuve scripts de Python para integraciones de APIs y mentoricé a desarrolladores junior.",
        tech: ["Java", "Spring Boot", "JavaScript", "Python", "SQL", "REST APIs", "Selenium", "Maven", "Automation"]
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
        title: "MedPal (En beta)",
        description: "Una plataforma integral de reserva de citas médicas y directorio. Diseñada para agilizar las interacciones paciente-doctor y gestionar horarios eficientemente.",
        link: "https://medpal.erickzuniga.dev",
        tech: ["Sistema de Reservas", "Directorio", "Full Stack"]
      }
    ]
  }
};