document.addEventListener('DOMContentLoaded', function() {
    createGallery();
})

function createGallery() {
    const gallery = document.querySelector('.gallery-images');
    const imageNumber = 16;

    for(let i = 1; i <= imageNumber; i++){
        const image = document.createElement('IMG');
        image.src = `src/img/gallery/full/${i}.jpg`;
        image.alt = `Gallery Image`;

        gallery.appendChild(image)
    }
}