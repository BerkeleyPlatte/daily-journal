getData().then(entries => {
  document.getElementsByName("radioBtn").forEach(btn => {
    console.log(btn);
    btn.addEventListener("click", event => {
      console.log("clicked");
      let btnMood = event.target.value;
      let newEntries = entries.filter(item => (item.mood === btnMood));
      console.log(newEntries)
      makeJournalEntryComponents(newEntries);
      document.querySelector(".entryLog").innerHTML = "";
      renderJournalEntries(newEntries);
    });
  });
});
