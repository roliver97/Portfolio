import './hero.css'

export const printHero = () => {
  templateHero();
}

const templateHero = () => {
  const hero =  document.createElement("section");
  hero.id = "hero";
  hero.classList.add("flex-container");
  document.body.appendChild(hero)

  const textDiv = document.createElement("div");
  const h1 = document.createElement("h1");
  const h3 = document.createElement("h3");
  const h4 = document.createElement("h4");
  const span = document.createElement("span");
  const image = document.createElement("img");

  textDiv.className = "textDiv";
  h1.textContent="I'm a web ";
  span.textContent="Developer";
  span.className = "titleHighlight";
  h3.textContent="I build thing for web";
  h4.textContent="Hello✋";
  image.className = "profilePic";
  image.src="public/images/fotoprueba.png";

  hero.appendChild(textDiv);
  textDiv.appendChild(h4);
  textDiv.appendChild(h1);
  h1.appendChild(span);
  textDiv.appendChild(h3);
  hero.appendChild(image);
  
}