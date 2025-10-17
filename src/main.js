import "./style.css";

const JOHN = { name: "John Doe", bio: "Tech-Writer from LA, loves React" };

const render = (component, selector = "#app") => {
  document.querySelector(selector).innerHTML = component();
};

const person = (person) => {
  return "<h2>" + person.name + "</h2>";
};

render(() => person(JOHN));
