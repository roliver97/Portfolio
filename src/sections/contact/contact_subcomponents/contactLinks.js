export const createContactLinks = (formContainer) => {
  const contactLinksList = document.createElement("ul");
  contactLinksList.className = "contactLinksList";
  formContainer.appendChild(contactLinksList)

  // Array de links
  const links = [
    { name: "LinkedIn", icon: import.meta.env.BASE_URL + "icons/linkedin_link.png", url: "https://www.linkedin.com/in/rom%C3%A0-oliver-370707179/" },
    { name: "GitHub", icon:  import.meta.env.BASE_URL + "icons/github_link.png", url: "https://github.com/roliver97" }
  ];

  links.forEach(link => {
  const li = document.createElement("li");
  const icon = document.createElement("img");
  const a = document.createElement("a");
  icon.src = link.icon;
  icon.alt = link.name;
  a.href = link.url;
  a.target = "_blank";
  li.appendChild(a);
  a.appendChild(icon);
  contactLinksList.appendChild(li);
});
}