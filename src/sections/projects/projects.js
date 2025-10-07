import './projects.css';
import { printProjectCards } from './projects_subcomponents/projectCards/projectCards';

export const printProjects = () => {
  templateProjects();
}

const templateProjects = () => {
  const projectsSection = document.createElement("section");
  projectsSection.id = "projectsSection";
  projectsSection.classList.add('whiteSection');
  document.body.appendChild(projectsSection);

  /*CONTENIDO DE CADA SECCIÓN*/
  /* Text Container */
  const textContainer = document.createElement("div");
  textContainer.id = "textContainer";
  projectsSection.appendChild(textContainer);
  const projectsTitle = document.createElement("h2");
  projectsTitle.textContent = "My projects";
  textContainer.appendChild(projectsTitle);
  const paragraph = document.createElement("p");
  paragraph.textContent = "Some things I've built so far";
  textContainer.appendChild(paragraph);

  printProjectCards();

}