import { Card } from "../components/Card/Card.js";
import { renderElement } from "./utils.js";

/*console.clear();
async function fetchDataAndRender() {
  const response = await fetch('https://swapi.dev/api/people/1')
  const data = await response.json();
  const cardElement = Card(data);
  renderElement(cardElement);
}
fetchDataAndRender();
*/


async function fetchAllDataAndRender() {
  const response = await fetch('https://swapi.dev/api/people')
  const data = await response.json();
  data.results.forEach((person) => {
    const cardElement = Card(person);
    renderElement(cardElement)

  });
  console.log(data);
}

fetchAllDataAndRender();