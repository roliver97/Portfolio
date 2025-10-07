export const createContactTitle = (container) => {
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
}