const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Select all images in the gallery
const images = document.querySelectorAll('.gallery img');

// Select the lightbox and its content
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');

// Loop through each image and add click event
images.forEach(image => {
    image.addEventListener('click', function() {
        lightbox.style.display = 'flex';  // Display the lightbox
        lightboxImg.src = this.src;       // Set the clicked image in the lightbox
    });
});

// Close the lightbox when the close button is clicked
closeBtn.addEventListener('click', function() {
    lightbox.style.display = 'none';
});

// Close the lightbox when clicking outside the image
lightbox.addEventListener('click', function(e) {
    if (e.target !== lightboxImg) {
        lightbox.style.display = 'none';
    }
});
