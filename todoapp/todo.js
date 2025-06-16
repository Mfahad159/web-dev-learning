const addButton = document.querySelector('.add-button');
const inputBox = document.querySelector('.input-box');
const closeBtn = document.querySelector('.input-close-btn');
const addTaskBtn = document.querySelector('.add-task-button');
const titleInput = document.querySelector('.input-title');
const descInput = document.querySelector('.input-description');
const mainContainer = document.querySelector('.main-container');

// Show popup on add button click
addButton.addEventListener('click', () => 
{
    inputBox.style.display = 'flex';
});

// Hide popup on X button click
closeBtn.addEventListener('click', () => 
{
    inputBox.style.display = 'none';
    clearInputs();
});

// Add task on "Add Task" button click
addTaskBtn.addEventListener('click', () => {
    const title = titleInput.value.trim();
    const desc = descInput.value.trim();

    if (title && desc) {
        const newItem = document.createElement('div');
        newItem.className = 'item';
        newItem.innerHTML = `
            <div class="item-left">
                <div class="item-title">${title}</div>
                <div class="item-description">${desc}</div>
            </div>
            <div class="item-right">
                <button class="remove-button">Remove</button>
            </div>
        `;
        
        const firstItem = mainContainer.querySelector('.item');
        mainContainer.insertBefore(newItem, firstItem);
        inputBox.style.display = 'none';
        clearInputs();
    } else {
        alert("Please enter both title and description.");
    }
});
// Remove item on "Remove" button click
mainContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-button')) {
        e.target.closest('.item').remove();
    }
});

// Clear input fields
function clearInputs() {
    titleInput.value = '';
    descInput.value = '';
}
