// Lista de personajes / Character List
const characters = [

];

let availableCharacters = [...characters];
let currentCharacter = null;
let currentImageIndex = 0;

// Elementos del DOM / DOM Elements
const characterImage = document.getElementById('character-image');
const characterName = document.getElementById('character-name');
const resultText = document.getElementById('result');
const smashBtn = document.getElementById('smash-btn');
const passBtn = document.getElementById('pass-btn');
const card = document.querySelector('.card');
const buttons = document.querySelector('.buttons');
const dragContainer = document.getElementById('drag-container');

const imageCounter = document.createElement('div');
imageCounter.id = 'image-counter';

const prevImgBtn = document.createElement('button');
prevImgBtn.id = 'prev-img-btn';
prevImgBtn.textContent = '‹';

const dotsContainer = document.createElement('div');
dotsContainer.id = 'dots-container';

const nextImgBtn = document.createElement('button');
nextImgBtn.id = 'next-img-btn';
nextImgBtn.textContent = '›';

imageCounter.appendChild(prevImgBtn);
imageCounter.appendChild(dotsContainer);
imageCounter.appendChild(nextImgBtn);
dragContainer.parentNode.insertBefore(imageCounter, dragContainer.nextSibling);

function renderDots(total, active) {
  dotsContainer.innerHTML = '';
  for (let i = 0; i < total; i++) {
    const dot = document.createElement('span');
    dot.className = 'dot' + (i === active ? ' dot-active' : '');
    dot.addEventListener('click', () => showImage(i));
    dotsContainer.appendChild(dot);
  }
}

function showImage(index) {
  if (!currentCharacter) return;
  const imgs = currentCharacter.images;
  currentImageIndex = Math.max(0, Math.min(index, imgs.length - 1));

  characterImage.style.opacity = '0';
  setTimeout(() => {
    characterImage.src = imgs[currentImageIndex] || 'https://freesvg.org/storage/img/thumb/errname1.png';
    characterImage.style.opacity = '1';
  }, 120);

  if (imgs.length > 1) {
    imageCounter.style.display = 'flex';
    renderDots(imgs.length, currentImageIndex);
    prevImgBtn.classList.toggle('nav-disabled', currentImageIndex === 0);
    nextImgBtn.classList.toggle('nav-disabled', currentImageIndex === imgs.length - 1);
  } else {
    imageCounter.style.display = 'none';
  }
}

function loadCharacter() {
  if (availableCharacters.length === 0) {
    showEndMessage();
    return;
  }

  const randomIndex = Math.floor(Math.random() * availableCharacters.length);
  currentCharacter = availableCharacters[randomIndex];
  availableCharacters.splice(randomIndex, 1);
  currentImageIndex = 0;

  characterName.textContent = currentCharacter.name;
  showImage(0);
}

prevImgBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  if (currentImageIndex > 0) showImage(currentImageIndex - 1);
});

nextImgBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  if (currentCharacter && currentImageIndex < currentCharacter.images.length - 1)
    showImage(currentImageIndex + 1);
});

// Función para mostrar mensaje final (Al acabarse la lista de personajes) / Function to show end message (When the character list runs out)
function showEndMessage() {
  card.style.display = 'none';
  buttons.style.display = 'none';
  imageCounter.style.display = 'none';

  // Aquí puedes personalizar el mensaje final / Here you can customize the end message
  resultText.innerHTML = `
    <h2 style="color: #2196F3; margin: 5px 0;">

    ¡No hay más personajes!

    </h2>
    <p style="color:rgb(124, 128, 129); font-size: 12px; margin: 2px 0;">

    Puedes recargar la página para empezar de nuevo

    </p>
    <p style="color: white; margin: 20px 0;">

    👇 ¡Descarga tu historial para no perderlo! 👇

    </p>
  `;
  document.getElementById('download-btn').style.animation = 'pulse 1.5s infinite';
}

// Eventos de botones / Button events
smashBtn.addEventListener('click', () => handleVote('Smash'));
passBtn.addEventListener('click', () => handleVote('Pass'));

