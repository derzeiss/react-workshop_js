import "./style.css";

const PERSONS = [
  { name: "John Doe", bio: "Tech-Writer from LA, loves React" },
  { name: "Jane Dae", bio: "Living on the road in my minivan writing code" },
];

const render = (component, selector = "#app") => {
  document.querySelector(selector).innerHTML = component();
};

const person = (person) => {
  return `<h2>${person.name}</h2>
  <p>${person.bio}</p>
  `;
};

const personList = (persons) => {
  return persons.map((p) => person(p)).join("\n");
};

render(() => personList(PERSONS));
