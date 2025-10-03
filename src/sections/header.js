import './header.css'

export const printHeader = () => {
  templateHeader();
  headerListeners();
}

const templateHeader = () => {
  const header = document.createElement("header");
  header.classList.add("flex-container")
  document.body.appendChild(header)
  
  /*SECCIONES DE HEADER*/
  const nameDiv = document.createElement("div");
  const nav = document.createElement("nav");
  const contactLink = document.createElement("a");

  nameDiv.className = "nameDiv";
  nav.className = "nav";
  contactLink.className = "contactLink"

  contactLink.textContent = "Contact";
  contactLink.href="#contactSection";

  header.appendChild(nameDiv);
  header.appendChild(nav);
  header.appendChild(contactLink);

  /*CONTENIDO DE CADA SECCIÓN*/
  /* Name Div */
  const nameLink = document.createElement("a");
  nameLink.textContent = "Romà Oliver";
  nameLink.href="#hero";
  nameDiv.appendChild(nameLink);

  /* Nav */
  const navList = document.createElement("ul");

  navList.classList.add("flex-container", "navList")

  const home = document.createElement("li");
  const about = document.createElement("li");
  const skills = document.createElement("li");
  const experience = document.createElement("li");
  const projects = document.createElement("li");

  const homeLink = document.createElement("a");
  const aboutLink = document.createElement("a");
  const skillsLink = document.createElement("a");
  const experienceLink = document.createElement("a");
  const projectsLink = document.createElement("a");

  homeLink.href = "#hero";
  aboutLink.href = "#about";
  skillsLink.href = "#about";
  experienceLink.href = "#experienceSection";
  projectsLink.href = "#projectsSection";

  homeLink.textContent = "Home";
  aboutLink.textContent = "About Me";
  skillsLink.textContent = "Skills";
  experienceLink.textContent = "Experience/Studies";
  projectsLink.textContent = "Projects";

  nav.appendChild(navList);
  navList.appendChild(home);
  navList.appendChild(about);
  navList.appendChild(skills);
  navList.appendChild(experience);
  navList.appendChild(projects);

  home.appendChild(homeLink);
  about.appendChild(aboutLink);
  skills.appendChild(skillsLink);
  experience.appendChild(experienceLink);
  projects.appendChild(projectsLink);

  /* MOBILE HAMBURGER BUTTON */
  const hamburgerButton = document.createElement("button");
  const hamburgerIcon = document.createElement("img");
  hamburgerButton.id = "hamburgerButton";
  hamburgerIcon.src = import.meta.env.BASE_URL + "icons/hamburger.svg";
  header.appendChild(hamburgerButton);
  hamburgerButton.appendChild(hamburgerIcon);
}

const headerListeners = () => {
  const header = document.querySelector("header")
  const nav = document.querySelector(".nav");
  const contactLink = document.querySelector(".contactLink");

  /* Escuchador del botón Hamburger */
  let menuOpen = false

  const toggleMenu = () => {
    header.classList.toggle("mobile");
    nav.classList.toggle("mobile");
    contactLink.classList.toggle("mobile");
    }
  
  hamburgerButton.addEventListener("click", () => {
    toggleMenu();
  })

  /* Escuchador constante de la medida de la ventana (por si hay resize) */
  // Se cierra el menú si estaba abierto y se muestra solo el Logo y el botón Hamburger
  window.addEventListener("resize", () => {
    header.classList.remove("mobile");
    nav.classList.remove("mobile");
    contactLink.classList.remove("mobile");
    menuOpen = false;
    })

    
  // Scroll vertical suave (pulsando los links)
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault(); // evita un salto instantaneo
      const targetId = link.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);
      target.scrollIntoView({ behavior: "smooth" });
    });
  });
}
    