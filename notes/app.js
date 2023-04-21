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

  // convert note text to HTML
  const converter = new showdown.Converter();
  const noteHTML = converter.makeHtml(noteText);

  // create new note object and add to notes array
  const newNote = { text: noteText, html: noteHTML };
  notes.push(newNote);

  // save notes array to local storage
  localStorage.setItem('notes', JSON.stringify(notes));

  // clear note input and preview
  noteInput.value = '';
  preview.innerHTML = '';

  // show success message
  alert('Note saved successfully!');
});

// load notes from local storage
const storedNotes = localStorage.getItem('notes');
if (storedNotes) {
  notes = JSON.parse(storedNotes);
}

// display notes in preview
displayNotes();

// function to insert markdown symbol at current cursor position in note input
function insertMarkdownSymbol(symbol) {
  const startPos = noteInput.selectionStart;
  const endPos = noteInput.selectionEnd;
  const text = noteInput.value;
  const newText = text.substring(0, startPos) + symbol + text.substring(startPos, endPos) + symbol + text.substring(endPos);
  noteInput.value = newText;
  noteInput.setSelectionRange(startPos + symbol.length, endPos + symbol.length);
  noteInput.focus();
}

// function to display notes in preview
function displayNotes() {
  // clear preview
  preview.innerHTML = '';

  // iterate through notes array and display each note in preview
  notes.forEach((note) => {
    const noteElement = document.createElement('div');
    noteElement.innerHTML = note.html;
    preview.appendChild(noteElement);
  });
}
