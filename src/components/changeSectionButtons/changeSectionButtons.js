import './changeSectionButtons.css'
import arrowUpBlue from '/icons/arrow-up-blue.svg'
import arrowUpWhite from '/icons/arrow-up-white.svg'

// CHANGE SECTION BUTTONS
export function showChangeSection() {
  const sections = document.querySelectorAll("section");

  sections.forEach((sec, i) => { 
  // Recordatorio: forEach pasa automáticamente el elemento actual (sec) y su índice (i) en cada iteración, por eso no hace falta pasarlos como argumentos.

    const isWhite = sec.classList.contains('whiteSection');

    // --- UP BUTTON ---
    if (i > 0) {
      const upBtn = document.createElement("button");
      upBtn.classList.add("upSection");

      const upIcon = document.createElement("img");
      upIcon.src = isWhite ? arrowUpBlue : arrowUpWhite;
      upBtn.appendChild(upIcon);

      upBtn.addEventListener("click", () => {
        sections[i - 1].scrollIntoView({ behavior: "smooth" });
      });

      sec.appendChild(upBtn);
    }

    // --- DOWN BUTTON ---
    if (i < sections.length - 1) {
      const downBtn = document.createElement("button");
      downBtn.classList.add("downSection");

      const downIcon = document.createElement("img");
      downIcon.src = isWhite ? import.meta.env.BASE_URL + "icons/arrow-down-blue.svg" : import.meta.env.BASE_URL + "icons/arrow-down-white.svg";
      downBtn.appendChild(downIcon);

      downBtn.addEventListener("click", () => {
        sections[i + 1].scrollIntoView({ behavior: "smooth" });
      });

      sec.appendChild(downBtn);
    }
  });
}