import {
  BookText,
  CodeSquare,
  HomeIcon,
  UserRound,
  Linkedin,
  Twitter,
  Rss,
  Twitch,
  Youtube,
  Crop,
  Pencil,
  Computer,
  Book,
  Rocket,
  Speech,
  Github,
  Instagram,
} from "lucide-react";

export const socialNetworks = [
  {
    id: 1,
    logo: <Linkedin size={30} strokeWidth={1} />,
    src: "https://www.linkedin.com/in/%C3%A1lvaro-serrano-carrasco-1853953a3",
  },
  {
    id: 2,
    logo: <Github size={30} strokeWidth={1} />,
    src: "https://github.com/alvaroCodeLab",
  },
  {
    id: 3,
    logo: <Instagram size={30} strokeWidth={1} />,
    src: "https://www.instagram.com/alvarosc_03",
  },
];

export const itemsNavbar = [
  {
    id: 1,
    title: "Home",
    icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
    link: "/",
  },
  {
    id: 2,
    title: "User",
    icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
    link: "/about-me",
  },
  {
    id: 3,
    title: "Book",
    icon: <BookText size={25} color="#fff" strokeWidth={1} />,
    link: "/services",
  },
  {
    id: 4,
    title: "Target",
    icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
    link: "/portfolio",
  },
  {
    id: 5,
    title: "Home",
    icon: <Speech size={25} color="#fff" strokeWidth={1} />,
    link: "/testimonials",
  },
];

export const dataAboutPage = [
  {
    id: 1,
    title: "Fullstack Web Developer",
    subtitle: "Nueva Generación de Programas",
    description:
      "Diseño, desarrollo y mantenimiento de aplicaciones y páginas web, tanto front-end como back-end, utilizando herramientas como WordPress y frameworks/librerías como React y Tailwind CSS, adaptadas a las necesidades del cliente y la empresa.",
    date: "Oct 2025 ",
  },
  {
    id: 2,
    title: "Mozo De Almacén",
    subtitle: "Pinturas Serrano",
    description:
      "Preparación de pedidos, carga y descarga de mercancía, y apoyo en tareas administrativas para optimizar inventarios y organización del almacén.",
    date: "Jul 2023",
  },
  {
    id: 3,
    title: "Auxiliar Administrativo",
    subtitle: "Formalba",
    description:
      "Gestión y actualización de bases de datos de alumnos y cursos, inserción de datos en Control COM y soporte en procesos administrativos internos.",
    date: "Abr 2023",
  },
];

export const dataCounter = [
  {
    id: 0,
    endCounter: 10,
    text: "Años de experiencia",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 1,
    endCounter: 80,
    text: "Clientes satisfechos",
    lineRight: true,
    lineRightMobile: false,
  },
  {
    id: 2,
    endCounter: 220,
    text: "Proyectos finalizados",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 3,
    endCounter: 30,
    text: "Premios ganadores",
    lineRight: false,
    lineRightMobile: false,
  },
];

export const serviceData = [
  {
    icon: <Crop />,
    title: "Branding",
    description:
      "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
  },
  {
    icon: <Pencil />,
    title: "Diseño web",
    description:
      "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
  },
  {
    icon: <Computer />,
    title: "Desarrollo web",
    description:
      "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
  },
  {
    icon: <Book />,
    title: "Copywriting",
    description:
      "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
  },
  {
    icon: <Rocket />,
    title: "SEO",
    description:
      "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
  },
];

export const dataPortfolio = [
  {
    id: 1,
    title: "Aplicación Web para Gestión Académica",
    image: "/work1.png",
    urlGithub: "https://github.com/alvaroCodeLab/Academia",
    urlDemo: "#!",
    techs: ["HTML", "Java", "CSS", "MySQL"],
  },
  {
    id: 2,
    title: "Aplicación de Alquiler de Vehículos",
    image: "/work2.png",
    urlGithub: "https://github.com/alvaroCodeLab/AlquilerVehiculos",
    urlDemo: "#!",
    techs: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
  {
    id: 3,
    title: "Sistema de Gestión de Multicines",
    image: "/work3.png",
    urlGithub: "https://github.com/alvaroCodeLab/Multicines",
    urlDemo: "#!",
    techs: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
];

export const dataPages = [
  {
    id: 1,
    name: "albertocristalero.es",
    techs: ["Wordpress"],
    rol: "Desarrollador Fullstack",
    company: "Alberto Cristalero",
    image: "/profile1.png",
    url:"https://albertocristalero.es",
  },
  {
    id: 2,
    name: "lucysal.com",
    techs: ["Wordpress"],
    rol: "Desarrollador Fullstack",
    company: "Lucy Sal",
    image: "/profile1.png",
    url:"https://lucysal.com",
  },
];

export const skills = [
  {
    name: "Creatividad",
  },
  {
    name: "Trabajo en equipo",
  },
  {
    name: "Comunicación",
  },
  {
    name: "Resolución de problemas",
  },
  {
    name: "Pensamiento crítico",
  },
  {
    name: "Adaptabilidad",
  },
  {
    name: "Gestión del tiempo",
  },
  {
    name: "Aprendizaje rápido",
  },
];