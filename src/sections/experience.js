import './experience.css';
import { createButton } from '../components/buttons.js';

export const printExperience = () => {
  templateExperience();
  changeExperienceContainer();
}

const templateExperience = () => {
  const experienceSection = document.createElement("section");
  experienceSection.id = "experienceSection";
  document.body.appendChild(experienceSection);

  /*SECCIONES DE EXPERIENCE*/
  const experienceHeader = document.createElement("div");
  experienceHeader.id = "experienceHeader";

  const experienceContainer = document.createElement("div");
  experienceContainer.id = "experienceContainer";

  experienceSection.appendChild(experienceHeader);
  experienceSection.appendChild(experienceContainer);
 

  /*CONTENIDO DE CADA SECCIÓN*/
  /* Experience Header */
  const experienceButton = createButton("Experience", "experienceButton");
  experienceButton.id = "experienceButton";

  const studiesButton = createButton("Studies", "experienceButton");
  studiesButton.id = "studiesButton";

  experienceHeader.appendChild(experienceButton);
  experienceHeader.appendChild(studiesButton);

  /* Experience Container */
  const experienceDiv = document.createElement("div");
  experienceDiv.id = "experienceDiv";
  experienceContainer.appendChild(experienceDiv);

  const experienceList = document.createElement("ul");

    // Array de experiences
    const experiences = [
  { title: "BLAY TAMARIT, SL / RAMADERA MONTPEDRÓS, SLU", description: "Operations & Administration", placeAndPeriod: "2022 - 2025 | Gualta, Girona"
  },
      { title: "LOUIS VUITTON S.A. – Manufacture de Maroquinerie et Accessoires", description: "Leather Goods Specialist", placeAndPeriod: "2019 - 2022 | Barberà del Vallès, Barcelona" },
    ];

    experiences.forEach(experience => {
    const li = document.createElement("li");
    const h4 = document.createElement("h4");
    const description = document.createElement("p");
    const placeAndPeriod = document.createElement("p");
    h4.textContent = experience.title;
    description.textContent = experience.description;
    placeAndPeriod.textContent = experience.placeAndPeriod;
    placeAndPeriod.className = "jobsPlaceAndPeriod"
    li.appendChild(h4);
    li.appendChild(description);
    li.appendChild(placeAndPeriod);
    experienceList.appendChild(li);
    });

    experienceDiv.appendChild(experienceList);

  /* Studies Div */
  const studiesDiv = document.createElement("div");
  studiesDiv.id = "studiesDiv";
  experienceContainer.appendChild(studiesDiv);

  const studiesList = document.createElement("ul");

    // Array de studies
    const studies = [
      { title: "UNIVERSITAT DE VIC (Crash Escuela Audiovisual)", degree: "Diploma in Sound Engineering and Music Production", placeAndPeriod: "2016 - 2017 | Manresa, Barcelona" },
      { title: "INSTITUT D'AURO", degree: "High School Diploma, Social & Humanities Track", placeAndPeriod: "2013 - 2015 | Santpedor, Barcelona" },
    ];

    studies.forEach(study => {
    const li = document.createElement("li");
    const h4 = document.createElement("h4");
    const degree = document.createElement("p");
    const placeAndPeriod = document.createElement("p");
    h4.textContent = study.title;
    degree.textContent = study.degree;
    placeAndPeriod.textContent = study.placeAndPeriod;
    placeAndPeriod.className = "studiesPlaceAndPeriod"
    li.appendChild(h4);
    li.appendChild(degree);
    li.appendChild(placeAndPeriod)
    studiesList.appendChild(li);
    });

    studiesDiv.appendChild(studiesList);
}

const changeExperienceContainer = () => {
  const experienceButton = document.querySelector("#experienceButton");
  const studiesButton = document.querySelector("#studiesButton");
  const experienceDiv = document.querySelector("#experienceDiv");
  const studiesDiv = document.querySelector("#studiesDiv");

  experienceDiv.className = "experience-active";
  studiesDiv.className = "studies-hidden";

  experienceButton.addEventListener("click", () => {
    experienceDiv.className = "experience-active";
    studiesDiv.className = "studies-hidden";
    }
  );

  studiesButton.addEventListener("click", () => {
    experienceDiv.className = "experience-hidden";
    studiesDiv.className = "studies-active";
});
}