function handleVote(voteType) {
  if (!currentCharacter) return;

  responses.push({ character: currentCharacter.name, response: voteType });
  
  // Muestra el texto "Elección anterior" / Show the text "Previous choice"
  document.querySelector('.result-label').classList.add('visible');

  const emoji = voteType === 'Smash' ? '😍' : '😒';
  document.getElementById('result-text').textContent = `${voteType.toUpperCase()}! ${emoji} (${currentCharacter.name})`;

  nextCharacter();
  updateDownloadButton();
}

// Lógica de arrastre / Drag logic
let isDragging = false;
let startPosX = 0;
let currentTranslateX = 0;
const SWIPE_THRESHOLD = 200;

dragContainer.addEventListener('touchstart', startDrag, { passive: true });
dragContainer.addEventListener('touchmove', duringDrag, { passive: false });
// Añadir eventos de arrastre / Add drag events
dragContainer.addEventListener('touchend', endDrag);
dragContainer.addEventListener('mousedown', startDrag);
dragContainer.addEventListener('mousemove', duringDrag);
dragContainer.addEventListener('mouseup', endDrag);
dragContainer.addEventListener('mouseleave', endDrag);

// Función para manejar el inicio del arrastre / Function to handle the start of the drag
function startDrag(e) {
  if (!currentCharacter) return;
  isDragging = true;
  dragContainer.classList.add('dragging');
  startPosX = e.clientX ?? e.touches[0].clientX;
  currentTranslateX = 0;
}

// Función para manejar el arrastre / Function to handle the drag
function duringDrag(e) {
  if (!isDragging || !currentCharacter) return;
  e.preventDefault();
  const currentX = e.clientX ?? e.touches[0].clientX;
  currentTranslateX = currentX - startPosX;
  dragContainer.style.transform =
    `translateX(${currentTranslateX}px) rotate(${currentTranslateX * 0.1}deg)`;
}

// Función para manejar el final del arrastre / Function to handle the end of the drag
function endDrag() {
  if (!isDragging || !currentCharacter) return;
  isDragging = false;
  dragContainer.classList.remove('dragging');

  if (Math.abs(currentTranslateX) > SWIPE_THRESHOLD) {
    const voteType = currentTranslateX > 0 ? 'Smash' : 'Pass';
    handleVote(voteType);

    // Animación de salida / Exit animation
    dragContainer.style.transform =
      `translateX(${currentTranslateX * 2}px) rotate(${currentTranslateX * 0.2}deg)`;
    dragContainer.style.opacity = '0';
    setTimeout(() => {
      dragContainer.style.transform = 'none';
      dragContainer.style.opacity = '1';
    }, 300);
  } else {
    dragContainer.style.transform = 'none';
  }
}

document.addEventListener('keydown', (e) => {
  if (!currentCharacter) return;
  if (e.key === 'ArrowLeft') {
    if (currentImageIndex > 0) showImage(currentImageIndex - 1);
  } else if (e.key === 'ArrowRight') {
    if (currentImageIndex < currentCharacter.images.length - 1)
      showImage(currentImageIndex + 1);
  } else if (e.key === 's' || e.key === 'S') {
    handleVote('Smash');
  } else if (e.key === 'p' || e.key === 'P') {
    handleVote('Pass');
  }
});

// Inicializa el historial de respuestas / Initialize the response history
let responses = [];
function nextCharacter() {
  setTimeout(loadCharacter, 0);
}

// Función para mostrar el botón de descarga / Function to show the download button
function updateDownloadButton() {
  const downloadBtn = document.getElementById('download-btn');
  downloadBtn.style.display = responses.length > 0 ? 'inline-block' : 'none';
}

// Función para descargar el historial como CSV / Function to download the history as CSV
function downloadCSV() {
  const csvContent = [
    'Character,Response',
    ...responses.map(r => `"${r.character}",${r.response}`)
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `smash-pass-historial-${new Date().toISOString()}.csv`;
  a.click();
  window.URL.revokeObjectURL(url);
}

// Evento para descargar el CSV / Event to download the CSV
document.getElementById('download-btn').addEventListener('click', downloadCSV);

// Inicio de la aplicación / Start of the application
loadCharacter();