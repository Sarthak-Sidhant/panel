const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

canvas.width = window.innerWidth - 40;
canvas.height = window.innerHeight - 100;

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

function draw(e) {
  if (!isDrawing) return;

  ctx.strokeStyle = document.getElementById('brush').classList.contains('active') ? document.getElementById('color-picker').value : '#FFFFFF';
  ctx.lineWidth = document.getElementById('brush-size').value;

  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();

  [lastX, lastY] = [e.offsetX, e.offsetY];
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

document.getElementById('brush').addEventListener('click', () => {
  document.getElementById('brush').classList.add('active');
  document.getElementById('eraser').classList.remove('active');
});

document.getElementById('eraser').addEventListener('click', () => {
  document.getElementById('eraser').classList.add('active');
  document.getElementById('brush').classList.remove('active');
});

document.getElementById('clear').addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

document.getElementById('color-picker').addEventListener('change', () => {
  hue = 0;
});

setInterval(() => {
  if (hue >= 360) {
    hue = 0;
  } else {
    hue++;
  }
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
}, 10);
