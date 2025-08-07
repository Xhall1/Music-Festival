document.addEventListener('DOMContentLoaded', function () {
    createGallery();
})

function createGallery() {
    const gallery = document.querySelector('.gallery-images');
    const imageNumber = 16;

    for (let i = 1; i <= imageNumber; i++) {
        const image = document.createElement('IMG');
        image.src = `src/img/gallery/full/${i}.jpg`;
        image.alt = `Gallery Image`;

        // Event Handler 
        image.onclick = function () {
            showImage(i)
        }

        gallery.appendChild(image);
    }
}

function showImage(i) {

    const image = document.createElement('IMG');
    image.src = `src/img/gallery/full/${i}.jpg`;
    image.alt = `Gallery Image`;

    //Modal
    const modal = document.createElement('DIV');
    modal.classList.add('modal');
    modal.onclick = closeModal;

    // Button to close Modal
    const closeModalBtn = document.createElement('BUTTON')
    closeModalBtn.textContent = 'X';
    closeModalBtn.classList.add('btn-close');
    closeModalBtn.onclick = closeModal;
    
    modal.appendChild(image);
    modal.appendChild(closeModalBtn);

    const body = document.querySelector('body');
    body.classList.add('overflow-hidden');

    body.appendChild(modal);
}

function closeModal() {
    const modal = document.querySelector('.modal');
    modal.classList.add('fade-out');
    setTimeout(() => {
        modal?.remove();

        const body = document.querySelector('body');
        body.classList.remove('overflow-hidden');
    }, 500);

}