import './header.css'
import { mobileHeaderListeners } from './header_subcomponents/mobileHeaderListeners/mobileHeaderListeners';

export const printHeader = () => {
  templateHeader();
  mobileHeaderListeners();
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

  const navItems = [
    { name: "Home", href: "#hero"},
    { name: "About Me", href: "#about"},
    { name: "Skills", href: "#about"},
    { name: "Experience/Studies", href: "#experienceSection"},
    { name: "Projects", href: "#projectsSection"},
    ];

  navItems.forEach(item => {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.textContent = item.name;
    a.href = item.href;

    li.appendChild(a)
    navList.appendChild(li)
    });

  nav.appendChild(navList);


}
