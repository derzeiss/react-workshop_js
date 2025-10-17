import "./style.css";
import personListModule from "./personList";

const PERSONS = [
  { name: "John Doe", bio: "Tech-Writer from LA, loves React" },
  { name: "Jane Dae", bio: "Living on the road in my minivan writing code" },
];

const POSTS = [
  { title: "React is awesome", author: "John Doe" },
  { title: "Why you need to learn JS now", author: "Jane Dae" },
  { title: "React 19 is here!", author: "John Doe" },
];

const PERSONS_WITH_POSTS = PERSONS.map((person) => ({
  ...person,
  posts: POSTS.filter((post) => post.author === person.name),
}));

const render = (component, selector = "#app") => {
  document.querySelector(selector).innerHTML = component();
};

render(() => personListModule(PERSONS_WITH_POSTS));
