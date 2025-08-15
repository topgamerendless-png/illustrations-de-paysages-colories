const canvas = document.getElementById('landscapeCanvas');
const context = canvas.getContext('2d');
const colorPicker = document.getElementById('colorPicker');
const saveButton = document.getElementById('saveButton');

// Exemple de dessin d'un paysage
function drawLandscape() {
    context.fillStyle = '#87CEEB'; // Ciel
    context.fillRect(0, 0, canvas.width, canvas.height); // Remplir le ciel
    context.fillStyle = '#228B22'; // Terre
    context.fillRect(0, canvas.height - 100, canvas.width, 100); // Dessiner la terre
    // (Ajoutez d'autres éléments de paysage ici)
}

drawLandscape();

// Ajouter un événement de clic sur le canevas pour dessiner avec la couleur sélectionnée
canvas.addEventListener('click', (event) => {
    const x = event.offsetX;
    const y = event.offsetY;
    const color = colorPicker.value;
    context.fillStyle = color;
    context.fillRect(x - 5, y - 5, 10, 10); // Dessiner un rectangle de 10x10 à la position cliquée
});

// Ajouter un événement de clic sur le bouton pour sauvegarder l'image
saveButton.addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = 'mon_paysage.png'; // Nom de l'image sauvegardée
    link.href = canvas.toDataURL(); // Conversion du canevas en image
    link.click(); // Simuler le clic pour télécharger l'image
});