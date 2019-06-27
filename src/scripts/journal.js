document.querySelector("#recordBtn").addEventListener("click", () => {
  console.log("clicked");
  const newJournalEntry = {
    date: document.querySelector("#journalDate").value,
    concepts: document.querySelector("#journalConcepts").value,
    content: document.querySelector("#journalEntry").value,
    mood: document.querySelector("#journalMood").value
  };
  if (newJournalEntry.concepts !== "" && newJournalEntry.content !== "") {
    document.querySelector(".entryLog").innerHTML = "";
    saveJournalEntry(newJournalEntry)
      .then(getData)
      .then(entries => {
        renderJournalEntries(entries);
      });
  }
});

function saveJournalEntry(vari) {
  return fetch("http://localhost:8088/entries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(vari)
  });
}

document.querySelector("#refresh").addEventListener("click", () => {
  location.reload()
})