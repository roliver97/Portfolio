export const createInterestButtons = (interestFields, container, hiddenInput) => {
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
}