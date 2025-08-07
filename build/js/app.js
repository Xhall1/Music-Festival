document.addEventListener('DOMContentLoaded', function () {

    fixedNavegation();
    createGallery();
    highlightLink();
    scrollNav();
})

function fixedNavegation() {
    const header = document.querySelector('.header');
    const aboutFestival = document.querySelector('.about-festival');

    document.addEventListener('scroll', function () {
        if (aboutFestival.getBoundingClientRect().bottom < 1) {
            header.classList.add('fixed');
            console.log("You've already passed it");
        } else {
            header.classList.remove('fixed')
            console.log("Not yet");
        }
    })
}

function createGallery() {
    const gallery = document.querySelector('.gallery-images');
    const imageNumber = 16;

    for (let i = 1; i <= imageNumber; i++) {
        const image = document.createElement('IMG');
        image.loading = 'lazy';
        image.width = "300";
        image.height = "200";
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

function highlightLink() {
    document.addEventListener('scroll', function () {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.principal-navegation a');


        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.id
            }
        })

        navLinks.forEach(link => {
            
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active')
            } else {
                link.classList.remove('active')
            }
        })
    })
}

function scrollNav() {
    const navLinks = document.querySelectorAll('.principal-navegation a');

    navLinks.forEach( link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const sectionScroll = e.target.getAttribute('href');
            const section = document.querySelector(sectionScroll);
            
            section.scrollIntoView({behavior: 'smooth'})
        })
    })
}