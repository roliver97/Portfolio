import './footer.css'

const templateFooter = () => {
  return `
    <h4>P4 - Portfolio - Rock the Code</h4>
    `
}

export const printFooter = () => {
  const footer = document.createElement("footer");
  document.body.appendChild(footer);
  footer.innerHTML = templateFooter()
}