let originalOrder = [];
let isShuffled = false; // Flag to track whether the grid has been shuffled
const container = document.querySelector('.grid-container');

container.addEventListener('click', () => {
    shuffleGrid();
});

document.addEventListener('DOMContentLoaded', (event) => {
    const items = Array.from(document.querySelector('.grid-container').children);
    originalOrder = items.map(item => item.id);
});

function shuffleGrid() {
    const items = Array.from(container.children);
    const shuffledItems = items.sort(() => Math.random() - 0.5);

    // Remove all items
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Append shuffled items
    shuffledItems.forEach(item => {
        container.appendChild(item);
    });

    isShuffled = true; // Set flag to true after shuffling
}