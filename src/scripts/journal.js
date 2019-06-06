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

fetch("http://localhost:8088/entries")
  .then(entries => entries.json())
  .then(entries => {
    const makeJournalEntryComponents = t => {
      return `<h1>${t.concepts}</h1>
                  <p>${t.content}</p>
                  <p>${t.mood}</p>`;
    };
    const renderJournalEntries = makeJournalEntryComponents => {
      for (let i = 0; i < entries.length; i++) {
        document.querySelector(".entryLog").innerHTML += makeJournalEntryComponents(
          entries[i]
        );
      }
    };
    renderJournalEntries(makeJournalEntryComponents);
  });

// let testArr = [
//   {
//     key: "value",
//     lock: "metal",
//     status: "locked"
//   },
//   {
//     key: "golden",
//     lock: "big",
//     status: "unlocked"
//   }
// ];
// const makeJournalEntryComponents = t => {
//   return `<h1>${t.key}</h1>
//               <p>${t.lock}</p>
//               <p>${t.status}</p>`;
// };
// const renderJournalEntries = makeJournalEntryComponents => {
//   for (let i = 0; i < testArr.length; i++) {
//     document.querySelector(".entryLog").innerHTML += makeJournalEntryComponents(
//       testArr[i]
//     );
//   }
// };
// renderJournalEntries(makeJournalEntryComponents);
