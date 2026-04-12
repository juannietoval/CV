/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  BookOpen, 
  FileText, 
  Mail, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink, 
  GraduationCap, 
  Award, 
  Gavel,
  Calendar,
  MapPin,
  Linkedin,
  Twitter,
  Globe,
  Search,
  Users,
  Book,
  Briefcase,
  Library
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AcademiaIcon, GoogleScholarIcon, ResearchGateIcon } from './components/CustomIcons';

// --- DATA CONFIGURATION (El profesor puede editar esto fácilmente) ---
const PROFESSOR_DATA = {
  name: "Miguel Angel Puentes Castro",
  title: "Doctor en Ciencias de la Educación",
  profileImage: "https://raw.githubusercontent.com/juannietoval/CV-Miguel-Angel-Puentes-CASTRO/main/content.jpg",
  bio: "Investigador especializado en la unidad del signo epistemológico entre Realidad y Virtualidad. Con amplia formación en Comunicación Educativa, mi trabajo se centra en las implicaciones pedagógicas de las nuevas tecnologías y la comunicación mediatizada.",
  email: "miguel85@utp.edu.co",
  faculty: "Facultad de Bellas Artes y Humanidades",
  department: "Departamento de Humanidades",
  location: "Pereira, Colombia",
  social: {
    linkedin: "https://www.linkedin.com/in/miguel-%C3%A1ngel-puentes-castro-140a8329/",
    scholar: "https://scholar.google.com/citations?user=UB_b9kUAAAAJ&hl=es&authuser=1",
    researchgate: "https://www.researchgate.net/profile/Miguel-Angel-Puentes-Castro",
    academia: "https://utp-co.academia.edu/MiguelAngelPuentesCastro",
    repository: "https://repositorio.utp.edu.co/entities/person/7b6cfa24-1177-411c-a85b-55208120be84"
  },
  cv: [
    { 
      year: "2015 - 2020", 
      role: "Doctorado en Ciencias de la Educación", 
      institution: "Universidad Tecnológica de Pereira",
      description: "Tesis: HomoSinekus: Realidad - Virtualidad como unidad del signo epistemológico y sus implicaciones en lo educativo"
    },
    { 
      year: "2011 - 2014", 
      role: "Maestría en Comunicación Educativa", 
      institution: "Universidad Tecnológica de Pereira",
      description: "Proyecto: Pereira Imaginada Digital"
    },
    { 
      year: "2005 - 2010", 
      role: "Licenciatura en Comunicación e Informática Educativa", 
      institution: "Universidad Tecnológica de Pereira",
      description: "Proyecto: Metodología comunicativa mediatizada para la prevención de accidentalidad vial."
    }
  ],
  complementary: [
    { year: "2021", title: "Currículo del Editor II", institution: "MinCiencias" },
    { year: "2018", title: "Currículo del Editor I", institution: "MinCiencias" },
    { year: "2015", title: "Univirtual", institution: "UTP" },
    { year: "2010", title: "Comunicación Social y Periodismo", institution: "ASCUN" }
  ],
  products: [
    {
      id: 3,
      title: "CROQUIS DIGITALES: URBANISMOS CIUDADANOS EN PEREIRA",
      type: "Libro",
      description: "Coautoría con Olga Lucía Bedoya. Editorial Universidad Tecnológica de Pereira, 2018.",
      image: "https://raw.githubusercontent.com/juannietoval/CV-Miguel-Angel-Puentes-CASTRO/1b4a027cfb4abd129b9d75b5be6b7428a76398af/Captura%20de%20pantalla%202026-03-13%20160521.png",
      link: "https://repositorio.utp.edu.co/entities/publication/7823de3e-8d5d-4e8f-acb9-4354ce42ca4b"
    },
    {
      id: 4,
      title: "Más allá de la literalidad de la información: Una forma de comunicar las investigaciones",
      type: "Libro",
      description: "Coautoría con Olga Lucía Bedoya y Raúl Alberto Henao Vélez. Editorial Universidad Tecnológica de Pereira, 2022.",
      image: "https://raw.githubusercontent.com/juannietoval/CV-Miguel-Angel-Puentes-CASTRO/1b4a027cfb4abd129b9d75b5be6b7428a76398af/Captura%20de%20pantalla%202026-03-13%20161438.png",
      link: "https://repositorio.utp.edu.co/entities/publication/765b1fed-b86e-4e17-9bbc-74b3f761eec7"
    },
    {
      id: 5,
      title: "Eventos emergentes en las prácticas educativas telepresenciales en tiempos de la pandemia COVID-19: Visión de docentes y estudiantes",
      type: "Libro",
      description: "Coautoría con Olga Lucía Bedoya, Jhon Estiwar Gómez Palacio, Nancy Eugenia Cárdenas Ramírez, Luz Angela Cardona Arce y Julián David Vélez Carvajal. Editorial Universidad Tecnológica de Pereira, 2023.",
      image: "https://raw.githubusercontent.com/juannietoval/CV-Miguel-Angel-Puentes-CASTRO/1b4a027cfb4abd129b9d75b5be6b7428a76398af/Captura%20de%20pantalla%202026-03-13%20162057.png",
      link: "https://repositorio.utp.edu.co/entities/publication/1c61dea1-5897-4aae-afbe-ffd4f475f0d2"
    },
    {
      id: 6,
      title: "Subjetividad política en el ámbito de la investigación y la enseñanza de las humanidades. 10 años del grupo de investigación en Estudios Políticos y Jurídicos",
      type: "Libro",
      description: "Coautoría con Álvaro Díaz Gómez, Ana María Calderón Jaramillo, Claudia Constanza Tovar Guerra, Luisa Fernanda Marulanda Gómez, Juan Manuel Martínez Herrera y Luis Fernando Arteaga Mapura. Editorial Universidad Tecnológica de Pereira, 2024.",
      image: "https://github.com/juannietoval/CV-Miguel-Angel-Puentes-CASTRO/blob/portadas/Captura%20de%20pantalla%202026-03-14%20133506.png?raw=true",
      link: "https://repositorio.utp.edu.co/entities/publication/8f70690c-054a-4ecc-b70d-4d93426326d5"
    },
    {
      id: 7,
      title: "Percepciones desde las experiencias en procesos de enseñanza - aprendizaje con telepresencia en tiempo de pandemia 2020-2021",
      type: "Capítulo de libro",
      description: "Coautoría con Nancy Eugenia Cárdenas Ramírez, Jhon Estiwar Gómez Palacio y Luz Angela Cardona Arce. Editorial Universidad Tecnológica de Pereira, 2021.",
      image: "https://github.com/juannietoval/CV-Miguel-Angel-Puentes-CASTRO/blob/portadas/Captura%20de%20pantalla%202026-03-13%20213123.png?raw=true",
      link: "https://repositorio.utp.edu.co/entities/publication/0ffa48eb-b6b5-46da-ace5-20f348fe2e6f"
    },
    {
      id: 8,
      title: "Las Narrativas en la Construcción de la Verdad en Colombia. Develaciones Frente al Informe de la Comisión de la Verdad y sus Implicaciones en la Formación de Sujetos Políticos en el Área de las Humanidades en la Universidad Tecnológica de Pereira",
      type: "Capítulo de libro",
      description: "Coautoría con Olga Lucía Carmona Marín, Luisa Fernanda Marulanda Gómez, Juan Manuel Martínez Herrera, Julio César Murillo García, Pedro Pablo Suárez Giraldo y Oscar Salamanca Angarita. Editorial Universidad Tecnológica de Pereira, 2023.",
      image: "https://github.com/juannietoval/CV-Miguel-Angel-Puentes-CASTRO/blob/portadas/Captura%20de%20pantalla%202026-03-13%20215255.png?raw=true",
      link: "https://repositorio.utp.edu.co/entities/publication/038aa0e6-2791-45a2-ac60-2dc7cd6d8f31"
    },
    {
      id: 9,
      title: "Creation of an audiovisual strategy based on storytelling to change urban imaginaries: the case of imagined pereira and its citizen sketches",
      type: "Capítulo de libro",
      description: "Coautoría con Stefanía Gallego Falla, Jefferson Martínez-Santa, Martha Cecilia Gutiérrez Giraldo, Carolina Franco Ossa, Olga Lucia Bedoya y Yulia Katherine Cediel Gómez. Editorial Universidad Tecnológica de Pereira, 2023.",
      image: "https://github.com/juannietoval/CV-Miguel-Angel-Puentes-CASTRO/blob/portadas/Captura%20de%20pantalla%202026-03-13%20222654.png?raw=true",
      link: "https://repositorio.utp.edu.co/entities/publication/44340b86-cc8a-4235-9ac1-3dff5293c890"
    },
    {
      id: 10,
      title: "Cuidar el ambiente y cuidar la mujer: fortalecimiento de capacidades organizativas en asociaciones campesinas de Risaralda",
      type: "Videograbación",
      description: "Coautoría con Julio Cesar Murrillo Garcia y Melissa Montañez Holguin. Editorial Universidad Tecnológica de Pereira, 2024.",
      image: "https://github.com/juannietoval/CV-Miguel-Angel-Puentes-CASTRO/blob/portadas/Captura%20de%20pantalla%202026-03-21%20193139.png?raw=true",
      link: "https://repositorio.utp.edu.co/entities/publication/a829aa8f-4706-4760-a48b-873fe19d2e34"
    },
    {
      id: 11,
      title: "Simposio “Subjetividad Política en el ámbito de la investigación y la enseñanza de las humanidades\"",
      type: "Videograbación",
      description: "Autoría de Miguel Ángel Puentes Castro. Editorial Universidad Tecnológica de Pereira, 2023.",
      image: "https://github.com/juannietoval/CV-Miguel-Angel-Puentes-CASTRO/blob/portadas/Captura%20de%20pantalla%202026-03-21%20193313.png?raw=true",
      link: "https://repositorio.utp.edu.co/entities/publication/fce95d8e-0e62-4b81-a540-85efadb80d53"
    },
    {
      id: 12,
      title: "Asociación campesina del Eje y Norte del Valle ASOCRI. Cuidar el ambiente y cuidar la mujer: fortalecimiento de capacidades organizativas en asociaciones campesinas de Risaralda",
      type: "Videograbación",
      description: "Coautoría con Julio Cesar Murrillo Garcia y Melissa Montañez Holguin. Editorial Universidad Tecnológica de Pereira, 2024.",
      image: "https://github.com/juannietoval/CV-Miguel-Angel-Puentes-CASTRO/blob/portadas/Captura%20de%20pantalla%202026-03-21%20193431.png?raw=true",
      link: "https://repositorio.utp.edu.co/entities/publication/d433724e-8644-4338-9d48-1fe0d8d3b8bd"
    },
    {
      id: 13,
      title: "Asociacion Nacional Campesina Agropecuaria ASONACA. Cuidar el ambiente y cuidar la mujer: fortalecimiento de capacidades organizativas en asociaciones campesinas de Risaralda",
      type: "Videograbación",
      description: "Coautoría con Julio Cesar Murrillo Garcia y Melissa Montañez Holguin. Editorial Universidad Tecnológica de Pereira, 2024.",
      image: "https://github.com/juannietoval/CV-Miguel-Angel-Puentes-CASTRO/blob/portadas/Captura%20de%20pantalla%202026-03-21%20193535.png?raw=true",
      link: "https://repositorio.utp.edu.co/entities/publication/bbe9bad1-b98a-47cb-80c2-1904c93b17bf"
    },
    {
      id: 14,
      title: "ASOPROMAR. Cuidar el ambiente y cuidar la mujer: fortalecimiento de capacidades organizativas en asociaciones campesinas de Risaralda",
      type: "Videograbación",
      description: "Coautoría con Julio Cesar Murrillo Garcia y Melissa Montañez Holguin. Editorial Universidad Tecnológica de Pereira, 2024.",
      image: "https://github.com/juannietoval/CV-Miguel-Angel-Puentes-CASTRO/blob/portadas/Captura%20de%20pantalla%202026-03-21%20193622.png?raw=true",
      link: "https://repositorio.utp.edu.co/entities/publication/22726617-8f3c-4ef2-bc2d-7120510fdbcb"
    },
    {
      id: 15,
      title: "La extensión universitaria como el pilar del vínculo universidad—entorno",
      type: "Libro",
      description: "Coautoría con un extenso equipo de investigadores de la UTP. Editorial Universidad Tecnológica de Pereira, 2025.",
      image: "https://github.com/juannietoval/CV-Miguel-Angel-Puentes-CASTRO/blob/portadas/Captura%20de%20pantalla%202026-03-14%20134654.png?raw=true",
      link: "https://repositorio.utp.edu.co/entities/publication/4a9dd9a5-e653-4440-be9f-ccc5a0b8d3b2"
    },
    {
      id: 16,
      title: "Estudios Sociales del Cuidado: desafíos latinoamericanos",
      type: "Libro",
      description: "Coautoría con Alvaro Diaz Gomez. Universidad Distrital Francisco José de Caldas, 2024.",
      image: "https://github.com/juannietoval/CV-Miguel-Angel-Puentes-CASTRO/blob/portadas/Captura%20de%20pantalla%202026-03-25%20204437.png?raw=true",
      link: "https://www.academia.edu/136879547/Cuerpos_juveniles_que_se_cuidan_Experiencias_desde_el_acontecimiento_pand%C3%A9mico_derivado_del_Covid_19"
    }
  ],
  experience: [
    {
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      dedication: "48 horas Semanales",
      period: "Enero de 2024 - Actual",
      activities: {
        admin: ["Coordinador del área de Formación Humana - Departamento de Humanidades UTP"],
        teaching: [
          "Dispositivos de la cultura y prácticas contemporáneas",
          "Humanidades, memoria y política",
          "Metodología de la investigación"
        ],
        research: [
          "Caracterización Del Material Documental Para La Conformación De Un Archivo De Derechos Humanos, Memoria Histórica Y Conflicto Armado De La Ciudad De Pereira (Risaralda).",
          "Subjetividades juveniles emergentes durante el acontecimiento pandémico derivado del Covid-19."
        ]
      }
    },
    {
      institution: "Universidad de Panamá",
      dedication: "15 horas Semanales",
      period: "2023 - 2024",
      activities: {
        teaching: [
          "Investigación Educativa II (Jun-Jul 2024)",
          "Elaboración de Documentos Científicos (Ene-Mar 2024)",
          "Investigación Educativa I (Nov-Dic 2023)",
          "Seminario doctoral Epistemología y Tendencias Educativas Contemporáneas (Jul-Sep 2023)"
        ]
      }
    },
    {
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      dedication: "48 horas Semanales",
      period: "Enero de 2023 - Diciembre de 2023",
      activities: {
        teaching: ["Humanidades I y II", "Metodología de la investigación"],
        research: ["Subjetividades juveniles emergentes durante el acontecimiento pandémico derivado del Covid-19."]
      }
    },
    {
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      dedication: "24 horas Semanales",
      period: "Agosto de 2022 - Diciembre de 2022",
      activities: {
        admin: ["Coordinador del área de Formación Humana"],
        teaching: ["Didáctica de la tecnología", "Humanidades I y II", "Didáctica general"],
        research: ["Tendencias Conceptuales Derivadas De La Producción Académica Del Grupo De Investigación En Estudios Políticos Y Jurídicos."]
      }
    },
    {
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      dedication: "21 horas Semanales",
      period: "Enero de 2022 - Julio de 2022",
      activities: {
        admin: ["Coordinador del área de Humanidades"],
        teaching: ["Didáctica de la tecnología", "Humanidades I y II", "Didáctica general", "Metodología de la Investigación"],
        research: ["Tendencias Conceptuales Derivadas De La Producción Académica Del Grupo De Investigación En Estudios Políticos Y Jurídicos."]
      }
    },
    {
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      dedication: "18 horas Semanales",
      period: "2021",
      activities: {
        teaching: ["Metodología de la investigación", "Humanidades I y II", "Didáctica general"],
        research: ["Tendencias Conceptuales Derivadas De La Producción Académica Del Grupo De Investigación En Estudios Políticos Y Jurídicos."]
      }
    },
    {
      institution: "UNIVERSIDAD CATOLICA DE PEREIRA",
      dedication: "3-6 horas Semanales",
      period: "2015 - 2017",
      activities: {
        teaching: ["Gestión de redes sociales", "Psicología de la comunicación", "Fotografía"]
      }
    },
    {
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      dedication: "Varios",
      period: "2011 - 2020",
      activities: {
        teaching: ["Diseño gráfico", "Video", "Informática", "Impresos", "Informática educativa I"]
      }
    }
  ],
  tutoring: [
    {
      type: "Tesis de doctorado",
      title: "Implementación del Modelo Aula Invertida (Flipped classroom) Estrategias de Enseñanza-Aprendizaje en el Área de Ciencias Sociales para Estudiantes de Básica Secundaria y Medía",
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      status: "En curso",
      year: "2024",
      student: "",
      role: "Tutor principal"
    },
    {
      type: "Trabajo de grado de maestría",
      title: "ENSEÑANZA DE LA FÍSICA BASADA EN LOS FACTORES ANTROPOLÓGICOS Y EL CONTEXTO SOCIAL",
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      status: "Concluida",
      year: "2022",
      student: "Luis Enrique Castañeda González",
      role: "Tutor principal"
    },
    {
      type: "Trabajo de grado de maestría",
      title: "Imaginarios alrededor de las rutinas de entretenimiento en los jóvenes de los grados novenos, décimos y onces de la Institución Educativa Román María Valencia de Calarcá - Quindío a partir de la pandemia COVID-19",
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      status: "Concluida",
      year: "2021",
      student: "Mario Alexander Arenas Agudelo",
      role: "Tutor principal"
    },
    {
      type: "Trabajo de grado de maestría",
      title: "El uso de la Tecnología en el proceso de enseñanza - aprendizaje de la física en las áreas rurales, como estrategias aplicables en los colegios públicos del Distrito de los Pozos - Herrera en la República de Panamá",
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      status: "Concluida",
      year: "2024",
      student: "Lourdes Virginia González",
      role: "Tutor principal"
    },
    {
      type: "Trabajo de grado de maestría",
      title: "Polisemia y pobreza léxica como obstáculos en la enseñanza del concepto medir y su tratamiento estadístico",
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      status: "Concluida",
      year: "2022",
      student: "Reyes Villarreal Miranda",
      role: "Tutor principal"
    },
    {
      type: "Trabajo de grado de maestría",
      title: "Identificación De Las Nuevas Construcciones Simbólicas Del Sujeto En La Relación Sugar Daddy – Sugar Baby En La Producción De La Red Social Twitter",
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      status: "Concluida",
      year: "2020",
      student: "JULIAN DAVID NOGOA ARRUBLA",
      role: "Tutor principal"
    },
    {
      type: "Trabajo de grado de maestría",
      title: "Arabia Imaginada",
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      status: "Concluida",
      year: "2021",
      student: "Liliana Quintero Marin, Jaime Giovanni Guisado Sepúlveda",
      role: "Tutor principal"
    },
    {
      type: "Trabajo de grado de maestría",
      title: "El Self-Body de los Jóvenes: Un Análisis de los Relatos de Sí en las Cartografías del Cuerpo",
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      status: "Concluida",
      year: "2021",
      student: "ANYHELO ECHEVERRI SÁNCHEZ",
      role: "Tutor principal"
    },
    {
      type: "Trabajo de grado de maestría",
      title: "Imaginarios del grafiti y el arte público en la ciudad de Pereira",
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      status: "Concluida",
      year: "2021",
      student: "Mónica Espinosa Gallón",
      role: "Tutor principal"
    },
    {
      type: "Trabajo de grado de maestría",
      title: "Mirada A La Construcción De Imaginarios Urbanos, Desde Las Rutinas De Tiempo Libre En El Marco De La Pandemia Por COVID-19, De Los Jóvenes De La Institución Educativa Juan XXIII Del Barrio Cuba De La Ciudad De Pereira",
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      status: "Concluida",
      year: "2021",
      student: "clara patricia mariscal jimenez, Mónica María Osorio Alvarez",
      role: "Tutor principal"
    },
    {
      type: "Trabajo de grado de maestría",
      title: "Comunicación y educación en procesos comunitarios",
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      status: "En curso",
      year: "2018",
      student: "Felipe Gallego",
      role: "Tutor principal"
    },
    {
      type: "Trabajo de grado de pregrado",
      title: "ALFABETIZACIÓN DIGITAL EN ADULTOS MAYORES DEL GRUPO DE LA TERCERA EDAD DEL BARRIO PARQUE INDUSTRIAL DE PEREIRA, DESDE LA PERSPECTIVA DEL APRENDIZAJE SIGNIFICATIVO",
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      status: "Concluida",
      year: "2015",
      student: "Diana Cristina Ospina Valencia",
      role: "Tutor principal"
    },
    {
      type: "Trabajo de grado de pregrado",
      title: "Los emojis, el lenguaje emergente de la cibercultura",
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      status: "Concluida",
      year: "2021",
      student: "Natalia Patiño Osorio",
      role: "Tutor principal"
    },
    {
      type: "Trabajo de grado de pregrado",
      title: "Realidad aumentada como herramienta que potencialice el aprendizaje significativo en geometría básica del grado tercero de la Institución Educativa Instituto Estrada",
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      status: "Concluida",
      year: "2016",
      student: "Gómez Carmona, Jorge Humberto; López Quintero, Daniel",
      role: "Tutor principal"
    },
    {
      type: "Trabajo de grado de pregrado",
      title: "LA ACTITUD CRÍTICA EN EL PROCESO DE ALFABETIZACIÓN MEDIÁTICA DESARROLLADA EN LA ÁREA DE INFORMÁTICA EN ESTUDIANTES DE GRADO 11",
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      status: "Concluida",
      year: "2016",
      student: "STEFANY CASTILLO JARAMILLO, PAULA GARCIA HERRERA, DANIELA MACHADO MAYA",
      role: "Tutor principal"
    },
    {
      type: "Trabajo de grado de pregrado",
      title: "Fomento a la lectura y la escritura por medio de la creación artística del libro álbum en la biblioteca comunitaria Andrés Caicedo",
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      status: "Concluida",
      year: "2020",
      student: "Mariana Patiño Arismendi",
      role: "Tutor principal"
    },
    {
      type: "Trabajo de grado de pregrado",
      title: "Rugby como metodología de aprendizaje en la historia de vida de las integrantes del equipo femenino Rhinos Femme",
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      status: "Concluida",
      year: "2020",
      student: "Yuliana Zuluaga Vanegas",
      role: "Tutor principal"
    },
    {
      type: "Trabajo de grado de pregrado",
      title: "Sistematización de emprendimientos en los Licenciados en Comunicación e Informática Educativa",
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      status: "Concluida",
      year: "2020",
      student: "Sebastián Rodríguez Arias",
      role: "Tutor principal"
    },
    {
      type: "Trabajo de grado de pregrado",
      title: "Imaginarios que construyeron los usuarios de la FanPage “UNEES” sobre los estudiantes de educación superior durante el paro estudiantil del 10 de octubre del 2018 al 21 de enero del 2019",
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      status: "Concluida",
      year: "2020",
      student: "Brayan Cañaveral Osorio - Valeria Galvis López - Juan Pablo Torres Giraldo",
      role: "Tutor principal"
    },
    {
      type: "Trabajo de grado de pregrado",
      title: "Estrategias de comunicación de la emisora Universitaria Estéreo para fomentar la integración con la comunidad de la Universidad Tecnológica de Pereira",
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      status: "Concluida",
      year: "2020",
      student: "Geraldine Hurtado García",
      role: "Tutor principal"
    },
    {
      type: "Trabajo de grado de pregrado",
      title: "Radio escolar como estrategia educomunicativa en la comunidad: Instituto Tecnológico Santa Rosa de Cabal",
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      status: "Concluida",
      year: "2019",
      student: "Jhonatan Estiven Correa Londoño / Yury Juliana Velásquez Alarcón",
      role: "Tutor principal"
    },
    {
      type: "Trabajo de grado de pregrado",
      title: "El kambalachi (trueque), como propuesta pedagógica para la resignificación del pensamiento en el Pueblo Inga de Aponte",
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      status: "Concluida",
      year: "2019",
      student: "Martha Yaneth Jojoa Mavisoy",
      role: "Tutor principal"
    },
    {
      type: "Trabajo de grado de pregrado",
      title: "Géneros discursivos en el ámbito académico en la Licenciatura en Comunicación e Informática Educativa de la Universidad Tecnológica de Pereira",
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      status: "Concluida",
      year: "2019",
      student: "Jessica Jazmín Aguirre Guarín",
      role: "Tutor principal"
    },
    {
      type: "Trabajo de grado de pregrado",
      title: "Diseño de una propuesta didáctica para la implementación de la fotografía en el aula de clase en la asignatura de educación artística en estudiantes de 4° de primaria de la Institución Educativa Santa Sofía en el municipio de Dosquebradas",
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      status: "Concluida",
      year: "2018",
      student: "Alejandro Mesa Mejía",
      role: "Tutor principal"
    },
    {
      type: "Trabajo de grado de pregrado",
      title: "Entre álbumes de familia : Construcción de memoria en la mujer pereirana",
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      status: "Concluida",
      year: "2016",
      student: "Erika Betancourt Urrea",
      role: "Tutor principal"
    }
  ],
  jury: [
    {
      type: "Pregrado",
      title: "Imaginarios Urbanos Del Público De Ciudadanos De La Vereda La Florida",
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      program: "Licenciatura en comunicación e Informática Educativa",
      student: "Juan Pablo Agudelo Muriel, Sergio Iván Cardona Giraldo Y Natalia Ramírez Marín"
    },
    {
      type: "Maestría",
      title: "Los Estereotipos Del Selfie: Narrativas Del Yo",
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      program: "MAESTRIA EN COMUNICACION EDUCATIVA",
      student: "Javier Ovidio Giraldo"
    },
    {
      type: "Especialización",
      title: "Principales Causas De Las Deficiencias En Cinemática En Estudiantes De 11O Bachiller En Ciencias",
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      program: "Especialización en Enseñanza de la física",
      student: "Kharla Michelle Molinares"
    },
    {
      type: "Maestría",
      title: "Televidencias y Recepciones. Caracterización de audiencias televisivas en la Institución Educativa Santa Juana de Lestonnac",
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      program: "MAESTRIA EN COMUNICACION EDUCATIVA",
      student: "German David Prada Salazar y Keli Andrea Guevara Arbeláez"
    },
    {
      type: "Maestría",
      title: "Culturambie: validación de aprendizajes en prácticas educativas TIC",
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      program: "MAESTRIA EN COMUNICACION EDUCATIVA",
      student: "Jamileth Sorai Bedoya Agudelo y Leidy Johana Zuleta Ramírez"
    },
    {
      type: "Especialización",
      title: "La motivación de los estudiantes en el proceso de aprendizaje de la física",
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      program: "Especialización en Enseñanza de la física",
      student: ""
    },
    {
      type: "Pregrado",
      title: "Narrativas Futboleras: Otras Miradas A Los Hinchas Del Deportivo Pereira",
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      program: "Licenciatura en Comunicación e Informatica Educativa",
      student: "Alejandra Mejía Lasso y María Katherine Osorio Osorio"
    },
    {
      type: "Pregrado",
      title: "Los Videojuegos De Estrategia Y La Resolución De Conflictos",
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      program: "Licenciatura en comunicación e Informática Educativa",
      student: "Valentina Rodríguez González y Santiago Yepes Serna"
    },
    {
      type: "Pregrado",
      title: "La Cine Videncia En El Proceso De Recepción Cinematográfico Por Parte De Jóvenes En El Contexto De Los Cineclubes La Caja Y Cine Estudio",
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      program: "Licenciatura en comunicación e Informática Educativa",
      student: "Daniela Alejandra Hincapié Hoyos, Conrado de Jesús Barrera Henao, Daniela Rojas Rojas"
    },
    {
      type: "Pregrado",
      title: "Television Didactica: Una Estrategia Educativa Para Fortalecer La Enseñanza-Aprendizaje De Los Estudiantes",
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      program: "LICENCIATURA EN COMUNICACION E INFORMATICA EDUCATIVA",
      student: "Inés Córdoba Campaña y Anny Juliana Diez Collazos"
    },
    {
      type: "Pregrado",
      title: "Subjetividad Política A Través Del Análisis Expresivo Del Cartel Como Medio De Manifestación, A Propósito De La Cátedra De La Paz Grupo I, En El Eje",
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      program: "LICENCIATURA EN COMUNICACION E INFORMATICA EDUCATIVA",
      student: "Edwin Alexander Giraldo Rincón"
    },
    {
      type: "Maestría",
      title: "Currículo: ¿Linealidad O No Linealidad? - Hacia El Uso De La Interacción De Las Tic. Caso: Institución Educativa La Inmaculada Pereira",
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      program: "MAESTRIA EN COMUNICACION EDUCATIVA",
      student: "José Alejandro Zapata Pérez"
    },
    {
      type: "Especialización",
      title: "Posibilidades Cognitivas, De Infraestructura Y Producción De Contenidos En El Uso De La Realidad Aumentada En El Contexto Escolar: Una Mirada Desde El Estado Del Arte",
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      program: "Especialización en Enseñanza de la física",
      student: "Anaika Yamileth Castillo González y Estefany Chow Grandison"
    },
    {
      type: "Pregrado",
      title: "IMPLEMENTACION DE UN VIDEO EDUCATIVO EN LA ENSEÑANZA Y APRENDIZAJE DE LOS EJES TEMATICOS DE LA INFORMATICA Y TECNOLOGIA DE LOS ESTUDIANTES DE GRADO 6A DE LA INSTITUCION EDUCATIVA REMIGIO ANTONIO CAÑARTE DE LA CIUDAD DE PEREIRA, RISARALDA",
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      program: "Licenciatura en comunicación e Informática Educativa",
      student: "Octavio de Jesus Jimenez Cardona y Liliana Carolina Giraldo Gallego"
    },
    {
      type: "Pregrado",
      title: "Tokio imaginado. \"La ciudad desde sus cualidades, calificaciones y escenarios\"",
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      program: "Licenciatura en Comunicación e Informatica Educativa",
      student: "NATALY VALENCIA, VIVIANA LOPEZ Y ALEXANDER OROZCO"
    },
    {
      type: "Pregrado",
      title: "¡RECONOCIENDO LA TELE!",
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      program: "LICENCIATURA EN PEDAGOGIA INFANTIL",
      student: "YENIFER VANESA JIMENEZ ARENAS y DIANA MARCELA CANO VARGAS"
    },
    {
      type: "Pregrado",
      title: "PROCESOS DE RECEPCIÓN ACTIVA EN LOS ESTUDIANTES DE LA JORNADA COMPLEMENTARIA DEL HOGAR INFANTIL BELENCITO DEL MUNICIPIO DE BELÉN DE UMBRÍA",
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      program: "LICENCIATURA EN PEDAGOGIA INFANTIL",
      student: "NANCY JOHANA GONZALEZ FLOREZ, BIBIANA ANDREA ISAZA FLOREZ y YORLADYS CEBALLOS"
    },
    {
      type: "Pregrado",
      title: "ANÁLISIS E INTERPRETACIÓN DE UNA UNIDAD DIDACTICA EN LA ENSEÑANZA DEL CUBO",
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      program: "LICENCIATURA EN PEDAGOGIA INFANTIL",
      student: "MARIA CARMENZA ARICAPA GARCIA"
    },
    {
      type: "Maestría",
      title: "Sociedad Abierta: un Proyecto Inacabado",
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      program: "MAESTRÍA EN FILOSOFÍA",
      student: "Alba Yaneth Jaramillo Muñoz"
    },
    {
      type: "Maestría",
      title: "Prácticas Educativas Mediadas por Redes Sociales: Percepciones y Experiencias de Docentes Universitarios",
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      program: "MAESTRIA EN COMUNICACION EDUCATIVA",
      student: "Juan Felipe López Zapata"
    },
    {
      type: "Maestría",
      title: "Narrativa de la memoria colectiva de Cooeducar en tiempos de mediatización",
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      program: "MAESTRIA EN COMUNICACION EDUCATIVA",
      student: "Carlos Alberto Delgado, Carlos Arturo Arenas"
    },
    {
      type: "Maestría",
      title: "El Feminismo Como Codificación Estratégica de Puntos de Resistencia Para la Consolidación de la Democracia Radical",
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      program: "MAESTRÍA EN FILOSOFÍA",
      student: "Jessica Viviana Obando Correal"
    },
    {
      type: "Pregrado",
      title: "CIUDAD VICTORIA IMAGINADA: UNA VISIÓN DE LA RENOVACIÓN DESDE LAS REPRESENTACIONES DE LOS JÓVENES PEREIRANOS",
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      program: "Licenciatura en comunicación e Informática Educativa",
      student: "JESSICA LOZANO RAMÍREZ, MILEIDY GONZÁLEZ MEDINA Y PRISCILA SANTANA GIRALDO"
    },
    {
      type: "Pregrado",
      title: "APLICACIÓN DE LA TEORÍA TRIADICA DE PEIRCE EN EL GRAFFITI COMO PUNTO DE VISTA CIUDADANO",
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      program: "Licenciatura en comunicación e Informática Educativa",
      student: "Andrea Palacio Herrera"
    },
    {
      type: "Pregrado",
      title: "LOS IMAGINARIOS QUE CONSTRUYEN LOS ESTUDIANTES DE GRADO 10 DEL COLEGIO SANTA ISABEL DEL MUNICIPIO DE DOSQUEBRADAS A PARTIR DE LA VISUALIZACIÓN DEL COMERCIAL DE CHICA ÁGUILA",
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      program: "Licenciatura en comunicación e Informática Educativa",
      student: "Diana Alejandra Agudelo Osorio y Leidy Viviana Bermúdez Ortiz"
    },
    {
      type: "Maestría",
      title: "LAS FORMAS DE APRENDER, CONOCER, Y PRODUCIR CONOCIMIENTO SE MODIFICAN, CON LA MEDIACIÓN DE LOS DISPOSITIVOS MÓVILES CELULARES EN EL AULA?",
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      program: "Maestria en Comunicación Educativa",
      student: "CARLOS ENRIQUE MARÍN HURTADO"
    },
    {
      type: "Maestría",
      title: "ARMENIA Y EL QUINDÍO: UN CONTRASTE ENTRE IMAGINARIOS Y REALIDAD",
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      program: "MAESTRIA EN COMUNICACION EDUCATIVA",
      student: "JHONI DANIEL SALAZAR GÓMEZ"
    },
    {
      type: "Maestría",
      title: "Diseño y validación de la propuesta educativa RED en el Aula, orientada a fortalecer desde el enfoque del Aprendizaje Significativo la Competencia Tecnológica en estudiantes de tercer semestre de Licenciatura en Comunicación e Informática Educativas de la Universidad Tecnológica de Pereira",
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      program: "Maestria en Comunicación Educativa",
      student: "Marcia Cristina Peláez Sampedro"
    },
    {
      type: "Maestría",
      title: "Constructivismo? Entornos de enseñanza y aprendizaje incorporando TIC",
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      program: "Maestria en Comunicación Educativa",
      student: "Milvi Leonor Tapias Oquendo"
    },
    {
      type: "Maestría",
      title: "ESCENARIOS Y CALIFICACIONES URBANAS DE ESPACIOS DE LA CIUDAD DE PEREIRA Y SU RELACIÓN CON LAS OPINIONES REGISTRADAS EN GOOGLE MAPS",
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      program: "Maestria en Comunicación Educativa",
      student: "YORMAN JULIAN GONZÀLEZ RAMIREZ"
    },
    {
      type: "Maestría",
      title: "Análisis de la narrativa del discurso periodístico en el marco del proceso de paz: caso Revista Semana en el periodo 2015-2016",
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      program: "Maestria en Comunicación Educativa",
      student: "JUAN CAMILO PASCUAS"
    },
    {
      type: "Maestría",
      title: "MODELO DE ESCRITURA DE PROYECTOS PARA TELEVISIÓN CULTURAL EN CONTEXTOS NACIONALES Y REGIONALES - UN ESTUDIO DE CASO",
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      program: "Maestria en Comunicación Educativa",
      student: "WILMER SOTTO SUAREZ"
    },
    {
      type: "Maestría",
      title: "EVALUACIÓN DE LA PERTINENCIA DEL APRENDIZAJE BASADO EN PROYECTOS (ABP), EN LA IMPLEMENTACIÓN DE UNA ASIGNATURA INCLUIDA EN LA PROPUESTA DE FORMACIÓN POSGRADUAL ESPECIALIZACIÓN EN DIGITALIZACIÓN DE PROCESOS INDUSTRIALES",
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      program: "MAESTRÍA EN ENSEÑANZA DE LA FÍSICA",
      student: "WILLIAM PRADO MARTÍNEZ - HERNÁN ALBERTO QUINTERO VALLEJO"
    },
    {
      type: "Especialización",
      title: "Zonula motion capture eje cafetero",
      institution: "UNIVERSIDAD CATOLICA DE PEREIRA",
      program: "Especialización gestión de proyectos de diseño e innovación",
      student: "Yeison Escobar Puentes"
    },
    {
      type: "Pregrado",
      title: "ALFABETIZACIÓN DIGITAL EN ADULTOS MAYORES DEL GRUPO DE LA TERCERA EDAD DEL BARRIO PARQUE INDUSTRIAL DE PEREIRA, DESDE LA PERSPECTIVA DEL APRENDIZAJE SIGNIFICATIVO",
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      program: "Licenciatura en Comunicación e Informática Educativas",
      student: "DIANA CRISTINA OSPINA VALENCIA"
    },
    {
      type: "Maestría",
      title: "PEREIRA IMAGINADA: UNA MIRADA DESDE EL SECTOR RURAL",
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      program: "MAESTRIA EN COMUNICACION EDUCATIVA",
      student: "GUILLERMO ORBES PANTOJA"
    },
    {
      type: "Pregrado",
      title: "LA AUTOBIOGRAFÍA COMO METODOLOGÍA DE ENSEÑANZA EN EL PROCESO INVESTIGATIVO",
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      program: "MAESTRIA EN COMUNICACION EDUCATIVA",
      student: "ANA CAROLINA RENDÓN CARDONA / PAULA ANDREA RENDÓN CARDONA"
    },
    {
      type: "Maestría",
      title: "PRÁCTICAS COMUNICATIVAS DE LAS ORGANIZACIONES AFRORISARALDENSES",
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      program: "MAESTRIA EN COMUNICACION EDUCATIVA",
      student: "DOUGLAS JEFER YURGAKY COSSIO"
    },
    {
      type: "Maestría",
      title: "VALIDACIÓN DE APRENDIZAJES EN PRÁCTICAS EDUCATIVAS TIC",
      institution: "UNIVERSIDAD TECNOLÓGICA DE PEREIRA",
      program: "MAESTRIA EN COMUNICACION EDUCATIVA",
      student: "JAMILETH SORAI BEDOYA AGUDELO - LEIDY JOHANA ZULETA RAMÍREZ"
    }
  ],
  events: [
    {
      name: "Tercer Coloquio Internacional y Cuarto Nacional de Pensamiento Educativo y Comunicación",
      type: "Otro",
      scope: "Internacional",
      date: "2014-11-10 al 2014-11-11",
      location: "PEREIRA - Hotel Movich Pereira",
      role: "Organizador",
      participants: ["MIGUEL ANGEL PUENTES CASTRO", "OLGA LUCIA BEDOYA"],
      institutions: ["UNIVERSIDAD TECNOLÓGICA DE PEREIRA"]
    },
    {
      name: "Taller Internacional Narrativas Transmedia",
      type: "Taller",
      scope: "Nacional",
      date: "2015-06-26 al 2015-06-27",
      location: "PEREIRA - Universidad Tecnológica de Pereira",
      role: "Organizador",
      participants: ["MIGUEL ANGEL PUENTES CASTRO"],
      institutions: ["UNIVERSIDAD TECNOLÓGICA DE PEREIRA"]
    },
    {
      name: "Taller Internacional Circopolis: Errores Inteligentes en la Cultural Digital",
      type: "Taller",
      scope: "Nacional",
      date: "2015-08-28 al 2015-08-29",
      location: "PEREIRA - Top Deck Hotel Pereira",
      role: "Organizador",
      participants: ["MIGUEL ANGEL PUENTES CASTRO"],
      institutions: ["UNIVERSIDAD TECNOLÓGICA DE PEREIRA"]
    },
    {
      name: "Taller 5. Proyección del cuidado del género",
      type: "Taller",
      scope: "Nacional",
      date: "2024-09-21",
      location: "PEREIRA",
      role: "Organizador",
      participants: ["MIGUEL ANGEL PUENTES CASTRO"],
      institutions: ["UNIVERSIDAD TECNOLÓGICA DE PEREIRA"]
    },
    {
      name: "Taller 2. Proyección del cuidado ambiental",
      type: "Taller",
      scope: "Nacional",
      date: "2024-04-13",
      location: "PEREIRA",
      role: "Organizador",
      participants: ["MIGUEL ANGEL PUENTES CASTRO"],
      institutions: ["UNIVERSIDAD TECNOLÓGICA DE PEREIRA"]
    },
    {
      name: "Taller 4. Diagnóstico de género",
      type: "Taller",
      scope: "Nacional",
      date: "2024-08-24",
      location: "PEREIRA",
      role: "Organizador",
      participants: ["MIGUEL ANGEL PUENTES CASTRO"],
      institutions: ["UNIVERSIDAD TECNOLÓGICA DE PEREIRA"]
    },
    {
      name: "Taller 1. Diagnóstico ambiental",
      type: "Taller",
      scope: "Nacional",
      date: "2024-03-16",
      location: "PEREIRA",
      role: "Organizador",
      participants: ["MIGUEL ANGEL PUENTES CASTRO"],
      institutions: ["UNIVERSIDAD TECNOLÓGICA DE PEREIRA"]
    },
    {
      name: "Cuidar el ambiente y cuidar la mujer: fortalecimiento de capacidades organizativas en asociaciones campesinas de Risaralda",
      type: "Congreso",
      scope: "Nacional",
      date: "2024-01-30 al 2024-12-01",
      location: "PEREIRA",
      role: "Organizador",
      participants: ["MIGUEL ANGEL PUENTES CASTRO"],
      institutions: ["UNIVERSIDAD TECNOLÓGICA DE PEREIRA"]
    },
    {
      name: "Taller 3. Plan basado en modelo lógico",
      type: "Taller",
      scope: "Nacional",
      date: "2024-05-18",
      location: "PEREIRA",
      role: "Organizador",
      participants: ["MIGUEL ANGEL PUENTES CASTRO"],
      institutions: ["UNIVERSIDAD TECNOLÓGICA DE PEREIRA"]
    },
    {
      name: "Taller 7. Revisión y ajustes a planes de cuidado",
      type: "Taller",
      scope: "Nacional",
      date: "2024-11-09",
      location: "PEREIRA",
      role: "Organizador",
      participants: ["MIGUEL ANGEL PUENTES CASTRO"],
      institutions: ["UNIVERSIDAD TECNOLÓGICA DE PEREIRA"]
    },
    {
      name: "XIV Coloquio de investigación en formación ciudadana: El cuidado de la vida y la subjetividad política: resistencias y re- existencias en la formación ciudadana en lo contemporáneo",
      type: "Congreso",
      scope: "Nacional",
      date: "2025-02-03 al 2025-10-30",
      location: "PEREIRA",
      role: "Organizador",
      participants: ["MIGUEL ANGEL PUENTES CASTRO"],
      institutions: ["UNIVERSIDAD TECNOLÓGICA DE PEREIRA"]
    },
    {
      name: "XIV Coloquio de investigación en formación ciudadana: El cuidado de la vida y la subjetividad política: resistencias y re-existencias en la formación ciudadana en lo contemporáneo",
      type: "Congreso",
      scope: "Nacional",
      date: "2025-09-03 al 2026-03-06",
      location: "PEREIRA - Universidad Tecnológica de Pereira",
      role: "Organizador",
      participants: ["MIGUEL ANGEL PUENTES CASTRO"],
      institutions: ["UNIVERSIDAD TECNOLÓGICA DE PEREIRA"]
    },
    {
      name: "Jornada de Transferencia Tecnológica en DSpace",
      type: "Congreso",
      scope: "Nacional",
      date: "2025-03-07",
      location: "PEREIRA",
      role: "Organizador",
      participants: ["MIGUEL ANGEL PUENTES CASTRO"],
      institutions: ["UNIVERSIDAD TECNOLÓGICA DE PEREIRA"]
    },
    {
      name: "Cuidar el ambiente y cuidar la mujer: fortalecimiento de capacidades organizativas en asociaciones campesinas de Risaralda",
      type: "Taller",
      scope: "Nacional",
      date: "2024-03-16",
      location: "PEREIRA",
      role: "Organizador",
      participants: ["MIGUEL ANGEL PUENTES CASTRO"],
      institutions: ["UNIVERSIDAD TECNOLÓGICA DE PEREIRA"]
    },
    {
      name: "Jornada de socialización: Cuidar el ambiente y cuidar la mujer: fortalecimiento de capacidades organizativas",
      type: "Congreso",
      scope: "Nacional",
      date: "2024-11-16",
      location: "PEREIRA",
      role: "Organizador",
      participants: ["MIGUEL ANGEL PUENTES CASTRO"],
      institutions: ["UNIVERSIDAD TECNOLÓGICA DE PEREIRA"]
    },
    {
      name: "Taller 6. Plan basado en rúbrica para ciudad de género",
      type: "Taller",
      scope: "Nacional",
      date: "2024-10-19",
      location: "PEREIRA",
      role: "Organizador",
      participants: ["MIGUEL ANGEL PUENTES CASTRO"],
      institutions: ["UNIVERSIDAD TECNOLÓGICA DE PEREIRA"]
    },
    {
      name: "Jornada de Transferencia Tecnológica en DSpace",
      type: "Encuentro",
      scope: "Nacional",
      date: "2025-03-07",
      location: "PEREIRA - Universidad Tecnológica de Pereira",
      role: "Organizador",
      participants: ["MIGUEL ANGEL PUENTES CASTRO"],
      institutions: ["UNIVERSIDAD TECNOLÓGICA DE PEREIRA"]
    },
    {
      name: "Jornada de socialización: Cuidar el ambiente y cuidar la mujer: fortalecimiento de capacidades organizativas",
      type: "Encuentro",
      scope: "Nacional",
      date: "2024-02-03 al 2024-10-26",
      location: "PEREIRA - Universidad Tecnológica de Pereirars",
      role: "Organizador",
      participants: ["JULIO CESAR MURILLO GARCIA", "MIGUEL ANGEL PUENTES CASTRO"],
      institutions: ["UNIVERSIDAD TECNOLÓGICA DE PEREIRA"]
    },
    {
      name: "Primer Coloquio de Investigación Educativa 2024 MCE - EGE",
      type: "Otro",
      scope: "Nacional",
      date: "2024-11-15",
      location: "PEREIRA - Universidad Tecnológica de Pereira",
      role: "Ponente magistral",
      participants: ["MIGUEL ANGEL PUENTES CASTRO"],
      institutions: ["UNIVERSIDAD TECNOLÓGICA DE PEREIRA"]
    },
    {
      name: "XIV Coloquio de investigación en formación ciudadana: El cuidado de la vida y la subjetividad política: resistencias y re-existencias en la formación ciudadana de lo contemporáneo",
      type: "Congreso",
      scope: "Nacional",
      date: "2025-09-04 al 2025-09-05",
      location: "PEREIRA - Universidad Tecnológica de Pereira",
      role: "Organizador",
      participants: ["MIGUEL ANGEL PUENTES CASTRO"],
      institutions: ["UNIVERSIDAD TECNOLÓGICA DE PEREIRA"]
    },
    {
      name: "Curso de investigación para Dummies",
      type: "Taller",
      scope: "Nacional",
      date: "2022-10-27",
      location: "PEREIRA - Universidad Tecnológica de Pereira",
      role: "Ponente magistral",
      participants: ["MIGUEL ANGEL PUENTES CASTRO"],
      institutions: ["UNIVERSIDAD TECNOLÓGICA DE PEREIRA"],
      product: "Acercamiento a la investigación"
    },
    {
      name: "XII Coloquio Colombiano de Investigación en Formación Ciudadana",
      type: "Encuentro",
      scope: "Nacional",
      date: "2023-09-07 al 2023-09-08",
      location: "MEDELLÍN - Universidad de Antioquia",
      role: "Ponente magistral",
      participants: ["MIGUEL ANGEL PUENTES CASTRO"],
      institutions: ["UNIVERSIDAD TECNOLÓGICA DE PEREIRA"],
      product: "Experiencias alrededor de la verdad: implicaciones en la Formación de Sujetos Políticos"
    },
    {
      name: "MICRÓFONO ABIERTO. Espacio de activo de participación en torno a la memoria, la duración del testimonio, el tiempo, la persistencia, el recuerdo y el olvido",
      type: "Encuentro",
      scope: "Nacional",
      date: "2023-10-30 al 2023-10-31",
      location: "PEREIRA - Facultad de Bellas Artes y Humanidades",
      role: "Organizador",
      participants: ["MIGUEL ANGEL PUENTES CASTRO"],
      institutions: ["UNIVERSIDAD TECNOLÓGICA DE PEREIRA"]
    },
    {
      name: "V Congreso Virtual Internacional Y XXXVIII Simposio Virtual Internacional En Ciencias Sociales",
      type: "Congreso",
      scope: "Internacional",
      date: "2024-08-28 al 2024-08-30",
      location: "MEDELLÍN - Universidad Pontificia Bolivariana",
      role: "Ponente",
      participants: ["ALVARO DIAZ GOMEZ", "ANA MARIA CALDERON JARAMILLO", "MIGUEL ANGEL PUENTES CASTRO"],
      institutions: ["Universidad Pontificia Bolivariana Seccional Medellín"],
      product: "Juventud y pandemia: subjetividades femeninas emergentes en tiempos del Covid-19"
    },
    {
      name: "XIII Coloquio de investigación en formación ciudadana",
      type: "Congreso",
      scope: "Nacional",
      date: "2024-08-22 al 2024-08-23",
      location: "ARMENIA - Universidad del Quindio",
      role: "Ponente magistral",
      participants: ["MIGUEL ANGEL PUENTES CASTRO"],
      institutions: ["UNIVERSIDAD DEL QUINDÍO"],
      product: "Formación en Humanidades: Educación, ciudadanía, memoria y paz en el contexto universitario en Colombia"
    },
    {
      name: "VII Encuentro Internacional sobre la Enseñanza de las Ciencias Exactas y Naturales",
      type: "Encuentro",
      scope: "Internacional",
      date: "2023-09-06",
      location: "PEREIRA - Universidad Tecnológica de Pereira",
      role: "Ponente",
      participants: ["LUIS ENRIQUE CASTANEDA GONZALEZ", "MIGUEL ANGEL PUENTES CASTRO"],
      institutions: ["UNIVERSIDAD TECNOLÓGICA DE PEREIRA"],
      product: "Enseñanza de la Física Basada en los Factores Antropológicos y el Contexto Social"
    },
    {
      name: "Realidad virtualidad como unidad. Lección inaugural Escuela de Español y Comunicación Audiovisual",
      type: "Encuentro",
      scope: "Nacional",
      date: "2020-02-19",
      location: "PEREIRA - Universidad Tecnológica de Pereira",
      role: "Ponente magistral",
      participants: ["MIGUEL ANGEL PUENTES CASTRO"],
      institutions: ["UNIVERSIDAD TECNOLÓGICA DE PEREIRA"],
      product: "REALIDAD - VIRTUALIDAD COMO UNIDAD"
    },
    {
      name: "Conmemoración del Día Nacional de las Víctimas",
      type: "Encuentro",
      scope: "Nacional",
      date: "2024-04-09",
      location: "PEREIRA - Universidad Tecnológica de Pereira",
      role: "Organizador",
      participants: ["JUAN MANUEL MARTINEZ HERRERA", "JULIO CESAR MURILLO GARCIA", "LUISA FERNANDA MARULANDA GOMEZ", "MIGUEL ANGEL PUENTES CASTRO"],
      institutions: ["UNIVERSIDAD TECNOLÓGICA DE PEREIRA"]
    },
    {
      name: "Cuidar el ambiente y cuidar la mujer: fortalecimiento de capacidades organizativas en asociaciones campesinas de Risaralda",
      type: "Taller",
      scope: "Nacional",
      date: "2024-02-03 al 2024-08-24",
      location: "PEREIRA - Universidad Tecnológica de Pereira",
      role: "Organizador",
      participants: ["JULIO CESAR MURILLO GARCIA", "MELISSA MONTANEZ HOLGUIN", "MIGUEL ANGEL PUENTES CASTRO"],
      institutions: ["UNIVERSIDAD TECNOLÓGICA DE PEREIRA"]
    },
    {
      name: "XIII Coloquio de investigación en formación ciudadana",
      type: "Congreso",
      scope: "Nacional",
      date: "2024-08-22 al 2024-08-23",
      location: "ARMENIA - Universidad del Quindio",
      role: "Organizador",
      participants: ["MIGUEL ANGEL PUENTES CASTRO"],
      institutions: ["UNIVERSIDAD DEL QUINDÍO"]
    },
    {
      name: "XII Coloquio Colombiano de Investigación en Formación Ciudadana",
      type: "Congreso",
      scope: "Nacional",
      date: "2023-09-07 al 2023-09-08",
      location: "MEDELLÍN - Universidad de Antioquía",
      role: "Organizador",
      participants: ["MIGUEL ANGEL PUENTES CASTRO"],
      institutions: ["UNIVERSIDAD DE ANTIOQUIA"]
    },
    {
      name: "Conversatorio Archivo, Derechos Humanos y Verdad",
      type: "Encuentro",
      scope: "Nacional",
      date: "2023-05-04",
      location: "PEREIRA - Universidad Tecnológica de Pereira",
      role: "Organizador",
      participants: ["DIANA CAROLINA SUAREZ ALBANO", "JUAN MANUEL MARTINEZ HERRERA", "LUISA FERNANDA MARULANDA GOMEZ", "MIGUEL ANGEL PUENTES CASTRO"],
      institutions: ["UNIVERSIDAD TECNOLÓGICA DE PEREIRA"]
    },
    {
      name: "II Encuentro de Grupos de Investigación del Departamento de Humanidades",
      type: "Encuentro",
      scope: "Nacional",
      date: "2022-06-09",
      location: "PEREIRA - Universidad Tecnológica de Pereira",
      role: "Ponente magistral",
      participants: ["MIGUEL ANGEL PUENTES CASTRO"],
      institutions: ["UNIVERSIDAD TECNOLÓGICA DE PEREIRA"],
      product: "Avances en las tendencias conceptuales derivadas de la producción académica del grupo de investigación en Estudios políticos y Jurídicos de la Universidad Tecnológica de Pereira entre los años 2013 - 2020"
    },
    {
      name: "III Encuentro de Grupos de Investigación del Departamento de Humanidades",
      type: "Encuentro",
      scope: "Nacional",
      date: "2023-03-30",
      location: "PEREIRA - Universidad Tecnológica de Pereira",
      role: "Ponente magistral",
      participants: ["LUISA FERNANDA MARULANDA GOMEZ", "MIGUEL ANGEL PUENTES CASTRO"],
      institutions: ["UNIVERSIDAD TECNOLÓGICA DE PEREIRA"],
      product: "Diagnóstico para la conformación de un archivo digital de DDHH en lña ciudad de Pereira - Risaralda - Colombia"
    },
    {
      name: "Subjetividad Política en el ámbito de la investigación y la enseñanza de las humanidades. 10 años del grupo de investigación en Estudios Políticos y Jurídicos",
      type: "Simposio",
      scope: "Nacional",
      date: "2023-09-29",
      location: "PEREIRA - Universidad Tecnológica de Pereira",
      role: "Organizador",
      participants: ["MIGUEL ANGEL PUENTES CASTRO"],
      institutions: ["UNIVERSIDAD TECNOLÓGICA DE PEREIRA"]
    },
    {
      name: "Segunda Jornada de Apropiación Social del Conocimiento de la Facultad de Ciencias de la Educación",
      type: "Encuentro",
      scope: "Nacional",
      date: "2023-05-10",
      location: "PEREIRA - Universidad Tecnológica de Pereira",
      role: "Ponente",
      participants: ["MIGUEL ANGEL PUENTES CASTRO", "OLGA LUCIA BEDOYA"],
      institutions: ["UNIVERSIDAD TECNOLÓGICA DE PEREIRA"],
      product: "Creación de una estrategia audiovisual con base en storytelling para cambiar imaginarios urbanos: caso Pereira imaginada y sus croquis ciudadanos"
    },
    {
      name: "La noción de Verdad en la Comisión de la Verdad. Su metodología de trabajo",
      type: "Seminario",
      scope: "Nacional",
      date: "2022-09-30",
      location: "PEREIRA - Universidad Tecnológica de Pereira",
      role: "Organizador",
      participants: ["MIGUEL ANGEL PUENTES CASTRO"],
      institutions: ["UNIVERSIDAD TECNOLÓGICA DE PEREIRA"]
    },
    {
      name: "La verdad epistémica",
      type: "Seminario",
      scope: "Nacional",
      date: "2022-10-28",
      location: "PEREIRA - Universidad Tecnológica de Pereira",
      role: "Organizador",
      participants: ["MIGUEL ANGEL PUENTES CASTRO"],
      institutions: ["UNIVERSIDAD TECNOLÓGICA DE PEREIRA"]
    },
    {
      name: "Verdad y ficción en la autobiografía prospectiva (como una expresión de la verdad en ciencias sociales).",
      type: "Seminario",
      scope: "Nacional",
      date: "2022-11-11",
      location: "PEREIRA - Universidad Tecnológica de Pereira",
      role: "Organizador",
      participants: ["MIGUEL ANGEL PUENTES CASTRO"],
      institutions: ["UNIVERSIDAD TECNOLÓGICA DE PEREIRA"]
    },
    {
      name: "Reconocer la pluralidad de la comprensión del concepto de verdad",
      type: "Seminario",
      scope: "Nacional",
      date: "2022-10-07",
      location: "PEREIRA - Universidad Tecnológica de Pereira",
      role: "Organizador",
      participants: ["MIGUEL ANGEL PUENTES CASTRO"],
      institutions: ["UNIVERSIDAD TECNOLÓGICA DE PEREIRA"]
    },
    {
      name: "I Seminario Internacional Y III Seminario Colombiano De Imaginarios Y Representaciones",
      type: "Seminario",
      scope: "Internacional",
      date: "2020-09-21 al 2020-09-25",
      location: "Xapala - Virtual",
      role: "Ponente",
      participants: ["MIGUEL ANGEL PUENTES CASTRO", "OLGA LUCIA BEDOYA"],
      institutions: ["UNIVERSIDAD SANTO TOMAS"],
      product: "Pereira Imaginada. Trazos y representaciones desde los croquis afectivos del ciudadano de a pie"
    },
    {
      name: "II Encuentro Educación con sentidos 2017",
      type: "Encuentro",
      scope: "Internacional",
      date: "2017-09-06 al 2017-09-08",
      location: "Valencia - Universidad de Valencia",
      role: "Asistente",
      participants: ["MIGUEL ANGEL PUENTES CASTRO"],
      institutions: ["UNIVERSIDAD TECNOLÓGICA DE PEREIRA"]
    },
    {
      name: "I Congreso Internacional de Territorios Digitales",
      type: "Congreso",
      scope: "Internacional",
      date: "2017-06-29 al 2017-06-30",
      location: "Granada - Universidad de Granada",
      role: "Ponente",
      participants: ["MIGUEL ANGEL PUENTES CASTRO", "OLGA LUCIA BEDOYA"],
      institutions: ["UNIVERSIDAD DE GRANADA"],
      product: "Por los croquis digitales. Pereira imaginada"
    },
    {
      name: "Congreso Internacional de Ética y Democracia",
      type: "Congreso",
      scope: "Internacional",
      date: "2017-11-06 al 2017-11-08",
      location: "Valencia - Universidad de Valencia - España",
      role: "Ponente",
      participants: ["MIGUEL ANGEL PUENTES CASTRO"],
      institutions: ["Universitat De Valencia"],
      product: "Entre pantallas e interfaces: La democracia en tiempos de prosumers"
    },
    {
      name: "Foro y Encuentro de Comunicación alternativa",
      type: "Encuentro",
      scope: "Nacional",
      date: "2018-04-26",
      location: "PEREIRA - Universidad Tecnológica de Pereira",
      role: "Organizador",
      participants: ["MIGUEL ANGEL PUENTES CASTRO"],
      institutions: ["UNIVERSIDAD TECNOLÓGICA DE PEREIRA"]
    },
    {
      name: "Primer encuentro nacional de investigadores en comunicación",
      type: "Encuentro",
      scope: "Internacional",
      date: "2016-05-26 al 2016-05-27",
      location: "BARRANQUILLA - Universidad del Norte",
      role: "Ponente",
      participants: ["MIGUEL ANGEL PUENTES CASTRO", "OLGA LUCIA BEDOYA"],
      institutions: ["UNIVERSIDAD TECNOLÓGICA DE PEREIRA"],
      product: "Pereira imaginada: por los croquis"
    }
  ]
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>('bio');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Elementos Decorativos Flotantes */}
      <div className="floating-shape w-64 h-64 bg-indigo-400 top-20 -left-20" />
      <div className="floating-shape w-96 h-96 bg-pink-300 bottom-20 -right-20" style={{ animationDelay: '-5s' }} />
      <div className="floating-shape w-48 h-48 bg-blue-300 top-1/2 left-1/3" style={{ animationDelay: '-10s' }} />

      {/* Navegación */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2 md:py-3' : 'py-4 md:py-6'}`}>
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="glass rounded-full px-4 md:px-8 py-2 md:py-3 flex justify-center items-center bg-gradient-to-r from-indigo-100/70 via-white/80 to-blue-100/70 border-white/40 shadow-lg shadow-indigo-200/20">
            <div className="flex flex-wrap justify-center gap-3 md:gap-8 text-[10px] sm:text-[11px] md:text-sm font-bold uppercase tracking-wider md:tracking-widest">
              <a href="#bio" className="hover:text-indigo-600 transition-colors">Bio</a>
              <a href="#cv" className="hover:text-indigo-600 transition-colors">Formación</a>
              <a href="#experience" className="hover:text-indigo-600 transition-colors">Experiencia</a>
              <a href="#tutoring" className="hover:text-indigo-600 transition-colors">Tutorías</a>
              <a href="#jury" className="hover:text-indigo-600 transition-colors">Jurados</a>
              <a href="#events" className="hover:text-indigo-600 transition-colors">Eventos</a>
              <a href="#complementary" className="hover:text-indigo-600 transition-colors">Cursos</a>
              <a href="#products" className="hover:text-indigo-600 transition-colors">Publicaciones</a>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-4 md:px-6 pt-24 md:pt-32 pb-20 space-y-8 md:space-y-12">
        
        {/* Sección Bio / Hero */}
        <section id="bio" className={`scroll-mt-20 md:scroll-mt-28 transition-all duration-500 ${expandedSection === 'bio' ? 'expanded' : ''}`}>
          <div className="glass rounded-3xl p-6 md:p-12 relative overflow-hidden">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white/50 shadow-xl flex-shrink-0">
                <img 
                  src={PROFESSOR_DATA.profileImage} 
                  alt={PROFESSOR_DATA.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h1 className="serif text-3xl md:text-6xl font-bold mb-2 text-indigo-950 leading-tight">
                  {PROFESSOR_DATA.name}
                </h1>
                <p className="text-lg md:text-xl text-indigo-600 font-medium mb-4 md:mb-6 italic serif">
                  {PROFESSOR_DATA.title}
                </p>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4 mb-6 md:mb-8">
                  <span className="flex items-center gap-2 text-xs md:text-sm text-gray-600 bg-white/30 px-3 py-1 rounded-full border border-white/20">
                    <MapPin size={12} className="md:w-[14px]" /> {PROFESSOR_DATA.location}
                  </span>
                  <span className="flex items-center gap-2 text-xs md:text-sm text-gray-600 bg-white/30 px-3 py-1 rounded-full border border-white/20">
                    <Mail size={12} className="md:w-[14px]" /> {PROFESSOR_DATA.email}
                  </span>
                </div>

                <div className="expandable-content">
                  <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-6 md:mb-8 max-w-2xl">
                    {PROFESSOR_DATA.bio}
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
                    <a 
                      href={PROFESSOR_DATA.social.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      data-tooltip="LinkedIn" 
                      className="social-btn group p-4 glass rounded-2xl hover:bg-[#0077b5] hover:scale-110 text-[#0077b5] hover:text-white shadow-sm hover:shadow-xl"
                    >
                      <Linkedin size={22} className="transition-transform group-hover:rotate-12" />
                    </a>
                    <a 
                      href={PROFESSOR_DATA.social.scholar} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      data-tooltip="Google Scholar" 
                      className="social-btn group p-4 glass rounded-2xl hover:bg-[#4285F4] hover:scale-110 text-[#4285F4] hover:text-white shadow-sm hover:shadow-xl"
                    >
                      <GoogleScholarIcon size={22} className="transition-transform group-hover:rotate-12" />
                    </a>
                    <a 
                      href={PROFESSOR_DATA.social.researchgate} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      data-tooltip="ResearchGate" 
                      className="social-btn group p-4 glass rounded-2xl hover:bg-[#00ccbb] hover:scale-110 text-[#00ccbb] hover:text-white shadow-sm hover:shadow-xl"
                    >
                      <ResearchGateIcon size={22} className="transition-transform group-hover:rotate-12" />
                    </a>
                    <a 
                      href={PROFESSOR_DATA.social.academia} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      data-tooltip="Academia.edu" 
                      className="social-btn group p-4 glass rounded-2xl hover:bg-[#313535] hover:scale-110 text-[#313535] hover:text-white shadow-sm hover:shadow-xl"
                    >
                      <AcademiaIcon size={22} className="transition-transform group-hover:rotate-12" />
                    </a>
                    <a 
                      href={PROFESSOR_DATA.social.repository} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      data-tooltip="Repositorio UTP" 
                      className="social-btn group p-4 glass rounded-2xl hover:bg-indigo-600 hover:scale-110 text-indigo-600 hover:text-white shadow-sm hover:shadow-xl"
                    >
                      <Library size={22} className="transition-transform group-hover:rotate-12" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <button 
              onClick={() => toggleSection('bio')}
              className="absolute bottom-4 right-6 md:right-8 text-indigo-400 hover:text-indigo-600 transition-colors p-2"
            >
              {expandedSection === 'bio' ? <ChevronUp size={20} className="md:w-[24px]" /> : <ChevronDown size={20} className="md:w-[24px]" />}
            </button>
          </div>
        </section>

        {/* Sección Trayectoria (CV) */}
        <section id="cv" className={`scroll-mt-20 md:scroll-mt-28 transition-all duration-500 ${expandedSection === 'cv' ? 'expanded' : ''}`}>
          <div className="glass rounded-3xl p-6 md:p-12">
            <div className="flex justify-between items-center mb-6 md:mb-8">
              <h2 className="serif text-2xl md:text-3xl font-bold flex items-center gap-3">
                <GraduationCap className="text-indigo-600" /> Formación Académica
              </h2>
              <button 
                onClick={() => toggleSection('cv')}
                className="text-indigo-400 hover:text-indigo-600 transition-colors p-2"
              >
                {expandedSection === 'cv' ? <ChevronUp size={20} className="md:w-[24px]" /> : <ChevronDown size={20} className="md:w-[24px]" />}
              </button>
            </div>

            <div className="expandable-content">
              <div className="space-y-4 md:space-y-6">
                {PROFESSOR_DATA.cv.map((item, idx) => (
                  <div key={idx} className="flex flex-col md:flex-row md:items-start gap-2 md:gap-4 p-4 md:p-6 rounded-2xl bg-white/20 border border-white/30 hover:bg-white/40 transition-colors group">
                    <span className="text-xs md:text-sm font-bold text-indigo-600 md:w-32 pt-1">{item.year}</span>
                    <div className="flex-1">
                      <h3 className="font-semibold text-base md:text-lg group-hover:text-indigo-800 transition-colors">{item.role}</h3>
                      <p className="text-sm md:text-base text-indigo-900/70 font-medium">{item.institution}</p>
                      {item.description && (
                        <p className="text-xs md:text-sm text-gray-600 mt-2 italic">
                          {item.description}
                        </p>
                      )}
                    </div>
                    <Award className="hidden md:block text-indigo-200 group-hover:text-indigo-400 transition-colors" size={24} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sección Experiencia Profesional */}
        <section id="experience" className={`scroll-mt-20 md:scroll-mt-28 transition-all duration-500 ${expandedSection === 'experience' ? 'expanded' : ''}`}>
          <div className="glass rounded-3xl p-6 md:p-12">
            <div className="flex justify-between items-center mb-6 md:mb-8">
              <h2 className="serif text-2xl md:text-3xl font-bold flex items-center gap-3">
                <Briefcase className="text-indigo-600" /> Experiencia Profesional
              </h2>
              <button 
                onClick={() => toggleSection('experience')}
                className="text-indigo-400 hover:text-indigo-600 transition-colors p-2"
              >
                {expandedSection === 'experience' ? <ChevronUp size={20} className="md:w-[24px]" /> : <ChevronDown size={20} className="md:w-[24px]" />}
              </button>
            </div>

            <div className="expandable-content">
              <div className="space-y-6 md:space-y-8">
                {PROFESSOR_DATA.experience.map((exp, idx) => (
                  <div key={idx} className="relative pl-6 md:pl-8 border-l-2 border-indigo-100 pb-6 last:pb-0">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow-sm" />
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-indigo-950">{exp.institution}</h3>
                        <p className="text-sm font-semibold text-indigo-600">{exp.period}</p>
                      </div>
                      <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-700 text-[10px] md:text-xs font-bold rounded-full self-start">
                        {exp.dedication}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                      {exp.activities.admin && (
                        <div className="space-y-2">
                          <h4 className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Administración</h4>
                          <ul className="text-xs md:text-sm text-gray-600 space-y-1">
                            {exp.activities.admin.map((a, i) => <li key={i} className="flex gap-2"><span>•</span> {a}</li>)}
                          </ul>
                        </div>
                      )}
                      {exp.activities.teaching && (
                        <div className="space-y-2">
                          <h4 className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Docencia</h4>
                          <ul className="text-xs md:text-sm text-gray-600 space-y-1">
                            {exp.activities.teaching.map((t, i) => <li key={i} className="flex gap-2"><span>•</span> {t}</li>)}
                          </ul>
                        </div>
                      )}
                      {exp.activities.research && (
                        <div className="space-y-2">
                          <h4 className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Investigación</h4>
                          <ul className="text-xs md:text-sm text-gray-600 space-y-1">
                            {exp.activities.research.map((r, i) => <li key={i} className="flex gap-2"><span>•</span> {r}</li>)}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Sección Trabajos Dirigidos / Tutorías */}
        <section id="tutoring" className={`scroll-mt-20 md:scroll-mt-28 transition-all duration-500 ${expandedSection === 'tutoring' ? 'expanded' : ''}`}>
          <div className="glass rounded-3xl p-6 md:p-12">
            <div className="flex justify-between items-center mb-6 md:mb-8">
              <h2 className="serif text-2xl md:text-3xl font-bold flex items-center gap-3">
                <Users className="text-indigo-600" /> Trabajos Dirigidos / Tutorías
              </h2>
              <button 
                onClick={() => toggleSection('tutoring')}
                className="text-indigo-400 hover:text-indigo-600 transition-colors p-2"
              >
                {expandedSection === 'tutoring' ? <ChevronUp size={20} className="md:w-[24px]" /> : <ChevronDown size={20} className="md:w-[24px]" />}
              </button>
            </div>

            <div className="expandable-content">
              <div className="space-y-4 md:space-y-6">
                {PROFESSOR_DATA.tutoring.map((item, idx) => (
                  <div key={idx} className="p-4 md:p-6 rounded-2xl bg-white/20 border border-white/30 hover:bg-white/40 transition-colors group">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                      <span className="text-[10px] uppercase tracking-widest font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                        {item.type}
                      </span>
                      <span className="text-xs font-bold text-gray-500">{item.year}</span>
                    </div>
                    <h3 className="font-semibold text-base md:text-lg group-hover:text-indigo-800 transition-colors mb-2">
                      {item.title}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs md:text-sm">
                      <p className="text-gray-600"><span className="font-bold text-indigo-900/70">Institución:</span> {item.institution}</p>
                      <p className="text-gray-600"><span className="font-bold text-indigo-900/70">Estado:</span> {item.status}</p>
                      {item.student && (
                        <p className="text-gray-600 md:col-span-2"><span className="font-bold text-indigo-900/70">Persona(s) orientada(s):</span> {item.student}</p>
                      )}
                      <p className="text-gray-600"><span className="font-bold text-indigo-900/70">Rol:</span> {item.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sección Jurado en comités de evaluación */}
        <section id="jury" className={`scroll-mt-20 md:scroll-mt-28 transition-all duration-500 ${expandedSection === 'jury' ? 'expanded' : ''}`}>
          <div className="glass rounded-3xl p-6 md:p-12">
            <div className="flex justify-between items-center mb-6 md:mb-8">
              <h2 className="serif text-2xl md:text-3xl font-bold flex items-center gap-3">
                <Gavel className="text-indigo-600" /> Jurado en Comités de Evaluación
              </h2>
              <button 
                onClick={() => toggleSection('jury')}
                className="text-indigo-400 hover:text-indigo-600 transition-colors p-2"
              >
                {expandedSection === 'jury' ? <ChevronUp size={20} className="md:w-[24px]" /> : <ChevronDown size={20} className="md:w-[24px]" />}
              </button>
            </div>

            <div className="expandable-content">
              <div className="space-y-4 md:space-y-6">
                {PROFESSOR_DATA.jury.map((item, idx) => (
                  <div key={idx} className="p-4 md:p-6 rounded-2xl bg-white/20 border border-white/30 hover:bg-white/40 transition-colors group">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                      <span className="text-[10px] uppercase tracking-widest font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                        {item.type}
                      </span>
                    </div>
                    <h3 className="font-semibold text-base md:text-lg group-hover:text-indigo-800 transition-colors mb-2">
                      {item.title}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs md:text-sm">
                      <p className="text-gray-600"><span className="font-bold text-indigo-900/70">Institución:</span> {item.institution}</p>
                      <p className="text-gray-600"><span className="font-bold text-indigo-900/70">Programa:</span> {item.program}</p>
                      {item.student && (
                        <p className="text-gray-600 md:col-span-2"><span className="font-bold text-indigo-900/70">Persona(s) orientada(s):</span> {item.student}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sección Eventos Científicos */}
        <section id="events" className={`scroll-mt-20 md:scroll-mt-28 transition-all duration-500 ${expandedSection === 'events' ? 'expanded' : ''}`}>
          <div className="glass rounded-3xl p-6 md:p-12">
            <div className="flex justify-between items-center mb-6 md:mb-8">
              <h2 className="serif text-2xl md:text-3xl font-bold flex items-center gap-3">
                <Calendar className="text-indigo-600" /> Eventos Científicos
              </h2>
              <button 
                onClick={() => toggleSection('events')}
                className="text-indigo-400 hover:text-indigo-600 transition-colors p-2"
              >
                {expandedSection === 'events' ? <ChevronUp size={20} className="md:w-[24px]" /> : <ChevronDown size={20} className="md:w-[24px]" />}
              </button>
            </div>

            <div className="expandable-content">
              <div className="space-y-4 md:space-y-6">
                {PROFESSOR_DATA.events.map((event, idx) => (
                  <div key={idx} className="p-4 md:p-6 rounded-2xl bg-white/20 border border-white/30 hover:bg-white/40 transition-colors group">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                      <div className="flex flex-wrap gap-2">
                        <span className="text-[10px] uppercase tracking-widest font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                          {event.type}
                        </span>
                        <span className="text-[10px] uppercase tracking-widest font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                          {event.scope}
                        </span>
                      </div>
                      <span className="text-xs font-bold text-gray-500">{event.date}</span>
                    </div>
                    <h3 className="font-semibold text-base md:text-lg group-hover:text-indigo-800 transition-colors mb-2">
                      {idx + 1}. {event.name}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs md:text-sm">
                      <p className="text-gray-600"><span className="font-bold text-indigo-900/70">Ubicación:</span> {event.location}</p>
                      <p className="text-gray-600"><span className="font-bold text-indigo-900/70">Rol:</span> {event.role}</p>
                      {event.participants && event.participants.length > 0 && (
                        <p className="text-gray-600 md:col-span-2"><span className="font-bold text-indigo-900/70">Participantes:</span> {event.participants.join(", ")}</p>
                      )}
                      {event.institutions && event.institutions.length > 0 && (
                        <p className="text-gray-600 md:col-span-2"><span className="font-bold text-indigo-900/70">Instituciones:</span> {event.institutions.join(", ")}</p>
                      )}
                      {event.product && (
                        <p className="text-indigo-600 md:col-span-2 italic"><span className="font-bold text-indigo-900/70 not-italic">Producto:</span> {event.product}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sección Formación Complementaria */}
        <section id="complementary" className={`scroll-mt-20 md:scroll-mt-28 transition-all duration-500 ${expandedSection === 'complementary' ? 'expanded' : ''}`}>
          <div className="glass rounded-3xl p-6 md:p-12">
            <div className="flex justify-between items-center mb-6 md:mb-8">
              <h2 className="serif text-2xl md:text-3xl font-bold flex items-center gap-3">
                <FileText className="text-indigo-600" /> Formación Complementaria
              </h2>
              <button 
                onClick={() => toggleSection('complementary')}
                className="text-indigo-400 hover:text-indigo-600 transition-colors p-2"
              >
                {expandedSection === 'complementary' ? <ChevronUp size={20} className="md:w-[24px]" /> : <ChevronDown size={20} className="md:w-[24px]" />}
              </button>
            </div>

            <div className="expandable-content">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {PROFESSOR_DATA.complementary.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white/10 border border-white/20 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xs">
                      {item.year.slice(-2)}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold">{item.title}</h4>
                      <p className="text-xs text-gray-500">{item.institution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sección Hub de Productos (Publicaciones) */}
        <section id="products" className="scroll-mt-20 md:scroll-mt-28">
          <div className="glass rounded-3xl p-6 md:p-12">
            <h2 className="serif text-2xl md:text-3xl font-bold mb-8 md:mb-12 flex items-center gap-3">
              <BookOpen className="text-indigo-600" /> Publicaciones
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {PROFESSOR_DATA.products.map((product) => (
                <motion.div 
                  key={product.id}
                  whileHover={{ y: -5 }}
                  className="group relative glass rounded-2xl overflow-hidden flex flex-col sm:flex-row h-full"
                >
                  <div className="w-full sm:w-2/5 h-48 sm:h-auto overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <a 
                      href={product.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-6 md:p-8 flex-1 flex flex-col justify-start group/content"
                    >
                      <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-indigo-500 mb-3 block">
                        {product.type}
                      </span>
                      <h3 className="serif text-xl md:text-2xl font-bold mb-4 group-hover/content:text-indigo-600 transition-colors leading-tight">
                        {product.title}
                      </h3>
                      <p className="text-sm md:text-base text-gray-600 line-clamp-3 md:line-clamp-4 leading-relaxed">
                        {product.description}
                      </p>
                    </a>
                    <a 
                      href={product.link} 
                      className="w-full py-4 md:py-5 bg-indigo-600/5 hover:bg-indigo-600/10 border-t border-white/40 text-indigo-700 font-bold flex items-center justify-center gap-3 transition-all duration-300 group/btn"
                    >
                      Ver más <ExternalLink size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-4 md:px-6 py-8 md:py-12 text-center">
        <div className="glass rounded-full px-6 md:px-8 py-3 md:py-4 inline-block">
          <p className="text-[10px] md:text-sm text-gray-500">
            © {new Date().getFullYear()} {PROFESSOR_DATA.name} — Humanidades & Arte
          </p>
        </div>
      </footer>
    </div>
  );
}
