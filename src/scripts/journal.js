function cl(data) {
  console.log(data);
}
cl("working");

let journalEntries = [];

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
journalEntries.push(sixSix);
cl(journalEntries);

const makeJournalEntryComponents = journalEntries => {
  for (let i = 0; i < journalEntries.length; i++) {
    return `<h1>${journalEntries[i].concepts}</h1>
            <p>${journalEntries[i].content}</p>
            <p>${journalEntries[i].date}</p>`;
  }
};

const renderJournalEntries = makeJournalEntryComponents => {
  document.querySelector(".entryLog").innerHTML = makeJournalEntryComponents(
    journalEntries
  );
};

renderJournalEntries(makeJournalEntryComponents);
