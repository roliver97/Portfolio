
export const createButton = (text, className = "") => {
  const button = document.createElement("button");
  button.textContent = text;

  if (className) {

    className.split(" ").forEach(cls => button.classList.add(cls));
        // El split " " = divide por cada espacio el listado de clases que le pasaremos como argumento cuando llamemos la función, pero lo devuelve como un array.
        // El forEach = recorre el array y añade al DOM cada clase pasada como argumento.
  }


  return button;
        // El return es necesario para poder reutilizar el button fuera de esta función, ya que en la función createButton no lo estamos inyectando en el DOM, así que el button se perderia una vez se finalizara dicha función
};