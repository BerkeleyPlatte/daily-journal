function cl(data) {
  console.log(data);
}
cl("working");

const makeJournalEntryComponents = t => {
  return `
   <h1>${t.concepts}</h1>
   <p>${t.content}</p>
   <p>${t.mood}</p>
  `;
};
