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

const getPersonByName = (name) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const person = PERSONS.find((p) => p.name === name);
      if (person) return res(person);
      rej("Person not found: " + name);
    }, 1000);
  });
};

const getPostsFor = (person) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const posts = POSTS.filter((p) => p.author === person.name);
      if (posts.length) return res(posts);
      rej("No posts found for " + person.name);
    }, 1000);
  });
};

const getPostTitlesByName = (name) => {
  return getPersonByName(name)
    .then((person) => getPostsFor(person))
    .then((posts) => posts.map((p) => p.title))
    .catch(console.error);
};

getPostTitlesByName("John Doe").then(console.log);
