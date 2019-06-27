function cl(data) {
  console.log(data);
}

const makeJournalEntryComponents = t => {
  return `
  <div class="card" id="card--${t.id}">
   <h1>${t.concepts}</h1>
   <p>${t.date}</p>
   <p>${t.content}</p>
   <p>${t.mood}</p>
   <button id="delete--${t.id}" class="deleteBtn">delete</button>
  </div>
  `;
};
