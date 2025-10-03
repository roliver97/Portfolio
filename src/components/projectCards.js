import { createButton } from "./buttons";
import { scrollToTop } from "../components/backToTop.js";

export const printProjectCards = () => {
  projectCardsTemplate();
}

const projects = [
  { title: "Landing Page", description: "Responsive landing page built with HTML & CSS, showcasing a product or service", image: import.meta.env.BASE_URL + "images/projects/landing_page.png", url: "https://roliver97.github.io/Proyecto1/" },
  { title: "Filter Store", description: "Interactive e-commerce site with product filtering functionality using JavaScript", image: import.meta.env.BASE_URL + "images/projects/filter_shop.png", url: "https://roliver97.github.io/Proyecto2-TiendaDeFiltros/"},
  { title: "Pinterest Async", description: "Pinterest-style gallery fetching images asynchronously from an API with vanilla JS", image: import.meta.env.BASE_URL + "images/projects/async_pinterest.png"}, 
  {title: "Portfolio", description: "Personal portfolio website demonstrating projects, skills, and contact options", image: import.meta.env.BASE_URL + "images/projects/portfolio.png", url: scrollToTop}
];

const projectCardsTemplate = () => {
  const projectsSection = document.querySelector("#projectsSection");
  const cardsContainer = document.createElement("div");
  cardsContainer.id = "cardsContainer";
  projectsSection.appendChild(cardsContainer);
  
  projects.forEach(project => {
    // Contenedor de cada card
    const card = document.createElement("div");
    card.className = "projectCard";

    cardsContainer.appendChild(card);

    // Contenido de cada card
    const img = document.createElement("img");
    img.src = project.image;
    img.alt = project.title;

    const h4 = document.createElement("h4");
    h4.textContent = project.title;

    const p = document.createElement("p");
    p.className = "projectDescription"
    p.textContent = project.description;

    const button = createButton("View App", "projectButton");
    
    card.appendChild(img);
    card.appendChild(h4);
    card.appendChild(p);

    if(typeof project.url === "function"){
      button.addEventListener("click", project.url);
      card.appendChild(button);}
      else if(project.url) {
        const link = document.createElement("a");
        link.href = project.url;
        link.appendChild(button);
        card.appendChild(link);
      } 
       else if(!project.url) {
          card.appendChild(button);
          button.addEventListener("click", () => {
          alert("This link is not available.");
        });
      }
  })
}