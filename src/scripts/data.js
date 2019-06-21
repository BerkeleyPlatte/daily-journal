function cl(data) {
  console.log(data);
}
cl("working");

let sixSix = {
  date: "6/6",
  concepts: "api and callback functions",
  content: "today did more api work and learned about callback functions",
  mood: "fine"
};
let sixFive = {
  date: "6/5",
  concepts: "api intro",
  content: "yesterday we were introduced to api",
  mood: "fine"
};
let sixFour = {
  date: "6/4",
  concepts: "more js",
  content: "two days ago we did more js",
  mood: "fine"
};

function getData() {
  return fetch("http://localhost:8088/entries").then(entries => entries.json());
}

getData().then(entries => {
  cl(entries);
  renderJournalEntries(entries);
});
