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
});

// load notes from local storage
if (localStorage.getItem('notes')) {
  notes = JSON.parse(localStorage.getItem('notes'));
  notes.forEach(note => {
    const converter = new showdown.Converter();
    const html = converter.makeHtml(note);
    const noteElement = document.createElement('div');
    noteElement.innerHTML = html;
    preview.appendChild(noteElement);
  });
}

// function to insert Markdown symbol at current cursor position
function insertMarkdownSymbol(symbol) {
  const start = noteInput.selectionStart;
  const end = noteInput.selectionEnd;
  const text = noteInput.value;
  const before = text.substring(0, start);
  const after = text.substring(end, text.length);
  noteInput.value = before + symbol + text.substring(start, end) + symbol + after;
  noteInput.setSelectionRange(start + symbol.length, end + symbol.length);
  noteInput.focus();
}
