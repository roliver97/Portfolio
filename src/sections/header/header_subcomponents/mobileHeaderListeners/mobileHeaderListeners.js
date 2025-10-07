export const mobileHeaderListeners = () => {
  const header = document.querySelector("header")
  const nav = document.querySelector(".nav");
  const contactLink = document.querySelector(".contactLink");

  /* MOBILE HAMBURGER BUTTON */
  const hamburgerButton = document.createElement("button");
  const hamburgerIcon = document.createElement("img");
  hamburgerButton.id = "hamburgerButton";
  hamburgerIcon.src = import.meta.env.BASE_URL + "icons/hamburger.svg";
  header.appendChild(hamburgerButton);
  hamburgerButton.appendChild(hamburgerIcon);

  /* Escuchador del botón Hamburger */
  let menuOpen = false

  const toggleMenu = () => {
    header.classList.toggle("mobile");
    nav.classList.toggle("mobile");
    contactLink.classList.toggle("mobile");

    menuOpen = !menuOpen;
    }
  
  hamburgerButton.addEventListener("click", () => {
    toggleMenu();
  })

  /* Escuchador constante de la medida de la ventana (por si hay resize) */
  // Se cierra el menú si estaba abierto y se muestra solo el Logo y el botón Hamburger
  window.addEventListener("resize", () => {
    header.classList.remove("mobile");
    nav.classList.remove("mobile");
    contactLink.classList.remove("mobile");
    menuOpen = false;
    })

  // Scroll vertical suave (pulsando los links) y cerrado del menú
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault(); // evita un salto instantaneo
      const targetId = link.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);
      target.scrollIntoView({ behavior: "smooth" });

      if (menuOpen) {
      toggleMenu();
    }
    });
  });

  // Cerrado del menú si el usuario hace click fuera
  document.addEventListener("click", e => {
    const clickInsideHeader = header.contains(e.target);
    const clickInsideNav = nav.contains(e.target);
    const clickHamburgerButton = hamburgerButton.contains(e.target);
      if (menuOpen && !clickInsideNav && !clickHamburgerButton) toggleMenu(); 
  });
}
    