const canvas = document.getElementById('landscapeCanvas');
const context = canvas.getContext('2d');
const colorPicker = document.getElementById('colorPicker');
const saveButton = document.getElementById('saveButton');

// Exemple de dessin d'un paysage
function drawLandscape() {
    context.fillStyle = '#87CEEB'; // Ciel
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = '#228B22'; // Terre
    context.fillRect(0, canvas.height - 100, canvas.width, 100);
    // (Ajoutez d'autres éléments de paysage ici)
}

drawLandscape();

canvas.addEventListener('click', (event) => {
    const x = event.offsetX;
    const y = event.offsetY;
    const color = colorPicker.value;
    context.fillStyle = color;
    context.fillRect(x - 5, y - 5, 10, 10);
});

saveButton.addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = 'mon_paysage.png';
    link.href = canvas.toDataURL();
    link.click();
});