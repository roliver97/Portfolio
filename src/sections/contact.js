import './contact.css'
import { createForm } from '../components/forms.js';

const interestFields = [
  "Ecommerce Website",
  "Data Base",
  "Landing Page",
  "Blog Website",
  "App"
];

const contactFields = [
  { label: "Name", name: "name", type: "text", placeholder: "Enter your name", noLabel: true },
  { label: "Email", name: "email", type: "email", placeholder: "Enter your email", noLabel: true },
  { label: "Message", name: "message", type: "textarea", placeholder: "Write your message", noLabel: true }
];

export const printContact = () => {
  templateContact();
}

const templateContact = () => {
  const contactSection = document.createElement("section");
  contactSection.id = "contactSection";
  document.body.appendChild(contactSection);

  /*CONTAINERS DE CADA SECCIÓN*/
  const interestsContainer = document.createElement("div");
  interestsContainer.id = "interestsContainer";
  contactSection.appendChild(interestsContainer);

  const formContainer = document.createElement("div");
  formContainer.id = "formContainer";
  contactSection.appendChild(formContainer);

  /*INTERESTS SECTION*/
  const interestsTitle = document.createElement("h2");
  interestsTitle.append("Let's discuss on something ");
  const interestsTitleSpan = document.createElement("span");
  interestsTitleSpan.textContent = "cool";
  interestsTitleSpan.className = "interestsTitleSpan";
  
  interestsTitle.appendChild(interestsTitleSpan);
  interestsTitle.append(" together");

  interestsContainer.appendChild(interestsTitle);

  const interestsSubtitle = document.createElement("h4");
  interestsSubtitle.textContent ="I'm interested in ...";

  interestsContainer.appendChild(interestsSubtitle);

  /*FORM SECTION*/
  const form = createForm(contactFields, "contactForm", "Submit");
  formContainer.appendChild(form);

  const submitButton = document.querySelector("#formSubmitButton");
  const submitIcon = document.createElement("img");
  submitIcon.id = "formSubmitIcon"
  submitIcon.src = "public/icons/paper_plane.png";
  submitButton.prepend(submitIcon);

  // Añadimos un input hidden al form para guardar la opción (botón) seleccionado por el usuario
  const hiddenInput = document.createElement("input");
  hiddenInput.type = "hidden";
  hiddenInput.name = "interests";
  form.appendChild(hiddenInput);

  // Botones d’interès
  const buttonsContainer = document.createElement("div");
  buttonsContainer.className = "buttonsContainer"
  interestsContainer.appendChild(buttonsContainer);

  interestFields.forEach(item => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = item;
    btn.className = "interestBtn";

    btn.addEventListener("click", () => {
      hiddenInput.value = item; // assignamos el valor al hiddenInput según la elección del usuario
      // y lo marcamos como activo
      interestsContainer.querySelectorAll(".interestBtn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });

    buttonsContainer.appendChild(btn);
  });


  // CONTACT LINKS
  const contactLinksList = document.createElement("ul");
  contactLinksList.className = "contactLinksList";
  formContainer.appendChild(contactLinksList)

  // Array de links
  const links = [
    { name: "LinkedIn", icon: "public/icons/linkedin_link.png", url: "https://www.linkedin.com/in/rom%C3%A0-oliver-370707179/" },
    { name: "GitHub", icon: "public/icons/github_link.png", url: "https://github.com/roliver97" }
  ];

  links.forEach(link => {
  const li = document.createElement("li");
  const icon = document.createElement("img");
  const a = document.createElement("a");
  icon.src = link.icon;
  icon.alt = link.name;
  a.href = link.url;
  li.appendChild(a);
  a.appendChild(icon);
  contactLinksList.appendChild(li);
})


}