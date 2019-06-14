function cl(data) {
    console.log(data);
  }
  cl("working");

  function renderJournalEntries(e) {
    for (let i = 0; i < e.length; i++) {
      document.querySelector(".entryLog").innerHTML += makeJournalEntryComponents(
        e[i]
      );
    }
  };
