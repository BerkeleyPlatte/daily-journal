function cl(data) {
  console.log(data);
}

function renderJournalEntries(f) {
  let e = f.reverse()
  for (let i = 0; i < e.length; i++) {
    document.querySelector(".entryLog").innerHTML += makeJournalEntryComponents(
      e[i]
    );
  }
  let dltBtnArr = document.querySelectorAll(".deleteBtn");
  cl(dltBtnArr);
  for (let i = 0; i < dltBtnArr.length; i++) {
    dltBtnArr[i].addEventListener("click", () => {
      let cardNum = dltBtnArr[i].id.split("--");
      let btnNum = dltBtnArr[i].parentElement.id.split("--");
      if (cardNum[1] === btnNum[1]) {
        deleteCard(dltBtnArr[i]);
      }
      
    });
  }
}

function deleteCard(chld) {
  cl("button pressed");
  let card = chld.parentElement;
  document.querySelector(".entryLog").removeChild(card);
}
