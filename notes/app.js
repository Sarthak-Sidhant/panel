// get elements
const noteInput = document.getElementById('note-input');
const boldBtn = document.getElementById('bold-btn');
const italicBtn = document.getElementById('italic-btn');
const linkBtn = document.getElementById('link-btn');
const saveBtn = document.getElementById('save-btn');
const preview = document.getElementById('preview');

// initialize notes array
let notes = [];

// add toolbar button event listeners
boldBtn.addEventListener('click', () => {
  insertMarkdownSymbol('**');
});

italicBtn.addEventListener('click', () => {
  insertMarkdownSymbol('*');
});

linkBtn.addEventListener('click', () => {
  const url = prompt('Enter URL');
  if (url) {
    insertMarkdownSymbol(`[${url}](${url})`);
  }
});

// add save button event listener
saveBtn.addEventListener('click', () => {
  // get note text from input
  const noteText = noteInput.value;

  // convert Markdown to HTML
  const converter = new showdown.Converter();
  const html = converter.makeHtml(noteText);

  // display HTML in preview area
  preview.innerHTML = html;

  // save note to array
  notes.push(noteText);

  // save notes to local storage
localStorage.setItem('notes', JSON.stringify(notes));

// clear input
noteInput.value = '';
});

// load notes from local storage on page load
window.addEventListener('load', () => {
const storedNotes = JSON.parse(localStorage.getItem('notes'));
if (storedNotes) {
notes = storedNotes;
}
});

// function to insert Markdown symbols at cursor position
function insertMarkdownSymbol(symbol) {
const startPos = noteInput.selectionStart;
const endPos = noteInput.selectionEnd;
noteInput.value = noteInput.value.slice(0, startPos) + symbol + noteInput.value.slice(startPos, endPos) + symbol + noteInput.value.slice(endPos);
}