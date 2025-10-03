import './about.css'

export const printAbout = () => {
  templateAbout();
}

const templateAbout = () => {
  const aboutSection = document.createElement("section");
  aboutSection.id = "about";
  document.body.appendChild(aboutSection);
  

  /*SECCIONES DE ABOUT*/
  const aboutDiv = document.createElement("div");
  const skillsDiv = document.createElement("div");
  
  aboutDiv.className = "aboutDiv";
  skillsDiv.className = "skillsDiv";

  aboutSection.appendChild(aboutDiv);
  aboutSection.appendChild(skillsDiv);

  /*CONTENIDO DE CADA SECCIÓN*/
  /* About Div */
  const aboutTitle = document.createElement("h2");
  const paragraph = document.createElement("p");

  aboutTitle.textContent = "About me";
  paragraph.textContent = "I’m a web development apprentice, enjoying the process of building websites that are both practical and user-friendly.";

  aboutDiv.appendChild(aboutTitle);
  aboutDiv.appendChild(paragraph);

  /* Skills Div */
  const skillsTitle = document.createElement("h2");
  const skillsList = document.createElement("ul");

  skillsTitle.textContent = "Skills";
  skillsList.className = "skillsList";

  // Array de skills
  const skills = [
    { name: "HTML", img: "public/icons/html.svg" },
    { name: "CSS", img: "public/icons/css.svg" },
    { name: "JavaScript", img: "public/icons/js.svg" },
    { name: "GitHub", img: "public/icons/github.svg" }
  ];

  skills.forEach(skill => {
  const li = document.createElement("li");
  const img = document.createElement("img");
  img.src = skill.img;
  img.alt = skill.name;
  li.appendChild(img);
  skillsList.appendChild(li);
  });

  skillsDiv.appendChild(skillsTitle);
  skillsDiv.appendChild(skillsList);
}