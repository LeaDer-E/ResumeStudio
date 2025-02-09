// Open Modal with animation
function openModal(imageSrc) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');

    modalImg.src = imageSrc;
    modal.style.display = 'flex';

    // Add animation class
    modal.classList.add('fade-in');
    modalImg.classList.add('zoom-in');

    // Remove the animation class after animation ends
    setTimeout(() => {
        modal.classList.remove('fade-in');
        modalImg.classList.remove('zoom-in');
    }, 300);
}

// Close Modal with animation
function closeModal() {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');

    modal.classList.add('fade-out');
    modalImg.classList.add('zoom-out');

    setTimeout(() => {
        modal.style.display = 'none';
        modal.classList.remove('fade-out');
        modalImg.classList.remove('zoom-out');
    }, 300);
}

// Close on Escape Key Press
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});


// Close modal when clicking outside the image
document.getElementById('modal').addEventListener('click', function(event) {
    if (event.target !== document.getElementById('modal-img')) {
        closeModal();
    }
});


